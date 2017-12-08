import React from 'react'
import Helmet from 'react-helmet'
import FeedbackSection from '../components/FeedbackSection.js'

export default function Template({
  data // this prop will be injected by the GraphQL query
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  return (
    <div className="blog-post-container">
      <Helmet
        title={`Georgi Yanev - ${post.frontmatter.title}`}
        meta={[
          { name: 'description', content: `${post.frontmatter.ogDescription}` },
          { name: 'keywords', content: `${post.frontmatter.ogKeywords}` },
          { property: 'og:type', content: 'website' },
          {
            property: 'og:url',
            content: `https://blog.georgi-yanev.com${post.frontmatter.path}`
          },
          {
            property: 'og:image',
            content: `https://blog.georgi-yanev.com/default-ogimage.png`
          },
          {
            property: 'og:title',
            content: `Georgi Yanev | ${post.frontmatter.title}`
          },
          {
            property: 'og:description',
            content: `${post.frontmatter.ogDescription}`
          },
          {
            name: 'twitter:card',
            content: 'summary'
          },
          {
            name: 'twitter:site',
            content: '@jumpalottahigh'
          },
          {
            name: 'twitter:image',
            content: `https://blog.georgi-yanev.com/default-ogimage.png`
          },
          {
            name: 'twitter:creator',
            content: '@jumpalottahigh'
          },
          {
            name: 'twitter:title',
            content: `Georgi Yanev | ${post.frontmatter.title}`
          },
          {
            name: 'twitter:description',
            content: `${post.frontmatter.ogDescription}`
          }
        ]}
      />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div className="disclaimer-container">
          <span className="year">{post.frontmatter.date}</span>
          <span className="disclaimer">{post.frontmatter.author}</span>
        </div>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <div className="affiliate-note m-t-1">{post.frontmatter.affiliate}</div>
        <FeedbackSection />
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
        ogKeywords
        ogDescription
        ogImage {
          relativePath
        }
      }
    }
  }
`
