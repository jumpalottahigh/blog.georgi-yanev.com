import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer
        style={{
          height: '3.5rem',
          textAlign: 'center',
        }}
      >
        <h5>
          Copyright &copy; 2013-2019 Georgi Yanev.
          <br />
          Dedicated to Sofi and Anton{' '}
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </h5>
      </footer>
    )
  }
}
