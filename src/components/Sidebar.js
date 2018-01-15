import React from 'react'
import Link from 'gatsby-link'

// TODO: Break this into static eternal archives component and graphql generated article list
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
            {this.state.general.map(page => (
              <li key={page.node.id}>
                <Link to={page.node.frontmatter.path}>
                  {page.node.frontmatter.title}
                </Link>
              </li>
            ))}
            <li>
              🏠 <em>Smart home automation</em>
            </li>
            {this.state.smarthome.map(page => (
              <li key={page.node.id}>
                <Link to={page.node.frontmatter.path}>
                  {page.node.frontmatter.title}
                </Link>
              </li>
            ))}
            <li>
              💻 <em>Software development</em>
            </li>
            {this.state.software.map(page => (
              <li key={page.node.id}>
                <Link to={page.node.frontmatter.path}>
                  {page.node.frontmatter.title}
                </Link>
              </li>
            ))}
            <li>
              🚁 <em>FPV quads</em>
            </li>
            {this.state.fpv.map(page => (
              <li key={page.node.id}>
                <Link to={page.node.frontmatter.path}>
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
          <h5>
            Eternal Archives <span>/1999-2003/</span>
          </h5>
          <ul className="sidenav">
            <li>
              <em>Fan Fiction</em>
            </li>
            <li>
              <Link to="/eternal-archives/fiction/leaders-of-the-great-dark-beyond/">
                Leaders of the Great Dark Beyond
                <span className="sidenav-info">/a Warcraft story/</span>
              </Link>
            </li>
            <li>
              <Link to="/eternal-archives/fiction/sargeras-tomb/">
                Sargeras' tomb
                <span className="sidenav-info">/a Warcraft story/</span>
              </Link>
            </li>
            <li>
              <Link to="/eternal-archives/fiction/triumph-of-the-orcish-hordes/">
                Triumph of the orcish hordes
                <span className="sidenav-info">/a Warcraft story/</span>
              </Link>
            </li>
            <li>
              <Link to="/eternal-archives/fiction/the-small-village-tavern/">
                The small village tavern
                <span className="sidenav-info">/a Warcraft story/</span>
              </Link>
            </li>
            <li>
              <Link to="/eternal-archives/fiction/athene-d2-character-story/">
                Athine Palade:
                <span className="sidenav-info">/Diablo 2 character story/</span>
              </Link>
            </li>
            <li>
              <Link to="/eternal-archives/fiction/log-of-gelus-life/">
                Log of Gelu's life
                <span className="sidenav-info">
                  /a Heroes of Might and Magic story/
                </span>
              </Link>
            </li>
            <li>
              <em>Media</em>
            </li>
            <li>
              <Link to="/eternal-archives/music/">Music</Link>
            </li>
            <li>
              <Link to="/eternal-archives/music-videos-and-mixtapes/">
                Videos and Mixtapes
              </Link>
            </li>
            <li>
              <Link to="/eternal-archives/game-dev-videos/">
                Game Dev Videos
              </Link>
            </li>
            <li>
              <em>Random</em>
            </li>
            <li>
              <Link to="/eternal-archives/starcraft-encyclopedia/">
                StarCraft Encyclopedia
              </Link>
            </li>
            <li>
              <Link to="/eternal-archives/starcraft-screenshots/">
                StarCraft Screenshots
              </Link>
            </li>
            <li>
              <Link to="/eternal-archives/diablo-unique-mobs/">
                Diablo Unique Mobs
              </Link>
            </li>
            <li>
              <Link to="/eternal-archives/warcraft-units/">WarCraft Units</Link>
            </li>
            <li>
              <Link to="/eternal-archives/funny-win98-bugs/">
                Funny Windows 98 bugs
              </Link>
            </li>
            <li>
              <Link to="/eternal-archives/batch-files/">Batch files</Link>
            </li>
            <li>
              <Link to="/eternal-archives/my-first-site-and-programs/">
                My first site and programs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
