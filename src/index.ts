import { handleLinksRequest, handleStaticRequest } from './handler'

addEventListener('fetch', (event) => {
  const route = event.request.url.replace("http://","").replace("https://", "").split("/");

  switch (route[1]) {
    case "links":
      event.respondWith(handleLinksRequest());
      return;
    default:
      event.respondWith(handleStaticRequest(event.request))
      return;
  }

})
