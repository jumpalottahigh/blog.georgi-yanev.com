import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'

import Header from './Header/Header'
import SideBar from '../Sidebar'
import MenuFAB from '../MenuFAB/MenuFAB'

import './index.css'
// PrismJS dependency
import 'prismjs/themes/prism-okaidia.css'

import ogImage from '../../images/main-og.jpg'

class Template extends Component {
  render() {
    const { location, children } = this.props

    return (
      <Fragment>
        <Helmet
          title="Georgi Yanev | Blog about web development, fpv racing drones, learning and life stories"
          meta={[
            {
              name: 'description',
              content:
                "Hi, I'm Georgi and I build things on the web with JavaScript and React. In this blog you will find posts about 🚁 FPV racing drones (building, repairing and flying), 💻 web development, 🏠 smart home automation, 👨‍🎓️ life-long learning, goals and stories as well as who knows what else in the future. I write code, solve problems and sometimes stream on twitch. I love flying FPV drones, 3D printing, contributing to open source, and working on fpvtips.com.",
            },
            {
              name: 'keywords',
              content:
                'javascript, JavaScript, React, Gatsby, open source, fpv racing drone, build guide, tools, drone backpack, gear, drone gear, videos, hd drone footage, 3D printing, solving problems, projects, coding, learning to code, year in review, improving, getting better, become a programmer, fly fpv, fly drones, growth, smart home automation, home assistant, open source software, OSS, FPV, racing quads, Wizard x220, code, DIY, projects, life-long learning, learning, teaching, education, web development',
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
                'Georgi Yanev | Blog about web development, fpv racing drones, learning and life stories',
            },
            {
              property: 'og:description',
              content:
                "Hi, I'm Georgi and I build things on the web with JavaScript and React. In this blog you will find posts about 🚁 FPV racing drones (building, repairing and flying), 💻 web development, 🏠 smart home automation, 👨‍🎓️ life-long learning, goals and stories as well as who knows what else in the future. I write code, solve problems and sometimes stream on twitch. I love flying FPV drones, 3D printing, contributing to open source, and working on fpvtips.com.",
            },
          ]}
        />

        <Header />

        <div className="main-wrapper">
          <SideBar />
          <MenuFAB />
          <div className="main">{children}</div>
        </div>
      </Fragment>
    )
  }
}

export default Template
