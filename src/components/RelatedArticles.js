import React from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'

const StyledRelatedArticles = styled.div`
  border-top: 1px solid #cecece;
  padding: 1rem 0;

  & a {
    display: inline-block;
    padding: 6px 0;
  }

  & a:hover {
    box-shadow: inset 0 -34px 0px 0px #0175d8;
  }
`

const RelatedArticles = ({ relatedArticles, currentPagePath }) => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query relatedArticlesQuery {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
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

  return relatedPages.length !== 0 ? (
    <StyledRelatedArticles>
      <h4 style={{ margin: 0 }}>Related articles:</h4>
      {relatedPages.map(page => (
        <div key={page.node.id}>
          <Link to={page.node.frontmatter.path + '/'}>
            {page.node.frontmatter.title}
            {page.score}
          </Link>
        </div>
      ))}
    </StyledRelatedArticles>
  ) : null
}

export default RelatedArticles
