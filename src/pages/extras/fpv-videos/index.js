import React from 'react'
import styled from 'styled-components'

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
    <div>
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
            />
          </div>
        ))}
      </Grid>
    </div>
  )
}

export default FPVVideos
