export default {
  base: 'https://www.bing.com',
  route: '/HPImageArchive.aspx',
  query: {
    /**
     * Response data format
     * XML  => xml
     * JSON => js
     * RSS  => rss
     */
    format: 'js',
    /**
     * 0 TODAY, 1 YESTERDAY, -1 TOMORROW
     * or any integer
     * >= -1
     */
    idx: 0,
    /**
     * Number of images from fetch
     * 1 - 8
     */
    n: 1,
    /**
     * Locale code
     */
    mkt: 'zh-CN',
    video: 1,
  },
};
