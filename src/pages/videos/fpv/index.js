import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Fade } from 'react-reveal'

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

const Section = styled.section`
  padding-bottom: 2rem;

  h2 {
    text-align: center;

    a:hover,
    a:active {
      box-shadow: inset 0 -2rem 0px 0px #0175d8;
    }

    a:focus {
      box-shadow: inset 0 -2.2rem 0px 0px #0175d8;
    }
  }
`

const FPVVideos = () => {
  const videoIDsHD = [
    '51d_BzrWnKs',
    'W_TeQMJbjgM',
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

  const eachineTrashcanFootage = [
    'D4syF-9L6ho',
    'bJesPg1aYgg',
    'mre72vT9EnA',
    'rKG9t7o2xws',
    'RNN3yQCMJnE',
    'FiHDv3N1oPk',
  ]

  const snapper7Footage = [
    '68VTNfrI8j4',
    '-ZfPmStAWps',
    'jxPxh4PmJlA',
    '5qibdPcrK1k',
  ]

  return (
    <Layout>
      <Section>
        <h2>
          <Link to="/fpv/upgrading-your-wizard-part-2/">Wizard x220</Link> &amp;{' '}
          <Link to="/fpv/build-a-quad/">Phoenix</Link>
        </h2>
        <Grid>
          {videoIDsHD.map(id => (
            <Fade key={id}>
              <Video
                src={id}
                width="560"
                height="315"
                title={`FPV HD video - ${id}`}
              />
            </Fade>
          ))}
        </Grid>
        <h2 style={{ marginTop: '2rem' }}>
          <Link to="/fpv/unbox-review-setup-eachine-trashcan/">
            Eachine Trashcan
          </Link>
        </h2>
        <Grid>
          {eachineTrashcanFootage.map(id => (
            <Fade key={id}>
              <Video
                src={id}
                width="560"
                height="315"
                title={`Eachine Trashcan video - ${id}`}
              />
            </Fade>
          ))}
        </Grid>
        <h2 style={{ marginTop: '2rem' }}>
          <a href="https://bit.ly/snapper-7" target="_blank" rel="noreferrer">
            Snapper7
          </a>
        </h2>
        <Grid>
          {snapper7Footage.map(id => (
            <Fade key={id}>
              <Video
                src={id}
                width="560"
                height="315"
                title={`Snapper7 video - ${id}`}
              />
            </Fade>
          ))}
        </Grid>
      </Section>
    </Layout>
  )
}

export default FPVVideos
