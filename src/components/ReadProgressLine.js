import React from 'react'
import ScrollProgress from 'scrollprogress'

function ReadProgressLine() {
  const [progress, setProgress] = React.useState(0)

  const initialStyle = {
    height: '5px',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 9,
  }

  React.useEffect(() => {
    const progressObserver = new ScrollProgress((x, y) => {
      setProgress(y * 100)
    })

    return () => {
      progressObserver.destroy()
    }
  })

  return (
    <div
      className="progress-bar"
      style={{ ...initialStyle, width: `${progress}%` }}
    />
  )
}

export default ReadProgressLine
