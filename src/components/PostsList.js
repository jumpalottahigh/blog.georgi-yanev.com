import React from 'react'
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

export default class PostsList extends React.Component {
  state = {
    search: '',
    currentFilter: 'all',
    allPosts: [...this.props.posts],
    learning: [],
    fpv: [],
    projects: [],
    smarthome: [],
    stories: [],
  }

  filter(pages) {
    let learning = []
    let fpv = []
    let projects = []
    let smarthome = []
    let stories = []

    // Filter the data
    pages.forEach(page => {
      switch (page.node.frontmatter.tags) {
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
    this.setState({
      currentFilter: e.target.dataset.filter,
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

  UNSAFE_componentWillMount() {
    // Filter pages into categories
    this.filter(this.props.posts)
  }

  componentDidMount() {
    // Setup ESC listener
    // document.addEventListener(
    //   'keydown',
    //   e => {
    //     e.code === 'Escape'
    //       ? this.setState({ search: '' }, () => this.handleSearch(e))
    //       : null
    //   },
    //   false
    // )
  }

  render() {
    const { allPosts, currentFilter } = this.state

    return (
      <div>
        {this.props.showCategories === 'yes' && (
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
            {this.state.fpv.length > 0 && (
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
            {this.state.projects.length > 0 && (
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
            {this.state.learning.length > 0 && (
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
            {this.state.smarthome.length > 0 && (
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
            {this.state.stories.length > 0 && (
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
        {this.props.showSearch === 'yes' && (
          <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            <input
              type="text"
              onChange={this.handleSearch}
              value={this.state.search}
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
                <li key={post.node.id} className="post-preview">
                  <Link to={post.node.frontmatter.path + '/'}>
                    <h4>
                      {currentMonth ===
                        post.node.frontmatter.date.split(' ')[0] &&
                      currentYear ===
                        parseInt(post.node.frontmatter.date.split(' ')[2])
                        ? '🆕 '
                        : null}
                      {post.node.frontmatter.title}
                    </h4>
                    <div className="post-preview-content">
                      {this.props.showImage === 'yes' && (
                        <div className="post-preview-image">
                          {post.node.frontmatter.ogImage !== null ? (
                            <Img
                              fluid={
                                post.node.frontmatter.ogImage.childImageSharp
                                  .fluid
                              }
                              alt={post.node.frontmatter.title}
                            />
                          ) : (
                            <img
                              src="/default-ogimage.png"
                              alt={post.node.frontmatter.title}
                            />
                          )}
                        </div>
                      )}
                      <p
                        className={
                          this.props.showImage === 'yes'
                            ? 'post-preview-excerpt'
                            : ''
                        }
                      >
                        {post.node.excerpt}
                      </p>
                    </div>
                    <div className="post-preview-note">
                      <div>
                        <strong>{post.node.timeToRead} min</strong> read by{' '}
                        {post.node.frontmatter.author} on{' '}
                        <strong>{post.node.frontmatter.date}</strong> in{' '}
                        <strong
                          className={`post-preview-tags category ${
                            post.node.frontmatter.tags
                          }`}
                        >
                          {post.node.frontmatter.tags}
                        </strong>
                      </div>
                      {this.props.showChevron === 'yes' && (
                        <img
                          src={svgRightArrow}
                          style={{ height: '24px', justifySelf: 'flex-end' }}
                          alt="Arrow pointing right"
                        />
                      )}
                    </div>
                  </Link>
                </li>
              ))
            : this.state[currentFilter].map(post => (
                <li key={post.node.id} className="post-preview">
                  <Link to={post.node.frontmatter.path + '/'}>
                    <h4>
                      {currentMonth ===
                        post.node.frontmatter.date.split(' ')[0] &&
                      currentYear ===
                        parseInt(post.node.frontmatter.date.split(' ')[2])
                        ? '🆕 '
                        : null}
                      {post.node.frontmatter.title}
                    </h4>
                    <div className="post-preview-content">
                      {this.props.showImage === 'yes' && (
                        <div className="post-preview-image">
                          {post.node.frontmatter.ogImage !== null ? (
                            <Img
                              fluid={
                                post.node.frontmatter.ogImage.childImageSharp
                                  .fluid
                              }
                              alt={post.node.frontmatter.title}
                            />
                          ) : (
                            <img
                              src="/default-ogimage.png"
                              alt={post.node.frontmatter.title}
                            />
                          )}
                        </div>
                      )}
                      <p
                        className={
                          this.props.showImage === 'yes'
                            ? 'post-preview-excerpt'
                            : ''
                        }
                      >
                        {post.node.excerpt}
                      </p>
                    </div>
                    <div className="post-preview-note">
                      <div>
                        <strong>{post.node.timeToRead} min</strong> read by{' '}
                        {post.node.frontmatter.author} on{' '}
                        <strong>{post.node.frontmatter.date}</strong> in{' '}
                        <strong
                          className={`post-preview-tags category ${
                            post.node.frontmatter.tags
                          }`}
                        >
                          {post.node.frontmatter.tags}
                        </strong>
                      </div>
                      {this.props.showChevron === 'yes' && (
                        <img
                          src={svgRightArrow}
                          style={{ height: '24px', justifySelf: 'flex-end' }}
                          alt="Arrow pointing right"
                        />
                      )}
                    </div>
                  </Link>
                </li>
              ))}
        </ul>
      </div>
    )
  }
}
