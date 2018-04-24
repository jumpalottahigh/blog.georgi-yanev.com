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
  const videoURLs = [
    'https://www.youtube.com/embed/TlBxVzvS8js',
    'https://www.youtube.com/embed/pIYyGyrdoH8',
    'https://www.youtube.com/embed/qqBJc0__ulY',
    'https://www.youtube.com/embed/9oKEyDSOQOM',
    'https://www.youtube.com/embed/pIBymaAYaJA'
  ]

  return (
    <div>
      <h1>FPV DVR footage</h1>
      <Grid>
        {videoURLs.map(url => (
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
