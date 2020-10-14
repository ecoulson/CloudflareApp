import ElementStylesheet from "../ElementStylesheet";
import Profile from "../Profile";
import IElementHandler from "./IElementHandler";

export default class UsernameHandler implements IElementHandler {
    async handleElement(element : Element) {
        const stylesheet = new ElementStylesheet();
        stylesheet.addRule("text-align", "center");
        element.setAttribute("style", stylesheet.toString());
        element.setInnerContent(Profile.username);
    }
}