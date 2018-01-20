import React from 'react'
import Link from 'gatsby-link'
import './MenuFAB.css'

const NavigationBar = ({ data, visible }) => (
  <div className={`menu-sidebar ${visible ? 'slideIn' : 'slideOut'}`}>
    {data.allMarkdownRemark.edges.map(page => (
      <Link key={page.node.id} to={page.node.frontmatter.path + '/'}>
        <h4>{page.node.frontmatter.title}</h4>
        <p className="menu-quickinfo">
          <strong>{page.node.frontmatter.date}</strong>
          <strong className="post-preview-tags">
            {page.node.frontmatter.tags}
          </strong>
        </p>
      </Link>
    ))}
  </div>
)

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
      <div className="menu-wrapper">
        <div className="menu-fab" role="button" onClick={this.handleClick}>
          {this.state.visible ? '{ ... }' : '{  }'}
        </div>
        <NavigationBar data={this.props.data} visible={this.state.visible} />
      </div>
    )
  }
}
