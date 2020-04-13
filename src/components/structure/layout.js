import React from 'react'
import Helmet from 'react-helmet'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import SideBar from '../Sidebar'
import MenuFAB from '../MenuFAB'
import RightBar from '../RightBar'

import './index.css'
import './darkmode.css'
// PrismJS dependency
import 'prismjs/themes/prism-okaidia.css'

import ogImage from '../../../static/default-ogimage.png'

const title = `Georgi Yanev | FPV racing drones, gear, reviews, builds and setup guides. Includes occasional learning, software engineering and life stories.`
const description = `This blog and Fpvtips are all about helping you get in the air flying and enjoying the amazing hobby of flying FPV racing drones. I'm Georgi and I build things on the web with JavaScript and React. In this blog you will find posts about 🚁 FPV racing drones (reviews, builds, guides, repairs and flying), 💻 web development, 🏠 smart home automation, 👨‍🎓️ life-long learning, goals and stories as well as who knows what else in the future. I write code, solve problems and sometimes stream on twitch. I love flying FPV drones, 3D printing, contributing to open source, and working on fpvtips.com.`

const Layout = ({ children }) => (
  <>
    <Helmet
      title={title}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          name: 'keywords',
          content:
            'javascript, JavaScript, React, Gatsby, open source, fpv racing drone, build guide, tools, drone backpack, gear, drone gear, videos, hd drone footage, 3D printing, solving problems, projects, coding, learning to code, year in review, improving, getting better, become a programmer, fly fpv, fly drones, growth, smart home automation, home assistant, open source software, OSS, FPV, racing quads, Wizard x220, code, DIY, projects, life-long learning, learning, teaching, education, web development, reviews, builds, guides, binding guides',
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
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
      ]}
    />

    <Header />

    <div className="main-wrapper">
      <SideBar />
      <MenuFAB />
      <div className="main">{children}</div>
      <RightBar />
    </div>
    <Footer />
  </>
)

export default Layout
