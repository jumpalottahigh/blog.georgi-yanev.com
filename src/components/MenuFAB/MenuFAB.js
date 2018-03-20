import React from 'react'
import Link from 'gatsby-link'
import './MenuFAB.css'

class NavigationBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: false }
  }

  componentWillMount() {
    const { data, visible } = this.props
    this.setState({ data, visible })
  }

  componentWillReceiveProps(nextProps) {
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
