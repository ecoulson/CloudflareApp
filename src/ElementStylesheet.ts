export default class ElementStylesheet {
    private rules : Map<string, string>;

    constructor() {
        this.rules = new Map<string, string>();
    }

    addRule(key: string, value: string) {
        this.rules.set(key, value);
    }

    toString() {
        let inlineStyle = "";
        this.rules.forEach((value, key) => {
            inlineStyle += `${key}: ${value};`;
        })
        return inlineStyle;
    }
}