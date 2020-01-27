import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const RelatedArticles = ({ relatedArticles, currentPagePath }) => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query relatedArticlesQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fileAbsolutePath: { regex: "/content/posts/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              path
              title
              tags
            }
          }
        }
      }
    }
  `)

  if (!relatedArticles) return null

  // Work on the queried data to return a matching array
  const relatedPages = allMarkdownRemark.edges.filter(page => {
    // Filter out current page from the related pages results
    if (currentPagePath === page.node.frontmatter.path) return

    const otherPageRelatedArticles = page.node.frontmatter.tags

    // Calculate matching score
    let matchingScore = 0

    for (let keyword of otherPageRelatedArticles) {
      if (relatedArticles.includes(keyword)) {
        matchingScore++
      }
    }

    let result = {
      score: matchingScore,
      ...page,
    }

    // Reset the matching score counter
    matchingScore = 0

    return result.score > 0 ? result : null
  })

  return (
    <React.Fragment>
      {relatedPages.length !== 0 ? (
        <div className="related-articles">
          <h4 style={{ margin: 0 }}>Related articles:</h4>
          {relatedPages.map(page => (
            <div key={page.node.id}>
              <Link to={page.node.frontmatter.path + '/'}>
                {page.node.frontmatter.title}
              </Link>
            </div>
          ))}
        </div>
      ) : null}
    </React.Fragment>
  )
}

export default RelatedArticles
