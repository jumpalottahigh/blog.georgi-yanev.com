import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/structure/layout'
import TinyLetterSignup from '../../components/TinyLetterSignUp'

const FpvNewsPage = ({ data }) => (
  <Layout>
    <h2>Coming soon</h2>
    <TinyLetterSignup />
  </Layout>
)

export default FpvNewsPage

export const FpvNewsPageQuery = graphql`
  query FpvNewsPageQuery {
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
