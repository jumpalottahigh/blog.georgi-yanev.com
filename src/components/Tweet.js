import React from 'react'

// Credit for the `getTwitterHtml` function goes to Kent C. Dodds. Adapted from his implementation at:
// https://github.com/kentcdodds/kentcdodds.com/blob/master/plugins/remark-embedder/get-twitter-html.js
function getTwitterHtml(string) {
  return fetch(
    `https://publish.twitter.com/oembed?url=${string}&omit_script=true`
  )
    .then(r => r.json())
    .then(r => {
      return [r.html]
        .map(s => s.replace(/\?ref_src=twsrc.*?fw/g, ''))
        .map(s => s.replace(/<br>/g, '<br />'))
        .join('')
        .trim()
    })
}

function Tweet({ id }) {
  if (!id) return null

  const [html, setHtml] = React.useState('')

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await getTwitterHtml(id)

      setHtml(result)
    }

    fetchData()
  }, [])

  return <div dangerouslySetInnerHTML={html} />
}

export default Tweet
