const links = [
  { "name": "Link Name", "url": "https://cnn.com" },
  { "name": "Link Name", "url": "https://reddit.com" },
  { "name": "Link Name", "url": "https://amazon.com" }
]

export async function handleLinksRequest(): Promise<Response> {;
  const json = JSON.stringify(links, null, 2)

  return new Response(json, {
    headers: {
      "content-type": "application/json;charset=UTF-8"
    }
  })
}

export async function handleStaticRequest(request: Request): Promise<Response> {
  const init = {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  }
  const staticPageResponse = await fetch("https://static-links-page.signalnerve.workers.dev", init);
  const staticPage = await getStaticPage(staticPageResponse);
  return new Response(staticPage, init);
}

async function getStaticPage(response : Response) {
  const { headers } = response
  const contentType = headers.get("content-type") || ""
  if (contentType.includes("application/json")) {
    return JSON.stringify(await response.json())
  }
  else if (contentType.includes("application/text")) {
    return await response.text()
  }
  else if (contentType.includes("text/html")) {
    return await response.text()
  }
  else {
    return await response.text()
  }
}

async function rewriteLinks(staticPage: string) {
  const rewriter = new HTMLRewriter();
}
