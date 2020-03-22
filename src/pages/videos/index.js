import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../../components/structure/layout'

const Section = styled.section`
  h2 {
    text-align: center;
  }

  h3 {
    display: flex;
    align-items: center;
    padding: 24px 16px;
  }

  @media (min-width: 768px) {
    h3 {
      max-width: 320px;
      margin: 1rem auto;
    }
  }
`

const VideosPage = () => {
  return (
    <Layout>
      <Section>
        <h2>Choose a category:</h2>
        <Link to="/videos/fpvtips/">
          <h3 className="category fpv">FPVtips</h3>
        </Link>
        <Link to="/videos/fpv/">
          <h3 className="category fpv">Raw FPV drones footage</h3>
        </Link>
        <Link to="/videos/webdev/">
          <h3 className="category learning">Web Development Tips</h3>
        </Link>
        <Link to="/videos/live-coding/">
          <h3 className="category smarthome">Coding Live Streams</h3>
        </Link>
      </Section>
    </Layout>
  )
}

export default VideosPage
