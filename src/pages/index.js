import React from 'react'
import introImage from '../images/main-page.jpg'
import PostList from '../components/PostsList'
import Link from 'gatsby-link'
import Button from '../components/Button'

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
    <h4>Last 5 posts:</h4>
    <PostList
      showChevron="yes"
      showImage="yes"
      posts={data.allMarkdownRemark.edges}
    />
    <Button to="/news/">All posts</Button>
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
      limit: 5
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 390)
          id
          timeToRead
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            path
            title
            author
            tags
            ogImage {
              publicURL
            }
          }
        }
      }
    }
  }
`
