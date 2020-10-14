import Profile from "../Profile";
import IRewriter from "./IRewriter";

export default class TitleRewriter implements IRewriter {
    async element(element : Element) {
        element.setInnerContent(Profile.fullName);
    }
}