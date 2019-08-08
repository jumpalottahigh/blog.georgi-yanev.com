import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { motion } from 'framer-motion'

import Layout from '../components/structure/layout'
import PostsList from '../components/PostsList'
import TinyLetterSignup from '../components/TinyLetterSignUp'
import Announcement from '../components/Announcement'
import YouTubeChannelsPromo from '../components/YouTubeChannelsPromo'
import AuthorMessage from '../components/AuthorMessage'

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
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.15 }}
                    whileHover={{ scale: 1.1, rotate: -360 }}
                    whileTap={{
                      scale: 0.9,
                      rotate: -90,
                    }}
                  >
                    <Img
                      fluid={
                        this.props.data.fpvtips.edges[0].node.childImageSharp
                          .fluid
                      }
                      alt="FPVTIPS logo"
                    />
                  </motion.div>
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
          <AuthorMessage image={this.props.data.georgi} />

          {loadVideo && (
            <div className="video-container">
              <motion.div
                initial="hidden"
                animate="visible"
                transition={{ duration: 1.75 }}
                variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
              >
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
              </motion.div>
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

    georgi: file(relativePath: { regex: "/^home/georgi-face/" }) {
      name
      childImageSharp {
        fluid(maxWidth: 100, quality: 75) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
