import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

const LINK_SIZE = '34px'

const LuckyDice = styled.button`
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${LINK_SIZE};
  height: ${LINK_SIZE};
  background-color: initial;
  box-shadow: none !important;
  margin-right: 0.5rem;
  padding: 0;
`

const Coupon = styled.div`
  position: absolute;
  width: 180px;
  top: -73px;
  right: -70px;
  font-size: 16px;
  z-index: 999;
  background: #0175d8;
  color: #fff;
  border-radius: 4px;
  padding: 2px 8px;

  a {
    box-shadow: none !important;
  }
`

const Close = styled(FaTimes)`
  position: absolute;
  right: 4px;
  top: 4px;
  cursor: pointer;
`

const randomCoupons = [
  {
    link:
      'https://www.banggood.com/Foxeer-Micro-Falkor-1_8mm-1200TVL-16943-PALNTSC-Switchable-GWDR-FPV-Camera-for-RC-Drone-p-1375560.html?ID=521800&cur_warehouse=CN',
    coupon: 'BGFal',
  },
  {
    link:
      'https://www.banggood.com/URUAV-Lollipop-5_8GHz-2_3dBi-Super-Mini-Antenna-RHCP-SMA-Male-RP-SMA-Male-For-FPV-Racing-Drone-p-1420138.html?ID=224512670&cur_warehouse=CN',
    coupon: 'BGANTA',
  },
  {
    link:
      'https://www.banggood.com/Eachine-ROTG01-Pro-UVC-OTG-5_8G-150CH-Full-Channel-FPV-Receiver-WAudio-For-Android-Smartphone-p-1347396.html?akmClientCountry=CN&&ID=521800&cur_warehouse=CN',
    coupon: 'BGROTG01',
  },
  {
    link:
      'https://www.banggood.com/Caddx-Turbo-Micro-F2-13-CMOS-2_1mm-1200TVL-16943-NTSCPAL-Low-Latency-FPV-Camera-W-Microphone-p-1328481.html?akmClientCountry=CN&&ID=231530499&cur_warehouse=CN',
    coupon: 'BGTurbo',
  },
  {
    link:
      'https://www.banggood.com/RunCam-Nano-2-13-700TVL-1_8mm2_1mm-FOV-155170-Degree-CMOS-FPV-Camera-for-FPV-RC-Drone-p-1469656.html?akmClientCountry=CN&&ID=530889522009&cur_warehouse=CN',
    coupon: 'BGNano22',
  },
  {
    link:
      'https://www.banggood.com/Realacc-Fireproof-Waterproof-Lipo-Battery-Safety-Bag155x115x90mm-With-Luminous-Handle-p-1259311.html?akmClientCountry=CN&&cur_warehouse=CN',
    coupon: 'BGBag22',
  },
  {
    link:
      'https://www.banggood.com/marketing-FPV-Racing-Drone-Multirotors-Clearance/tid-5415.html?bid=22225',
    coupon: '28rc',
  },
  {
    link:
      'https://www.banggood.com/promotion-black-friday-deals-2019-10282.html?utmid=10462&utm_campaign=%231b1403',
    coupon: 'BGBFAFF2019',
  },
  {
    link:
      'https://www.banggood.com/TransTEC-Beetle-HOM-130mm-FPV-Racing-RC-Drone-PNP-Compatible-With-DJI-FPV-Air-Unit-DJI-Digital-FPV-System-p-1584992.html?utm_campaign=BGBFBeetle',
    coupon: 'BGBFBeetle',
  },
]

const affiliateParam = 'p=NY211410857261201705'

const Lucky = () => {
  const [showCoupon, setShowCoupon] = React.useState(false)
  const luckyDraw =
    randomCoupons[Math.floor(Math.random() * randomCoupons.length)]

  return (
    <>
      {showCoupon ? (
        <div style={{ position: 'relative' }}>
          <Coupon>
            <Close onClick={() => setShowCoupon(false)} />
            <span>Link: </span>
            <a
              href={`${luckyDraw.link}&${affiliateParam}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Daily random coupon"
              title="I'm feeling lucky! (daily random coupon)"
            >
              🎁
            </a>
            <br />
            <span>
              Coupon: <strong>{luckyDraw.coupon}</strong>
            </span>
          </Coupon>
        </div>
      ) : (
        <LuckyDice
          onClick={() => setShowCoupon(true)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Daily random coupon"
          title="I'm feeling lucky! (daily random coupon)"
        >
          🎲
        </LuckyDice>
      )}
    </>
  )
}

export default Lucky
