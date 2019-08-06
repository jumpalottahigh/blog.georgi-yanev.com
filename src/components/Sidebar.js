import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import EternalArchives from '../components/EternalArchives'
import useSortedMarkdown from '../hooks/use-sortedmarkdown'
import useWindowSize from '../hooks/use-windowsize'

const activeStyle = {
  color: '#0057e7',
  fontWeight: 600,
  fontSize: '0.95rem',
}

const StyledSidebar = styled.aside`
  a {
    color: #0175d8;
    text-decoration: none;
    box-shadow: none;
  }

  a:hover {
    color: #0175d8;
    box-shadow: none;
  }
`

const SideBar = () => {
  const windowSize = useWindowSize()
  const sortedByCategory = useSortedMarkdown()

  // return windowSize.width < 768 ? null : (
  return (
    <StyledSidebar className="sidebar-wrapper">
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
          {sortedByCategory['fpv'].map(page => (
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
          {sortedByCategory['projects'].map(page => (
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
          {sortedByCategory['learning'].map(page => (
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
          {sortedByCategory['smarthome'].map(page => (
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
          {sortedByCategory['stories'].map(page => (
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
    </StyledSidebar>
  )
}

export default SideBar
