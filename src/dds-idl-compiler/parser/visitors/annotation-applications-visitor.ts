/**
 * @brief Contains the definition of the `DdsIdlAnnotationApplicationsVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-18 14:41:27
 */

import { Annotation } from "../../model/annotations";
import { AnnotationApplicationsContext } from "../DdsIdlParser";
import { DdsIdlMessageListener } from "../msg-listener";
import { DdsIdlAnnotationApplicationVisitor } from "./annotation-application-visitor";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";


export class DdsIdlAnnotationApplicationsVisitor extends DdsIdlMsgHandlingVisitor< Annotation[] > {
  public constructor(msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitAnnotationApplications = DdsIdlAnnotationApplicationsVisitor.prototype.visitAnnotationApplicationsImpl.bind(this);
  }

  public visitAnnotationApplicationsImpl(ctx: AnnotationApplicationsContext): Annotation[] {
    let result: Annotation[] = [];

    for (let annotCtx of ctx.annotationApplication_list()) {
      let annotationMaybe = new DdsIdlAnnotationApplicationVisitor(this.msgListener).visit(annotCtx);
      if (annotationMaybe !== undefined) {
        result.push(annotationMaybe);
      }
    }

    return result;
  }
}

// vim: set ts=2 sw=2 expandtab:
