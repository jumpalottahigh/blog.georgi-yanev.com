import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

class RelatedArticles extends React.Component {
  render() {
    const { relatedArticles, currentPagePath } = this.props

    // Return null if no related articles are passed
    return relatedArticles ? (
      <StaticQuery
        query={graphql`
          query relatedArticlesQuery {
            allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                    relatedArticles
                  }
                }
              }
            }
          }
        `}
        render={data => {
          // Work on the queried data to return a matching array
          const relatedPages = data.allMarkdownRemark.edges.filter(page => {
            // Filter out current page from the related pages results
            if (currentPagePath === page.node.frontmatter.path) return

            const otherPageRelatedArticles =
              page.node.frontmatter.relatedArticles

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

          // TODO: implement a scoring scale of how relevant a link is, or simply order links by matching score
          // put highest score on top
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
        }}
      />
    ) : null
  }
}

export default RelatedArticles
