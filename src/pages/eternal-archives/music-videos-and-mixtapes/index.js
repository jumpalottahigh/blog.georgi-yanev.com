import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../../../components/structure/layout'
import Video from '../../../components/Video/Video'

const Grid = styled.div`
  display: grid;
  grid-gap: 30px;
  min-width: 380px;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const MusicVideosAndMixtapesPage = () => (
  <Layout>
    <Helmet title="Music Videos and Mixtapes" />
    <h1>Music Videos and Mixtapes</h1>

    <div className="disclaimer-container">
      <span className="year">~ year: 2003 - 2006 | Georgi's age: 18 - 21</span>
      <span className="disclaimer">
        Unedited things the way they were in the late 90s and early 2000s
      </span>
    </div>

    <div>Music videos of some of Jumpalottahigh and Blink E's music.</div>

    <Grid>
      <Video src="oGm_qu_eHnU" title="youtube video clip 1" />
      <Video src="b9ODFpJFFLk" title="youtube video clip 1" />
      <Video src="oUtx0i-p3Og" title="youtube video clip 1" />
      <Video src="zV4KASgWwjs" title="youtube video clip 1" />
      <Video src="qs8ZZNA_Oso" title="youtube video clip 1" />
      <Video src="oYB4gvGNyC4" title="youtube video clip 1" />
    </Grid>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default MusicVideosAndMixtapesPage
