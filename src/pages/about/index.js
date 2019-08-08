import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../../components/structure/layout'
import AuthorMessage from '../../components/AuthorMessage'

const Section = styled.section``

const AboutPage = ({ data }) => (
  <Layout>
    <Section>
      <AuthorMessage image={data.georgi} />
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
        I <strong>write code</strong>, solve problems and sometimes stream on
        twitch. I <strong>love flying FPV drones</strong>, 3D printing,
        contributing to open source, and working on fpvtips.com.
      </p>
      <p>
        Most of my projects are open source and{' '}
        <a href="https://github.com/jumpalottahigh?tab=repositories">
          available on GitHub
        </a>
        . You can also{' '}
        <a href="https://twitter.com/jumpalottahigh">follow me</a> on twitter.
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
    </Section>
  </Layout>
)

export default AboutPage

export const aboutPageQuery = graphql`
  {
    georgi: file(relativePath: { regex: "/^home/georgi-face/" }) {
      name
      childImageSharp {
        fluid(maxWidth: 100, quality: 75) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
