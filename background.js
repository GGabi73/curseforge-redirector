chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {redirectUrl: details.url.replace('www.curseforge.com', 'legacy.curseforge.com')};
  },
  {urls: ["*://www.curseforge.com/*"]},
  ["blocking"]
);
