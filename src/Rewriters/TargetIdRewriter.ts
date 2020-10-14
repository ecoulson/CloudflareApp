import IRewriter from "./IRewriter";
import IElementHandler from "../ElementHandlers/IElementHandler";

export default class TargetIdRewriter implements IRewriter {
    private targetId : string;
    private elementHandler : IElementHandler;

    constructor(targetId: string, elementHandler : IElementHandler) {
        this.targetId = targetId;
        this.elementHandler = elementHandler;
    }

    async element(element : Element) {
        if (this.isTargetId(element)) {
            return await this.elementHandler.handleElement(element);
        }
    }

    private isTargetId(element : Element) {
        return element.getAttribute("id") === this.targetId;
    }
}