import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../../../components/structure/layout'

const StarCraftScreenShotsPage = ({ data }) => (
  <Layout>
    <Helmet title="StarCraft Screenshots" />
    <section>
      <h1>StarCraft Screenshots</h1>

      <div className="disclaimer-container">
        <span className="year">~ year: 2000 | Georgi's age: 15</span>
        <span className="disclaimer">
          Unedited things the way they were in the late 90s and early 2000s
        </span>
      </div>

      <div>
        {data.starCraftBugs.edges.map(({ node: img }) => (
          <div key={img.id} style={{ margin: '1rem', maxWidth: '640px' }}>
            <GatsbyImage image={img.childImageSharp.gatsbyImageData} alt={img.name} />
          </div>
        ))}
      </div>
    </section>
  </Layout>
)

export default StarCraftScreenShotsPage

export const StarCraftScreenShotsPageQuery = graphql`
  query StarCraftScreenShotsPageQuery {
    starCraftBugs: allFile(
      filter: {
        relativePath: {
          regex: "/^eternal-archives/starcraft-bugs/starcraft-bug/"
        }
      }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 640, quality: 75, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
