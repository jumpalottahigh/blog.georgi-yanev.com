import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../../components/structure/layout'
import AuthorMessage from '../../components/AuthorMessage'

const Section = styled.section``

const AboutPage = () => (
  <Layout>
    <Section>
      <AuthorMessage type="webdev" />
      <p>
        I'm a {` `}
        <Link to="/learning/how-i-got-into-software-development/">
          software engineer
        </Link>{' '}
        and currently work mostly with React, TypeScript, Electron, Node.js. You
        can find me on{' '}
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
        I <strong>love flying FPV drones</strong> and quite honestly all things
        FPV racing drones! That's why I'm spending a lot of my free time working
        on this blog, building quads, flying them and carrying out various
        tests.
      </p>
      <p>
        I publish FPV related content on YouTube on my{' '}
        <a href="https://www.youtube.com/channel/UCCh3SK2EktDdOQkEOTDmSCg">
          Fpvtips channel
        </a>{' '}
        and dump raw unedited flight footage on my{' '}
        <a href="https://www.youtube.com/channel/UC2gwYMcfb0Oz_fl9W1uTV2Q">
          Georgi FPV channel
        </a>
        .
      </p>
      <p>
        I <strong>love coding</strong> and sometimes stream on Twitch. I gave
        some tech talks about the{' '}
        <Link to="/learning/jamstack-with-gatsby-and-netlify/">
          JAMstack with Gatsby and Netlify
        </Link>
        . You can also{' '}
        <a href="https://twitter.com/jumpalottahigh">follow me</a> on twitter.
        Most of my projects are open source and{' '}
        <a href="https://github.com/jumpalottahigh?tab=repositories">
          available on GitHub
        </a>
        .
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
      <div
        css={`
          display: flex;
          flex-flow: column wrap;

          a {
            width: fit-content;
          }
        `}
      >
        <p>More links:</p>
        <a href="https://www.georgi-yanev.com/about/">
          Portfolio, Skills and Projects
        </a>
        <a href="https://www.georgi-yanev.com/bio/">Bio</a>
        <a href="https://www.gyanev.com/cv/">CV</a>
        <Link to="/learning/goal-review-of-2018-and-goals-for-2019/">
          My last year in review post
        </Link>
      </div>
    </Section>
  </Layout>
)

export default AboutPage
