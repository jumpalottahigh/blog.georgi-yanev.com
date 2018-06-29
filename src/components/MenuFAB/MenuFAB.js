import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import './MenuFAB.css'

class NavigationBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: false }
  }

  UNSAFE_componentWillMount() {
    const { data, visible } = this.props
    this.setState({ data, visible })
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.visible !== this.state.visible) {
      this.setState({ visible: nextProps.visible })
    }
  }

  render() {
    const data = this.state.data
    const visible = this.state.visible

    return (
      <div className={`menu-sidebar ${visible ? 'slideIn' : 'slideOut'}`}>
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
                  <img
                    src={page.node.frontmatter.ogImage.publicURL}
                    alt="article preview"
                  />
                ) : (
                  <img src="/default-ogimage.jpg" alt="article preview" />
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
  }
}

export default class MenuFAB extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '{ }', visible: false }
  }

  handleClick = e => {
    this.setState(prev => ({ visible: !prev.visible }))
  }

  render() {
    return (
      <div>
        <div className="menu-fab" role="button" onClick={this.handleClick}>
          {this.state.visible ? '{ ... }' : '{  }'}
        </div>
        <NavigationBar data={this.props.data} visible={this.state.visible} />
      </div>
    )
  }
}
