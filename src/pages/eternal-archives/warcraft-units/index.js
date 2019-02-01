import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../../../components/structure/layout'

const WarCraftUnitsPage = ({ data }) => (
  <Layout>
    <Helmet title="WarCraft Units" />
    <h1>WarCraft Units</h1>

    <div className="disclaimer-container">
      <span className="year">~ year: 2002 | Georgi's age: 17</span>
      <span className="disclaimer">
        Unedited things the way they were in the late 90s and early 2000s
      </span>
    </div>

    <div>
      {data.warcraft1.edges.map(({ node: img }) => (
        <div key={img.id} style={{ margin: '1rem', maxWidth: '360px' }}>
          <Img fluid={img.childImageSharp.fluid} alt={img.name} />
        </div>
      ))}
    </div>

    <div>
      {data.warcraft2.edges.map(({ node: img }) => (
        <div key={img.id} style={{ margin: '1rem', maxWidth: '360px' }}>
          <Img fluid={img.childImageSharp.fluid} alt={img.name} />
        </div>
      ))}
    </div>
  </Layout>
)

export default WarCraftUnitsPage

export const WarCraftUnitsPageQuery = graphql`
  query WarCraftUnitsPageQuery {
    warcraft1: allFile(
      filter: {
        relativePath: { regex: "/^eternal-archives/warcraft-units/warcraft-1/" }
      }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(maxWidth: 360, quality: 75) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    warcraft2: allFile(
      filter: {
        relativePath: { regex: "/^eternal-archives/warcraft-units/warcraft-2/" }
      }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(maxWidth: 360, quality: 75) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
