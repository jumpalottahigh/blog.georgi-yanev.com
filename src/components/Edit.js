import React from 'react'
import styled from 'styled-components'

const LINK_SIZE = '34px'

const EditLink = styled.a`
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${LINK_SIZE};
  height: ${LINK_SIZE};
  background-color: initial;
  box-shadow: none !important;
  margin-right: 0.5rem;
`

const Edit = ({ path, date }) => {
  let url = ''

  if (!path || !date) {
    url =
      'https://github.com/jumpalottahigh/blog.georgi-yanev.com/tree/master/content/posts'
  } else {
    let category = path.split('/')[1]
    let slug = path.split('/')[2]

    url = `https://github.com/jumpalottahigh/blog.georgi-yanev.com/edit/master/content/posts/${category}/${date}-${slug}/index.md`
  }

  return (
    <EditLink
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Edit on GitHub"
      title="Suggest an edit"
    >
      ✏️
    </EditLink>
  )
}

export default Edit
