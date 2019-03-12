module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `Georgi Yanev's Blog`,
    siteUrl: `https://blog.georgi-yanev.com`,
    author: `Georgi Yanev`,
    description: `Georgi Yanev's Blog`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/pages`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.md', 'mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 920,
              withWebp: true,
              quality: 75,
              // Remove the default behavior of adding a link to each
              // image.
              linkImagesToOriginal: true,
              sizeByPixelDensity: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {},
          },
          {
            resolve: `gatsby-remark-smartypants`,
            options: {},
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-43588334-6`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  url:
                    site.siteMetadata.siteUrl +
                    edge.node.frontmatter.path +
                    '/',
                  guid:
                    site.siteMetadata.siteUrl +
                    edge.node.frontmatter.path +
                    '/',
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: `
            {
              allMdx(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    excerpt(pruneLength: 140)
                    html
                    frontmatter {
                      title
                      date
                      path
                    }
                  }
                }
              }
            }
            `,
            output: '/feed.xml',
          },
        ],
      },
    },
    {
      // If you’re using this plugin together with gatsby-plugin-offline (recommended),
      // this plugin should be listed before the offline plugin so that it can cache the created manifest.json.
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Georgi Yanev Blog',
        short_name: 'Georgi Blog',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#0275d8',
        display: 'minimal-ui',
        icons: [
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*.pdf': [
            "Content-Security-Policy: frame-ancestors 'self' https://*.georgi-yanev.com/",
            'X-Frame-Options: ALLOW-FROM https://blog.georgi-yanev.com/',
          ],
        },
        mergeSecurityHeaders: false,
      },
    },
  ],
}
