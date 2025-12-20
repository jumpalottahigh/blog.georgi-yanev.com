import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/structure/layout'
import PostsList from '../../components/PostsList'
import TinyLetterSignup from '../../components/TinyLetterSignUp'

const PostsPage = ({ data }) => (
  <Layout posts={data.allMarkdownRemark.edges}>
    <PostsList
      showChevron="yes"
      showImage="yes"
      showCategories="yes"
      showTags="yes"
      showSearch="yes"
      filterCategoriesAndTagsFromURLParams="yes"
      posts={data.allMarkdownRemark.edges}
    />
    <TinyLetterSignup />
  </Layout>
)

export default PostsPage

export const PostsPageQuery = graphql`
  query PostsPageQuery {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/content/posts/" }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 140)
          id
          timeToRead
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            path
            title
            author
            category
            tags
            ogImage {
              publicURL
              childImageSharp {
                fluid(maxWidth: 672) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
