import React from 'react'
import { DiscussionEmbed } from 'disqus-react'

const Disqus = ({ shortname, config }) => {
  const [loadDisqus, setLoadDisqus] = React.useState(false)

  return (
    <React.Fragment>
      {loadDisqus ? (
        <DiscussionEmbed shortname={shortname} config={config} />
      ) : (
        <button
          className="fpv category"
          onClick={() => {
            setLoadDisqus(!loadDisqus)
          }}
        >
          Leave a comment
        </button>
      )}
    </React.Fragment>
  )
}

export default Disqus
