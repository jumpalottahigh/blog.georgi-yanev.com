import React from 'react'
import Link from 'gatsby-link'

const EternalArchivesPage = ({data}) =>
  <div>
    <h1>Eternal Archives - home to the past...</h1>
    <p>This section hosts uneditted things the way they were in the late 90s and early 2000s.</p>
    <p>List of all posts in this section:</p>
    <ul className="list-none">
      {data.allSitePage.edges.map(page => {
          if (page.node.path.includes('eternal-archives/')) {
            return (
              <li>
                <Link key={page.node.id} to={page.node.path} rel="noopener">{page.node.path}</Link>
              </li>
            )
          }
        }
      )}
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </div>

export default EternalArchivesPage

// Export dynamic list of all pages
export const pageQuery = graphql`
  query IndexQuery {
    allSitePage(limit: 1000) {
      edges {
        node {
          id
          path
        }
      }
    }
  }
`