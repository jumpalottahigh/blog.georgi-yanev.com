import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/structure/layout'
import FeedbackSection from '../components/FeedbackSection.js'
import SupportSection from '../components/SupportSection.js'
import ModeSwitch from '../components/Mode'

class QuickTipTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark

    // If post doesn't have a defined og image, fall back to default defined here
    const ogImage =
      post.frontmatter.ogImage !== null
        ? `https://blog.georgi-yanev.com${post.frontmatter.ogImage.publicURL}`
        : `https://blog.georgi-yanev.com/default-ogimage.png`

    const timeToReadEmoji = '⌛'.repeat(Math.ceil(post.timeToRead / 5))

    return (
      <Layout location={this.props.location}>
        <Helmet
          title={`${post.frontmatter.title} - Georgi Yanev`}
          meta={[
            {
              name: 'description',
              content: `${post.frontmatter.ogDescription}`,
            },
            { name: 'keywords', content: `${post.frontmatter.ogKeywords}` },
            { property: 'og:type', content: 'website' },
            {
              property: 'og:url',
              content: `https://blog.georgi-yanev.com${post.frontmatter.path}`,
            },
            {
              property: 'og:image',
              content: ogImage,
            },
            {
              property: 'og:title',
              content: `${post.frontmatter.title} | Georgi Yanev`,
            },
            {
              property: 'og:description',
              content: `${post.frontmatter.ogDescription}`,
            },
            {
              name: 'twitter:card',
              content: 'summary',
            },
            {
              name: 'twitter:site',
              content: '@jumpalottahigh',
            },
            {
              name: 'twitter:image',
              content: ogImage,
            },
            {
              name: 'twitter:creator',
              content: '@jumpalottahigh',
            },
            {
              name: 'twitter:title',
              content: `${post.frontmatter.title} | Georgi Yanev`,
            },
            {
              name: 'twitter:description',
              content: `${post.frontmatter.ogDescription}`,
            },
          ]}
        >
          {/* Google Structured Data */}
          <script type="application/ld+json">{`
          {
            "@context": "http://schema.org",
            "@type": "NewsArticle",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://blog.georgi-yanev.com${post.frontmatter.path}"
            },
            "headline": "${post.frontmatter.title}",
            "name": "${post.frontmatter.title}",
            "author": {
              "@type": "Person",
              "name": "${post.frontmatter.author}"
            },
            "datePublished": "${post.frontmatter.dateUnformatted}",
            "dateModified": "${post.frontmatter.dateUnformatted}",
            "image": [
              "${ogImage}",
              "${ogImage}",
              "${ogImage}"
            ],
            "publisher": {
              "@type": "Organization",
              "name": "Georgi's Blog",
              "logo": {
                "@type": "ImageObject",
                "url": "https://blog.georgi-yanev.com/default-ogimage.png"
              }
            },
            "description": "${post.excerpt}",
            "articleSection": "${post.excerpt}",
            "url": "https://blog.georgi-yanev.com${post.frontmatter.path}"
          }
        `}</script>
        </Helmet>
        <div className="blog-post-container">
          <div className="blog-post">
            <h1>{post.frontmatter.title}</h1>
            <div className="disclaimer-container">
              <div>
                <div className="disclaimer">
                  <a
                    href="https://twitter.com/jumpalottahigh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {post.frontmatter.author}
                  </a>
                </div>
                <div className="year">
                  {post.frontmatter.date} •{' '}
                  {`${timeToReadEmoji} ${post.timeToRead} min read`}
                </div>
              </div>
              <div className="toolbar">
                <ModeSwitch />
              </div>
            </div>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <div style={{ marginTop: '1rem', marginBottom: '2rem' }}>
              <Link to="/quick-tips/">
                <button className="category fpv">Read more quick tips</button>
              </Link>
            </div>
            <FeedbackSection />
            <SupportSection affiliateNote={post.frontmatter.affiliate} />
          </div>
        </div>
      </Layout>
    )
  }
}

export default QuickTipTemplate

export const pageQuery = graphql`
  query QuickTipByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        dateUnformatted: date
        path
        title
        category
        tags
        author
        affiliate
        ogKeywords
        ogDescription
        ogImage {
          publicURL
        }
      }
    }
  }
`
