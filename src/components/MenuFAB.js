import React from 'react'
import styled from 'styled-components'
import PostsList from './PostsList'
import useAllMarkdownRemark from '../hooks/use-allmarkdown'
import useWindowSize from '../hooks/use-windowsize'

const StyledMenuFab = styled.div`
  .menu-sidebar {
    transform: translateX(-150px);
    transition: transform 200ms ease-in;
    background-color: rgba(255, 255, 255);
    overflow-y: auto;
    pointer-events: all;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 2;
    padding: 2rem 0.5rem;
  }

  .menu-sidebar a {
    text-decoration: none;
  }

  .menu-sidebar .menu-quickinfo {
    margin: 0;
    font-size: 0.75rem;
    display: flex;
    justify-content: space-between;
  }

  .menu-sidebar .menu-quickinfo .post-preview-category {
    padding: 0 10px;
  }

  .menu-sidebar.slideIn {
    transform: translateX(0);
  }

  .menu-sidebar.slideOut {
    transform: translateX(-100%);
  }

  .menu-fab__book {
    font-size: 32px;
  }

  .menu-fab {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    line-height: 1rem;
    background-color: #d2d2d2;
    bottom: 35px;
    cursor: pointer;
    user-select: none;
    position: fixed;
    right: 35px;
    border-radius: 50%;
    box-shadow: 0px 7px 18px rgba(0, 0, 0, 0.25),
      0px 7px 10px rgba(0, 0, 0, 0.22);
    z-index: 3;
  }

  @media (min-width: 768px) {
    .menu-fab {
      display: none;
      z-index: initial;
    }
  }
`

const MenuFAB = () => {
  const [visible, setVisible] = React.useState(false)
  const posts = useAllMarkdownRemark()
  const windowSize = useWindowSize()

  const handleClick = () => {
    setVisible(!visible)
  }

  // return windowSize.width > 767 ? null : (
  return (
    <StyledMenuFab>
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
    </StyledMenuFab>
  )
}

export default MenuFAB
