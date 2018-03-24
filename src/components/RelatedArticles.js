import React from 'react'
import Link from 'gatsby-link'

class RelatedArticles extends React.Component {
  render() {
    const { articles } = this.props

    // Return null if no related articles are passed
    return articles ? (
      <div style={{ borderTop: '1px solid #cecece', paddingTop: '1rem' }}>
        <h4 style={{ margin: 0 }}>Related articles:</h4>
        {articles.map((article, id) => (
          <div>
            <Link key={id} to={article}>
              {article}
            </Link>
          </div>
        ))}
      </div>
    ) : null
  }
}

export default RelatedArticles
