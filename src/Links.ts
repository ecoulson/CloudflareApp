export default class Links {
    async getLinks() {
        const response = await fetch("https://www.reddit.com/r/earthporn/hot.json", {
            headers: {
                "content-type": "application/json;charset=UTF-8"
            }
        });
        const payload = await response.json();
        const links = payload.data.children.map((child : any) => {
            return {
                name: child.data.title.replace(/(\[|\)).*(\]|\))/, ""),
                url: child.data.preview.images[0].source.url
            };
        })
        return links;
    }
}