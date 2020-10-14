import ElementStylesheet from "../ElementStylesheet";
import IRewriter from "../Rewriters/IRewriter";
import IElementHandler from "./IElementHandler";

export default class ProfileHandler implements IElementHandler {
    async handleElement(element : Element) {
        const stylesheet = new ElementStylesheet();
        stylesheet.addRule("display", "block");
        element.setAttribute("style", stylesheet.toString());
    }
}