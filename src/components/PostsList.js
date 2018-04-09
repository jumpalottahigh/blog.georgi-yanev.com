import React, { Component } from 'react'
import Link from 'gatsby-link'
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
    currentFilter: 'all',
    allPosts: [...this.props.posts],
    general: [],
    fpv: [],
    software: [],
    smarthome: []
  }

  filter(pages) {
    let general = []
    let fpv = []
    let software = []
    let smarthome = []

    // Filter the data
    pages.map(page => {
      switch (page.node.frontmatter.tags) {
        case 'general':
          general.push(page)
          break
        case 'smart home':
          smarthome.push(page)
          break
        case 'software':
          software.push(page)
          break
        case 'fpv':
          fpv.push(page)
          break
      }
    })

    this.setState({
      general,
      fpv,
      software,
      smarthome
    })
  }

  handleFilterClick = e => {
    this.setState({
      currentFilter: e.target.dataset.filter
    })
  }

  componentWillMount() {
    // Filter pages into categories
    this.filter(this.props.posts)
  }

  render() {
    const { allPosts, currentFilter } = this.state

    return (
      <div>
        <div>
          <button
            className={`category all ${currentFilter === 'all' && 'active'}`}
            data-filter="all"
            onClick={this.handleFilterClick}
          >
            All categories
          </button>
          {this.state.fpv.length > 0 && (
            <button
              className={`category fpv ${currentFilter === 'fpv' && 'active'}`}
              data-filter="fpv"
              onClick={this.handleFilterClick}
            >
              FPV
            </button>
          )}
          {this.state.general.length > 0 && (
            <button
              className={`category general ${currentFilter === 'general' &&
                'active'}`}
              data-filter="general"
              onClick={this.handleFilterClick}
            >
              General
            </button>
          )}
          {this.state.smarthome.length > 0 && (
            <button
              className={`category smart home ${currentFilter === 'smarthome' &&
                'active'}`}
              data-filter="smarthome"
              onClick={this.handleFilterClick}
            >
              Smarthome
            </button>
          )}
          {this.state.software.length > 0 && (
            <button
              className={`category software ${currentFilter === 'software' &&
                'active'}`}
              data-filter="software"
              onClick={this.handleFilterClick}
            >
              Software
            </button>
          )}
        </div>
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
                        ? '🔥 '
                        : null}
                      {post.node.frontmatter.title}
                    </h4>
                    <div className="post-preview-content">
                      {this.props.showImage === 'yes' && (
                        <div className="post-preview-image">
                          {post.node.frontmatter.ogImage !== null ? (
                            <img
                              src={post.node.frontmatter.ogImage.publicURL}
                            />
                          ) : (
                            <img src="/default-ogimage.jpg" />
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
                        ? '🔥 '
                        : null}
                      {post.node.frontmatter.title}
                    </h4>
                    <div className="post-preview-content">
                      {this.props.showImage === 'yes' && (
                        <div className="post-preview-image">
                          {post.node.frontmatter.ogImage !== null ? (
                            <img
                              src={post.node.frontmatter.ogImage.publicURL}
                            />
                          ) : (
                            <img src="/default-ogimage.jpg" />
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
                      {this.props.showImage === 'yes' && (
                        <span>
                          {post.node.frontmatter.ogImage !== null ? (
                            <img
                              src={post.node.frontmatter.ogImage.publicURL}
                            />
                          ) : (
                            'nope'
                          )}
                        </span>
                      )}
                      {this.props.showChevron === 'yes' && (
                        <img
                          src={svgRightArrow}
                          style={{ height: '24px', justifySelf: 'flex-end' }}
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
