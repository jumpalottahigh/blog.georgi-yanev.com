import React from 'react'
import styled from 'styled-components'

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-top: 1px solid #cecece;

  h4,
  p {
    margin: 0;
    text-align: center;
  }

  p {
    margin: 0.5rem 0 0.8rem;
    font-size: 0.8rem;
    line-height: 0.8rem;
    max-width: 37ch;
  }

  button.ask-a-question {
    min-width: 10rem;
    color: #0275d8;
    border: 2px solid #0275d8;
    margin-right: 1rem;
  }

  button.ask-a-question:hover {
    color: #fff;
    background-color: #0275d8;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 1rem;

    h4 {
      margin-bottom: 0.3rem;
    }

    .honey-pot {
      display: none;
    }

    label[for='name'] {
      font-size: 0.8rem;
      margin-top: 1rem;
    }

    textarea {
      width: 100%;
      max-width: 450px;
    }

    input[id='name'] {
      width: 100%;
      max-width: 200px;
    }

    .submit-container {
      margin-top: 1rem;
      text-align: center;
    }

    button {
      background-color: #0175d8;
      color: #fff;
      min-width: 200px;
      padding: 0.4rem 0;
    }

    button:hover {
      background-color: #1885e2;
    }
  }

  @media (min-width: 769px) {
    flex-direction: row;

    h4,
    p {
      text-align: left;
    }

    p {
      max-width: 50ch;
    }

    form {
      textarea {
        width: 70%;
      }
    }
  }
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const AskAQuestion = () => {
  const [loadForm, setLoadForm] = React.useState(false)
  const [loadThanks, setLoadThanks] = React.useState(false)
  const [currentPage, setCurrentPage] = React.useState('')
  const [name, setName] = React.useState('')
  const [question, setQuestion] = React.useState('')

  function handleFormSubmit(e) {
    e.preventDefault()

    let payload = {
      question,
      currentPage,
      name,
    }

    console.log(payload)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'article-suggestion', ...payload }),
    })
      .then(() => console.log('Success!'))
      .catch(error => console.error(error))

    setLoadThanks(true)
  }

  React.useEffect(() => {
    setCurrentPage(window.location.pathname)
  }, [])

  return (
    <FormContainer>
      <React.Fragment>
        <div style={{ display: !loadForm ? 'block' : 'none' }}>
          <h4>Did I miss something?</h4>
          <p>
            Ask a question and see it updated in the article, alongside with
            credit for you.
          </p>
        </div>
        <div style={{ display: !loadForm ? 'block' : 'none' }}>
          <button className="ask-a-question" onClick={() => setLoadForm(true)}>
            Ask a question ❔
          </button>
        </div>
      </React.Fragment>

      {/* Normally we would handle rendering this differently,
      but in order for Netlify bots to pick up the form,
      we need it to be in the DOM at deploy time. */}
      <form
        onSubmit={handleFormSubmit}
        name="article-suggestion"
        data-netlify="true"
        netlify-honeypot="bot-field"
        style={{ display: loadForm && !loadThanks ? 'flex' : 'none' }}
      >
        <p className="honey-pot">
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <h4>Question/suggestion:</h4>
        <input type="hidden" name="form-name" value="article-suggestion" />
        <textarea
          id="question"
          name="question"
          placeholder="Can you, please..."
          maxLength="350"
          minLength="10"
          aria-label="question"
          required
          value={question}
          onChange={e => setQuestion(e.target.value)}
        />
        <label htmlFor="name">Name (empty for annonymous):</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <div className="submit-container">
          <button type="submit">Send</button>
        </div>
      </form>

      <h4 style={{ display: loadThanks ? 'block' : 'none' }}>
        Thanks for your suggestion!
      </h4>
    </FormContainer>
  )
}

export default AskAQuestion
