import React from 'react'
import Helmet from 'react-helmet'
// import Disqus from '../components/Disqus.js'
import FeedbackSection from '../components/FeedbackSection.js'
import RelatedArticles from '../components/RelatedArticles.js'

export default function Template({
  data // this prop will be injected by the GraphQL query
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data

  // If post doesn't have a defined og image, fall back to default defined here
  const ogImage =
    post.frontmatter.ogImage !== null
      ? `https://blog.georgi-yanev.com${post.frontmatter.ogImage.publicURL}`
      : `https://blog.georgi-yanev.com/default-ogimage-github.jpg`

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
            content: ogImage
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
            content: ogImage
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
                "url": "https://blog.georgi-yanev.com/default-ogimage-generic.png"
              }
            },
            "description": "${post.excerpt}",
            "articleSection": "${post.excerpt}",
            "url": "https://blog.georgi-yanev.com${post.frontmatter.path}"
          }
        `}</script>
      </Helmet>
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
        <RelatedArticles articles={post.frontmatter.relatedArticles} />
        <div className="affiliate-note m-t-1">{post.frontmatter.affiliate}</div>
        <FeedbackSection />
        {/* <Disqus postNode={post} /> */}
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        dateUnformatted: date
        path
        title
        tags
        relatedArticles
        disqus_identifier
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
