import React from 'react'

function useDarkMode() {
  const isClient = typeof window === 'object'
  const [darkMode, setDarkMode] = React.useState(
    isClient ? window.matchMedia('(prefers-color-scheme: dark)').matches : false
  )

  // change to use hook: https://dev.to/httpjunkie/preferred-color-scheme-in-react-47e3
  // obey localStorage settings first
  // if there is no value for `gy-blog-dark-mode`, set it on first load based on user preferences from this hook

  React.useEffect(() => {
    if (!isClient) {
      return false
    }

    console.log('we are in the browser')

    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    darkModeMediaQuery.addListener(e => {
      const darkModeOn = e.matches
      console.log(`Dark mode is ${darkModeOn ? '🌒 on' : '☀️ off'}.`)

      if (darkModeOn) {
        setDarkMode(true)
      } else {
        setDarkMode(false)
      }
    })

    return () => {
      darkModeMediaQuery.removeEventListener()
    }
  }, [])

  return darkMode
}

export default useDarkMode
