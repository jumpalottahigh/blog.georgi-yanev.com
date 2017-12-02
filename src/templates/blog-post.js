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
          { name: 'description', content: `${post.frontmatter.ogDescription}` },
          { name: 'keywords', content: `${post.frontmatter.ogKeywords}` }
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
        {/* <div className="feedback">
          <div>
            <h4>How was it? Rate it:</h4>
            <p>Your feedback is greatly appreciated!</p>
          </div>
          <div>
            <FeedbackLink text="Good" value="good" />
            <a className="m-r-1" href="#" data-feedback="good">
              Good
            </a>
            <a className="m-r-1" href="#" data-feedback="long">
              Too long
            </a>
            <a className="m-r-1" href="#" data-feedback="short">
              Too short
            </a>
            <a className="m-r-1" href="#" data-feedback="bad">
              Bad
            </a>
          </div>
        </div> */}
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
