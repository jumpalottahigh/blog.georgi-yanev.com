import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import SideBar from '../Sidebar'
import MenuFAB from '../MenuFAB/MenuFAB'

import './index.css'
// PrismJS dependency
import 'prismjs/themes/prism-okaidia.css'

import ogImage from '../../images/main-page.jpg'

class Template extends Component {
  render() {
    const { location, children } = this.props

    return (
      <Fragment>
        <Helmet
          title="Georgi Yanev | Blog on Web OSS, FPV and Smart Home Automation"
          meta={[
            {
              name: 'description',
              content:
                "I'm Georgi and I build things on the web with JavaScript, React and Vue. I believe that however we build apps on the web, they always end up in the hands of humans and it's crucial that we address web performance and page load times.",
            },
            {
              name: 'keywords',
              content:
                'smart home automation, home assistant, open source software, OSS, FPV, racing quads, Wizard x220, code, DIY, projects, life-long learning, learning, teaching, education, web development',
            },
            {
              property: 'og:image',
              content: `https://blog.georgi-yanev.com${ogImage}`,
            },
            { property: 'og:type', content: 'website' },
            {
              property: 'og:url',
              content: 'https://blog.georgi-yanev.com',
            },
            {
              property: 'og:title',
              content:
                'Georgi Yanev - Blog on Web OSS, FPV and Smart Home Automation',
            },
            {
              property: 'og:description',
              content:
                "I'm Georgi and I build things on the web with JavaScript, React and Vue. I believe that however we build apps on the web, they always end up in the hands of humans and it's crucial that we address web performance and page load times.",
            },
          ]}
        />

        <Header />

        <div className="main-wrapper">
          <SideBar />
          {/* TODO: Rewrite like SideBar */}
          {/* <MenuFAB /> */}
          <div className="main">{children}</div>
        </div>

        <Footer />
      </Fragment>
    )
  }
}

export default Template
