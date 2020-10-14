export default interface IElementHandler {
    handleElement(element: Element) : Promise<void>;
}