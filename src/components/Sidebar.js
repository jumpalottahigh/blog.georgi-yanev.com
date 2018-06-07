import React from 'react'
import { Link } from 'gatsby'
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
      learning: [],
      fpv: [],
      smarthome: []
    }
  }

  filter(pages) {
    let learning = []
    let fpv = []
    let smarthome = []

    // Filter the data
    pages.map(page => {
      switch (page.node.frontmatter.tags) {
        case 'learning':
          learning.push(page)
          break
        case 'smart-home':
          smarthome.push(page)
          break
        case 'fpv':
          fpv.push(page)
          break
        default:
          break
      }
    })

    this.setState({
      learning,
      fpv,
      smarthome
    })
  }

  UNSAFE_componentWillMount() {
    // Filter pages into categories
    this.filter(this.props.pageList.allMarkdownRemark.edges)
  }

  render() {
    return (
      <div className="sidebar-wrapper">
        <div className="sidebar">
          <ul className="sidenav">
            <li>
              <span role="img" aria-label="helicopter">
                🚁
              </span>{' '}
              <em>FPV quads</em>
            </li>
            {this.state.fpv.map((page, index) => (
              <li key={page.node.id}>
                <Link to={page.node.frontmatter.path} activeStyle={activeStyle}>
                  {page.node.frontmatter.title}
                </Link>
              </li>
            ))}
            <li>
              <span role="img" aria-label="student">
                👨‍🎓️
              </span>{' '}
              <em>Life-long learning</em>
            </li>
            {this.state.learning.map((page, index) => (
              <li key={page.node.id}>
                <Link to={page.node.frontmatter.path} activeStyle={activeStyle}>
                  {page.node.frontmatter.title}
                </Link>
              </li>
            ))}
            <li>
              <span role="img" aria-label="house">
                🏠
              </span>{' '}
              <em>Smart home automation</em>
            </li>
            {this.state.smarthome.map((page, index) => (
              <li key={page.node.id}>
                <Link to={page.node.frontmatter.path} activeStyle={activeStyle}>
                  {page.node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
          <hr />
          <EternalArchives />
        </div>
      </div>
    )
  }
}
