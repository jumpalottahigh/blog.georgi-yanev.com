import React from 'react'
import styled from 'styled-components'
import Layout from '../components/structure/layout'

const Section = styled.section`
  text-align: center;
`

const FPVGearListPage = () => (
  <Layout>
    <Section>
      <h1>Recommended gear for flying FPV drones</h1>
      <p>There's essentially 3 variants of this page.</p>
      <ol>
        <li>I'm new and need help.</li>
        <li>Been in the hobby for a bit. Midrange.</li>
        <li>
          Top of the line. Money is no object and I only care about the best.
        </li>
      </ol>
      <p>Coming soon!</p>
    </Section>
  </Layout>
)

export default FPVGearListPage
