chrome.declarativeNetRequest.updateDynamicRules({
  addRules: [{
    "id": 1,
    "priority": 1,
    "action": { 
      "type": "redirect", 
      "redirect": { "transform": { "host": "legacy.curseforge.com" } } 
    },
    "condition": {
      "urlFilter": "*://www.curseforge.com/*",
      "resourceTypes": ["main_frame"]
    }
  }],
  removeRuleIds: [1]
});
