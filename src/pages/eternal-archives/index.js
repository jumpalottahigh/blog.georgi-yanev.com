import React from 'react'
import Link from 'gatsby-link'
import eternalArchivesMainImage from '../../images/eternal-archives-main.jpg'
import Helmet from 'react-helmet'

const EternalArchivesPage = ({data}) =>
  <div>
    <Helmet
      title="Georgi Yanev | Eternal Archives"
      meta={[
        { name: 'description', content: 'The Eternal Archives section of the blog is home to the past and hosts unedited things the way they were in the late 90s and early 2000s.' },
        { name: 'keywords', content: 'fan fiction, warcraft short story, diablo, heroes of might and magic story, jumpalottahigh and blink e hip hop music, game dev with unity, mazecraweler, nubis pluppis, salmonsnake, starcraft funny screenshots, diablo unique mobs' },
        { property: 'og:image', content: eternalArchivesMainImage },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://blog.georgi-yanev.com/eternal-archives' },
        { property: 'og:title', content: 'Georgi Yanev - The Eternal Archives blog section contains unedited things the way they were in the late 90s and early 2000s.' },
        { property: 'og:description', content: 'The Eternal Archives section of the blog is home to the past and hosts unedited things the way they were in the late 90s and early 2000s.' },
      ]}
    />
    <h1>Eternal Archives - home to the past...</h1>
    <p>This section hosts unedited things the way they were in the late 90s and early 2000s.</p>
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