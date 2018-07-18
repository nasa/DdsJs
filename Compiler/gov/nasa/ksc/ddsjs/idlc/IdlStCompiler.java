/**
 * \file IdlStCompiler.java
 * \brief Contains the definition and implementation of the \c IdlStCompiler class.
 * \author Rolando J. Nieves
 * \date 2014-10-21 15:55:15
 */
package gov.nasa.ksc.ddsjs.idlc;

import java.io.File;
import java.io.IOException;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.io.BufferedWriter;
import java.util.Locale;
import java.util.List;
import java.util.Vector;
import java.util.TimeZone;
import java.util.Date;
import java.text.DateFormat;
import org.antlr.v4.runtime.tree.ParseTree;
import org.antlr.v4.runtime.tree.ParseTreeWalker;
import org.antlr.v4.runtime.ANTLRFileStream;
import org.antlr.v4.runtime.CommonTokenStream;
import org.stringtemplate.v4.STGroupFile;
import org.stringtemplate.v4.STGroup;
import org.stringtemplate.v4.ST;
import org.stringtemplate.v4.AutoIndentWriter;
import org.stringtemplate.v4.STWriter;
import org.stringtemplate.v4.STErrorListener;
import org.stringtemplate.v4.misc.STMessage;
import org.apache.commons.cli.CommandLine;
import org.apache.commons.cli.CommandLineParser;
import org.apache.commons.cli.GnuParser;
import org.apache.commons.cli.Options;
import org.apache.commons.cli.HelpFormatter;
import org.apache.commons.cli.ParseException;

import gov.nasa.ksc.ddsjs.model.IdlModuleDefinition;
import gov.nasa.ksc.ddsjs.parser.DdsJsIdlLexer;
import gov.nasa.ksc.ddsjs.parser.DdsJsIdlParser;

/**
 * \brief Main class that implements the DDS IDL to Node.js add-on compiler.
 */
public class IdlStCompiler {

	/**
	 * \brief Contains the configuration information for the compiler.
	 *
	 * The configuration information is based on both input from the user in the form of
	 * command line arguments and compiler defaults. The fields in instances of this
	 * class are set in the \c main() method of the \c IdlStCompiler
	 */
	public static class CompilerOptions {
		
		public boolean headerOutput;
		public boolean cppOutput;
		public boolean generateTopicWrappers;
		public boolean noDdsCppHeader;
		public boolean noNodeJsInit;
		public boolean noCdxjsTopLevelInc;
		public String inputFileName;
		public String headerFileName;
		public String outputFileName;
		public String nodeJsModuleName;
        public String generatedDateString;
		
		public String getInputFileNameBase() {
			File theFile = new File(this.inputFileName);
			return theFile.getName().split("\\.(?=[^\\.]+$)")[0];
		}
		
		public String getOutputFileNameHeaderGuard() {
			File theFile = new File(this.outputFileName);
			String nameToUse = theFile.getName();
			nameToUse = nameToUse.toUpperCase();
			nameToUse = nameToUse.replaceAll("[^A-Z0-9_]", "_");
			
			return nameToUse;
		}
	};
	
