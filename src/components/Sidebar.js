import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import EternalArchives from '../components/EternalArchives'
import useSortedMarkdown from '../hooks/use-sortedmarkdown'
import svgRightArrow from '../images/right-arrow.svg'

const LS_SIDEBAR_CATEGORY_COLLAPSIBLE_STATE =
  'LS_SIDEBAR_CATEGORY_COLLAPSIBLE_STATE'

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

  a:not(.sidenav-category):hover {
    text-decoration: underline;
  }
`

const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
`

const CollapsibleCarret = ({ id, open, onClick }) => (
  <img
    src={svgRightArrow}
    style={{
      height: '22px',
      transition: '475ms',
      transform: `rotate(${open ? 90 : 0}deg)`,
      cursor: 'pointer',
    }}
    alt={`Expand or collapse ${id} article category`}
    onClick={onClick}
  />
)

const sidebarCategoriesCollapsibleDefaultState = {
  fpv: true,
  projects: true,
  learning: true,
  smartHome: true,
  writing: true,
}

const SideBar = () => {
  const sortedByCategory = useSortedMarkdown()
  const [sidebarCategoryOpen, setSidebarCategoryOpen] = React.useState(
    sidebarCategoriesCollapsibleDefaultState
  )

  React.useEffect(() => {
    setSidebarCategoryOpen(
      JSON.parse(localStorage.getItem(LS_SIDEBAR_CATEGORY_COLLAPSIBLE_STATE)) ||
        sidebarCategoriesCollapsibleDefaultState
    )
  }, [])

  return (
    <StyledSidebar className="sidebar-wrapper">
      <div className="sidebar">
        <ul className="sidenav">
          <StyledListItem>
            <Link to="/posts/?category=fpv" className="sidenav-category">
              <span role="img" aria-label="helicopter">
                🚁
              </span>{' '}
              <em>FPV drones</em>
            </Link>
            <CollapsibleCarret
              id="fpv-drones"
              open={sidebarCategoryOpen.fpv}
              onClick={() => {
                const newSidebarCategoryState = {
                  ...sidebarCategoryOpen,
                  fpv: !sidebarCategoryOpen.fpv,
                }

                setSidebarCategoryOpen(newSidebarCategoryState)
                localStorage.setItem(
                  LS_SIDEBAR_CATEGORY_COLLAPSIBLE_STATE,
                  JSON.stringify(newSidebarCategoryState)
                )
              }}
            />
          </StyledListItem>
          {sidebarCategoryOpen.fpv &&
            sortedByCategory['fpv'].map((page) => (
              <li key={page.node.id}>
                <Link to={page.node.frontmatter.path} activeStyle={activeStyle}>
                  {page.node.frontmatter.title}
                </Link>
              </li>
            ))}
          <StyledListItem>
            <Link to="/posts/?category=projects" className="sidenav-category">
              <span role="img" aria-label="project">
                📑
              </span>{' '}
              <em>Projects</em>
            </Link>
            <CollapsibleCarret
              id="projects"
              open={sidebarCategoryOpen.projects}
              onClick={() => {
                const newSidebarCategoryState = {
                  ...sidebarCategoryOpen,
                  projects: !sidebarCategoryOpen.projects,
                }

                setSidebarCategoryOpen(newSidebarCategoryState)
                localStorage.setItem(
                  LS_SIDEBAR_CATEGORY_COLLAPSIBLE_STATE,
                  JSON.stringify(newSidebarCategoryState)
                )
              }}
            />
          </StyledListItem>
          {sidebarCategoryOpen.projects &&
            sortedByCategory['projects'].map((page) => (
              <li key={page.node.id}>
                <Link to={page.node.frontmatter.path} activeStyle={activeStyle}>
                  {page.node.frontmatter.title}
                </Link>
              </li>
            ))}
          <StyledListItem>
            <Link to="/posts/?category=learning" className="sidenav-category">
              <span role="img" aria-label="student">
                👨‍🎓️
              </span>{' '}
              <em>Life-long learning</em>
            </Link>
            <CollapsibleCarret
              id="learning"
              open={sidebarCategoryOpen.learning}
              onClick={() => {
                const newSidebarCategoryState = {
                  ...sidebarCategoryOpen,
                  learning: !sidebarCategoryOpen.learning,
                }

                setSidebarCategoryOpen(newSidebarCategoryState)
                localStorage.setItem(
                  LS_SIDEBAR_CATEGORY_COLLAPSIBLE_STATE,
                  JSON.stringify(newSidebarCategoryState)
                )
              }}
            />
          </StyledListItem>
          {sidebarCategoryOpen.learning &&
            sortedByCategory['learning'].map((page) => (
              <li key={page.node.id}>
                <Link to={page.node.frontmatter.path} activeStyle={activeStyle}>
                  {page.node.frontmatter.title}
                </Link>
              </li>
            ))}
          <StyledListItem>
            <Link to="/posts/?category=smarthome" className="sidenav-category">
              <span role="img" aria-label="house">
                🏠
              </span>{' '}
              <em>Smart home automation</em>
            </Link>
            <CollapsibleCarret
              id="smartHome"
              open={sidebarCategoryOpen.smartHome}
              onClick={() => {
                const newSidebarCategoryState = {
                  ...sidebarCategoryOpen,
                  smartHome: !sidebarCategoryOpen.smartHome,
                }

                setSidebarCategoryOpen(newSidebarCategoryState)
                localStorage.setItem(
                  LS_SIDEBAR_CATEGORY_COLLAPSIBLE_STATE,
                  JSON.stringify(newSidebarCategoryState)
                )
              }}
            />
          </StyledListItem>
          {sidebarCategoryOpen.smartHome &&
            sortedByCategory['smarthome'].map((page) => (
              <li key={page.node.id}>
                <Link to={page.node.frontmatter.path} activeStyle={activeStyle}>
                  {page.node.frontmatter.title}
                </Link>
              </li>
            ))}
          <StyledListItem>
            <Link to="/posts/?category=stories" className="sidenav-category">
              <span role="img" aria-label="hand writing">
                ✍
              </span>{' '}
              <em>Writing</em>
            </Link>
            <CollapsibleCarret
              id="writing"
              open={sidebarCategoryOpen.writing}
              onClick={() => {
                const newSidebarCategoryState = {
                  ...sidebarCategoryOpen,
                  writing: !sidebarCategoryOpen.writing,
                }

                setSidebarCategoryOpen(newSidebarCategoryState)
                localStorage.setItem(
                  LS_SIDEBAR_CATEGORY_COLLAPSIBLE_STATE,
                  JSON.stringify(newSidebarCategoryState)
                )
              }}
            />
          </StyledListItem>
          {sidebarCategoryOpen.writing &&
            sortedByCategory['stories'].map((page) => (
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
