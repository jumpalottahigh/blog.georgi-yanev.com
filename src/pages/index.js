import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { Fade } from 'react-reveal'
import Spin from 'react-reveal/Spin'

import Layout from '../components/structure/layout'
import PostsList from '../components/PostsList'
import TinyLetterSignup from '../components/TinyLetterSignUp'
import Announcement from '../components/Announcement'
import YouTubeChannelsPromo from '../components/YouTubeChannelsPromo'

import svgReact from '../../static/react.svg'
import svgJS from '../../static/javascript.svg'

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
          {/* TODO: */}
          {/* <h4 style={{ marginTop: '2rem' }}>Most popular this month:</h4> */}
          <Announcement
            shortContent={
              <>
                <h4 style={{ textAlign: 'center', margin: 0 }}>
                  🔥 Announcement 🔥
                </h4>
                <div className="short-content-inner-container">
                  <Spin>
                    <Img
                      fluid={
                        this.props.data.fpvtips.edges[0].node.childImageSharp
                          .fluid
                      }
                      alt="FPVTIPS logo"
                    />
                  </Spin>
                  <h4>
                    I'm starting a new YouTube channel called{' '}
                    <a
                      href="https://www.youtube.com/channel/UCCh3SK2EktDdOQkEOTDmSCg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      FPVTIPS
                    </a>
                    , to do much of the same I do here - try to help people new
                    to FPV racing drones. Come check it out 👀 and subscribe 📫.
                  </h4>
                </div>
              </>
            }
          >
            <p>
              I've been really humbled to help so many people over the years and
              to answer the questions I myself had. I'll continue doing that,
              and believing in the wonderful hobby of FPV racing drones, and
              will also from now on do that on YouTube in addition to this blog.
            </p>
            <p>
              Here's how you (yes, YOU) can help -{' '}
              <strong>
                👉{' '}
                <a
                  href="https://www.youtube.com/channel/UCCh3SK2EktDdOQkEOTDmSCg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  come over
                </a>
                , 📺 watch the first couple of videos, 📫 subscribe :), and
                leave me some 💬 feedback in the comments section
              </strong>
              . I would REALLY appreciate this, and thank you in advance 💙.
              <br />
              <br />
              I'm sure I have a lot to learn about video production, but hey,
              you gotta start somewhere, right? And I'm definitely excited about
              learning and sharing knowledge! Happy flying!
            </p>
            <time dateTime="2019-06-23">Georgi, 23 June 2019</time>
          </Announcement>
          <h3 style={{ marginTop: 0 }}>Categories:</h3>
          <div className="category-container">
            <Link to="/news/">
              <button className="category all">All posts</button>
            </Link>
            <Link to="/news/?category=fpv">
              <button className="category fpv">FPV Drones</button>
            </Link>
            <Link to="/news/?category=projects">
              <button className="category projects">Projects</button>
            </Link>
            <Link to="/news/?category=learning">
              <button className="category learning">Learnings</button>
            </Link>
            <Link to="/news/?category=smarthome">
              <button className="category smarthome">Smarthome</button>
            </Link>
            <Link to="/news/?category=stories">
              <button className="category stories">Stories</button>
            </Link>
          </div>
          <h4 style={{ marginTop: '2rem' }}>Last 10 posts:</h4>
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
            . You can find me on{' '}
            <a href="https://www.youtube.com/channel/UC2gwYMcfb0Oz_fl9W1uTV2Q">
              YouTube
            </a>
            , <a href="https://twitter.com/jumpalottahigh">Twitter</a>,{' '}
            <a href="https://github.com/jumpalottahigh">GitHub</a>,{' '}
            <a href="https://twitch.tv/jumpalottahigh">Twitch</a> and{' '}
            <a href="https://www.linkedin.com/in/yanevgeorgi">LinkedIn</a>
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
            (reviews, building, repairing and flying),{' '}
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
            and is hosted on{' '}
            <strong>
              <a href="https://www.netlify.com">Netlify</a>
              <span role="img" aria-label="fire">
                🔥
              </span>
            </strong>
            .
          </p>
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
          <h3>
            If you are still hungry for more FPV related things, definitely
            subscribe to my monthly FPV newsletter...
          </h3>
          <TinyLetterSignup />
          <YouTubeChannelsPromo text="... or check out my YouTube channels:" />
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
      limit: 10
      filter: {
        frontmatter: { draft: { ne: true }, category: { ne: "stories" } }
        fileAbsolutePath: { regex: "/content/posts/" }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 320)
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

    fpvtips: allFile(filter: { relativePath: { regex: "/^home/fpvtips/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 124, quality: 81) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
