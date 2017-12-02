import React from 'react'
import FeedbackLink from '../components/FeedbackLink.js'

class FeedbackSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rateMessage: 'How was it? Rate it:',
      showButtons: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      rateMessage: 'Thanks!',
      showButtons: false
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
              text="Good"
              value="good"
              onClick={this.handleClick}
            />
            <FeedbackLink
              className="m-r-1"
              text="Too long"
              value="long"
              onClick={this.handleClick}
            />
            <FeedbackLink
              className="m-r-1"
              text="Too short"
              value="short"
              onClick={this.handleClick}
            />
            <FeedbackLink
              className="m-r-1"
              text="Bad"
              value="bad"
              onClick={this.handleClick}
            />
          </div>
        ) : (
          <div />
        )}
      </div>
    )
  }
}

export default FeedbackSection
