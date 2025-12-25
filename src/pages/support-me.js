import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import Layout from '../components/structure/layout'

import fpvtipsLogo from '../images/fpvtips-logo-full.svg'

const Section = styled.section`
  text-align: center;
`

const Task = styled.div`
  padding-top: 1rem;
  text-align: left;
  border-bottom: 1px solid #dedede;

  h2 {
    font-size: 1.2rem;
    line-height: 1.4rem;
    margin-bottom: 0.8rem;
  }

  p {
    margin-top: 0.4rem;
    line-height: 1.2rem;
    font-size: 0.9rem;
  }
`

const SupportMePage = () => {
  const image = useStaticQuery(graphql`
    {
      georgi: file(relativePath: { regex: "/^home/georgi-face-3.jpg/" }) {
        name
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 110, quality: 80, placeholder: BLURRED)
        }
      }
    }
  `)

  return (
    <Layout>
      <Section>
        <h1>Support me</h1>
        <h5>
          If you like what I do and would like to help me do more of it...
        </h5>
        <img src={fpvtipsLogo} alt="FPVtips" style={{ height: '80px' }} />
        <Task>
          <h2>
            1.{' '}
            <a
              href="https://www.youtube.com/@FPVtips"
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe to FPVtips
            </a>{' '}
            on YouTube
          </h2>
          <p>
            Costs you nothing, helps much more than you may realise and is very
            appreciated! Bonus points for <strong>liking</strong> videos,
            watching from start to finish and leaving{' '}
            <strong>feedback in the comments</strong>!
          </p>
        </Task>
        <Task>
          <h2>
            2.{' '}
            <a
              href="https://www.banggood.com/?p=NY211410857261201705"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click my affiliate link
            </a>{' '}
            before purchasing anything from Banggood
          </h2>
          <p>
            It doesn't cost you anything, and I will get a small commision. It
            all adds up, and I re-invest almost everything back into more FPV
            gear and drones for reviews, builds and mods which I then publish on
            the blog and on the YouTube channel.
          </p>
        </Task>
        <Task>
          <h2>3. One time or a recurring donation</h2>
          <p>
            If you'd like to toss a few bucks my way, you can do so via{' '}
            <a
              className="paypal"
              style={{ fontSize: '1rem' }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://paypal.me/jumpalottahigh/10"
            >
              PayPal
            </a>{' '}
            or{' '}
            <a
              className="patreon"
              style={{ fontSize: '1rem' }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.patreon.com/bePatron?u=3061524"
            >
              Patreon
            </a>
            . I'd like to also take a moment to <strong>THANK</strong> everyone
            who has decided to do this so far! It means a lot to me that you
            consider the content I put out worth your money! Thank you!
          </p>
        </Task>
        <Task>
          <h2>
            4. <Link to="/newsletter/">Signup</Link> for the monthly newsletter
          </h2>
          <p>
            No spam. I send out up to 1 email per month and can skip less
            eventful months.
          </p>
        </Task>
        <Task>
          <h2>
            5.{' '}
            <a
              href="https://www.youtube.com/@GeorgiFPV"
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe to Georgi FPV
            </a>{' '}
            on YouTube
          </h2>
          <p>
            I don't put nearly as much effort into my second channel, it's
            mostly for dumping raw flight footage of various drones. But there
            are some pretty nice freestyle videos in there.
          </p>
        </Task>
        <Task>
          <h2>6. Follow me on social media on YouTube</h2>
          <p>
            I upload video snippets, behind the scenes, random flight footage,
            gear pictures every so often on:{' '}
            <a
              href="https://www.instagram.com/fpvtips"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            ,{' '}
            <a
              href="https://twitter.com/fpvtips"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            ,{' '}
            <a
              href="https://facebook.com/fpvtips"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </p>
        </Task>
        <Task>
          <h2>7. Keep enjoying FPV! Happy flying!</h2>
        </Task>
      </Section>
      <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Thank you!</h2>
      <div style={{ display: 'flex' }}>
        <GatsbyImage
          image={image.georgi.childImageSharp.gatsbyImageData}
          alt="Georgi Yanev"
          style={{ borderRadius: '50%', margin: '0 auto 3rem auto' }}
        />
      </div>
    </Layout>
  )
}

export default SupportMePage
