import React from 'react'
import ScrollProgress from 'scrollprogress'

export default class ReadProgressLine extends React.Component {
  constructor() {
    super()
    this.state = {
      progress: 0
    }
  }

  componentDidMount() {
    this.progressObserver = new ScrollProgress((x, y) => {
      this.setState({ progress: y * 100 })
    })
  }

  componentWillUnmount() {
    this.progressObserver.destroy()
  }

  render() {
    const style = {
      backgroundColor: '#0175d8',
      height: '5px',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 9,
      width: `${this.state.progress}%`
    }

    return <div className="progress-bar" style={style} />
  }
}
