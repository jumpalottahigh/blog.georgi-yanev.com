import React from 'react'
import styled from 'styled-components'
import Layout from '../../../components/Layout'

const Grid = styled.div`
  display: grid;
  grid-gap: 30px;
  min-width: 380px;

  @media (min-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }
`

const FPVVideos = () => {
  const videoURLsHD = [
    'https://www.youtube.com/embed/ue2gsEnMBrk',
    'https://www.youtube.com/embed/cVTpELazrD8',
    'https://www.youtube.com/embed/jUJzXEe_ro0',
    'https://www.youtube.com/embed/wNNG2Iwh46U',
    'https://www.youtube.com/embed/qRN9jqY8jv0',
    'https://www.youtube.com/embed/37F2ckku7uU',
    'https://www.youtube.com/embed/uyWB6Cu0klc',
    'https://www.youtube.com/embed/398BDc5mvuA',
    'https://www.youtube.com/embed/ZiZW9Rzals4'
  ]

  const videoURLsDVR = [
    'https://www.youtube.com/embed/pr6C5gm8jNI',
    'https://www.youtube.com/embed/TlBxVzvS8js',
    'https://www.youtube.com/embed/pIYyGyrdoH8',
    'https://www.youtube.com/embed/qqBJc0__ulY',
    'https://www.youtube.com/embed/9oKEyDSOQOM',
    'https://www.youtube.com/embed/pIBymaAYaJA'
  ]

  return (
    <Layout>
      <h2>FPV 1080p 60fps footage</h2>
      <Grid>
        {videoURLsHD.map(url => (
          <div key={url.split('/').pop()} className="video-wrapper">
            <iframe
              width="560"
              height="315"
              src={`${url}?rel=0`}
              frameBorder="0"
              allowFullScreen
              title="FPV HD video"
            />
          </div>
        ))}
      </Grid>
      <h2 style={{ marginTop: '2rem' }}>FPV DVR footage</h2>
      <Grid>
        {videoURLsDVR.map(url => (
          <div key={url.split('/').pop()} className="video-wrapper">
            <iframe
              width="560"
              height="315"
              src={`${url}?rel=0`}
              frameBorder="0"
              allowFullScreen
              title="FPV DVR video"
            />
          </div>
        ))}
      </Grid>
    </Layout>
  )
}

export default FPVVideos
