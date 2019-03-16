const REQ_PORT = 3000;
const whitelist = [
  /^http(s)?:\/\/(.*\.)?fansaly\.com(\/.*)?$/,
  /^https:\/\/fansaly\.github\.io(\/.*)?$/,
  `http://localhost:${REQ_PORT}`,
];

export default (urls = {}) => {
  const { lanUrlForConfig } = urls;
  return [
    ...whitelist,
    ...lanUrlForConfig ? [`http://${lanUrlForConfig}:${REQ_PORT}`] : [],
  ];
};
