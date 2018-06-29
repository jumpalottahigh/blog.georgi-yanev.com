import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import EternalArchives from '../components/EternalArchives'

const activeStyle = {
  color: '#0057e7',
  fontWeight: 600,
  fontSize: '0.95rem',
}

const SideBar = () => (
  <StaticQuery
    query={graphql`
      query sidebarPageListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { draft: { ne: true } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                date(formatString: "MMM DD, YYYY")
                path
                title
                tags
                ogImage {
                  publicURL
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      let pages = data.allMarkdownRemark.edges
      let fpv = []
      let learning = []
      let smarthome = []

      // Filter the data
      pages.forEach(page => {
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
              {fpv.map((page, index) => (
                <li key={page.node.id}>
                  <Link
                    to={page.node.frontmatter.path}
                    activeStyle={activeStyle}
                  >
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
              {learning.map((page, index) => (
                <li key={page.node.id}>
                  <Link
                    to={page.node.frontmatter.path}
                    activeStyle={activeStyle}
                  >
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
              {smarthome.map((page, index) => (
                <li key={page.node.id}>
                  <Link
                    to={page.node.frontmatter.path}
                    activeStyle={activeStyle}
                  >
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
    }}
  />
)

export default SideBar
