import React from 'react'
import { Link } from 'gatsby'

import svgRightArrow from '../images/right-arrow.svg'

// TODO: Pass real data as props to this component from a GraphQL query

export default class EternalArchives extends React.Component {
  state = {
    isOpen: false,
  }

  toggleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))
  }

  render() {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            cursor: 'pointer',
          }}
          onClick={this.toggleOpen}
        >
          <h5>
            Eternal Archives
            <br />
            <span>/1999-2003/</span>
          </h5>
          <img
            src={svgRightArrow}
            style={{
              height: '30px',
              transition: '475ms',
              transform: `rotate(${this.state.isOpen ? 90 : 0}deg)`,
            }}
            alt="right arrow"
          />
        </div>
        {this.state.isOpen && (
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
        )}
      </div>
    )
  }
}
