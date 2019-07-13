import React from 'react'
import styled from 'styled-components'

const allFeaturedGear = {
  'taranis-x-lite': {
    name: 'Taranis X-Lite',
    link: 'https://bit.ly/taranis-xlite',
    image:
      'https://imgaz.staticbg.com/images/oaupload/banggood/images/83/BB/178f71ba-6b22-4304-83d5-4dde793ecb69.jpg',
  },
  'aomway-commander': {
    name: 'Aomway Commander',
    link: 'https://bit.ly/aomway-commander',
    image:
      'https://imgaz.staticbg.com/images/oaupload/banggood/images/C0/6E/4315faaf-36f8-4785-aad6-b2df9a1fae75.jpg',
  },
  'taranis-q-x7': {
    name: 'Taranis Q X7',
    link: 'https://bit.ly/taranis-qx7',
    image:
      'https://imgaz.staticbg.com/images/oaupload/banggood/images/79/67/7968b1a5-4b56-4e2a-bbe3-9fa56336c523.jpg',
  },
  'taranis-x9d': {
    name: 'Taranis X 9D',
    link: 'https://bit.ly/taranis-x9d',
    image:
      'https://imgaz.staticbg.com/images/oaupload/banggood/images/A3/07/adbc3ea6-254d-466e-8486-017c85f52e80.jpg',
  },
  'a-a': {
    name: '',
    link: '',
    image: '',
  },
}

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
  if (!gearList) {
    return null
  }

  return (
    <StyledFeaturedGear>
      <h4>Where to buy the gear?</h4>
      <div className="featured-gear-grid">
        {gearList.map(item => (
          <div className="featured-gear-grid-item">
            <a
              className="featured-gear-image-link"
              target="_blank"
              href={allFeaturedGear[item].link}
            >
              <img
                src={allFeaturedGear[item].image}
                alt={allFeaturedGear[item].name}
              />
            </a>
            <h5>
              {allFeaturedGear[item].name} -{' '}
              <a target="_blank" href={allFeaturedGear[item].link}>
                Banggood
              </a>
            </h5>
          </div>
        ))}
      </div>
    </StyledFeaturedGear>
  )
}

export default FeaturedGear
