import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/structure/layout'
import TinyLetterSignup from '../../components/TinyLetterSignUp'

const StyledFpvNewsPage = styled.div`
  h2 {
    text-align: center;
  }

  .fpv-news-list {
    display: flex;
    flex-flow: column wrap;

    .fpv-news-item {
      box-shadow: none;
      display: flex;
      flex-flow: column wrap;
      border: 1px solid #dedede;
      padding: 1rem;
      border-radius: 4px;
      margin-bottom: 1rem;

      time {
        color: #757575;
      }
    }

    .fpv-news-item:hover {
      color: #0175d8;
      opacity: 0.9;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 7px 18px,
        rgba(0, 0, 0, 0.22) 0px 7px 10px;
    }
  }
`

const FpvNewsPage = ({ data }) => (
  <Layout>
    <StyledFpvNewsPage>
      <h2>FPV News</h2>
      <div className="fpv-news-list">
        {data.fpvNews.edges.map(({ node: item }) => (
          <Link
            className="fpv-news-item"
            to={item.frontmatter.path}
            key={item.id}
          >
            <h4>{item.frontmatter.title}</h4>
            <time datetime={item.frontmatter.date}>
              {item.frontmatter.date}
            </time>
          </Link>
        ))}
      </div>
    </StyledFpvNewsPage>
    <TinyLetterSignup />
  </Layout>
)

export default FpvNewsPage

export const FpvNewsPageQuery = graphql`
  query FpvNewsPageQuery {
    fpvNews: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { fileAbsolutePath: { regex: "/content/fpv-news/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM YYYY")
            path
            title
          }
        }
      }
    }
  }
`
