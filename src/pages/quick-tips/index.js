import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../../components/structure/layout'

const Section = styled.section`
  h2 {
    text-align: center;
  }

  .tip h3:before {
    content: '🙋🏾‍♂️';
  }

  .tip h3:nth-of-type(2n + 1):before {
    content: '🙋‍♀️';
  }

  .tip {
    padding: 2rem 0;
    margin-bottom: 2rem;
    border-bottom: 1px solid #dedede;

    .tip-content {
      display: grid;
      gap: 10px;
    }
  }

  form {
    display: flex;
    width: 100%;

    .honey-pot {
      display: none;
    }

    textarea {
      width: 70%;
    }

    button {
      background-color: #0175d8;
      color: #fff;
      min-width: 120px;
      width: 30%;
    }
  }
`

const QuickTipsPage = ({ data }) => {
  return (
    <Layout>
      <Section>
        <h2>FPV Quick Tips</h2>
        <p>
          Ask a question below and get your question featured on this page along
          side its answer.
        </p>
        {/* TODO: */}
        {/* Search */}
        {/* <input type="text"> */}
        {/* Submit a question */}
        {/* <button>Submit a question</button> */}

        <form
          action="/quick-tips/success/"
          name="quick-tip-question"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <p className="honey-pot">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <textarea name="question" placeholder="How to ..." maxLength="150" />
          <button type="submit">Send</button>
        </form>

        <div className="tip">
          <h3>How to keep your U.FL IPEX antenna in any position you want?</h3>
          <div className="tip-content">
            I'd like to share with you one quick and easy way of fixing a U.FL
            IPEX VTX antenna to stay in any way you want it to. For example, at
            a 90 degree angle and up and away from the props, which could be a
            good thing.
            <Img
              fluid={data.topic1.edges[0].node.childImageSharp.fluid}
              alt="image of the final result of my antena"
            />
            <div>
              To achieve this, grab a small piece of shrink tube, apply some hot
              glue all around where the antenna connects to the VTX. Then apply
              a bit of hot glue all along the antenna up until the thicker part.
              Finally, slide in the heat shrink, shrink it with a lighter or a
              heat gun and hold it in place until the hot glue cools off.
            </div>
            <div>
              I learned about this trick{' '}
              <a
                href="https://youtu.be/wfYZmh5Gsyo?t=169"
                target="_blank"
                rel="noopener noreferrer"
              >
                from this video
              </a>
              , and so credit goes, where credit is due!
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default QuickTipsPage

export const QuickTipsPageQuery = graphql`
  query QuickTipsPageQuery {
    topic1: allFile(
      filter: { relativePath: { regex: "/^quick-tips/topic-1/" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 920, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`
