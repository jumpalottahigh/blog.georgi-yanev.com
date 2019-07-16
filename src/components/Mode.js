import React from 'react'
import styled from 'styled-components'

const BUTTON_SIZE = '34px'

const Button = styled.button`
  cursor: pointer;
  transition: 125ms;
  font-size: 24px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${BUTTON_SIZE};
  height: ${BUTTON_SIZE};
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

  .light-mode-icon,
  .dark-mode-icon {
    width: ${BUTTON_SIZE};
    height: ${BUTTON_SIZE};
    border-radius: 50%;
    transition: 375ms ease-in-out;
  }

  .light-mode-icon {
    background-color: #e7e4e4;
  }
  .dark-mode-icon {
    background-color: var(--dark-mode-bg-color);
  }
`

const Mode = props => {
  const [darkMode, setDarkMode] = React.useState(false)

  const LS_KEY_GY_BLOG_DARK_MODE = 'gy-blog-dark-mode'
  const LightModeIcon = <div className="light-mode-icon" />
  const DarkModeIcon = <div className="dark-mode-icon" />

  const handleToggleMode = () => {
    // Update body class
    !darkMode
      ? document.body.classList.add('dark-mode')
      : document.body.classList.remove('dark-mode')

    // Save to LS
    self.localStorage.setItem(LS_KEY_GY_BLOG_DARK_MODE, !darkMode)

    // Update state
    setDarkMode(!darkMode)
  }

  React.useEffect(() => {
    let darkModeFromLS = JSON.parse(
      self.localStorage.getItem(LS_KEY_GY_BLOG_DARK_MODE)
    )

    if (darkModeFromLS) {
      setDarkMode(darkModeFromLS)

      // Update body class
      darkModeFromLS
        ? document.body.classList.add('dark-mode')
        : document.body.classList.remove('dark-mode')
    }
  }, [])

  return (
    <Button
      {...props}
      onClick={handleToggleMode}
      aria-label="Dark/Light Mode Toggle Switch"
      title="Change between light and dark mode"
    >
      {darkMode ? LightModeIcon : DarkModeIcon}
    </Button>
  )
}

export default Mode
