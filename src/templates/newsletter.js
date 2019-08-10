import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/structure/layout'
import FeedbackSection from '../components/FeedbackSection'
import AskAQuestion from '../components/AskAQuestion'
import SupportSection from '../components/SupportSection'

class NewsletterTemplate extends React.Component {
  render() {
    const { markdownRemark: post } = this.props.data

    // If post doesn't have a defined og image, fall back to default defined here
    const ogImage = `https://blog.georgi-yanev.com/quick-tips-og-image.jpg`

    const description =
      'Monthly FPV News. Tips, articles, DIY and set up guides. All things FPV.'

    return (
      <Layout location={this.props.location}>
        <Helmet
          title={`${post.frontmatter.title} - Georgi Yanev`}
          meta={[
            {
              name: 'description',
              content: description,
            },
            {
              name: 'keywords',
              content:
                'fpv, quad, drone, custom drone build, how to build a quadcopter, how to fly fpv drones, fpv freestyle, fpv racing, quick tips, fpv tips, fpvtips, how to mod fpv drones, guides',
            },
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
              content: description,
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
              content: description,
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
              "name": "Georgi Yanev"
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
            "description": "${description}",
            "articleSection": "${description}",
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
                    href="https://www.youtube.com/channel/UC2gwYMcfb0Oz_fl9W1uTV2Q"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Georgi Yanev
                  </a>
                </div>
                <div className="year">{post.frontmatter.date}</div>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <div style={{ marginTop: '1rem', marginBottom: '2rem' }}>
              <Link to="/quick-tips/">
                <button className="category fpv">More quick tips</button>
              </Link>
            </div>
            <FeedbackSection />
            <AskAQuestion />
            <SupportSection />
          </div>
        </div>
      </Layout>
    )
  }
}

export default NewsletterTemplate

export const pageQuery = graphql`
  query NewsletterByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        dateUnformatted: date
        path
        title
      }
    }
  }
`
