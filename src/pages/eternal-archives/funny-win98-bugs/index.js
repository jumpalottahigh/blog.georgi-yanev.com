import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../../../components/structure/layout'

const FunnyWin98BugsPage = ({ data }) => {
  const strings = {
    winbug1: {
      title:
        'Case 1: Attempting to move all icons on the desktop leads to a freeze and tear.',
      alt: 'Windows 98 weird bug 1',
    },
    winbug2: {
      title: 'Case 2: Icon renaming with bolded font.',
      alt: 'Windows 98 weird bug 2',
    },
    winbug3: {
      title: 'Case 3: Nice start menu button, bro. (̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄',
      alt: 'Windows 98 weird bug 3',
    },
    winbug4: {
      title: 'Case 4: That hard drive available space graph.',
      alt: 'Windows 98 weird bug 4',
    },
    winbug5: {
      title: "Case 5: I guess that's not so unbelievably funny.",
      alt: 'Windows 98 weird bug 5',
    },
    winbug6: {
      title: 'Case 6: New -> New. New what? (╯°□°）╯︵ ┻━┻',
      alt: 'Windows 98 weird bug 6',
    },
  }

  const renderData = data.windowsBugs.edges.map(({ node: img }) => {
    return {
      id: img.id,
      childImageSharp: img.childImageSharp,
      name: img.name,
      title: strings[img.name].title,
      alt: strings[img.name].alt,
    }
  })

  return (
    <Layout>
      <Helmet title="Windows 98 Fun" />
      <h1>Windows 98 fun</h1>

      <div className="disclaimer-container">
        <span className="year">~ year: 2000 | Georgi's age: 15</span>
        <span className="disclaimer">
          Unedited things the way they were in the late 90s and early 2000s
        </span>
      </div>

      <div>
        Most people have heard of the fabled <strong>BSOD</strong> (Blue Screen
        Of Death), or some just call it a blue screen. Truth is, Windows 98 used
        to do all sorts of funky stuff due to failing graphics card drivers or
        sometimes even completely out of nowhere.
      </div>

      <div>
        {renderData.map(img => (
          <div key={img.id} style={{ margin: '1rem', maxWidth: '640px' }}>
            <h4>{img.title}</h4>
            <div>
              <Img fluid={img.childImageSharp.fluid} alt={img.alt} />
            </div>
          </div>
        ))}
      </div>

      <div>
        Of course we can also conclude that I have spent a fair amount of time
        playing Diablo, StarCraft and Warcraft, as well as develop maps and
        experiences for those games. And occasionally create a C++ program.
      </div>
    </Layout>
  )
}

export default FunnyWin98BugsPage

export const FunnyWin98BugsPageQuery = graphql`
  query FunnyWin98BugsPageQuery {
    windowsBugs: allFile(
      filter: {
        relativePath: { regex: "/^eternal-archives/windows-bugs/winbug/" }
      }
      sort: { fields: name }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(maxWidth: 640, quality: 75) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
