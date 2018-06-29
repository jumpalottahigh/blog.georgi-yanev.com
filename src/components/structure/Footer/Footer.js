import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer
        style={{
          borderBottom: '1px solid #0275d8',
          backgroundColor: 'rgba(255,255,255,0.925)',
          height: '3.5rem',
          zIndex: '3',
          left: '0',
          right: '0',
        }}
      >
        {/* TODO: Work on the styles for the footer; currently broken */}
        <h5>
          Copyright &copy; 2013-2018 Georgi Yanev.
          <br />Dedicated to Sofi and little Anton{' '}
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </h5>
      </footer>
    )
  }
}
