import { graphql, useStaticQuery } from 'gatsby'

const useAllMdx = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 120)
            timeToRead
            frontmatter {
              date(formatString: "MMM DD, YYYY")
              path
              title
              author
              category
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

  return data.allMdx.edges
}

export default useAllMdx
