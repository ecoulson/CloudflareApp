import IElementHandler from "./IElementHandler";

import profile from "../Profile";

export default class AvatarHandler implements IElementHandler {
    async handleElement(element : Element) {
        element.setAttribute("src", profile.profileImage);
    }
}