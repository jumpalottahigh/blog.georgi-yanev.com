import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/structure/layout'
import Footer from '../components/structure/Footer/Footer'

import introImage from '../images/main-page.jpg'
import svgVue from '../../static/vue.svg'
import svgReact from '../../static/react.svg'
import svgJS from '../../static/javascript.svg'
import PostList from '../components/PostsList'
import Button from '../components/Button/Button'

class BlogIndex extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location}>
        <div>
          <h1 style={{ fontSize: '1.4rem' }}>
            Hi, I'm Georgi and I build things on the web with{' '}
            <img className="framework-logo" src={svgJS} alt="JavaScript logo" />{' '}
            JavaScript,{' '}
            <img
              className="framework-logo"
              src={svgReact}
              alt="React.js logo"
            />{' '}
            React and{' '}
            <img className="framework-logo" src={svgVue} alt="Vue.js logo" />{' '}
            Vue.
          </h1>
          <p>
            <br />I believe that however we build apps on the web, they always
            end up in the <strong>hands of humans</strong> and it's crucial that
            we address <strong>web performance and page load times</strong>.
          </p>
          <p>
            I write articles about{' '}
            <strong>
              <span role="img" aria-label="helicopter">
                🚁
              </span>{' '}
              FPV quads
            </strong>{' '}
            (building and flying),{' '}
            <strong>
              <span role="img" aria-label="computer">
                💻
              </span>{' '}
              web development
            </strong>
            ,{' '}
            <strong>
              <span role="img" aria-label="house">
                🏠
              </span>{' '}
              smart home automation
            </strong>
            ,{' '}
            <strong>
              <span role="img" aria-label="student">
                👨‍🎓️
              </span>{' '}
              life-long learning
            </strong>{' '}
            and other topics from my personal experience.
          </p>

          <p>
            By day{' '}
            <a
              href="https://www.linkedin.com/in/yanevgeorgi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              I work as a web developer
            </a>{' '}
            and by night I learn and experiment with web tech. If you are
            interested in my skills here's{' '}
            <a href="https://www.georgi-yanev.com/about">
              what I have come across along the years
            </a>
            .
          </p>
          <p>
            I hope you find interesting articles around here. If you have any
            questions, you can always find me as{' '}
            <a href="https://twitter.com/jumpalottahigh">@jumpalottahigh</a> on
            Twitter and on{' '}
            <a href="https://github.com/jumpalottahigh">Github</a>.
          </p>
          <p>
            This blog was a joy to build using{' '}
            <strong>
              Gatsby{' '}
              <span role="img" aria-label="heart">
                💜
              </span>
            </strong>{' '}
            (a React based static site generator) and is hosted on{' '}
            <strong>
              Firebase{' '}
              <span role="img" aria-label="fire">
                🔥
              </span>
            </strong>
            .
          </p>
          <div className="article-update-notification">
            For more FPV related goodness, make sure you checkout{' '}
            <strong>
              <a href="https://www.fpvtips.com">Fpvtips.com</a>
            </strong>{' '}
            which I recently launched!
          </div>
          <h4 style={{ marginTop: '2rem' }}>Last 5 recent posts:</h4>
          <PostList
            showChevron="yes"
            showImage="yes"
            showCategories="no"
            showSearch="no"
            posts={posts}
          />
          <Button
            style={{ fontSize: '1.2rem', marginRight: '1rem' }}
            to="/news/"
          >
            All blog posts
          </Button>
          <a
            className="button"
            href="https://paypal.me/jumpalottahigh/20"
            target="_blank"
            rel="noopener noreferrer"
          >
            Support the blog
          </a>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
            Additionally, the Eternal Archives section of the blog hosts a bunch
            of unedited content (fan fiction, music and programming) from the
            early 2000s when I was only 15 - 17.
          </p>
          <img
            style={{ marginBottom: '1rem' }}
            src={introImage}
            alt="YAR cover"
          />
        </div>
        <Footer />
      </Layout>
    )
  }
}

export default BlogIndex

export const HomePageQuery = graphql`
  query HomePageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 5
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 390)
          id
          timeToRead
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            path
            title
            author
            tags
            ogImage {
              publicURL
            }
          }
        }
      }
    }
  }
`
