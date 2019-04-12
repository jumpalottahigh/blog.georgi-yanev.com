import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Collapsible from 'react-collapsible'
import Layout from '../../components/structure/layout'

const Section = styled.section`
  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .form-success {
    position: fixed;
    right: 3rem;
    z-index: 9;
    background: #43a047;
    color: #fff;
    text-align: center;
    font-size: 1.2rem;
    padding: 12px 24px;
    animation-name: fade-out;
    animation-duration: 4s;
    border-radius: 2px;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  }

  .search {
    display: none;
    flex-direction: row-reverse;
    position: relative;
    top: -3rem;
    right: 0;

    span {
      font-size: 1.8rem;
      min-height: 32px;
      cursor: pointer;
    }

    input {
    }
  }

  h2 {
    text-align: center;
  }

  .tip h3 {
    cursor: pointer;
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

  .tip__trigger.is-open,
  .tip__contentOuter {
    background: oldlace;
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

  @media (min-width: 1040px) {
    .search {
      display: flex;
    }
  }
`

const QuickTipsPage = ({ data }) => {
  const [submitted, setSubmitted] = React.useState(false)

  React.useEffect(() => {
    let searchParams = new URLSearchParams(window.location.search)
    let form = searchParams.get('form')
    let timeout

    if (form === 'success') {
      setSubmitted(true)
      timeout = setTimeout(() => {
        setSubmitted(false)
      }, 4000)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <Layout>
      <Section>
        {/* TODO: add a close button for dismissal */}
        {submitted && (
          <div className="form-success">
            Thanks for submitting your question!
          </div>
        )}
        <h2>FPV Quick Tips</h2>

        {/* Search icon and input */}
        <Collapsible
          classParentString="search"
          trigger={
            <span role="img" aria-label="magnifying glass emoji">
              🔎
            </span>
          }
          transitionTime={125}
          easing="ease-out"
        >
          <input type="text" />
        </Collapsible>
        <p>
          Ask a question below and get your question featured on this page along
          side its answer.
        </p>

        {/* Submit a question form */}
        <form
          action="/quick-tips/?form=success"
          name="quick-tip-question"
          method="post"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          {/* Netlify: Spam protection honey pot */}
          <p className="honey-pot">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          {/* Netlify: Specify form name with this hidden input for Netlify Forms to work */}
          <input type="hidden" name="form-name" value="quick-tip-question" />
          <textarea name="question" placeholder="How to ..." maxLength="150" />
          <button type="submit">Send</button>
        </form>

        <Collapsible
          classParentString="tip"
          trigger={
            <h3>
              <span role="img" aria-label="triangle pointing down">
                🔽
              </span>
              How low can I fly my batteries?
            </h3>
          }
          triggerWhenOpen={
            <h3>
              <span role="img" aria-label="triangle pointing up">
                🔼
              </span>
              How low can I fly my batteries?
            </h3>
          }
          easing="ease-in-out"
          // Whenever there are more questions, make sure that only the first item is open by default
          open={true}
        >
          <div className="tip-content">
            I prefer flying mine only up until 3.7v per cell, sometimes I could
            go even as low as 3.6v but very rarely. Technically, you can fly
            them even further, all the way to 3.5v, but I don't recommend that
            and it would reduce their lifetime.
          </div>
        </Collapsible>
        <Collapsible
          classParentString="tip"
          trigger={
            <h3>
              <span role="img" aria-label="triangle pointing down">
                🔽
              </span>
              Battery storage voltage
            </h3>
          }
          triggerWhenOpen={
            <h3>
              <span role="img" aria-label="triangle pointing up">
                🔼
              </span>
              Battery storage voltage
            </h3>
          }
          easing="ease-in-out"
          // Whenever there are more questions, make sure that only the first item is open by default
          open={true}
        >
          <div className="tip-content">
            Normally between 3.8 - 3.9 v per cell.
          </div>
        </Collapsible>
        <Collapsible
          classParentString="tip"
          trigger={
            <h3>
              <span role="img" aria-label="triangle pointing down">
                🔽
              </span>
              How to keep your U.FL IPEX antenna in any position you want?
            </h3>
          }
          triggerWhenOpen={
            <h3>
              <span role="img" aria-label="triangle pointing up">
                🔼
              </span>
              How to keep your U.FL IPEX antenna in any position you want?
            </h3>
          }
          easing="ease-in-out"
        >
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
        </Collapsible>
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
