import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/structure/layout'
import TinyLetterSignup from '../components/TinyLetterSignUp'

const Section = styled.section`
  h3 {
    display: flex;
    align-items: center;
    padding: 24px 16px;
  }

  h4 {
    text-align: center;
  }

  @media (min-width: 768px) {
    h3 {
      max-width: 320px;
      margin: 1rem auto;
    }
  }
`

const NewsletterPage = () => (
  <Layout>
    <Section>
      <TinyLetterSignup />
      <h4>👇 Check out the blog posts, quick tips or FPV news 👇</h4>
      <Link to="/posts/">
        <h3 className="category fpv">Blog Posts</h3>
      </Link>
      <Link to="/quick-tips/">
        <h3 className="category learning">Quick Tips</h3>
      </Link>
      <Link to="/fpv-news/">
        <h3 className="category projects">FPV News</h3>
      </Link>
    </Section>
  </Layout>
)

export default NewsletterPage
