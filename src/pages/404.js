import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/structure/layout'

const Section = styled.section`
  h2 {
    text-align: center;

    span {
      color: #23464c;
    }
  }

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

const NotFoundPage = () => (
  <Layout>
    <Section>
      <h2 className="article-update-notification">
        <span>💩 404 💩</span>
        <br />
        <em>This page has been moved or no longer exists</em>
      </h2>
      <h4>👇 Check out all blog posts or the quick tips page 👇</h4>
      <Link to="/news/">
        <h3 className="category fpv">Blog Posts</h3>
      </Link>
      <Link to="/quick-tips/">
        <h3 className="category learning">Quick Tips</h3>
      </Link>
    </Section>
  </Layout>
)

export default NotFoundPage
