import React, { Component } from 'react'
import { Link } from 'gatsby'
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
  'Dec'
]

const currentMonth = months[new Date().getMonth()]

export default class PostsList extends Component {
  state = {
    search: '',
    currentFilter: 'all',
    allPosts: [...this.props.posts],
    learning: [],
    fpv: [],
    smarthome: []
  }

  filter(pages) {
    let learning = []
    let fpv = []
    let smarthome = []

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
        default:
          break
      }
    })

    this.setState({
      learning,
      fpv,
      smarthome
    })
  }

  handleFilterClick = e => {
    this.setState({
      currentFilter: e.target.dataset.filter
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
      currentFilter: 'all'
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
              className={`category all ${currentFilter === 'all' && 'active'}`}
              data-filter="all"
              onClick={this.handleFilterClick}
            >
              All posts
            </button>
            {this.state.fpv.length > 0 && (
              <button
                className={`category fpv ${currentFilter === 'fpv' &&
                  'active'}`}
                data-filter="fpv"
                onClick={this.handleFilterClick}
              >
                FPV
              </button>
            )}
            {this.state.learning.length > 0 && (
              <button
                className={`category learning ${currentFilter === 'learning' &&
                  'active'}`}
                data-filter="learning"
                onClick={this.handleFilterClick}
              >
                Life-long learning
              </button>
            )}
            {this.state.smarthome.length > 0 && (
              <button
                className={`category smart-home ${currentFilter ===
                  'smarthome' && 'active'}`}
                data-filter="smarthome"
                onClick={this.handleFilterClick}
              >
                Smarthome
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
            />
          </div>
        )}
        <hr />
        <ul className="list-none m-t-1">
          {currentFilter === 'all' && allPosts
            ? allPosts.map(post => (
                <li key={post.node.id} className="post-preview">
                  <Link
                    key={post.node.id}
                    to={post.node.frontmatter.path + '/'}
                  >
                    <h4>
                      {currentMonth === post.node.frontmatter.date.split(' ')[0]
                        ? '🆕 '
                        : null}
                      {post.node.frontmatter.title}
                    </h4>
                    <div className="post-preview-content">
                      {this.props.showImage === 'yes' && (
                        <div className="post-preview-image">
                          {post.node.frontmatter.ogImage !== null ? (
                            <img
                              src={post.node.frontmatter.ogImage.publicURL}
                              alt="article preview"
                            />
                          ) : (
                            <img
                              src="/default-ogimage.jpg"
                              alt="article preview"
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
                          alt="article preview"
                        />
                      )}
                    </div>
                  </Link>
                </li>
              ))
            : this.state[currentFilter].map(post => (
                <li key={post.node.id} className="post-preview">
                  <Link
                    key={post.node.id}
                    to={post.node.frontmatter.path + '/'}
                  >
                    <h4>
                      {currentMonth === post.node.frontmatter.date.split(' ')[0]
                        ? '🆕 '
                        : null}
                      {post.node.frontmatter.title}
                    </h4>
                    <div className="post-preview-content">
                      {this.props.showImage === 'yes' && (
                        <div className="post-preview-image">
                          {post.node.frontmatter.ogImage !== null ? (
                            <img
                              src={post.node.frontmatter.ogImage.publicURL}
                              alt="article preview"
                            />
                          ) : (
                            <img
                              src="/default-ogimage.jpg"
                              alt="article preview"
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
                          alt="article preview"
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
