import credentialedProxyHandler from "utils/proxy/handlers/credentialed";

const widget = {
  api: "https://api.wanikani.com/{endpoint}",
  proxyHandler: credentialedProxyHandler,

  mappings: {
    summary: {
      endpoint: "v2/summary",
      validate: ["data"],
    },
  },
};

export default widget;
