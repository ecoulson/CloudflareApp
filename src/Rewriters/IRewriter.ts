export default interface IRewriter {
    element(element: Element) : Promise<void>;
}