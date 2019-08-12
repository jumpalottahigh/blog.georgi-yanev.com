import React from 'react'
import Img from 'gatsby-image'

import svgReact from '../../static/react.svg'
import svgJS from '../../static/javascript.svg'

// TODO: make work
const AuthorMessage = ({ title, content, image }) => (
  <div
    css={``}
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '1rem',
    }}
  >
    <div style={{ width: '20%' }}>
      <div style={{ maxWidth: '100px' }}>
        <Img fluid={image.childImageSharp.fluid} alt="Georgi Yanev portrait" />
      </div>
    </div>
    <h1 style={{ fontSize: '1.4rem', width: '80%', margin: 0 }}>
      Hi, I'm Georgi and I build things on the web with{` `}
      <img className="framework-logo" src={svgJS} alt="JavaScript logo" />
      {` `}
      JavaScript and{` `}
      <img className="framework-logo" src={svgReact} alt="React.js logo" />
      {` `}
      React
    </h1>
  </div>
)

export default AuthorMessage
