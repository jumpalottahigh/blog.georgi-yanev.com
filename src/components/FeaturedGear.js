import React from 'react'
import styled from 'styled-components'

const allFeaturedGear = {
  'taranis-x-lite': {
    name: 'Taranis X-Lite',
    link: 'https://bit.ly/taranis-xlite',
    image: '/banggood/taranis-x-lite.jpg',
  },
  'aomway-commander': {
    name: 'Aomway Commander',
    link: 'https://bit.ly/aomway-commander',
    image: '/banggood/aomway-commander.jpg',
  },
  'taranis-q-x7': {
    name: 'Taranis Q X7',
    link: 'https://bit.ly/taranis-qx7',
    image: '/banggood/taranis-q-x7.jpg',
  },
  'taranis-x9d': {
    name: 'Taranis X 9D',
    link: 'https://bit.ly/taranis-x9d',
    image: '/banggood/taranis-x9d.jpg',
  },
  'mobula7-hd': {
    name: 'Mobula7 HD',
    link: 'https://bit.ly/mobula7-hd',
    image: '/banggood/mobula7-hd.jpg',
  },
  'mobula7-hd-motor': {
    name: 'Mobula7 HD motor',
    link: 'https://bit.ly/mobula7hd-motor',
    image: '/banggood/mobula7-hd-motor.jpg',
  },
  'emax-hawk-5': {
    name: 'Emax Hawk 5',
    link: 'https://bit.ly/emax-hawk-5',
    image: '/banggood/emax-hawk-5.jpg',
  },
  'caddx-turtle-v2': {
    name: 'Caddx Turtle V2',
    link: 'https://bit.ly/caddx-turtle-v2',
    image: '/banggood/caddx-turtle-v2.jpg',
  },
  'eachine-rotg02': {
    name: 'Eachine ROTG02',
    link: 'https://bit.ly/eachine-rotg2',
    image: '/banggood/eachine-rotg02.jpg',
  },
  'wizard-x220': {
    name: 'Wizard x220',
    link: 'https://bit.ly/wizardx220',
    image: '/banggood/wizard-x220.jpg',
  },
  'wizard-esc': {
    name: 'Wizard ESC',
    link: 'https://bit.ly/wizard-esc',
    image: '/banggood/wizard-esc.jpg',
  },
  'wizard-motor': {
    name: 'Wizard motor',
    link: 'https://bit.ly/wizard-motors',
    image: '/banggood/wizard-motor.jpg',
  },
  trashcan: {
    name: 'Eachine Trashcan',
    link: 'https://bit.ly/eachine-trashcan',
    image: '/banggood/trashcan.jpg',
  },
  'runcam-split-2s': {
    name: 'RunCam Split 2S',
    link: 'https://bit.ly/runcam-split2s',
    image: '/banggood/runcam-split-2s.jpg',
  },
  'eachine-vtx-03': {
    name: 'Eachine VTX 03',
    link: 'https://bit.ly/eachine-vtx-03',
    image: '/banggood/eachine-vtx-03.jpg',
  },
  'realacc-backpack': {
    name: 'Realacc FPV Backpack',
    link: 'https://bit.ly/realacc-backpack',
    image: '/banggood/realacc-backpack.jpg',
  },
  'xm-plus': {
    name: 'XM+',
    link: 'https://bit.ly/xm-plus',
    image: '/banggood/xm-plus.jpg',
  },
  'xt60-cable': {
    name: 'XT60 cable',
    link: 'https://bit.ly/xt-60-cable',
    image: '/banggood/xt60-cable.jpg',
  },
  'runcam-5': {
    name: 'RunCam 5',
    link: 'https://bit.ly/runcam--5',
    image: '/banggood/runcam-5.jpg',
  },
  'runcam-5-mount': {
    name: 'RunCam 5 mount',
    link: 'https://bit.ly/runcam5-mount',
    image: '/banggood/runcam-5-mount.jpg',
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
          <div key={item}>
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
