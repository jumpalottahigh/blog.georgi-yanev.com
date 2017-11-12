import React from 'react'
import Link from 'gatsby-link'

const NewsPage = ({ data }) => (
  <div>
    <h1>Latest posts:</h1>
    <ul className="list-none">
      {data.allMarkdownRemark.edges.map(page => (
        <li key={page.node.id} className="post-preview">
          <Link key={page.node.id} to={page.node.frontmatter.path}>
            <h4>{page.node.frontmatter.title}</h4>
            <p>{page.node.excerpt}</p>
            <p className="post-preview-note">
              <strong>{page.node.timeToRead} min</strong> read by{' '}
              {page.node.frontmatter.author} on{' '}
              <strong>{page.node.frontmatter.date}</strong> in{' '}
              <strong className="post-preview-tags">
                {page.node.frontmatter.tags}
              </strong>
            </p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

// TODO: Filter tags preferably with GraphQL
// function filter() {
//   const tag = location.href.split('tag=')[1]
//   const posts = document.querySelectorAll('.post-preview')

//   posts.forEach(post => {
//     if (post.querySelector('.post-preview-tags').textContent != tag) {
//       post.style.display = 'none'
//     } else {
//       post.style.display = 'block'
//     }
//   })
// }

export default NewsPage

export const NewsPageQuery = graphql`
  query NewsPageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 10
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 140)
          id
          timeToRead
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            path
            title
            author
            tags
          }
        }
      }
    }
  }
`
