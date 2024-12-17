/**
 * @brief Contains the definition of the `DdsIdlAnnotationApplicationParametersVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-18 14:06:45
 */

import { AnnotationParameters } from "../../model/annotations";
import { MultipleNamedAnnotationApplicationParametersContext, SingleAnonymousAnnotationApplicationParameterContext } from "../DdsIdlParser";
import { DdsIdlMessageListener } from "../msg-listener";
import { DdsIdlAnnotationApplicationParameterVisitor } from "./annotation-application-parameter-visitor";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";


export class DdsIdlAnnotationApplicationParametersVisitor extends DdsIdlMsgHandlingVisitor< AnnotationParameters > {
  public constructor(msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitSingleAnonymousAnnotationApplicationParameter = DdsIdlAnnotationApplicationParametersVisitor.prototype.visitSingleAnonymousAnnotationApplicationParameterImpl.bind(this);
    this.visitMultipleNamedAnnotationApplicationParameters = DdsIdlAnnotationApplicationParametersVisitor.prototype.visitMultipleNamedAnnotationApplicationParametersImpl.bind(this);
  }

  public visitSingleAnonymousAnnotationApplicationParameterImpl(ctx: SingleAnonymousAnnotationApplicationParameterContext): AnnotationParameters {
    return { value: ctx.constantExpression().getText() };
  }

  public visitMultipleNamedAnnotationApplicationParametersImpl(ctx: MultipleNamedAnnotationApplicationParametersContext): AnnotationParameters {
    let result: AnnotationParameters = {};

    for (let aParamCtx of ctx.annotationApplicationParameter_list()) {
      Object.assign(result, new DdsIdlAnnotationApplicationParameterVisitor(this.msgListener).visit(aParamCtx));
    }

    return result;
  }
}

// vim: set ts=2 sw=2 expandtab:
