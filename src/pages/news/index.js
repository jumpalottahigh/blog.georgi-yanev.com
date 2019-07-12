import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/structure/layout'
import PostsList from '../../components/PostsList'
import TinyLetterSignup from '../../components/TinyLetterSignUp'

const NewsPage = ({ data }) => (
  <Layout>
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

export default NewsPage

export const NewsPageQuery = graphql`
  query NewsPageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
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
