const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            posts: allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
              limit: 1000
              filter: {
                frontmatter: { draft: { ne: true } }
                fileAbsolutePath: { regex: "/content/posts/" }
              }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    path
                  }
                }
              }
            }

            quickTips: allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
              limit: 1000
              filter: { fileAbsolutePath: { regex: "/content/quick-tips/" } }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    path
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        result.data.posts.edges.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: blogPost,
            context: {}, // additional data can be passed via context
          })
        })

        // Create quick tips pages.
        result.data.quickTips.edges.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: blogPost,
            context: {}, // additional data can be passed via context
          })
        })
      })
    )
  })
}
