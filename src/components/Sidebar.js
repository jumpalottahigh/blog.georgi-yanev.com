import React from 'react'
import Link from 'gatsby-link'
import EternalArchives from '../components/EternalArchives'

const activeStyle = {
  color: '#0057e7',
  fontWeight: 600,
  fontSize: '0.95rem'
}

export default class SideBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      general: [],
      fpv: [],
      software: [],
      smarthome: []
    }
  }

  filter(pages) {
    let general = []
    let fpv = []
    let software = []
    let smarthome = []

    // Filter the data
    pages.map(page => {
      switch (page.node.frontmatter.tags) {
        case 'general':
          general.push(page)
          break
        case 'smart home':
          smarthome.push(page)
          break
        case 'software':
          software.push(page)
          break
        case 'fpv':
          fpv.push(page)
          break
      }
    })

    this.setState({
      general,
      fpv,
      software,
      smarthome
    })
  }

  componentWillMount() {
    // Filter pages into categories
    this.filter(this.props.pageList.allMarkdownRemark.edges)
  }

  render() {
    return (
      <div className="sidebar-wrapper">
        <div className="sidebar">
          <h5>Blog posts</h5>
          <ul className="sidenav">
            <li>
              📝 <em>General</em>
            </li>
            {this.state.general.map((page, index) => (
              <li key={page.node.id}>
                <Link to={page.node.frontmatter.path} activeStyle={activeStyle}>
                  {page.node.frontmatter.title}
                </Link>
              </li>
            ))}
            <li>
              🏠 <em>Smart home automation</em>
            </li>
            {this.state.smarthome.map((page, index) => (
              <li key={page.node.id}>
                <Link to={page.node.frontmatter.path} activeStyle={activeStyle}>
                  {page.node.frontmatter.title}
                </Link>
              </li>
            ))}
            <li>
              💻 <em>Software development</em>
            </li>
            {this.state.software.map((page, index) => (
              <li key={page.node.id}>
                <Link to={page.node.frontmatter.path} activeStyle={activeStyle}>
                  {page.node.frontmatter.title}
                </Link>
              </li>
            ))}
            <li>
              🚁 <em>FPV quads</em>
            </li>
            {this.state.fpv.map((page, index) => (
              <li key={page.node.id}>
                <Link to={page.node.frontmatter.path} activeStyle={activeStyle}>
                  {page.node.frontmatter.title}
                </Link>
              </li>
            ))}
            <li>Coming soon...</li>
            <li className="coming-soon">
              Getting started with micro fpv drones
            </li>
            <li className="coming-soon">how to install betaflight 3.2</li>
          </ul>
          <hr />
          <EternalArchives />
        </div>
      </div>
    )
  }
}
