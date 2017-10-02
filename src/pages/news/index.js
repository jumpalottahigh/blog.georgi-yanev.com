import React from 'react'
import Link from 'gatsby-link'

const NewsPage = ({data}) =>
  <div>
    <h1>News and articles</h1>
    <p>All newest articles end up in this section. You can expect content on JavaScript and Web Dev, FPV drones, Smart Home Automation with Home Assistant and more.</p>
    <p>List of all posts in this section:</p>
    <ul className="list-none">
      {data.allSitePage.edges.map(page => {
          if (page.node.path.includes('news/')) {
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

export default NewsPage

// Export dynamic list of all pages
export const pageQuery2 = graphql`
  query IndexQuery2 {
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