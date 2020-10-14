import AvatarHandler from "./ElementHandlers/AvatarHandler";
import LinksHandler from "./ElementHandlers/LinksHandler";
import ProfileHandler from "./ElementHandlers/ProfileHandler";
import SocialLinksHandler from "./ElementHandlers/SocialLinksHandler";
import UsernameHandler from "./ElementHandlers/UsernameHandler";
import Links from "./Links";
import BodyBackgroundRewriter from "./Rewriters/BodyBackgroundRewriter";
import TargetIdRewriter from "./Rewriters/TargetIdRewriter";
import TitleRewriter from "./Rewriters/TitleRewriter";

const ProfileId : string = "profile";
const LinksId : string = "links";
const AvatarId : string = "avatar";
const UsernameId : string = "name";
const SocialId : string = "social";

export async function handleLinksRequest(): Promise<Response> {
  const links = new Links();
  const json = JSON.stringify(await links.getLinks(), null, 2)

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
  return rewriteLinks(staticPageResponse)
}

async function rewriteLinks(response: Response) {
  const rewriter = new HTMLRewriter()
    .on("div", new TargetIdRewriter(LinksId, new LinksHandler()))
    .on("div", new TargetIdRewriter(ProfileId, new ProfileHandler()))
    .on("div", new TargetIdRewriter(SocialId, new SocialLinksHandler()))
    .on("img", new TargetIdRewriter(AvatarId, new AvatarHandler()))
    .on("h1", new TargetIdRewriter(UsernameId, new UsernameHandler()))
    .on("title", new TitleRewriter())
    .on("body", new BodyBackgroundRewriter());
  return rewriter.transform(response)
}
