module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `Georgi Yanev's Blog`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-43588334-6`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [] // maybe add here gatsby-remark-prismjs for syntax highlighting here
      }
    },
  ],
}
