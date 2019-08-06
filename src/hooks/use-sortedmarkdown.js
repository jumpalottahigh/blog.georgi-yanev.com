import useAllMarkdownRemark from './use-allmarkdown'

const useSortedMarkdown = () => {
  let pages = useAllMarkdownRemark()

  let sortedByCategory = {}

  pages.forEach(page => {
    let { category } = page.node.frontmatter

    // If we find a first instance, create a new array for the category
    if (!sortedByCategory[category]) {
      sortedByCategory[category] = []
    }

    // Push the page to its category array
    sortedByCategory[category].push(page)
  })

  return sortedByCategory
}

export default useSortedMarkdown
