import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../../../components/structure/layout'

const DiabloUniqueMobsPage = ({ data }) => (
  <Layout>
    <Helmet title="Diablo Unique Mobs" />
    <section>
      <h1>Diablo Unique Mobs</h1>

      <div className="disclaimer-container">
        <span className="year">~ year: 2001 | Georgi's age: 16</span>
        <span className="disclaimer">
          Unedited things the way they were in the late 90s and early 2000s
        </span>
      </div>
      <div>
        {data.diabloUniqueMobs.edges.map(({ node: img }) => (
          <div key={img.id} style={{ margin: '1rem', maxWidth: '640px' }}>
            <GatsbyImage image={img.childImageSharp.gatsbyImageData} alt={img.name} />
          </div>
        ))}
      </div>
    </section>
  </Layout>
)

export default DiabloUniqueMobsPage

export const DiabloUniqueMobsPageQuery = graphql`
  query DiabloUniqueMobsPageQuery {
    diabloUniqueMobs: allFile(
      filter: {
        relativePath: {
          regex: "/^eternal-archives/diablo-unique-mobs/unique-enemies/"
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
