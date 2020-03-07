import React from 'react'
import { navigate } from 'gatsby'

const ArticleTags = ({ tags }) => (
  <div style={{ display: 'flex', flexFlow: 'row wrap', marginBottom: '1rem' }}>
    {tags.map(tag => (
      <span
        key={tag}
        data-filter={tag}
        className="post-preview-tag"
        style={{
          whiteSpace: 'nowrap',
          marginTop: 0,
          marginRight: '0.40rem',
          wordBreak: 'keep-all',
          wordSpacing: 'normal',
          fontSize: '0.9rem',
        }}
        onClick={() => {
          navigate(`/posts/?tag=${tag}`)
        }}
      >
        #{tag}
      </span>
    ))}
  </div>
)

export default ArticleTags
