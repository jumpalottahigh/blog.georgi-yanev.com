import { graphql, useStaticQuery } from 'gatsby'

const usePromoBanner = (name = 'stripe') => {
  const data = useStaticQuery(graphql`
    {
      stripe: file(relativePath: { regex: "/^promo/banggood-stripe/" }) {
        name
        childImageSharp {
          fluid(maxWidth: 923, quality: 81) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      stripe2: file(relativePath: { regex: "/^promo/banggood-stripe-2/" }) {
        name
        childImageSharp {
          fluid(maxWidth: 1080, quality: 81) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      stripe3: file(relativePath: { regex: "/^promo/banggood-stripe-3/" }) {
        name
        childImageSharp {
          fluid(maxWidth: 728, quality: 81) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      square: file(relativePath: { regex: "/^promo/banggood-square/" }) {
        name
        childImageSharp {
          fluid(maxWidth: 750, quality: 81) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return data[name]
}

export default usePromoBanner
