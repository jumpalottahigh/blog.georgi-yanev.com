import React from 'react'
import { navigate } from 'gatsby'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import svgRightArrow from '../images/right-arrow.svg'

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const currentMonth = months[new Date().getMonth()]
const currentYear = new Date().getFullYear()

const ALL_CATEGORIES = ['fpv', 'projects', 'learning', 'stories', 'smarthome']

const Post = ({
  post,
  showChevron,
  showImage,
  handleTagClick,
  handleCategoryClick,
}) => {
  return (
    <li className="post-preview">
      <Link to={post.node.frontmatter.path + '/'}>
        <h4>
          {currentMonth === post.node.frontmatter.date.split(' ')[0] &&
          currentYear === parseInt(post.node.frontmatter.date.split(' ')[2])
            ? '🆕 '
            : null}
          {post.node.frontmatter.title}
        </h4>
        <div className="post-preview-content">
          {showImage === 'yes' || showImage === 'hover' ? (
            <div
              className={`post-preview-image ${showImage === 'hover' &&
                'hover'}`}
            >
              {post.node.frontmatter.ogImage !== null ? (
                <Img
                  fluid={post.node.frontmatter.ogImage.childImageSharp.fluid}
                  alt={post.node.frontmatter.title}
                />
              ) : (
                <img
                  src="/default-ogimage.png"
                  alt={post.node.frontmatter.title}
                />
              )}
            </div>
          ) : null}
          <p
            className={
              showImage === 'yes' || showImage === 'hover'
                ? 'post-preview-excerpt'
                : ''
            }
          >
            {post.node.excerpt}
          </p>
        </div>
      </Link>
      <div className="post-preview-note">
        <div>
          <strong>{post.node.timeToRead} min</strong> read by{' '}
          {post.node.frontmatter.author} on{' '}
          <strong>{post.node.frontmatter.date}</strong> in{' '}
          <strong
            className={`post-preview-category category ${
              post.node.frontmatter.category
            }`}
            data-filter={post.node.frontmatter.category}
            onClick={handleCategoryClick}
          >
            {post.node.frontmatter.category}
          </strong>
          {post.node.frontmatter.tags && post.node.frontmatter.tags.length > 1 && (
            <p
              style={{
                margin: 0,
                fontSize: '0.8rem',
                display: 'flex',
                flexFlow: 'row wrap',
              }}
            >
              {post.node.frontmatter.tags.map(tag => (
                <React.Fragment key={post.node.frontmatter.id + tag}>
                  <span
                    onClick={handleTagClick}
                    data-filter={tag}
                    className="post-preview-tag"
                  >
                    {`#${tag}`}
                  </span>
                </React.Fragment>
              ))}
            </p>
          )}
        </div>
        {showChevron === 'yes' && (
          <Link to={post.node.frontmatter.path + '/'}>
            <img
              style={{ height: '24px', justifySelf: 'flex-end' }}
              src={svgRightArrow}
              alt="Arrow pointing right"
            />
          </Link>
        )}
      </div>
    </li>
  )
}

export default class PostsList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',
      currentFilter: 'all',
      allPosts: [...this.props.posts],
      learning: [],
      fpv: [],
      projects: [],
      smarthome: [],
      stories: [],
      postsFilteredByTag: [],
    }
  }

  filter = pages => {
    let learning = []
    let fpv = []
    let projects = []
    let smarthome = []
    let stories = []

    // Filter the data
    pages.forEach(page => {
      switch (page.node.frontmatter.category) {
        case 'learning':
          learning.push(page)
          break
        case 'smarthome':
          smarthome.push(page)
          break
        case 'fpv':
          fpv.push(page)
          break
        case 'projects':
          projects.push(page)
          break
        case 'stories':
          stories.push(page)
          break
        default:
          break
      }
    })

    this.setState({
      learning,
      fpv,
      projects,
      smarthome,
      stories,
    })
  }

  filterByTag = tag => {
    let results = []

    results = this.state.allPosts.filter(post => {
      if (post.node.frontmatter.tags.includes(tag)) {
        return post
      }
    })

    return results
  }

  handleCategoryFilterClick = e => {
    // Filter the posts
    this.setState({
      currentFilter: e.target.dataset.filter,
    })

    // Update the URL params
    if (this.props.filterCategoriesAndTagsFromURLParams == 'yes') {
      // Update the URL to reflect the filtred posts
      let searchParams = new URLSearchParams(
        `category=${e.target.dataset.filter}`
      )
      navigate(`${location.pathname}?${searchParams.toString()}`)
    }
  }

  handleTagClick = e => {
    // Searched for
    let searched = e.target.dataset.filter
    let postsFilteredByTag = this.filterByTag(searched)

    // Filter the posts
    this.setState({
      postsFilteredByTag,
      currentFilter: 'byTag',
    })

    // Update the URL params
    if (this.props.filterCategoriesAndTagsFromURLParams == 'yes') {
      // Update the URL to reflect the filtred posts
      let searchParams = new URLSearchParams(`tag=${e.target.dataset.filter}`)
      navigate(`${location.pathname}?${searchParams.toString()}`)
    }
  }

  handleSearch = e => {
    let value = e && e.target ? e.target.value : this.state.search
    let { posts } = this.props

    if (typeof value === 'undefined') return

    const searchResults = posts.filter(post => {
      // Match search in title, excerpt, tags, category or path
      if (
        post.node.frontmatter.title
          .toLowerCase()
          .includes(value.toLowerCase()) ||
        post.node.excerpt.toLowerCase().includes(value.toLowerCase()) ||
        post.node.frontmatter.tags
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase()) ||
        post.node.frontmatter.category
          .toLowerCase()
          .includes(value.toLowerCase()) ||
        post.node.frontmatter.path.toLowerCase().includes(value.toLowerCase())
      ) {
        return post
      } else {
        return null
      }
    })

    this.setState({
      search: value,
      allPosts: searchResults,
      currentFilter: 'all',
    })
  }

  handleURLParamsCategoryAndTag = () => {
    // Grab search params from the URL
    let searchParams = new URLSearchParams(window.location.search)
    // Get category param value
    let category = searchParams.get('category')
    // Get tag param value
    let tag = searchParams.get('tag')

    // Update the state filter with the value of the URL param
    if (category && ALL_CATEGORIES.includes(category)) {
      this.setState({
        currentFilter: category,
      })
    } else if (tag) {
      let postsFilteredByTag = this.filterByTag(tag)
      this.setState({
        currentFilter: 'byTag',
        postsFilteredByTag,
      })
    } else {
      return
    }
  }

  componentDidMount() {
    // Filter pages into categories
    this.filter(this.props.posts)

    if (this.props.filterCategoriesAndTagsFromURLParams == 'yes') {
      // Read categories from URL params
      this.handleURLParamsCategoryAndTag()
    }
  }

  render() {
    const {
      allPosts,
      currentFilter,
      postsFilteredByTag,
      fpv,
      projects,
      learning,
      smarthome,
      stories,
      search,
    } = this.state
    const { showCategories, showChevron, showImage, showSearch } = this.props

    return (
      <div>
        {showCategories === 'yes' && (
          <div className="category-container">
            <button
              className={`category all ${
                currentFilter === 'all' ? 'active' : ''
              }`}
              data-filter="all"
              onClick={this.handleCategoryFilterClick}
            >
              All posts
            </button>
            {fpv.length > 0 && (
              <button
                className={`category fpv ${
                  currentFilter === 'fpv' ? 'active' : ''
                }`}
                data-filter="fpv"
                onClick={this.handleCategoryFilterClick}
              >
                FPV
              </button>
            )}
            {projects.length > 0 && (
              <button
                className={`category projects ${
                  currentFilter === 'projects' ? 'active' : ''
                }`}
                data-filter="projects"
                onClick={this.handleCategoryFilterClick}
              >
                Projects
              </button>
            )}
            {learning.length > 0 && (
              <button
                className={`category learning ${
                  currentFilter === 'learning' ? 'active' : ''
                }`}
                data-filter="learning"
                onClick={this.handleCategoryFilterClick}
              >
                Learnings
              </button>
            )}
            {smarthome.length > 0 && (
              <button
                className={`category smarthome ${
                  currentFilter === 'smarthome' ? 'active' : ''
                }`}
                data-filter="smarthome"
                onClick={this.handleCategoryFilterClick}
              >
                Smarthome
              </button>
            )}
            {stories.length > 0 && (
              <button
                className={`category stories ${
                  currentFilter === 'stories' ? 'active' : ''
                }`}
                data-filter="stories"
                onClick={this.handleCategoryFilterClick}
              >
                Stories
              </button>
            )}
          </div>
        )}
        {showSearch === 'yes' && (
          <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            <input
              type="text"
              onKeyDown={e => {
                if (e.keyCode === 27) {
                  this.setState({ search: '' }, e => this.handleSearch(e))
                  // reset any query params from the page url
                  navigate(`${location.pathname}`)
                }
              }}
              onChange={this.handleSearch}
              value={search}
              placeholder="Search..."
              style={{ width: '100%', maxWidth: '300px' }}
              aria-label="Search"
            />
          </div>
        )}
        {showCategories === 'yes' || showSearch === 'yes' ? <hr /> : null}
        <ul className="list-none m-t-1">
          {currentFilter === 'all' && allPosts
            ? allPosts.map(post => (
                <Post
                  key={post.node.id}
                  post={post}
                  showChevron={showChevron}
                  showImage={showImage}
                  handleTagClick={this.handleTagClick}
                  handleCategoryClick={this.handleCategoryFilterClick}
                />
              ))
            : currentFilter === 'byTag' && postsFilteredByTag
            ? postsFilteredByTag.map(post => (
                <Post
                  key={post.node.id}
                  post={post}
                  showChevron={showChevron}
                  showImage={showImage}
                  handleTagClick={this.handleTagClick}
                  handleCategoryClick={this.handleCategoryFilterClick}
                />
              ))
            : this.state[currentFilter].map(post => (
                <Post
                  key={post.node.id}
                  post={post}
                  showChevron={showChevron}
                  showImage={showImage}
                  handleTagClick={this.handleTagClick}
                  handleCategoryClick={this.handleCategoryFilterClick}
                />
              ))}
        </ul>
      </div>
    )
  }
}

// Example usage:
{
  /* <PostsList
  showChevron="yes|no"
  showImage="yes|hover|no"
  showCategories="yes|no"
  showSearch="yes|no"
  filterCategoriesAndTagsFromURLParams="yes|no"
  posts={posts}
/> */
}
