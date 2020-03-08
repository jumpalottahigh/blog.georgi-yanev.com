import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

const StyledTagPool = styled.div`
  display: flex;
  flex-flow: row wrap;
`

const Tag = styled.a`
  background: #0476d8;
  color: #fafafa;
  border-radius: 2px;
  padding: 4px 8px;
  white-space: nowrap;
  word-break: keep-all;
  word-spacing: normal;
  margin: 0 0.7rem 0.7rem 0;
  text-decoration: none;
  font-size: 1rem;
`

function TagPool({ tagAmount = 10 }) {
  const { allArticleTags } = useStaticQuery(graphql`
    {
      allArticleTags: allMarkdownRemark(
        filter: { frontmatter: { tags: { ne: null } } }
      ) {
        nodes {
          frontmatter {
            tags
          }
        }
      }
    }
  `)

  let tagPool = {}

  // Aggregate tags and amount of occurance
  for (let article of allArticleTags.nodes) {
    for (let tag of article.frontmatter.tags) {
      if (!tagPool[tag]) {
        tagPool[tag] = 1
      } else {
        tagPool[tag]++
      }
    }
  }

  // Sort in ASC order by the value
  const keysSorted = Object.keys(tagPool).sort(function(a, b) {
    return tagPool[a] - tagPool[b]
  })

  // Grab the top 10 items
  const topTags = keysSorted.slice(keysSorted.length - tagAmount).reverse()

  return (
    <StyledTagPool className="tag-pool">
      {topTags.map(tag => (
        <Tag key={tag} className="tag-pool__tag" href={`/posts/?tag=${tag}`}>
          #{tag}
        </Tag>
      ))}
    </StyledTagPool>
  )
}

export default TagPool
