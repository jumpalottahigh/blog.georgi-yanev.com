import React from 'react'
import FeedbackLink from './FeedbackLink.js'

class FeedbackSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rateMessage: 'How was it? Rate it:',
      showButtons: true,
      showCustom: false
    }
  }

  handleClick = () => {
    this.setState({
      rateMessage: 'Thanks!',
      showButtons: false,
      showCustom: true
    })
  }

  handleCustomFeedbackSubmit = e => {
    e.preventDefault()
    let feedback = e.target.elements.customFeedback.value

    if (feedback === '') {
      return
    }

    window.dataLayer.push({
      event: 'customFeedback',
      customFeedbackValue: feedback
    })
    this.setState({
      showCustom: false
    })
  }

  render() {
    return (
      <div className="feedback">
        <div>
          <h4>{this.state.rateMessage}</h4>
          <p>Your feedback is greatly appreciated!</p>
          <p>
            <a
              target="_blank"
              rel="noopener"
              href="https://paypal.me/jumpalottahigh/20"
            >
              Support the blog
            </a>
          </p>
        </div>
        {this.state.showButtons ? (
          <div>
            <FeedbackLink
              className="m-r-1"
              text="Good 👌"
              value="good"
              onClick={this.handleClick}
            />
            <FeedbackLink
              className="m-r-1"
              text="Bad 👎"
              value="bad"
              onClick={this.handleClick}
            />
          </div>
        ) : null}
        {this.state.showCustom && (
          <form
            style={{ margin: 0 }}
            onSubmit={this.handleCustomFeedbackSubmit}
          >
            <textarea
              className="feedback-input"
              name="customFeedback"
              placeholder="Anything else you'd like to add?"
              maxLength="150"
            />
            <br />
            <button className="feedback-submit" type="submit">
              Send
            </button>
          </form>
        )}
      </div>
    )
  }
}

export default FeedbackSection
