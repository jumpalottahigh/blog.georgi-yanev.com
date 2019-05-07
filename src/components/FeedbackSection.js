import React from 'react'

const FeedbackLink = props => (
  <button
    className={props.className}
    data-feedback={props.value}
    onClick={props.onClick}
  >
    {props.text}
  </button>
)
class FeedbackSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rateMessage: 'How was it? Rate it:',
      showButtons: true,
      showCustom: false,
    }
  }

  handleClick = e => {
    // Send feedback to Google Analytics
    window.ga(`send`, `event`, {
      eventCategory: `Feedback`,
      eventAction: `Click`,
      eventLabel: `${window.location.pathname} - ${e.target.dataset.feedback}`,
      eventValue: 0,
    })

    this.setState({
      rateMessage: 'Thanks!',
      showButtons: false,
      showCustom: true,
    })
  }

  handleCustomFeedbackSubmit = e => {
    e.preventDefault()
    let feedback = e.target.elements.customFeedback.value

    if (feedback === '') {
      return
    }

    // Send custom feedback to Google Analytics
    window.ga(`send`, `event`, {
      eventCategory: `Feedback`,
      eventAction: `Submit`,
      eventLabel: `${window.location.pathname} - ${feedback}`,
      eventValue: 0,
    })

    this.setState({
      showCustom: false,
    })
  }

  render() {
    return (
      <div className="feedback">
        <div>
          <h4>{this.state.rateMessage}</h4>
          <p>Your feedback is greatly appreciated!</p>
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
