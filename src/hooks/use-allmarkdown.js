import { graphql, useStaticQuery } from 'gatsby'

const useAllMarkdownRemark = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: {
          frontmatter: { draft: { ne: true } }
          fileAbsolutePath: { regex: "/content/posts/" }
        }
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 140)
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
                  fluid(maxWidth: 670) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.allMarkdownRemark.edges
}

export default useAllMarkdownRemark
