import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  cursor: pointer;
  transition: 125ms;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  font-size: 24px;
  background-color: ${props => (props.bgColor ? props.bgColor : '#fff')};
  box-shadow: ${props =>
    props.noShadow
      ? 'none'
      : 'rgba(0, 0, 0, 0.2) 0px 1px 5px 0px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px;'};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '50%')};
  border: ${props => (props.border ? props.border : 'none')};

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  /* TODO: Figure out how to fire this animation only on click */
  /* transform: rotateZ(360deg);
  transition: transform 1s ease-in-out; */
`

const LS_KEY_GY_BLOG_DARK_MODE = 'gy-blog-dark-mode'

export default class Mode extends React.Component {
  constructor(props) {
    super(props)
    this.state = { darkMode: false }
  }

  handleToggleMode = () => {
    this.setState(prev => {
      // Update body class
      !prev.darkMode
        ? document.body.classList.add('dark-mode')
        : document.body.classList.remove('dark-mode')
      // Save to LS
      self.localStorage.setItem(LS_KEY_GY_BLOG_DARK_MODE, !prev.darkMode)
      // Update state
      return { darkMode: !prev.darkMode }
    })
  }

  componentDidMount = () => {
    let darkModeFromLS = JSON.parse(
      self.localStorage.getItem(LS_KEY_GY_BLOG_DARK_MODE)
    )

    if (darkModeFromLS) {
      this.setState({
        darkMode: darkModeFromLS,
      })

      // Update body class
      darkModeFromLS
        ? document.body.classList.add('dark-mode')
        : document.body.classList.remove('dark-mode')
    }
  }

  render() {
    const { darkMode } = this.state
    const { lightModeEmoji, darkModeEmoji } = this.props

    return (
      <Button {...this.props} onClick={this.handleToggleMode}>
        {darkMode ? lightModeEmoji : darkModeEmoji}
      </Button>
    )
  }
}
