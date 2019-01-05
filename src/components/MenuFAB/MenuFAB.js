import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PostsList from '../PostsList'
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
          excerpt(pruneLength: 120)
          timeToRead
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            path
            title
            author
            category
            ogImage {
              publicURL
              childImageSharp {
                fluid(maxWidth: 670) {
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
          const posts = data.allMarkdownRemark.edges

          return (
            <div className={`menu-sidebar ${visible ? 'slideIn' : 'slideOut'}`}>
              <PostsList
                showChevron="yes"
                showImage="yes"
                showCategories="yes"
                showSearch="yes"
                posts={posts}
              />
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
