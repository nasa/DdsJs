/**
 * @brief Contains the definition of the `DdsIdlAnnotationApplicationVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-18 14:23:10
 */

import { Annotation, annotationFactory, AnnotationParameters } from "../../model/annotations";
import { AnnotationApplicationContext } from "../DdsIdlParser";
import { DdsIdlMessageListener, exceptionMessage } from "../msg-listener";
import { DdsIdlAnnotationApplicationParametersVisitor } from "./annotation-application-parameters-visitor";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";


export class DdsIdlAnnotationApplicationVisitor extends DdsIdlMsgHandlingVisitor< Annotation | undefined > {
  public constructor(msgHandler: DdsIdlMessageListener) {
    super(msgHandler);
    
    this.visitAnnotationApplication = DdsIdlAnnotationApplicationVisitor.prototype.visitAnnotationApplicationImpl.bind(this);
  }

  public visitAnnotationApplicationImpl(ctx: AnnotationApplicationContext): Annotation | undefined {
    let annotationName = ctx.scopedName().getText();
    let annotationParams: AnnotationParameters = {};

    if (ctx.annotationApplicationParameters()) {
      Object.assign(annotationParams, new DdsIdlAnnotationApplicationParametersVisitor(this.msgListener).visit(ctx.annotationApplicationParameters()));
    }

    let result: Annotation | undefined = undefined;

    try {
      result = annotationFactory(annotationName, annotationParams);
      if (result === undefined) {
        let msg = `Annotation application "${annotationName}" not supported at this time.`;
        this.msgListener.warning(msg, ctx.scopedName().start);
      }
    } catch(err) {
      ctx.parser?.notifyErrorListeners(exceptionMessage(err), ctx.start, undefined);
    }

    return result;
  }
}

// vim: set ts=2 sw=2 expandtab:
