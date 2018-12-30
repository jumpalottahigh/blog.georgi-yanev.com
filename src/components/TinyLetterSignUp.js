import React from 'react'
import styled from 'styled-components'

const TinyLetter = styled.div`
  display: flex;
  flex-flow: column wrap;
  text-align: center;
  padding: 2rem 1rem;
  margin: 3rem 0;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  p {
    text-align: left;
  }

  form {
    margin: 0;
    padding: 0.5rem 1rem;
  }

  label,
  input {
    display: inline-block;
    width: 100%;
    margin-bottom: 0.5rem;
  }

  input[type='text'] {
    border-radius: 4px;
    padding: 12px;
    border: 1px solid #e3e3e3;
  }

  input[type='submit'] {
    background-color: #d41248;
    border-radius: 4px;
    padding: 12px;
    color: #fff;
    font-weight: 700;
    border: 1px solid #d41248;
    cursor: pointer;
  }

  input[type='submit']:hover {
    background-color: rgba(212, 18, 72, 0.8);
  }

  .tinyletter-link {
    color: #043f71 !important;
    font-size: 0.75rem;
    box-shadow: none !important;
  }
  .tinyletter-link:hover {
    border-bottom: 1px solid #043f71;
  }

  @media (min-width: 991px) {
    padding: 2rem 6rem;
  }

  @media (min-width: 1280px) {
    display: grid;
    padding: 2rem 2rem;
    grid-template-areas:
      'heading heading heading'
      'paragraph1 form form'
      'paragraph2 form form'
      'tinyletter tinyletter tinyletter';

    h3 {
      grid-area: heading;
    }

    p.one {
      grid-area: paragraph1;
    }

    p.two {
      grid-area: paragraph2;
    }

    form {
      grid-area: form;
      min-width: 420px;
    }

    .tinyletter {
      grid-area: tinyletter;
    }
  }
`

class TinyLetterSignup extends React.Component {
  handleTinyLetterFormSubmit = () => {
    window.open(
      'https://tinyletter.com/jumpalottahigh',
      'popupwindow',
      'scrollbars=yes,width=800,height=600'
    )
    return true
  }

  render() {
    return (
      <TinyLetter>
        <h3>📰 Subscribe to the newsletter</h3>
        <p className="one">
          Get the latest content updates on{' '}
          <strong>interesting tech topics</strong>. Emails are{' '}
          <strong>rare and high quality</strong>.
        </p>
        <form
          action="https://tinyletter.com/jumpalottahigh"
          method="post"
          target="popupwindow"
          onSubmit={this.handleTinyLetterFormSubmit}
        >
          <div>
            <label htmlFor="tlemail">Enter your email address</label>
          </div>
          <div>
            <input type="text" name="email" id="tlemail" placeholder="Email" />
          </div>
          <input type="hidden" value="1" name="embed" />
          <input type="submit" value="Subscribe" />
        </form>
        <p className="two">
          I will <strong>never spam</strong> you, I promise, and you can
          unsubscribe at any time.
        </p>
        <div className="tinyletter">
          <a
            className="tinyletter-link"
            href="https://tinyletter.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            powered by TinyLetter
          </a>
        </div>
      </TinyLetter>
    )
  }
}

export default TinyLetterSignup
