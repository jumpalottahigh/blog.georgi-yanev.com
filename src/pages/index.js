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
          <Announcement
            shortContent={
              <div>
                <h4 style={{ textAlign: 'center', margin: 0 }}>
                  🎉 Thank you! 🎉
                </h4>
                <div className="short-content-inner-container">
                  <FpvtipsLogo
                    className="no-shadow"
                    href="https://www.youtube.com/channel/UCCh3SK2EktDdOQkEOTDmSCg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={fpvtipsLogo} alt="FPVTIPS logo" />
                  </FpvtipsLogo>
                  <h4>
                    It's been 6 months since the launch of the{' '}
                    <a
                      href="https://www.youtube.com/channel/UCCh3SK2EktDdOQkEOTDmSCg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Fpvtips YouTube channel
                    </a>
                    , and I wanted to take a moment to thank each and every one
                    of you for the support!
                    <br />
                    <br />I really appreciate all the engagement and feedback!
                    Click 'Read more' to learn what's coming in 2020 for the
                    channel. Happy holidays!
                  </h4>
                </div>
                <time dateTime="2019-12-14">Georgi, 14 December 2019</time>
              </div>
            }
          >
            <div>
              It's been very humbling to see many of you subscribe to the
              channel, to the monthly newsletter, or simply reading the guides
              and reviews on the blog!
              <p>
                I've also received a ton of questions, comments, constructive
                criticizm. I've replied to and interacted with many of you and
                used your feedback to improve the content.
              </p>
              <p>
                I've also learnt more about video editing and production, as
                well as have done a few hardware upgrades to improve the quality
                of the upcoming videos.
              </p>
              <p>
                Finally, I have a long backlog of plans and project ideas (and
                only so much time) and am very excited to try to release videos
                more frequently in 2020.
              </p>
              <p>
                Enjoy the holidays with your families and see you in 2020 on
                Fpvtips.
              </p>
              <p>
                <Link to="/learning/my-2019-in-review/#fpvtips">
                  Learn more about Fpvtips and what I'm aspiring to do with the
                  YouTube channel in 2020
                </Link>
              </p>
              <p>
                <Link to="/fpvtips-youtube-announcement/">
                  Read about the initial announcement of the Fpvtips channel
                </Link>
              </p>
              <div>
                Fpvtips on{' '}
                <a
                  href="https://twitter.com/fpvtips"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Twitter
                </a>
                ,{` `}
                <a
                  href="https://www.instagram.com/fpvtips/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Instagram
                </a>
                ,{` `}
                <a
                  href="https://www.facebook.com/fpvtips/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Facebook
                </a>
              </div>
            </div>
          </Announcement>
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
