import React from 'react'
import introImage from '../images/main-page.jpg'

const IndexPage = ({ data }) => (
  <div>
    <h1>Hi!</h1>
    <p>
      I'm Georgi and I love to solve problems with code, tinker with smart home
      automation projects and fly FPV racing drones.
    </p>
    <p>
      Currently I work as a web developer. If you are interested in my skills
      here's a <a href="https://www.georgi-yanev.com">quick summary</a>.
    </p>
    <p>
      I love all things web and frequently dig around performance topics. I love
      open source projects and enjoy reading code on Github. I think we live in
      exciting times for the web where we have a choice of advanced tools and
      frameworks and a huge potential for Web Components and Mobile first and
      Offline first web to become a reality.
    </p>
    <p>
      I hope you find interesting articles around here. If you have any
      questions, you can always find me as{' '}
      <a href="https://twitter.com/jumpalottahigh">@jumpalottahigh</a> on
      Twitter or on <a href="https://github.com/jumpalottahigh">Github</a>.
    </p>
    <h4>Latest posts:</h4>
    <ul className="list-none">
      {data.allMarkdownRemark.edges.map(page => (
        <li key={page.node.id} className="post-preview">
          <a key={page.node.id} href={page.node.frontmatter.path}>
            <h4>{page.node.frontmatter.title}</h4>
            <p>{page.node.excerpt}</p>
            <p className="post-preview-note">
              <strong>{page.node.timeToRead} min</strong> read by{' '}
              {page.node.frontmatter.author} on{' '}
              <strong>{page.node.frontmatter.date}</strong> in{' '}
              <strong className="post-preview-tags">
                {page.node.frontmatter.tags}
              </strong>
            </p>
          </a>
        </li>
      ))}
    </ul>
    <p className="m-t-1">
      Additionally, the Eternal Archives section of the blog hosts a bunch of
      unedited content (fan fiction, music and programming) from the early 2000s
      when I was only 15 - 17.
    </p>
    <img className="m-b-1" src={introImage} alt="YAR cover image" />
  </div>
)

export default IndexPage

export const HomePageQuery = graphql`
  query HomePageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 3
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 140)
          id
          timeToRead
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            path
            title
            author
            tags
          }
        }
      }
    }
  }
`
