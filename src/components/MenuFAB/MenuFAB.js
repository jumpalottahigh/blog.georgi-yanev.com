import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
// import PostsList from '../PostsList'
import Img from 'gatsby-image'
import './MenuFAB.css'

const query = graphql`
  query allPosts {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            path
            title
            tags
            ogImage {
              publicURL
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

class NavigationBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: false }
  }

  UNSAFE_componentWillMount() {
    const { visible } = this.props
    this.setState({ visible })
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.visible !== this.state.visible) {
      this.setState({ visible: nextProps.visible })
    }
  }

  render() {
    const { visible } = this.state

    return (
      <StaticQuery
        query={query}
        render={data => {
          // const posts = data.allMarkdownRemark.edges

          return (
            <div className={`menu-sidebar ${visible ? 'slideIn' : 'slideOut'}`}>
              {/* TODO: Will improve visuals and publish after that */}
              {/* <PostsList
                showChevron="yes"
                showImage="no"
                showCategories="yes"
                showSearch="yes"
                posts={posts}
              /> */}
              {data.allMarkdownRemark.edges.map(page => (
                <Link
                  key={page.node.id}
                  to={page.node.frontmatter.path + '/'}
                  onClick={() => {
                    this.setState({ visible: false })
                  }}
                >
                  <div style={{ display: 'flex' }}>
                    <div style={{ width: '25%' }}>
                      {page.node.frontmatter.ogImage !== null ? (
                        <Img
                          fluid={
                            page.node.frontmatter.ogImage.childImageSharp.fluid
                          }
                          alt={page.node.frontmatter.title}
                        />
                      ) : (
                        <img src="/default-ogimage.png" alt="article preview" />
                      )}
                    </div>
                    <div
                      style={{
                        width: '75%',
                        display: 'flex',
                        flexFlow: 'column wrap',
                        paddingLeft: '1rem',
                        justifyContent: 'space-around',
                      }}
                    >
                      <h4>{page.node.frontmatter.title}</h4>
                      <p className="menu-quickinfo">
                        <strong
                          className={`post-preview-tags category ${
                            page.node.frontmatter.tags
                          }`}
                        >
                          {page.node.frontmatter.tags}
                        </strong>
                        <strong>{page.node.frontmatter.date}</strong>
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )
        }}
      />
    )
  }
}

export default class MenuFAB extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: false }
  }

  handleClick = e => {
    this.setState(prev => ({ visible: !prev.visible }))
  }

  render() {
    const { visible } = this.state
    return (
      <div>
        <div className="menu-fab" role="button" onClick={this.handleClick}>
          {visible ? (
            <span className="menu-fab__book">📖</span>
          ) : (
            <span className="menu-fab__book">📘</span>
          )}
        </div>
        <NavigationBar visible={visible} />
      </div>
    )
  }
}
