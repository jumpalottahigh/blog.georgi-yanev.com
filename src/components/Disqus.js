import React, { Component } from 'react'
import ReactDisqusComments from 'react-disqus-comments'

const disqusShortname = 'blog-georgi-yanev-com'

class Disqus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toasts: []
    }
    this.notifyAboutComment = this.notifyAboutComment.bind(this)
    this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this)
  }

  onSnackbarDismiss() {
    const [, ...toasts] = this.state.toasts
    this.setState({ toasts })
  }
  notifyAboutComment() {
    const toasts = this.state.toasts.slice()
    toasts.push({ text: 'New comment available!' })
    this.setState({ toasts })
  }
  render() {
    const { postNode } = this.props
    if (!disqusShortname) {
      return null
    }
    const post = postNode.frontmatter
    const url = `https://blog.georgi-yanev.com${post.path}/`
    const identifier = post.disqus_identifier

    // console.log(
    //   `Shortname: ${disqusShortname}\nIdentifier: ${identifier}\nTitle: ${
    //     post.title
    //   }\nURL: ${url}\nCategory_Id: ${post.tags}\n`
    // )

    return (
      <ReactDisqusComments
        shortname={disqusShortname}
        identifier={identifier}
        title={post.title}
        url={url}
        category_id={post.tags}
        onNewComment={this.notifyAboutComment}
      />
    )
  }
}

export default Disqus
