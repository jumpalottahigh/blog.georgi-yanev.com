import React from 'react'
import Helmet from 'react-helmet'

// import '../css/blog-post.css' // make it pretty!

export default function Template({
  data // this prop will be injected by the GraphQL query
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  return (
    <div className="blog-post-container">
      <Helmet title={`Georgi Yanev - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div className="disclaimer-container">
          <span className="year">{post.frontmatter.date}</span>
          <span className="disclaimer">{post.frontmatter.author}</span>
        </div>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className="affiliate-note">{post.frontmatter.affiliate}</div>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
query BlogPostByPath($path: String!) {
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      path
      title
      author
      affiliate
    }
  }
}
`