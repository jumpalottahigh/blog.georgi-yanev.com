import { graphql, useStaticQuery } from 'gatsby'

const allFeaturedGear = {
  'taranis-x-lite': {
    title: 'Taranis X-Lite',
    link: 'https://bit.ly/taranis-xlite',
  },
  'aomway-commander': {
    title: 'Aomway Commander',
    link: 'https://bit.ly/aomway-commander',
  },
  'taranis-q-x7': {
    title: 'Taranis Q X7',
    link: 'https://bit.ly/taranis-qx7',
  },
  'taranis-x9d': {
    title: 'Taranis X 9D',
    link: 'https://bit.ly/taranis-x9d',
  },
  'mobula7-hd': {
    title: 'Mobula7 HD',
    link: 'https://bit.ly/mobula7-hd',
  },
  'mobula7-hd-motor': {
    title: 'Mobula7 HD motor',
    link: 'https://bit.ly/mobula7hd-motor',
  },
  'emax-hawk-5': {
    title: 'Emax Hawk 5',
    link: 'https://bit.ly/emax-hawk-5',
  },
  'caddx-turtle-v2': {
    title: 'Caddx Turtle V2',
    link: 'https://bit.ly/caddx-turtle-v2',
  },
  'eachine-rotg02': {
    title: 'Eachine ROTG02',
    link: 'https://bit.ly/eachine-rotg2',
  },
  'wizard-x220': {
    title: 'Wizard x220',
    link: 'https://bit.ly/wizardx220',
  },
  'wizard-esc': {
    title: 'Wizard ESC',
    link: 'https://bit.ly/wizard-esc',
  },
  'wizard-motor': {
    title: 'Wizard motor',
    link: 'https://bit.ly/wizard-motors',
  },
  trashcan: {
    title: 'Eachine Trashcan',
    link: 'https://bit.ly/eachine-trashcan',
  },
  'runcam-split-2s': {
    title: 'RunCam Split 2S',
    link: 'https://bit.ly/runcam-split2s',
  },
  'eachine-vtx-03': {
    title: 'Eachine VTX 03',
    link: 'https://bit.ly/eachine-vtx-03',
  },
  'realacc-backpack': {
    title: 'Realacc FPV Backpack',
    link: 'https://bit.ly/realacc-backpack',
  },
  'xm-plus': {
    title: 'XM+',
    link: 'https://bit.ly/xm-plus',
  },
  'xt60-cable': {
    title: 'XT60 cable',
    link: 'https://bit.ly/xt-60-cable',
  },
  'runcam-5': {
    title: 'RunCam 5',
    link: 'https://bit.ly/runcam--5',
  },
  'runcam-5-mount': {
    title: 'RunCam 5 mount',
    link: 'https://bit.ly/runcam5-mount',
  },
  'x-lite-lotus-stick-ends': {
    title: 'X-Lite Lotus stick ends',
    link: 'https://bit.ly/lotus-stick-ends',
  },
  'caddx-turtle-v2-cable': {
    title: 'Caddx Turtle V2 coaxial cable',
    link: 'https://bit.ly/caddx-turtle-v2-cable',
  },
  'skyzone-sky02x': {
    title: 'Skyzone SKY02X fpv goggles',
    link: 'https://bit.ly/skyzone-02x',
  },
  'aomway-antenna': {
    title: 'Aomway clover leaf omni antenna',
    link: 'https://bit.ly/aomway-antenna',
  },
  'realacc-antenna': {
    title: 'Realacc tripple feed patch antenna',
    link: 'https://bit.ly/realacc-triple-feed-patch',
  },
  '90deg-sma-male-to-female-connector': {
    title: '90 deg SMA male to female connector',
    link: 'https://bit.ly/sma-female-right-angle',
  },
  'geprc-cinepro-4k': {
    title: 'Geprc CinePro 4K cinewhoop',
    link: 'https://bit.ly/geprc-cinepro-4k',
  },
  'caddx-tarsier-4k': {
    title: 'Caddx Tarsier 4K camera',
    link: 'https://bit.ly/caddx-tarsier-4k',
  },
  'dalprop-cyclone-q2035c': {
    title: 'Dalprop Cyclone Q2035C',
    link: 'https://bit.ly/dalprop-cyclone-q2035c',
  },
  'emax-avan-2': {
    title: 'Emax Avan 2',
    link: 'https://bit.ly/emax-avan-2',
  },
  'lipo-battery-charger': {
    title: 'Imax B6 lipo battery charger',
    link: 'https://bit.ly/imax-b6-lipo-charger',
  },
  lipokiller: {
    title: 'URUAV Lipokiller',
    link: 'https://bit.ly/lipo-killer',
  },
  'emax-tinyhawk-freestyle': {
    title: 'Emax Tinyhawk Freestyle',
    link: 'https://bit.ly/tinyhawk-freestyle',
  },
  'geprc-phantom': {
    title: 'Geprc Phantom',
    link: 'https://bit.ly/geprc-phantom',
  },
  'avan-rush': {
    title: 'Avan Rush 2.5" props',
    link: 'https://bit.ly/avon-rush-25',
  },
  'hq-2.5': {
    title: 'HQ 2.5" bi blade props',
    link: 'https://bit.ly/hqprop-25',
  },
  'runcam-split-3-nano': {
    title: 'RunCam Split 3 Nano',
    link: 'https://bit.ly/runcam-split-3-nano',
  },
  'gnb-1s-450': {
    title: 'GNB 1S 450mah battery',
    link: 'https://bit.ly/micro-drone-batteries',
  },
  'geprc-phantom-motor': {
    title: 'GEPRC Phantom motor',
    link: 'https://bit.ly/geprc-phantom-motor',
  },
  'eachine-e016f': {
    title: 'Eachine E016F',
    link: 'https://bit.ly/eachine-e016f',
  },
  'geprc-hovercraft-frame': {
    title: 'GEPRC Hovercraft Frame',
    link: 'https://bit.ly/geprc-hovercraft-frame',
  },
  'eachine-vtx-camera-aio': {
    title: 'Eachine TX02 AIO',
    link: 'https://bit.ly/eachine-vtx-camera-aio',
  },
  mobula6: {
    title: 'Mobula6',
    link: 'https://bit.ly/mobula-6',
  },
  'larva-x-hd': {
    title: 'Larva X HD',
    link: 'https://bit.ly/larva-x-hd',
  },
  'gemfan-1219': {
    title: 'Gemfan 1219',
    link: 'https://bit.ly/gemfan-1219',
  },
  'gnb-1s-350': {
    title: 'GNB 1S 350mah',
    link: 'https://bit.ly/gnb-1s-350',
  },
  'uruav-1s-300': {
    title: 'URUAV 1S 300mah',
    link: 'https://bit.ly/uruav-1s-300',
  },
  'uruav-1s-battery-charger': {
    title: 'URUAV 1S battery charger',
    link: 'https://bit.ly/uruav-1s-battery-charger',
  },
  'mobula6-frame': {
    title: 'Mobula6 Frame',
    link: 'https://bit.ly/mobula6-frame',
  },
  'cnhl-1300': {
    title: 'CNHL 1300mAh 4S',
    link: 'https://bit.ly/cnhl-1300',
  },
  'skyrc-q200': {
    title: 'SkyRC Q200',
    link: 'https://bit.ly/skyrc-q200',
  },
  'tattu-r-line-6s-1050': {
    title: 'Tattu R-Line 6S 1050mAh',
    link: 'https://bit.ly/tattu-r-line-6s-1050',
  },
  'gnb-4s-1300': {
    title: 'GNB 4S 1300mAh',
    link: 'https://bit.ly/gnb-4s-1300',
  },
  'gnb-6s-1050': {
    title: 'GNB 6S 1050mAh',
    link: 'https://bit.ly/gnb-6s-1050',
  },
  'xt30-to-ph2': {
    title: 'XT30 to PH2.0 cable',
    link: 'https://bit.ly/xt30-to-ph2',
  },
  'xt30-to-banana-plug': {
    title: 'XT30 to banana plug cable',
    link: 'https://bit.ly/xt30-to-banana-plug',
  },
  'holybro-kopis-2-hdv': {
    title: 'Holybro Kopis 2 HDV',
    link: 'https://bit.ly/holybro-kopis-2-hdv',
  },
  'dji-digital-fpv': {
    title: 'DJI Digital FPV System',
    link: 'https://bit.ly/dji-digital-fpv',
  },
  'skip3-hd': {
    title: 'GEPRC Skip3 HD',
    link: 'https://bit.ly/geprc-skip3-hd',
  },
  'gnb-4s-520': {
    title: 'GNB 4S 520mAh',
    link: 'https://bit.ly/gnb-4s-520mah',
  },
  'gemfan-3016': {
    title: 'GEMFAN 3016',
    link: 'https://bit.ly/gemfan-3016',
  },
  'iflight-nazgul5': {
    title: 'iFlight Nazgul5',
    link: 'https://bit.ly/iflight-nazgul5',
  },
}

const useFeaturedGear = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativePath: { regex: "/^banggood/" } }) {
        nodes {
          id
          name
          childImageSharp {
            fluid(maxWidth: 570, quality: 81) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)

  const featuredGear = {}

  data.allFile.nodes.forEach((node) => {
    featuredGear[node.name] = {
      ...node,
      title: allFeaturedGear[node.name].title,
      link: allFeaturedGear[node.name].link,
    }
  })

  return featuredGear
}

export default useFeaturedGear
