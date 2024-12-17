/**
 * @brief Contains the definition of the `DdsIdlAnnotationApplicationParameterVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-18 14:01:07
 */

import { AnnotationParameters } from "../../model/annotations";
import { AnnotationApplicationParameterContext } from "../DdsIdlParser";
import { DdsIdlMessageListener } from "../msg-listener";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";


export class DdsIdlAnnotationApplicationParameterVisitor extends DdsIdlMsgHandlingVisitor< AnnotationParameters > {
  public constructor(msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitAnnotationApplicationParameter = DdsIdlAnnotationApplicationParameterVisitor.prototype.visitAnnotationApplicationParameterImpl.bind(this);
  }

  public visitAnnotationApplicationParameterImpl(ctx: AnnotationApplicationParameterContext): AnnotationParameters {
    let paramName = ctx.identifier().getText();
    let paramValue = ctx.constantExpression().getText();
    let result: AnnotationParameters = {};

    result[paramName] = paramValue;

    return result;
  }
}

// vim: set ts=2 sw=2 expandtab:
