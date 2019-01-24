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

const Post = ({ post, showChevron, showImage, handleTagClick }) => {
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
              src={svgRightArrow}
              style={{ height: '24px', justifySelf: 'flex-end' }}
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
        case 'smart-home':
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

  handleFilterClick = e => {
    // Filter the posts
    this.setState({
      currentFilter: e.target.dataset.filter,
    })

    if (this.props.filterCategoriesFromURLParam == 'yes') {
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
    let results = []

    results = this.state.allPosts.filter(post => {
      if (post.node.frontmatter.tags.includes(searched)) {
        return post
      }
    })

    // Filter the posts
    this.setState({
      postsFilteredByTag: [...results],
      currentFilter: 'byTag',
    })
  }

  handleSearch = e => {
    let { value } = e.target
    let { posts } = this.props

    const searchResults = posts.filter(post => {
      if (
        post.node.frontmatter.title
          .toLowerCase()
          .includes(value.toLowerCase()) ||
        post.node.excerpt.toLowerCase().includes(value.toLowerCase())
      ) {
        return post
      }
    })

    this.setState({
      search: value,
      allPosts: searchResults,
      currentFilter: 'all',
    })
  }

  handleURLParamCategory = () => {
    // Grab search params from the URL
    let searchParams = new URLSearchParams(window.location.search)
    // Get category param value
    let category = searchParams.get('category')

    if (!category) return

    // Update the state filter with the value of the URL param
    this.setState({
      currentFilter: category,
    })
  }

  UNSAFE_componentWillMount() {
    // Filter pages into categories
    this.filter(this.props.posts)
  }

  componentDidMount() {
    // Setup ESC listener
    document.addEventListener(
      'keydown',
      e => {
        e.code === 'Escape'
          ? this.setState({ search: '' }, () => this.handleSearch(e))
          : null
      },
      false
    )

    if (this.props.filterCategoriesFromURLParam == 'yes') {
      // Read categories from URL params
      this.handleURLParamCategory()
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
              onClick={this.handleFilterClick}
            >
              All posts
            </button>
            {fpv.length > 0 && (
              <button
                className={`category fpv ${
                  currentFilter === 'fpv' ? 'active' : ''
                }`}
                data-filter="fpv"
                onClick={this.handleFilterClick}
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
                onClick={this.handleFilterClick}
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
                onClick={this.handleFilterClick}
              >
                Learnings
              </button>
            )}
            {smarthome.length > 0 && (
              <button
                className={`category smart-home ${
                  currentFilter === 'smarthome' ? 'active' : ''
                }`}
                data-filter="smarthome"
                onClick={this.handleFilterClick}
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
                onClick={this.handleFilterClick}
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
              onChange={this.handleSearch}
              value={search}
              placeholder="Search..."
              style={{ width: '100%', maxWidth: '300px' }}
              aria-label="Search"
            />
          </div>
        )}
        <hr />
        <ul className="list-none m-t-1">
          {currentFilter === 'all' && allPosts
            ? allPosts.map(post => (
                <Post
                  key={post.node.id}
                  post={post}
                  showChevron={showChevron}
                  showImage={showImage}
                  handleTagClick={this.handleTagClick}
                />
              ))
            : currentFilter === 'byTag'
            ? postsFilteredByTag.map(post => (
                <Post
                  key={post.node.id}
                  post={post}
                  showChevron={showChevron}
                  showImage={showImage}
                  handleTagClick={this.handleTagClick}
                />
              ))
            : this.state[currentFilter].map(post => (
                <Post
                  key={post.node.id}
                  post={post}
                  showChevron={showChevron}
                  showImage={showImage}
                  handleTagClick={this.handleTagClick}
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
  filterCategoriesFromURLParam="yes|no"
  posts={posts}
/> */
}
