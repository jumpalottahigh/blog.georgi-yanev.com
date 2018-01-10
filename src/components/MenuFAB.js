import React from 'react'
import './MenuFAB.css'

const NavigationBar = ({ visible }) => (
  <div id="navbar" className={visible ? 'slideIn' : 'slideOut'}>
    Hello
  </div>
)

export default class MenuFAB extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '{ }', visible: false }
  }

  handleClick = e => {
    console.log(e.target)
    this.setState(prev => ({ visible: !prev.visible }))
    // this.visible = !this.visible
    // this.setState({ text: '{ --- }' })
  }

  render() {
    return (
      <div>
        <div className="menu-fab" role="button" onClick={this.handleClick}>
          {this.state.visible ? '{ . }' : '{ ... }'}
          {/* {`{ }`} */}
          {/* <span>{`{..`}</span>
      <span>{`..}`}</span> */}
        </div>
        <NavigationBar visible={this.state.visible} />
      </div>
    )
  }
}
