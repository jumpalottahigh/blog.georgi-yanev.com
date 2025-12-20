import React from 'react'
import { graphql, navigate } from 'gatsby'
import styled from 'styled-components'
import Collapsible from 'react-collapsible'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Layout from '../../components/structure/layout'
import TinyLetterSignUp from '../../components/TinyLetterSignUp'

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
    background: #fcfcfc;
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
  const [hash, setHash] = React.useState('')

  function handleFormSubmit(e) {
    // If the form is empty don't submit it
    if (e.target[2].value === '') return
  }

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

    // Check if we have a hash
    if (window.location.hash) {
      const openCollapsible = data.quickTips.edges.filter(t =>
        t.node.frontmatter.path.includes(window.location.hash.replace('#', ''))
      )

      // If there is a matching hash update state
      if (openCollapsible.length > 0) {
        setHash(window.location.hash)
      }
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  // Grab GraphQL data
  const { edges: quickTips } = data.quickTips

  return (
    <Layout>
      <Section>
        {submitted && (
          <div className="form-success">
            Thanks for submitting your question!
          </div>
        )}
        <h2>FPV Quick Tips</h2>

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
            aria-label="question"
            required
          />
          <button type="submit">Send</button>
        </form>

        {quickTips.map(({ node: tip }, index) => (
          <Collapsible
            key={tip.id}
            classParentString="tip"
            trigger={
              <h3 id={`${tip.frontmatter.path.split('/')[2]}`}>
                <span role="img" aria-label="triangle pointing down">
                  🔽
                </span>{' '}
                {tip.frontmatter.title}
                &nbsp;
                <a
                  href={tip.frontmatter.path}
                  css={`
                    box-shadow: none !important;
                    vertical-align: text-bottom;

                    &:hover {
                      color: #0175d8 !important;
                      opacity: 0.85;
                    }
                  `}
                  onClick={e => {
                    e.preventDefault()
                    navigate(tip.frontmatter.path)
                  }}
                >
                  <FaExternalLinkAlt />
                </a>
              </h3>
            }
            triggerWhenOpen={
              <h3 id={`${tip.frontmatter.path.split('/')[2]}`}>
                <span role="img" aria-label="triangle pointing up">
                  🔼
                </span>{' '}
                {tip.frontmatter.title}
              </h3>
            }
            easing="ease-in-out"
            transitionTime={185}
            open={
              hash && hash === `#${tip.frontmatter.path.split('/')[2]}`
                ? true
                : index === 0 && !hash
                ? true
                : false
            }
          >
            <div
              className="tip-content"
              dangerouslySetInnerHTML={{ __html: tip.html }}
            />
          </Collapsible>
        ))}
      </Section>
      <TinyLetterSignUp />
    </Layout>
  )
}

export default QuickTipsPage

export const QuickTipsPageQuery = graphql`
  query QuickTipsPageQuery {
    quickTips: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/quick-tips/" } }
      sort: { frontmatter: { date: DESC } }
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
