import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import { motion } from 'framer-motion'

import Layout from '../components/structure/layout'
import PostsList from '../components/PostsList'
import TinyLetterSignup from '../components/TinyLetterSignUp'
import Announcement from '../components/Announcement'
import YouTubeChannelsPromo from '../components/YouTubeChannelsPromo'
import AuthorMessage from '../components/AuthorMessage'

import fpvtipsLogo from '../images/fpvtips-logo-full.svg'

const FpvtipsLogo = styled.a`
  display: block;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
`

class BlogIndex extends React.Component {
  state = {
    loadVideo: true,
  }

  handleVideoClick = (e) => {
    e.target.pause()
    e.target.currentTime = 0
    e.target.load()
    e.target.play()
  }

  componentDidMount() {
    // If user is on a dodgy connection, don't load the video at all
    if ('connection' in navigator) {
      if (navigator.connection.downlink < 1.75) {
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
          <h3 style={{ marginTop: 0 }}>Categories:</h3>
          <div className="category-container">
            <Link to="/posts/">
              <button className="category all">All posts</button>
            </Link>
            <Link to="/posts/?category=fpv">
              <button className="category fpv">FPV Drones</button>
            </Link>
            <Link to="/posts/?category=projects">
              <button className="category projects">Projects</button>
            </Link>
            <Link to="/posts/?category=learning">
              <button className="category learning">Learnings</button>
            </Link>
            <Link to="/posts/?category=smarthome">
              <button className="category smarthome">Smarthome</button>
            </Link>
            <Link to="/posts/?category=stories">
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
            withAds="yes"
          />
          <Link style={{ marginRight: '0.5rem' }} to="/posts/">
            <button className="category fpv">More blog posts</button>
          </Link>
          <AuthorMessage type="fpv" style={{ marginTop: '2rem' }} />
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
                  <source src="/new-blog-intro.webm" type="video/webm" />
                  <source src="/new-blog-intro.mp4" type="video/mp4" />
                  Tap to play video
                </video>
              </motion.div>
            </div>
          )}
          <h3>
            If you are still hungry for more FPV related things, definitely
            checkout my YouTube channels:
          </h3>
          <YouTubeChannelsPromo />
          <h3 style={{ marginTop: '28px' }}>
            And subscribe to the monthly newsletter to get a monthly update on
            the latest posts and videos.
          </h3>
          <TinyLetterSignup />
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
      limit: 20
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
                fluid(maxWidth: 991) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
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
