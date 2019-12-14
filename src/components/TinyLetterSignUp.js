import React from 'react'
import styled from 'styled-components'

import fpvtipsLogo from '../images/fpvtips-logo-full.svg'

const TinyLetter = styled.div`
  display: flex;
  flex-flow: column wrap;
  text-align: center;
  padding: 2rem 1rem;
  margin: 3rem 0;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

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
    background-color: #0275d8;
    border-radius: 4px;
    padding: 12px;
    color: #fff;
    font-weight: 700;
    border: 1px solid #0275d8;
    cursor: pointer;
  }

  input[type='submit']:hover {
    background-color: #1885e2;
    border-color: #1885e2;
  }

  .tinyletter-link {
    color: #043f71 !important;
    font-size: 0.75rem;
    box-shadow: none !important;
  }
  .tinyletter-link:hover {
    border-bottom: 1px solid #043f71;
  }

  .two {
    font-size: 0.9rem;
  }

  .image-wrapper {
    width: 100%;
    margin: 0 auto;
    max-width: 260px;
    display: block;
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

    .tinyletter__heading {
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

const TinyLetterSignup = () => {
  const handleTinyLetterFormSubmit = () => {
    window.open(
      'https://tinyletter.com/fpvtips',
      'popupwindow',
      'scrollbars=yes,width=800,height=600'
    )
    return true
  }

  return (
    <TinyLetter>
      <div className="tinyletter__heading">
        <a
          href="https://www.youtube.com/channel/UCCh3SK2EktDdOQkEOTDmSCg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={fpvtipsLogo} alt="Fpvtips" className="image-wrapper" />
        </a>
        <h3>📰 Monthly Newsletter</h3>
      </div>
      <p className="one">
        Get the latest scoop of what's new in the FPV drone racing and freestyle
        world. What to watch, who to follow and more.
      </p>
      <form
        action="https://tinyletter.com/fpvtips"
        method="post"
        target="popupwindow"
        onSubmit={handleTinyLetterFormSubmit}
      >
        <div>
          <input
            type="text"
            name="email"
            id="tlemail"
            placeholder="Email"
            aria-label="email"
          />
        </div>
        <input type="hidden" value="1" name="embed" />
        <input type="submit" value="Subscribe" />
      </form>
      <p className="two">
        <em>I hate spam, and so I don't spam. Unsubscribe at any time.</em>
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

export default TinyLetterSignup
