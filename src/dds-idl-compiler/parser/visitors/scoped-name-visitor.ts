/**
 * @brief Contains the definition for the `DdsIdlScopedNameVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-12 17:49:13
 */

import { ConstantDeclaration, Identifier } from "../../model/core";
import { BaseTypeSpec } from "../../model/core/typespec";
import { NamingScope, ScopedName, ScopeMember } from "../../model/scoping";
import { CompoundScopedNameContext, RootedScopedNameContext, ScopedNameContext, SingleScopedNameContext } from "../DdsIdlParser";
import { DdsIdlMessageListener } from "../msg-listener";
import { DdsIdlIdentifierVisitor } from "./identifier-visitor";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";


export class DdsIdlScopedNameVisitor extends DdsIdlMsgHandlingVisitor< ScopedName > {
  public constructor(msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitSingleScopedName = DdsIdlScopedNameVisitor.prototype.visitSingleScopedNameImpl.bind(this);
    this.visitRootedScopedName = DdsIdlScopedNameVisitor.prototype.visitRootedScopedNameImpl.bind(this);
    this.visitCompoundScopedName = DdsIdlScopedNameVisitor.prototype.visitCompoundScopedNameImpl.bind(this);
  }

  public visitSingleScopedNameImpl(ctx: SingleScopedNameContext): ScopedName {
    return new ScopedName([new DdsIdlIdentifierVisitor(this.msgListener).visit(ctx.identifier())]);
  }

  public visitRootedScopedNameImpl(ctx: RootedScopedNameContext): ScopedName {
    return new ScopedName([
      Identifier.ROOT,
      new DdsIdlIdentifierVisitor(this.msgListener).visit(ctx.identifier())
    ]);
  }

  public visitCompoundScopedNameImpl(ctx: CompoundScopedNameContext): ScopedName {
    let prefixName = this.visit(ctx.scopedName());
    return ScopedName.Concat(prefixName, new DdsIdlIdentifierVisitor(this.msgListener).visit(ctx.identifier()));
  }

  public static AsTypeSpec(ctx: ScopedNameContext, referencedIn: NamingScope, msgListener: DdsIdlMessageListener): BaseTypeSpec {
    let typeRef = new DdsIdlScopedNameVisitor(msgListener).visit(ctx);
    let result: BaseTypeSpec;
    if (!referencedIn.search(typeRef)) {
      let msg = `Could not resolve scoped name "${typeRef}"`;
      throw new Error(msg);
    }
    let refersTo = typeRef.leafEntity();
    if (!(refersTo instanceof BaseTypeSpec)) {
      let msg = `Scoped name "${typeRef}" does not refer to a type.`;
      throw new Error(msg);
    }
    result = refersTo;
    let scopedNameRoot = typeRef.parts[0];
    // NamingScope will silently take care of ignoring guest introductions for
    // the root scope and our own members.
    referencedIn.introduceGuest(scopedNameRoot.entity as ScopeMember);
    return result;
  }

  public static AsConstant(ctx: ScopedNameContext, referencedIn: NamingScope, msgListener: DdsIdlMessageListener): ConstantDeclaration {
    let constantRef = new DdsIdlScopedNameVisitor(msgListener).visit(ctx);
    let result: ConstantDeclaration;
    if (!referencedIn.search(constantRef)) {
      let msg = `Could not resolve scoped name "${constantRef}"`;
      throw new Error(msg);
    }
    let refersTo = constantRef.leafEntity();
    if (!(refersTo instanceof ConstantDeclaration)) {
      let msg = `Scoped name "${constantRef}" does not refer to a constant.`;
      throw new Error(msg);
    }
    result = refersTo;
    let scopedNameRoot = constantRef.parts[0];
    // NamingScope will silently take care of ignoring guest introductions for
    // the root scope and our own members.
    referencedIn.introduceGuest(scopedNameRoot.entity as ScopeMember);
    return result;
  }
}

// vim: set ts=2 sw=2 expandtab:
