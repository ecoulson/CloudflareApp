import ElementStylesheet from "../ElementStylesheet";
import Links from "../Links";
import IElementHandler from "./IElementHandler";

export default class LinksHandler implements IElementHandler {
    async handleElement(element : Element) {
        const links = new Links();
        const renderedLinks = this.renderLinks(await links.getLinks());
        element.before(this.renderLinksTitle(), {
            html: true
        })
        element.append(renderedLinks.join("\n"), {
            html: true
        });
    }

    renderLinksTitle() {
        const stylesheet = new ElementStylesheet();
        stylesheet.addRule("margin-top", "25px");
        stylesheet.addRule("color", "white");
        stylesheet.addRule("text-decoration", "underline");
        return `<a href="https://www.reddit.com/r/earthporn/hot" style=\"${stylesheet.toString()}\">🔥 Posts from /r/earthporn</a>`;
    }

    renderLinks(links : { name : string, url: string }[]) {
        return links.map((link) => {
            return `<a href="${link.url}">${link.name}</a>`
        })
    }
}