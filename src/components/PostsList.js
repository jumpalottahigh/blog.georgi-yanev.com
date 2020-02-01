import React from 'react'
import { Link, navigate } from 'gatsby'
import Img from 'gatsby-image'
import AdSense from 'react-adsense'
import svgRightArrow from '../images/right-arrow.svg'

const ALL_CATEGORIES = ['fpv', 'projects', 'learning', 'stories', 'smarthome']

const ALL_DESCRIPTION = {
  all: 'All the things...',
  fpv: 'Articles about building and flying FPV racing drones...',
  projects: 'Write ups on some small oddball side projects.',
  learning: 'Tips, mentoring, year-in-review, talks and goals.',
  smarthome: 'Exactly how it sounds...',
  stories: 'Personal short stories with a meaning.',
}

const Post = ({
  post,
  showChevron,
  showImage,
  handleTagClick,
  handleCategoryClick,
  variant,
}) => {
  // Posts are considered fresh if published within the last 31 days
  const freshDuration = 60 * 60 * 24 * 31 * 1000 // 1 month
  const now = Date.now()
  const postDate = new Date(post.node.frontmatter.date).getTime()

  const isFresh = postDate + freshDuration > now

  return (
    <li
      className={`post-preview ${
        variant === 'small-thumbnails' ? 'small-thumbnails' : ''
      }`}
    >
      <Link to={post.node.frontmatter.path + '/'}>
        <h4>
          {isFresh && '🆕 '}
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
            className={`post-preview-category category ${post.node.frontmatter.category}`}
            data-filter={post.node.frontmatter.category}
            onClick={handleCategoryClick}
          >
            {post.node.frontmatter.category}
          </strong>
          {post.node.frontmatter.tags &&
            post.node.frontmatter.tags.length >= 1 && (
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
      allTags: {},
      renderTags: false,
    }
  }

  filter = pages => {
    let learning = []
    let fpv = []
    let projects = []
    let smarthome = []
    let stories = []
    let allTags = {}

    pages.forEach(page => {
      // Sort the pages by category
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

      // Create a list of all tags and the amount of occurances they have
      let tags = page.node.frontmatter.tags
      for (let tag of tags) {
        if (!allTags[tag]) {
          allTags[tag] = 1
        } else {
          allTags[tag]++
        }
      }
    })

    this.setState({
      learning,
      fpv,
      projects,
      smarthome,
      stories,
      allTags,
    })
  }

  filterByTag = tag => {
    let results = []

    // TODO: fix a bug where after having searched, trying to filter returns 0 results. The expected behaviour is to have search reset when clicking a tag

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
    // TODO: fix a bug where after having searched, trying to filter returns 0 results. The expected behaviour is to have search reset when clicking a tag
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
    // Filter pages into categories and tags
    this.filter(this.props.posts)

    if (this.props.filterCategoriesAndTagsFromURLParams == 'yes') {
      // Read categories from URL params
      this.handleURLParamsCategoryAndTag()
    }
  }

  render() {
    const {
      allPosts,
      allTags,
      currentFilter,
      postsFilteredByTag,
      fpv,
      projects,
      learning,
      smarthome,
      stories,
      search,
      renderTags,
    } = this.state

    const {
      showCategories,
      showChevron,
      showImage,
      showSearch,
      showTags,
      withAds,
    } = this.props

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
                FPV Drones
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
        {showTags === 'yes' && (
          <div>
            <a
              style={{ cursor: 'pointer' }}
              onClick={e => {
                e.preventDefault
                this.setState(prevState => ({
                  renderTags: !prevState.renderTags,
                }))
              }}
            >
              {renderTags ? 'Select a tag:' : 'Filter by tag'}
            </a>

            {renderTags && (
              <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
                {Object.keys(allTags).map(item => (
                  <span
                    key={item}
                    data-filter={item}
                    className="post-preview-tag"
                    style={{
                      whiteSpace: 'nowrap',
                      margin: '0.25rem',
                      wordBreak: 'keep-all',
                      wordSpacing: 'normal',
                    }}
                    onClick={this.handleTagClick}
                  >
                    #{item} ({allTags[item]})
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
        {showSearch === 'yes' && (
          <React.Fragment>
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
            <em>{ALL_DESCRIPTION[currentFilter]}</em>
          </React.Fragment>
        )}
        {showCategories === 'yes' ||
        showSearch === 'yes' ||
        showTags === 'yes' ? (
          <hr />
        ) : null}
        <ul className="list-none m-t-1">
          {currentFilter === 'all' && allPosts
            ? allPosts.map((post, index) => {
                // Explicitly don't render stories with all the other posts
                // stories are a minor publishing and should only exist when that category is active
                if (post.node.frontmatter.category !== 'stories') {
                  return index > 0 && withAds === 'yes' && index % 4 === 0 ? (
                    <AdSense.Google
                      key={`ad-${index}`}
                      client="ca-pub-8470358888871889"
                      slot="4359638919"
                      style={{
                        display: 'block',
                        margin: '3rem auto',
                        maxWidth: '100%',
                      }}
                      format="auto"
                      responsive="true"
                      layoutKey="-gw-1+2a-9x+5c"
                    />
                  ) : (
                    <Post
                      key={post.node.id}
                      post={post}
                      showChevron={showChevron}
                      showImage={showImage}
                      handleTagClick={this.handleTagClick}
                      handleCategoryClick={this.handleCategoryFilterClick}
                      variant={this.props.postVariant}
                    />
                  )
                }
              })
            : currentFilter === 'byTag' && postsFilteredByTag
            ? postsFilteredByTag.map(post => (
                <Post
                  key={post.node.id}
                  post={post}
                  showChevron={showChevron}
                  showImage={showImage}
                  handleTagClick={this.handleTagClick}
                  handleCategoryClick={this.handleCategoryFilterClick}
                  variant={this.props.postVariant}
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
                  variant={this.props.postVariant}
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
  withAds="yes|no"
/> */
}
