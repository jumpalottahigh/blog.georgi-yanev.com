import React from 'react'
import Link from 'gatsby-link'
import eternalArchivesMainImage from '../../images/eternal-archives-main.jpg'

const EternalArchivesPage = ({data}) =>
  <div>
    <h1>Eternal Archives - home to the past...</h1>
    <p>This section hosts uneditted things the way they were in the late 90s and early 2000s.</p>
    <p>For example, here's a snippet of the first site I wrote in 1999 :)</p>
    <img src={eternalArchivesMainImage} alt="Snippet of the first site written by Georgi Yanev" />
    <p className="m-t-1">List of all posts in this section:</p>
    <ul className="list-none">
      {data.allSitePage.edges.map(page =>
        (
          <li>
            <Link key={page.node.id} to={page.node.path} rel="noopener">{page.node.path}</Link>
          </li>
        )
      )}
    </ul>
  </div>

export default EternalArchivesPage

// Export dynamic list of all pages
export const pageQuery = graphql`
  query IndexQuery {
    allSitePage(limit: 1000, filter: { path: { regex: "\/eternal-archives\/./" } }) {
      edges {
        node {
          id
          path
        }
      }
    }
  }
`