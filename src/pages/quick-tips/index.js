import React from 'react'
import { graphql } from 'gatsby'
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
  const [deepLinkQuestion, setDeepLinkQuestion] = React.useState('')
  const myElement = React.useRef(null)

  function handleFormSubmit(e) {
    // If the form is empty don't submit it
    if (e.target[2].value === '') return
  }

  React.useEffect(() => {
    let searchParams = new URLSearchParams(window.location.search)
    let form = searchParams.get('form')
    let timeout
    let question = searchParams.get('question')

    if (form === 'success') {
      setSubmitted(true)
      timeout = setTimeout(() => {
        setSubmitted(false)
      }, 4000)
    }

    // If there is a deeplinking question param
    if (question) {
      // Update the deeplinked ref with the value of the param if there is a match
      setDeepLinkQuestion(question)
      if (myElement && myElement.current) {
        myElement.current.scrollIntoView()
      }
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [deepLinkQuestion])

  // Grab GraphQL data
  const { edges: quickTips } = data.quickTips

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
          onSubmit={handleFormSubmit}
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
          <textarea
            id="question"
            name="question"
            placeholder="How to ..."
            maxLength="150"
            minLength="10"
            required
          />
          <button type="submit">Send</button>
        </form>

        {quickTips.map(({ node: tip }, index) => (
          <Collapsible
            key={tip.id}
            classParentString="tip"
            trigger={
              <h3>
                <span role="img" aria-label="triangle pointing down">
                  🔽
                </span>
                {tip.frontmatter.title}
              </h3>
            }
            triggerWhenOpen={
              <h3>
                <span role="img" aria-label="triangle pointing up">
                  🔼
                </span>
                {tip.frontmatter.title}
              </h3>
            }
            easing="ease-in-out"
            transitionTime={185}
            open={index === 0 ? true : false}
          >
            <div
              className="tip-content"
              dangerouslySetInnerHTML={{ __html: tip.html }}
            />
          </Collapsible>
        ))}
      </Section>
    </Layout>
  )
}

export default QuickTipsPage

export const QuickTipsPageQuery = graphql`
  query QuickTipsPageQuery {
    quickTips: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/quick-tips/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "MMM DD, YYYY")
          }
          html
        }
      }
    }
  }
`
