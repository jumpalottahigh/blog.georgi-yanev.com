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
  'x-lite-lotus-stick-ends': {
    name: 'X-Lite Lotus stick ends',
    link: 'https://bit.ly/lotus-stick-ends',
    image: '/banggood/taranis-x-lite-lotus-stick-ends.jpg',
  },
  'caddx-turtle-v2-cable': {
    name: 'Caddx Turtle V2 coaxial cable',
    link: 'https://bit.ly/caddx-turtle-v2-cable',
    image: '/banggood/caddx-turtle-v2-cable.png',
  },
  'skyzone-sky02x': {
    name: 'Skyzone SKY02X fpv goggles',
    link: 'https://bit.ly/skyzone-02x',
    image: '/banggood/skyzone-sky02x-black.jpg',
  },
  'aomway-antenna': {
    name: 'Aomway clover leaf omni antenna',
    link: 'https://bit.ly/aomway-antenna',
    image: '/banggood/aomway-antenna.jpg',
  },
  'realacc-antenna': {
    name: 'Realacc tripple feed patch antenna',
    link: 'https://bit.ly/realacc-triple-feed-patch',
    image: '/banggood/realacc-tripple-feed-patch-antenna.jpg',
  },
  '90deg-sma-male-to-female-connector': {
    name: '90 deg SMA male to female connector',
    link: 'https://bit.ly/sma-female-right-angle',
    image: '/banggood/90deg-sma-male-to-female-connector.jpg',
  },
  'geprc-cinepro-4k': {
    name: 'Geprc CinePro 4K cinewhoop',
    link: 'https://bit.ly/geprc-cinepro-4k',
    image: '/banggood/geprc-cinepro-4k.jpg',
  },
  'caddx-tarsier-4k': {
    name: 'Caddx Tarsier 4K camera',
    link: 'https://bit.ly/caddx-tarsier-4k',
    image: '/banggood/caddx-tarsier-4k.jpg',
  },
  'dalprop-cyclone-q2035c': {
    name: 'Dalprop Cyclone Q2035C',
    link: 'https://bit.ly/dalprop-cyclone-q2035c',
    image: '/banggood/dalprop-cyclone-q2035c.jpg',
  },
  'emax-avan-2': {
    name: 'Emax Avan 2',
    link: 'https://bit.ly/emax-avan-2',
    image: '/banggood/emax-avan-2.jpg',
  },
  'lipo-battery-charger': {
    name: 'Imax B6 lipo battery charger',
    link: 'https://bit.ly/imax-b6-lipo-charger',
    image: '/banggood/lipo-battery-charger.jpg',
  },
  lipokiller: {
    name: 'URUAV Lipokiller',
    link: 'https://bit.ly/lipo-killer',
    image: '/banggood/lipokiller.jpg',
  },
  'emax-tinyhawk-freestyle': {
    name: 'Emax Tinyhawk Freestyle',
    link: 'https://bit.ly/tinyhawk-freestyle',
    image: '/banggood/emax-tinyhawk-freestyle.jpg',
  },
  'geprc-phantom': {
    name: 'Geprc Phantom',
    link: 'https://bit.ly/geprc-phantom',
    image: '/banggood/geprc-phantom.jpg',
  },
  'avon-rush': {
    name: 'Avon Rush 2.5" props',
    link: 'https://bit.ly/avon-rush-25',
    image: '/banggood/avon-rush.jpg',
  },
  'hq-2.5': {
    name: 'HQ 2.5" bi blade props',
    link: 'https://bit.ly/hqprop-25',
    image: '/banggood/hq-2.5.jpg',
  },
  'runcam-split-3-nano': {
    name: 'RunCam Split 3 Nano',
    link: 'https://bit.ly/runcam-split-3-nano',
    image: '/banggood/runcam-split-3-nano.jpg',
  },
  'gnb-1s-450': {
    name: 'GNB 1S 450mah battery',
    link: 'https://bit.ly/micro-drone-batteries',
    image: '/banggood/gnb-1s-450.jpg',
  },
  'geprc-phantom-motor': {
    name: 'GEPRC Phantom motor',
    link: 'https://bit.ly/geprc-phantom-motor',
    image: '/banggood/geprc-phantom-motor.jpg',
  },
  'eachine-e016f': {
    name: 'Eachine E016F',
    link: 'https://bit.ly/eachine-e016f',
    image: '/banggood/eachine-e016f.jpg',
  },
  'geprc-hovercraft-frame': {
    name: 'GEPRC Hovercraft Frame',
    link: 'https://bit.ly/geprc-hovercraft-frame',
    image: '/banggood/geprc-hovercraft-frame.jpg',
  },
  'eachine-vtx-camera-aio': {
    name: 'Eachine TX02 AIO',
    link: 'https://bit.ly/eachine-vtx-camera-aio',
    image: '/banggood/eachine-vtx-camera-aio.jpg',
  },
  mobula6: {
    name: 'Mobula6',
    link: 'https://bit.ly/mobula-6',
    image: '/banggood/mobula6.jpg',
  },
  'larva-x-hd': {
    name: 'Larva X HD',
    link: 'https://bit.ly/larva-x-hd',
    image: '/banggood/larva-x-hd.jpg',
  },
  'gemfan-1219': {
    name: 'Gemfan 1219',
    link: 'https://bit.ly/gemfan-1219',
    image: '/banggood/gemfan-1219.jpg',
  },
  'gnb-1s-350': {
    name: 'GNB 1S 350mah',
    link: 'https://bit.ly/gnb-1s-350',
    image: '/banggood/gnb-1s-350.jpg',
  },
  'uruav-1s-300': {
    name: 'URUAV 1S 300mah',
    link: 'https://bit.ly/uruav-1s-300',
    image: '/banggood/uruav-1s-300.jpg',
  },
  'uruav-1s-battery-charger': {
    name: 'URUAV 1S battery charger',
    link: 'https://bit.ly/uruav-1s-battery-charger',
    image: '/banggood/uruav-1s-battery-charger.jpg',
  },
  'mobula6-frame': {
    name: 'Mobula6 Frame',
    link: 'https://bit.ly/mobula6-frame',
    image: '/banggood/mobula6-frame.jpg',
  },
  'cnhl-1300': {
    name: 'CNHL 1300mAh 4S',
    link: 'https://bit.ly/cnhl-1300',
    image: '/banggood/cnhl-1300.jpg',
  },
  'skyrc-q200': {
    name: 'SkyRC Q200',
    link: 'https://bit.ly/skyrc-q200',
    image: '/banggood/skyrc-q200.jpg',
  },
  'tattu-r-line-6s-1050': {
    name: 'Tattu R-Line 6S 1050mAh',
    link: 'https://bit.ly/tattu-r-line-6s-1050',
    image: '/banggood/tattu-r-line-6s-1050.jpg',
  },
  'gnb-4s-1300': {
    name: 'GNB 4S 1300mAh',
    link: 'https://bit.ly/gnb-4s-1300',
    image: '/banggood/gnb-4s-1300.jpg',
  },
  'gnb-6s-1050': {
    name: 'GNB 6S 1050mAh',
    link: 'https://bit.ly/gnb-6s-1050',
    image: '/banggood/gnb-6s-1050.jpg',
  },
  'xt30-to-ph2': {
    name: 'XT30 to PH2.0 cable',
    link: 'https://bit.ly/xt30-to-ph2',
    image: '/banggood/xt30-to-ph2.jpg',
  },
  'xt30-to-banana-plug': {
    name: 'XT30 to banana plug cable',
    link: 'https://bit.ly/xt30-to-banana-plug',
    image: '/banggood/xt30-to-banana-plug.jpg',
  },
  'holybro-kopis-2-hdv': {
    name: 'Holybro Kopis 2 HDV',
    link: 'https://bit.ly/holybro-kopis-2-hdv',
    image: '/banggood/holybro-kopis-2-hdv.jpg',
  },
  'dji-digital-fpv': {
    name: 'DJI Digital FPV System',
    link: 'https://bit.ly/dji-digital-fpv',
    image: '/banggood/dji-digital-fpv.jpg',
  },
  'skip3-hd': {
    name: 'GEPRC Skip3 HD',
    link: 'https://bit.ly/geprc-skip3-hd',
    image: '/banggood/skip3-hd.jpg',
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
              rel="noopener noreferrer"
              href={allFeaturedGear[item].link}
            >
              <img
                src={allFeaturedGear[item].image}
                alt={allFeaturedGear[item].name}
              />
            </a>
            <h5>
              {allFeaturedGear[item].name} -{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={allFeaturedGear[item].link}
              >
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
