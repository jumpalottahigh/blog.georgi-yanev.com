import React from 'react'
import styled from 'styled-components'

const BUTTON_SIZE = '34px'

const LightModeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 47.5 47.5"
    style={{ width: BUTTON_SIZE, height: BUTTON_SIZE }}
  >
    <defs>
      <clipPath id="a">
        <path d="M5 37a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H5z" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
      <path d="M38 0H0v38h38V0z" fill="#ffcc4d" />
      <path
        d="M33.114 20.264c1.587.45 1.587 1.147.001 1.599l-.559.153-.556.164v-.005l-2.94.89L31.382 25h-.014l.493.322.497.359c1.291 1.023 1.008 1.687-.629 1.498l-.636-.09-.632-.09h-.002l-2.979-.338 1.77 3.18.31.558c.801 1.44.281 1.963-1.159 1.162l-.559-.28-.555-.281h-.002l-2.626-1.49.34 2.948v.003l.08.633.077.637c.188 1.634-.492 1.915-1.516.623l-.394-.5-2.257-2.85-.819 2.882-.002.004-.348 1.225c-.452 1.587-1.19 1.587-1.642 0l-.174-.613-.174-.612-.82-2.885-1.862 2.35h-.002l-.395.5-.397.502c-1.023 1.289-1.704 1.007-1.515-.63l.074-.633.073-.633v-.001l.346-2.98-3.177 1.77-.556.31c-1.442.804-1.964.282-1.16-1.16l.31-.556 1.77-3.177-2.98.346-.634.073-.634.074c-1.636.189-1.918-.492-.629-1.515l.502-.397.5-.395v-.002l2.35-1.861-2.885-.821-.612-.174-.613-.174c-1.587-.452-1.587-1.19 0-1.641l1.225-.35.004-.001 2.881-.82-2.85-2.257-.499-.395c-1.292-1.024-1.01-1.705.623-1.517l.637.08.633.08h.003l2.947.34L9 12.714v-.002l-.28-.555-.297-.56c-.8-1.438-.27-1.96 1.17-1.157l.56.309 3.184 1.77L13 9.539v-.001l-.08-.631-.077-.635c-.189-1.637.491-1.918 1.515-.627l.395.5.395.5 1.862 2.35.82-2.883.001-.001.174-.613.174-.613c.452-1.586 1.106-1.586 1.557 0L20 8.112v.004l.905 2.88 1.905-2.35.416-.5.408-.5c1.022-1.29 1.71-1.01 1.521.625l-.078.637-.077.632v.003l-.34 2.948L27.284 11h.002l.557-.28.557-.295c1.441-.803 1.963-.272 1.16 1.167l-.28.56-.28.558v.002l-1.49 2.628 2.948-.34h.003l.632-.08.637-.077c1.635-.188 1.915.492.625 1.515l-.5.395-.5.395-2.35 1.947 2.88.905h.004l1.225.264z"
        fill="#f4900c"
      />
      <path
        d="M28.63 21c0-5.32-4.312-9.63-9.63-9.63A9.628 9.628 0 0 0 9.37 21 9.629 9.629 0 0 0 19 30.629c5.318 0 9.63-4.311 9.63-9.63"
        fill="#ffe8b6"
      />
      <path
        d="M11-7v29l4 4h2l4-4V-7H11zM34 18c0 1-1 1-1 1h-7s-1 0-1-1V-7h9v25z"
        fill="#485359"
      />
      <path
        d="M29 12c0 1-1 1-1 1h-8c-1 0-1-1-1-1V-7h10v19zM7 15s0 1-1 1H1V-7h6v22z"
        fill="#292f33"
      />
      <path
        d="M13 9s0 1-1 1H6s-1 .001-1-1V-7h8V9zM32 3s0 1 1 1h4V-7h-5V3z"
        fill="#292f33"
      />
      <path
        d="M11 6H9v2h2V6zM9 2H7v2h2V2zM19 18h-2v2h2v-2zM19 14h-2v2h2v-2zM17 10h-2v2h2v-2zM27 9h-2v2h2V9zM25 5h-2v2h2V5zM32 15h-2v2h2v-2zM32 11h-2v2h2v-2z"
        fill="#ffcc4d"
      />
    </g>
  </svg>
)

const DarkModeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 47.5 47.5"
    style={{ width: BUTTON_SIZE, height: BUTTON_SIZE }}
  >
    <defs>
      <clipPath id="a">
        <path d="M5 37a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H5z" />
      </clipPath>
      <clipPath id="b">
        <path d="M0 38h38V0H0v38z" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
      <path d="M38 0H0v38h38V0z" fill="#269" />
      <path
        d="M11 1v29l4 4h2l4-4V1H11zM34 26c0 1-1.286 1-1.286 1h-6.428S25 27.001 25 26V1h9v25z"
        fill="#3f484c"
      />
      <path
        d="M29 18c0 1-1 1-1 1h-8c-1 0-1-1-1-1V1h10v17zM7 23s0 1-1 1H1V1h6v22z"
        fill="#292f33"
      />
      <path
        d="M13 15s0 1-1 1H6s-1 .001-1-1V1h8v14zM32 11s0 1 1 1h4V1h-5v10z"
        fill="#292f33"
      />
    </g>
    <path
      d="M13.75 42.5h-2.5V40h2.5v2.5zM13.75 32.5h-2.5V30h2.5v2.5zM11.25 37.5h-2.5V35h2.5v2.5zM23.75 15h-2.5v-2.5h2.5V15zM23.75 20h-2.5v-2.5h2.5V20zM21.25 25h-2.5v-2.5h2.5V25zM33.75 28.75h-2.5v-2.5h2.5v2.5zM31.25 33.75h-2.5v-2.5h2.5v2.5zM28.75 41.25h-2.5v-2.5h2.5v2.5zM40 18.75h-2.5v-2.5H40v2.5zM40 23.75h-2.5v-2.5H40v2.5z"
      fill="#ffcc4d"
    />
    <g clipPath="url(#b)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
      <path
        d="M7.5 30A2.5 2.5 0 0 0 5 32.5c0 1.13.755 2.074 1.784 2.383A2.943 2.943 0 0 1 6 35a3 3 0 1 1 0-6c.959 0 1.803.458 2.353 1.159A2.493 2.493 0 0 0 7.5 30M12 34.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0M9 25.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0M24 32a1 1 0 1 0-2 0 1 1 0 0 0 2 0M28 31.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0M33 34a1 1 0 1 0-2 0 1 1 0 0 0 2 0M33 29.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0"
        fill="#fff"
      />
    </g>
  </svg>
)

const Button = styled.button`
  cursor: pointer;
  transition: 125ms;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${BUTTON_SIZE};
  height: ${BUTTON_SIZE};
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

  transform: rotateY(0);
  transition: 575ms ease-in-out;

  &.flip {
    transform: rotateY(180deg);
  }
`

const LS_KEY_GY_BLOG_DARK_MODE = 'gy-blog-dark-mode'

export default class Mode extends React.Component {
  constructor(props) {
    super(props)
    this.state = { darkMode: false }
  }

  handleToggleMode = e => {
    // Apply transition animation on click
    let { target } = e

    if (target.tagName === 'path') {
      target.parentNode.parentNode.parentNode.classList.toggle('flip')
    } else {
      target.classList.toggle('flip')
    }

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

    return (
      <Button {...this.props} onClick={this.handleToggleMode}>
        {darkMode ? LightModeIcon : DarkModeIcon}
      </Button>
    )
  }
}
