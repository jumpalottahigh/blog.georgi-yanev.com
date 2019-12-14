import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Layout from '../components/structure/layout'
import TinyLetterSignup from '../components/TinyLetterSignUp'
import Announcement from '../components/Announcement'

import fpvtipsLogo from '../images/fpvtips-logo.svg'

const Section = styled.section`
  h3.category {
    display: flex;
    align-items: center;
    padding: 24px 16px;
  }

  @media (min-width: 768px) {
    h3 {
      max-width: 320px;
      margin: 1rem auto;
    }
  }
`

const FpvtipsYoutubeAnnouncementPage = () => (
  <Layout>
    <Section>
      <Announcement
        noCollapsible={true}
        shortContent={
          <>
            <h4 style={{ textAlign: 'center', margin: 0 }}>
              🔥 Announcement 🔥
            </h4>
            <div className="short-content-inner-container">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.15 }}
                whileTap={{ scale: 0.9, rotate: -90 }}
              >
                <img
                  src={fpvtipsLogo}
                  alt="FPVTIPS logo"
                  style={{ width: '130px' }}
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
                , to do much of the same I do here - try to help people new to
                FPV racing drones. Come check it out 👀 and subscribe 📫.
              </h4>
            </div>
            <div>
              <p>
                I've been really humbled to help so many people over the years
                and to answer the questions I myself had. I'll continue doing
                that, and believing in the wonderful hobby of FPV racing drones,
                and will also from now on do that on YouTube in addition to this
                blog.
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
                you gotta start somewhere, right? And I'm definitely excited
                about learning and sharing knowledge! Happy flying!
              </p>
              <time dateTime="2019-06-23">Georgi, 23 June 2019</time>
            </div>
          </>
        }
      />
      <TinyLetterSignup />
      <h4 style={{ textAlign: 'center' }}>
        👇 Check out the blog posts, quick tips or FPV news 👇
      </h4>
      <Link to="/posts/">
        <h3 className="category fpv">Blog Posts</h3>
      </Link>
      <Link to="/quick-tips/">
        <h3 className="category learning">Quick Tips</h3>
      </Link>
      <Link to="/fpv-news/">
        <h3 className="category projects">FPV News</h3>
      </Link>
    </Section>
  </Layout>
)

export default FpvtipsYoutubeAnnouncementPage
