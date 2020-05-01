import React from 'react'
import PropTypes from 'prop-types'

const HTML = props => (
  <html {...props.htmlAttributes} lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="preconnect" href="//www.google-analytics.com" />
      <link rel="preconnect" href="//i.ytimg.com" />
      <link rel="preconnect" href="//googleads.g.doubleclick.net" />
      <link rel="preconnect" href="//font.gstatic.com" />
      <link rel="preconnect" href="//static.doubleclick.net" />
      <link rel="preconnect" href="//yt3.ggpht.com" />
      {props.headComponents}
    </head>
    <body {...props.bodyAttributes}>
      {props.preBodyComponents}
      <div
        key={`body`}
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: props.body }}
      />
      {props.postBodyComponents}
    </body>
  </html>
)

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}

export default HTML
