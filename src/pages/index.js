import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { Fade } from 'react-reveal'

import Layout from '../components/structure/layout'

import svgReact from '../../static/react.svg'
import svgJS from '../../static/javascript.svg'
import PostsList from '../components/PostsList'
import TinyLetterSignup from '../components/TinyLetterSignUp'

class BlogIndex extends React.Component {
  state = {
    loadVideo: true,
  }

  handleVideoClick = e => {
    e.target.pause()
    e.target.currentTime = 0
    e.target.load()
    e.target.play()
  }

  componentDidMount() {
    // If user is on a dodgy connection, don't load the video at all
    if ('connection' in navigator) {
      if (navigator.connection.downlink < 5) {
        this.setState({ loadVideo: false })
      }
    }
  }

  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const { loadVideo } = this.state

    return (
      <Layout location={this.props.location}>
        <div className="home-page">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '1rem',
            }}
          >
            <div style={{ width: '20%' }}>
              <div style={{ maxWidth: '100px' }}>
                <Img
                  fluid={
                    this.props.data.georgi.edges[0].node.childImageSharp.fluid
                  }
                  alt="Georgi Yanev portrait"
                />
              </div>
            </div>
            <h1 style={{ fontSize: '1.4rem', width: '80%', margin: 0 }}>
              Hi, I'm Georgi and I build things on the web with{` `}
              <img
                className="framework-logo"
                src={svgJS}
                alt="JavaScript logo"
              />
              {` `}
              JavaScript and{` `}
              <img
                className="framework-logo"
                src={svgReact}
                alt="React.js logo"
              />
              {` `}
              React
            </h1>
          </div>
          <p>
            I work as a {` `}
            <Link to="/learning/how-i-got-into-software-development/">
              web developer
            </Link>
            {` `}
            at{` `}
            <a href="https://www.f-secure.com/en/web/home_global/">F-Secure</a>.
            You can find me on{' '}
            <a href="https://twitter.com/jumpalottahigh">twitter</a>,{' '}
            <a href="https://github.com/jumpalottahigh">github</a>,{' '}
            <a href="https://twitch.tv/jumpalottahigh">twitch</a> and{' '}
            <a href="https://www.linkedin.com/in/yanevgeorgi">linkedin</a>
            .
            <br />
          </p>
          <p>
            In this blog you will find posts about{' '}
            <strong>
              <span role="img" aria-label="helicopter">
                🚁
              </span>{' '}
              FPV racing drones
            </strong>{' '}
            (building, repairing and flying),{' '}
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
              life-long learning, goals and stories
            </strong>{' '}
            as well as who knows what else in the future.
          </p>

          <p>
            I <strong>write code</strong>, solve problems and sometimes stream
            on twitch. I <strong>love flying FPV drones</strong>, 3D printing,
            contributing to open source, and working on fpvtips.com.
          </p>
          <p>
            Most of my projects are open source and{' '}
            <a href="https://github.com/jumpalottahigh?tab=repositories">
              available on GitHub
            </a>
            . You can also{' '}
            <a href="https://twitter.com/jumpalottahigh">follow me</a> on
            twitter.
          </p>
          <p>
            This blog was a joy to build using{' '}
            <strong>
              <a href="https://www.gatsbyjs.org">Gatsby</a>
              <span role="img" aria-label="heart">
                💜
              </span>
            </strong>{' '}
            (a React based static site generator) and is hosted on{' '}
            <strong>
              <a href="https://www.netlify.com">Netlify</a>
              <span role="img" aria-label="fire">
                🔥
              </span>
            </strong>
            .
          </p>
          <h4 style={{ marginTop: '2rem' }}>Post categories:</h4>
          <Link
            style={{
              marginRight: '0.5rem',
              marginBottom: '0.5rem',
              display: 'inline-block',
            }}
            to="/news/"
          >
            <button className="category all">All posts</button>
          </Link>
          <Link
            style={{
              marginRight: '0.5rem',
              marginBottom: '0.5rem',
              display: 'inline-block',
            }}
            to="/news/?category=fpv"
          >
            <button className="category fpv">FPV Drones</button>
          </Link>
          <Link
            style={{
              marginRight: '0.5rem',
              marginBottom: '0.5rem',
              display: 'inline-block',
            }}
            to="/news/?category=projects"
          >
            <button className="category projects">Projects</button>
          </Link>
          <Link
            style={{
              marginRight: '0.5rem',
              marginBottom: '0.5rem',
              display: 'inline-block',
            }}
            to="/news/?category=learning"
          >
            <button className="category learning">Learnings</button>
          </Link>
          <Link
            style={{
              marginRight: '0.5rem',
              marginBottom: '0.5rem',
              display: 'inline-block',
            }}
            to="/news/?category=smarthome"
          >
            <button className="category smarthome">Smarthome</button>
          </Link>
          <Link to="/news/?category=stories">
            <button className="category stories">Stories</button>
          </Link>
          <h3 style={{ marginTop: '2rem' }}>Last 5 recent posts:</h3>
          <PostsList
            showChevron="yes"
            showImage="yes"
            showCategories="no"
            showSearch="no"
            posts={posts}
          />
          <Link style={{ marginRight: '0.5rem' }} to="/news/">
            <button className="category fpv">More blog posts</button>
          </Link>
          <TinyLetterSignup />
          <div
            className="article-update-notification"
            style={{ marginTop: '2rem' }}
          >
            For more FPV related goodness, make sure you checkout{' '}
            <strong>
              <a href="https://www.fpvtips.com">Fpvtips.com</a>
            </strong>{' '}
            which I launched a while back!
          </div>
          {loadVideo && (
            <div className="video-container">
              <Fade>
                <video
                  autoPlay
                  muted
                  playsInline
                  onClick={this.handleVideoClick}
                >
                  <source
                    src="https://www.georgi-yanev.com/static/landing-a-quad-1-d1a878f7ef756c703ebeeecdb529e63e.webm"
                    type="video/webm"
                  />
                  <source
                    src="https://www.georgi-yanev.com/static/landing-a-quad-1-a959ba1dfed1d6abe2e8052b61bfb0b4.mp4"
                    type="video/mp4"
                  />
                  Tap to play video
                </video>
              </Fade>
            </div>
          )}
          <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
            Additionally, the Eternal Archives section of the blog hosts a bunch
            of unedited content (fan fiction, music and programming) from the
            early 2000s when I was only 15 - 17.
          </p>
          <Img
            style={{ marginBottom: '2rem' }}
            fluid={
              this.props.data.homeBottom.edges[0].node.childImageSharp.fluid
            }
            alt="Drone, Georgi flying FPV and coding work station"
          />
        </div>
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
      filter: {
        frontmatter: { draft: { ne: true }, category: { ne: "stories" } }
        fileAbsolutePath: { regex: "/content/posts/" }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 350)
          id
          timeToRead
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            path
            title
            author
            category
            tags
            ogImage {
              publicURL
              childImageSharp {
                fluid(maxWidth: 672) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }

    georgi: allFile(
      filter: { relativePath: { regex: "/^home/georgi-face/" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 100, quality: 75) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }

    homeBottom: allFile(
      filter: { relativePath: { regex: "/^home/home-bottom/" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 928, quality: 75) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
