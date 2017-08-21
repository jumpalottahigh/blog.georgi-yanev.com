module.exports = {
  siteMetadata: {
    title: `Georgi Yanev's Blog`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `REDACTED`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
