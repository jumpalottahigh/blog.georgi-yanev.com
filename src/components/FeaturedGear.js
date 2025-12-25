import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

import useFeaturedGear from '../hooks/use-featured-gear'

const StyledFeaturedGear = styled.div`
  .featured-gear-grid {
    display: grid;
  }

  a.featured-gear-image-link {
    display: inline-block;
    box-shadow: none !important;
    overflow: hidden;
  }

  a.featured-gear-image-link:hover img {
    transform: scale(1.2);
    transition: transform 275ms ease-in-out;
  }

  @media (min-width: 550px) {
    .featured-gear-grid {
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    a.featured-gear-image-link {
      img {
        max-width: 100%;
      }
    }
  }

  @media (min-width: 991px) {
    .featured-gear-grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (min-width: 1281px) {
    .featured-gear-grid {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`

const FeaturedGear = ({ gearList }) => {
  const allFeaturedGear = useFeaturedGear()

  if (!gearList) {
    return null
  }

  return (
    <StyledFeaturedGear>
      <h4>Where to buy the gear?</h4>
      <div className="featured-gear-grid">
        {gearList.map(item =>
          allFeaturedGear[item] ? (
            <div key={allFeaturedGear[item].id}>
              <a
                className="featured-gear-image-link"
                target="_blank"
                rel="noopener noreferrer"
                href={allFeaturedGear[item].link}
                style={{ width: '100%' }}
              >
                <GatsbyImage
                  image={allFeaturedGear[item].childImageSharp.gatsbyImageData}
                  alt={allFeaturedGear[item].title}
                />
              </a>
              <h5>
                {allFeaturedGear[item].title} -{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={allFeaturedGear[item].link}
                >
                  Banggood
                </a>
              </h5>
            </div>
          ) : null
        )}
      </div>
    </StyledFeaturedGear>
  )
}

export default FeaturedGear
