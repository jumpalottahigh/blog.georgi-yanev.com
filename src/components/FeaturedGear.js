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
  'mobula7-hd': {
    name: 'Mobula7 HD',
    link: 'https://bit.ly/mobula7-hd',
    image:
      'https://imgaz.staticbg.com/images/oaupload/banggood/images/35/36/7d6ba441-3f57-4f08-b42c-e15bbeccea26.jpg',
  },
  'mobula7-hd-motor': {
    name: 'Mobula7 HD motor',
    link: 'https://bit.ly/mobula7hd-motor',
    image:
      'https://imgaz.staticbg.com/images/oaupload/banggood/images/26/F6/3bf4ed1e-54af-4ef1-9b5b-d5ca5360f95d.jpg',
  },
  'emax-hawk-5': {
    name: 'Emax Hawk 5',
    link: 'https://bit.ly/emax-hawk-5',
    image:
      'https://imgaz.staticbg.com/images/oaupload/banggood/images/B0/14/57b73aa4-7e6a-4965-8f84-82402fb56979.jpg',
  },
  'caddx-turtle-v2': {
    name: 'Caddx Turtle V2',
    link: 'https://bit.ly/caddx-turtle-v2',
    image:
      'https://imgaz.staticbg.com/images/oaupload/banggood/images/2B/D6/e2aa43e9-08f2-4550-96c9-6d11d4b67ee2.jpg',
  },
  'eachine-rotg02': {
    name: 'Eachine ROTG02',
    link: 'https://bit.ly/eachine-rotg2',
    image:
      'https://imgaz.staticbg.com/images/oaupload/banggood/images/4C/92/597c8fad-ea10-441a-a094-4f5a717ff351.jpeg',
  },
  'wizard-x220': {
    name: 'Wizard x220',
    link: 'https://bit.ly/wizardx220',
    image:
      'https://imgaz.staticbg.com/images/oaupload/banggood/images/43/EC/361b667f-9f10-424a-aa56-200366e3e719.jpg',
  },
  'wizard-esc': {
    name: 'Wizard ESC',
    link: 'https://bit.ly/wizard-esc',
    image:
      'https://imgaz.staticbg.com/images/oaupload/banggood/images/73/82/73295802-fb8d-4591-b469-1cb57b7bb9e6.jpg',
  },
  'wizard-motor': {
    name: 'Wizard motor',
    link: 'https://bit.ly/wizard-motors',
    image:
      'https://imgaz.staticbg.com/images/oaupload/banggood/images/1A/39/de3d9b98-9acb-427c-b582-586e0c332c4e.JPG',
  },
  trashcan: {
    name: 'Eachine Trashcan',
    link: 'https://bit.ly/eachine-trashcan',
    image:
      'https://imgaz.staticbg.com/images/oaupload/banggood/images/2F/38/4beb8779-26cd-4085-9c1b-0a4e93ba02a8.jpg',
  },
  'runcam-split-2s': {
    name: 'RunCam Split 2S',
    link: 'https://bit.ly/runcam-split2s',
    image:
      'https://imgaz.staticbg.com/images/oaupload/banggood/images/84/8B/86cd6c1f-8f55-45fb-8cca-951a1dd186ca.jpg',
  },
  'eachine-vtx-03': {
    name: 'Eachine VTX 03',
    link: 'https://bit.ly/eachine-vtx-03',
    image:
      'https://imgaz.staticbg.com/images/oaupload/banggood/images/B2/0A/a016a0b2-2ee0-45f7-b79d-3d666165dd57.JPG',
  },
  'realacc-backpack': {
    name: 'Realacc FPV Backpack',
    link: 'https://bit.ly/realacc-backpack',
    image:
      'https://imgaz.staticbg.com/images/oaupload/banggood/images/A4/CB/86deb403-a19f-430e-8506-c0e45b24aa5e.JPG',
  },
  'xm-plus': {
    name: 'XM+',
    link: 'https://bit.ly/xm-plus',
    image:
      'https://imgaz.staticbg.com/images/oaupload/banggood/images/83/14/0c820a65-bed2-4226-8566-c529733a3a2c.jpg',
  },
  'xt60-cable': {
    name: 'XT60 cable',
    link: 'https://bit.ly/xt-60-cable',
    image:
      'https://imgaz.staticbg.com/images/oaupload/banggood/images/7B/0B/ada43d38-dca7-4f1b-93db-89afa95d0beb.jpeg',
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
