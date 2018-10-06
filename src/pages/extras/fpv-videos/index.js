import React from 'react'
import styled from 'styled-components'
import Layout from '../../../components/structure/layout'

import Video from '../../../components/Video/Video'

const Grid = styled.div`
  display: grid;
  grid-gap: 30px;
  min-width: 380px;

  @media (min-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }
`

const FPVVideos = () => {
  const videoIDsHD = [
    'r3SJZqLpQx8',
    'UtTZWqvdqEM',
    'k4p41u9SDe4',
    'WSS3_00TVT8',
    'UUXNL4OX_VU',
    'geXnCoNvBPk',
    'GdYGpLpiSrE',
    '70tXXAfs-ks',
    'TkdUIZi9ay8',
    'jzdjaeVbcAk',
    '9zFRK-8Jrw0',
    'UJuaf9KDCik',
    'aASDUpVy3zM',
    'XWO7LK16cw4',
    'jo69e-78OJQ',
    'ue2gsEnMBrk',
    'cVTpELazrD8',
    'jUJzXEe_ro0',
    'wNNG2Iwh46U',
    'qRN9jqY8jv0',
    '37F2ckku7uU',
    'uyWB6Cu0klc',
    '398BDc5mvuA',
    'ZiZW9Rzals4',
  ]

  const videoIDsDVR = [
    'VELKmHQtIbo',
    'oyW7KkBpQBw',
    'pr6C5gm8jNI',
    'TlBxVzvS8js',
    'pIYyGyrdoH8',
    'qqBJc0__ulY',
    '9oKEyDSOQOM',
    'pIBymaAYaJA',
  ]

  return (
    <Layout>
      <h2>FPV 1080p 60fps footage</h2>
      <Grid>
        {videoIDsHD.map(id => (
          <Video
            key={id}
            src={id}
            width="560"
            height="315"
            title={`FPV HD video - ${id}`}
          />
        ))}
      </Grid>
      <h2 style={{ marginTop: '2rem' }}>FPV DVR footage</h2>
      <Grid>
        {videoIDsDVR.map(id => (
          <Video
            key={id}
            src={id}
            width="560"
            height="315"
            title={`FPV DVR video - ${id}`}
          />
        ))}
      </Grid>
    </Layout>
  )
}

export default FPVVideos
