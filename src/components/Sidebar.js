import React from 'react'
import { Link } from 'gatsby'
import EternalArchives from '../components/EternalArchives'
import useAllMarkdownRemark from '../hooks/use-allmarkdown'

const activeStyle = {
  color: '#0057e7',
  fontWeight: 600,
  fontSize: '0.95rem',
}

const SideBar = () => {
  let pages = useAllMarkdownRemark()
  let fpv = []
  let learning = []
  let projects = []
  let smarthome = []
  let stories = []

  // Filter the data
  pages.forEach(page => {
    switch (page.node.frontmatter.category) {
      case 'learning':
        learning.push(page)
        break
      case 'smarthome':
        smarthome.push(page)
        break
      case 'fpv':
        fpv.push(page)
        break
      case 'projects':
        projects.push(page)
        break
      case 'stories':
        stories.push(page)
        break
      default:
        break
    }
  })

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar">
        <ul className="sidenav">
          <li>
            <Link to="/news/?category=fpv" className="sidenav-category">
              <span role="img" aria-label="helicopter">
                🚁
              </span>{' '}
              <em>FPV quads</em>
            </Link>
          </li>
          {fpv.map(page => (
            <li key={page.node.id}>
              <Link to={page.node.frontmatter.path} activeStyle={activeStyle}>
                {page.node.frontmatter.title}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/news/?category=projects" className="sidenav-category">
              <span role="img" aria-label="project">
                📑
              </span>{' '}
              <em>Projects</em>
            </Link>
          </li>
          {projects.map(page => (
            <li key={page.node.id}>
              <Link to={page.node.frontmatter.path} activeStyle={activeStyle}>
                {page.node.frontmatter.title}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/news/?category=learning" className="sidenav-category">
              <span role="img" aria-label="student">
                👨‍🎓️
              </span>{' '}
              <em>Life-long learning</em>
            </Link>
          </li>
          {learning.map(page => (
            <li key={page.node.id}>
              <Link to={page.node.frontmatter.path} activeStyle={activeStyle}>
                {page.node.frontmatter.title}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/news/?category=smarthome" className="sidenav-category">
              <span role="img" aria-label="house">
                🏠
              </span>{' '}
              <em>Smart home automation</em>
            </Link>
          </li>
          {smarthome.map(page => (
            <li key={page.node.id}>
              <Link to={page.node.frontmatter.path} activeStyle={activeStyle}>
                {page.node.frontmatter.title}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/news/?category=stories" className="sidenav-category">
              <span role="img" aria-label="hand writing">
                ✍
              </span>{' '}
              <em>Writing</em>
            </Link>
          </li>
          {stories.map(page => (
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

export default SideBar