	/**
	 * \brief Configure and run the DDS.js IDL compiler.
	 *
	 * Configuration is done as a combination of both default values and input from the
	 * user in the form of command line options.
	 *
	 * - Input File (\c -f \c --input): Name of the input IDL file to compile.
	 * - Output File (\c -o \c --output): Name of the C++ Node.js native module source file.
	 * - Include Path (\c -I \c --include): Directory to consider when looking for source
	 *                                      files included from the IDL input file. 
	 *                                      Several may be specified.
	 * - No Topic Wrappers (\c -n \c --no-topic): If present, no DDS topic/reader/writer
	 *                                            wrappers will be generated.
	 * - Module Name (\c -m \c --module): Name of the Node.js module; defaults to the 
	 *                                    base name of the IDL input file.
	 * - Header Only (\c -h \c --header-only): If present, no C++ implementation code will
	 *                                         be generated in the output file; cannot be
	 *                                         specified concurrent with \c -c.
	 * - C++ Only (\c -c \c --cpp-only): If present, no C++ declaration/definition code will
	 *                                   be generated in the output file; cannot be 
	 *                                   specified concurrent with \c -h.
	 * - No Top-Level Include (\c -i \c --no-top-level-inc): If present, generated file will
	 *                                                       not include \c ddsjs.h; 
	 *                                                       only useful when compiling the
	 *                                                       \c ddsjs.idl file.
	 * - Template (\c -t \c --template): Name of the StringTemplate output 
	 *                                   template to use. Any template name
	 *                                   specified must be located either at 
	 *                                   the directory pointed to by the 
	 *                                   gov.nasa.ksc.ddsjs.idlc.dataDir
	 *                                   property or a directory specified via
	 *                                   the "-T" option.
	 * - Template Path (\c -T \c --template-path): Directory to consider when looking for
	 *                                             the output template specified with the
	 *                                             \c -t option. The directory specified in
	 *                                             the gov.nasa.ksc.ddsjs.idlc.dataDir 
	 *                                             property is implicitly included in the
	 *                                             list of directories. More than one may
	 *                                             be specified.
	 * - Omit Node.js Initialization (\c -p \c --no-init): If present, Node.js module
	 *                                                     initialization code will not be
	 *                                                     included in the generated C++
	 *                                                     file. Only useful when compiling
	 *                                                     the \c ddsjs.idl file.
	 * - No DDS C++ Headers (\c -r \c --no-dds-c++): If present, DDS C++ header 
	 *                                               file inclusions will not be
	 *                                               added to the generated C++ file.
	 *                                               Only useful when compiling the
	 *                                               \c ddsjs.idl file.
	 * - Help (\c -? \c --help): Print out help text on command line options.
	 */
	public static void main(String[] args) {
		BufferedWriter bufOutput = null;
		AutoIndentWriter outputWriter = null;
		CompilerOptions myOptions = new CompilerOptions();
		Options cliOptions = new Options();
		int result = 0;
		List<String> templateSearchPath = new Vector<String>();
		
		// --------------------------------------------------------------------
		// Configure the compiler using command-line options
		// --------------------------------------------------------------------
		cliOptions.addOption("f", "input", true, "IDL file to compile.");
		cliOptions.addOption("o", "output", true, "C++ output file to generate.");
		cliOptions.addOption("I", "include", true, "Add directory to include file path.");
		cliOptions.addOption("n", "no-topic", false, "Do not genereate topic/reader/writer wrappers.");
		cliOptions.addOption("m", "module", true, "Node.js module name (defaults to top-level IDL module).");
		cliOptions.addOption("h", "header-only", false, "Only genereate declarations for use as a header file.");
		cliOptions.addOption("c", "cpp-only", true, "Only generaete implementations depending header file name provided.");
		cliOptions.addOption("i", "no-top-level-inc", false, "Do not include top-level ddsjsjs.h.");
		cliOptions.addOption("t", "template", true, "Name of the output template to use.");
		cliOptions.addOption("T", "template-path", true, "Include directory in template search path.");
		cliOptions.addOption("p", "no-init", false, "Omit Node.js NODE_MODULE initialization statement.");
		cliOptions.addOption("r", "no-dds-c++", false, "Do not include DDS C++ header files.");
		cliOptions.addOption("?", "help", false, "Print this help message.");
		CommandLineParser cliParser = new GnuParser();
		CommandLine cli = null;
		try {
			cli = cliParser.parse(cliOptions, args);
		} catch (ParseException ex) {
			System.err.println("ERROR: Invalid command line input: " + ex.toString());
			IdlStCompiler.printHelpMessage(cliOptions);
			System.exit(1);
		}
		
		myOptions.headerOutput = true;
		myOptions.cppOutput = true;
		
		if (cli.hasOption("?")) {
			IdlStCompiler.printHelpMessage(cliOptions);
			System.exit(0);
		}
		if (cli.hasOption("f")) {
			File theFile = new File(cli.getOptionValue("f"));
			myOptions.inputFileName = theFile.getName();
		}
		if (cli.hasOption("o")) {
			myOptions.outputFileName = cli.getOptionValue("o");
			if (myOptions.outputFileName != "-") {
				try {
					File outputFile = new File(myOptions.outputFileName);
					FileOutputStream fileOutputStream = new FileOutputStream(outputFile);
					OutputStreamWriter rawOutStream = new OutputStreamWriter(fileOutputStream, "UTF-8");
					bufOutput = new BufferedWriter(rawOutStream);
					outputWriter = new AutoIndentWriter(bufOutput);
				} catch (IOException ex) {
					System.err.println("ERROR: Could not establish compiler output:" + ex.toString());
					System.exit(2);
				}
			}
		}
		if (cli.hasOption("h") && cli.hasOption("c")) {
			System.err.println("ERROR: Only one of -h (--header-only) or -c (--cpp-only) may be specified.");
			IdlStCompiler.printHelpMessage(cliOptions);
			System.exit(1);
		} else if (cli.hasOption("h")) {
			myOptions.cppOutput = false;;
		} else if (cli.hasOption("c")) {
			myOptions.headerOutput = false;
			myOptions.headerFileName = cli.getOptionValue("c");
		}
		if (cli.hasOption("m")) {
			myOptions.nodeJsModuleName = cli.getOptionValue("m");
		} else {
			myOptions.nodeJsModuleName = null;
		}
		if (cli.hasOption("T")) {
			for (String aTemplateDir : cli.getOptionValues("T")) {
				templateSearchPath.add(aTemplateDir);
			}
		}
		if (System.getProperty("gov.nasa.ksc.ddsjs.idlc.dataDir") != null) {
			File defaultDir = new File(
				System.getProperty("gov.nasa.ksc.ddsjs.idlc.dataDir")
			);
			templateSearchPath.add(defaultDir.getAbsolutePath());
		}
		myOptions.generateTopicWrappers = !cli.hasOption("n");
		myOptions.noDdsCppHeader = cli.hasOption("r");
		myOptions.noNodeJsInit = cli.hasOption("p");
		myOptions.noCdxjsTopLevelInc = cli.hasOption("i");
		
		if (myOptions.inputFileName == null) {
			System.err.println("ERROR: Must specify input file name with -f (--input).");
			IdlStCompiler.printHelpMessage(cliOptions);
			System.exit(1);
		}
		
		if ((myOptions.outputFileName == null) || (outputWriter == null)) {
			myOptions.outputFileName = "STDOUT";
			OutputStreamWriter outStream = new OutputStreamWriter(System.out);
			bufOutput = new BufferedWriter(outStream);
			outputWriter = new AutoIndentWriter(bufOutput);
		}
		
		if (!cli.hasOption("t")) {
			System.err.println("ERROR: Must specify template to use with -t (--template).");
			IdlStCompiler.printHelpMessage(cliOptions);
			System.exit(1);
		}
		
		// --------------------------------------------------------------------
		// Compile the input IDL file into the object tree defined using 
		// classes from the gov.nasa.ksc.ddsjs.model package.
		// --------------------------------------------------------------------
		IdlParserListener listener = new IdlParserListener(cli.getOptionValue("f"), cli.getOptionValues("I"));
		DdsJsIdlLexer lexer = null;
		try {
			lexer = new DdsJsIdlLexer(new ANTLRFileStream(cli.getOptionValue("f")));
		} catch (IOException ex) {
			System.err.println("ERROR: Could not read in input file \"" + cli.getOptionValue("f") + "\": " + ex.toString());
			System.exit(2);
		}
		lexer.removeErrorListeners();
		lexer.addErrorListener(listener);
		CommonTokenStream tokens = new CommonTokenStream(lexer);
		DdsJsIdlParser parser = new DdsJsIdlParser(tokens);
		parser.removeErrorListeners();
		parser.addErrorListener(listener);
		ParseTree tree = parser.translationUnit();
		
		ParseTreeWalker walker = new ParseTreeWalker();
		walker.walk(listener, tree);
		
		if (listener.getSemanticErrorCount() == 0) {
			// ----------------------------------------------------------------
			// Emit C++ code based on the contents of the object tree created
			// when the IDL file was compiled earlier. Code is emitted using 
			// the template specified by the user.
			// ----------------------------------------------------------------
			try {
				File templateFile = null;
				for (String aTemplateDir : templateSearchPath) {
					templateFile = new File(aTemplateDir, cli.getOptionValue("t") + ".stg");
					if (templateFile.canRead()) {
						break;
					} else {
						templateFile = null;
					}
				}
				
				if (templateFile == null) {
					System.err.println("ERROR: Could not find output template \"" + cli.getOptionValue("t") + "\".");
					for (String aTemplateDir : templateSearchPath) {
						System.err.println("      Looked in \"" + aTemplateDir + "\"");
					}
					System.exit(2);
				}
				STGroup templateGroup = new STGroupFile(templateFile.getAbsolutePath());
				ST outputGen = templateGroup.getInstanceOf("top_level");
				String topModuleName = listener.getResult().keySet().iterator().next();
				IdlModuleDefinition topModule = listener.getResult().get(topModuleName);
				if (myOptions.nodeJsModuleName == null) {
					myOptions.nodeJsModuleName = topModuleName.toLowerCase();
				}
                DateFormat datePrinter = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG);
                datePrinter.setTimeZone(TimeZone.getTimeZone("GMT"));
                myOptions.generatedDateString = datePrinter.format(new Date());
				outputGen.add("options", myOptions);
				outputGen.add("topModule", topModule);
				outputWriter.setLineWidth(STWriter.NO_WRAP);
				result = outputGen.write(outputWriter, Locale.getDefault(), new STErrorListener() {
					public void compileTimeError(STMessage msg) {
						System.err.println("ERROR: Compile time error: " + msg.toString());
						System.exit(2);
					}
					public void internalError(STMessage msg) {
						System.err.println("ERROR: Internal error: " + msg.toString());
						System.exit(2);
					}
					public void IOError(STMessage msg) {
						System.err.println("ERROR: I/O error: " + msg.toString());
						System.exit(2);
					}
					public void runTimeError(STMessage msg) {
						System.err.println("ERROR: Run time error: " + msg.toString());
						System.exit(2);
					}
				});
			
				bufOutput.flush();
				bufOutput.close();
			} catch(IOException ex) {
				System.err.println("ERROR: Internal error: " + ex.toString());
			}
			System.exit(0);
		}
	}
	
	private static void printHelpMessage(Options options) {
		HelpFormatter helpFormatter = new HelpFormatter();
		helpFormatter.printHelp("IdlStCompiler", options);
	}
}