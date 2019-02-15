import React, { useState, useEffect } from 'react'
import PostsList from '../PostsList'
import useAllMarkdownRemark from '../../hooks/use-allmarkdown'
import './MenuFAB.css'

const MenuFAB = () => {
  const [visible, setVisible] = useState(false)
  const posts = useAllMarkdownRemark()

  const handleClick = () => {
    setVisible(!visible)
  }

  return (
    <div>
      <div className="menu-fab" role="button" onClick={handleClick}>
        {visible ? (
          <span className="menu-fab__book">📖</span>
        ) : (
          <span className="menu-fab__book">📘</span>
        )}
      </div>
      <div className={`menu-sidebar ${visible ? 'slideIn' : 'slideOut'}`}>
        <PostsList
          showChevron="yes"
          showImage="yes"
          showCategories="yes"
          showSearch="yes"
          posts={posts}
        />
      </div>
    </div>
  )
}

export default MenuFAB
