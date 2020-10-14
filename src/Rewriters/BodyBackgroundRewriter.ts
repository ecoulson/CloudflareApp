import ElementStylesheet from "../ElementStylesheet";
import IRewriter from "./IRewriter";

export default class BodyBackgroundRewriter implements IRewriter {
    async element(element : Element) {
        const stylesheet = new ElementStylesheet();
        stylesheet.addRule("background", "rgb(2,0,36)");
        stylesheet.addRule("background", "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)");
        element.removeAttribute("class");
        element.setAttribute("style", stylesheet.toString());
    }
}