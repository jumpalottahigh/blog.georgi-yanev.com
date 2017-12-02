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

export default FeedbackLink
