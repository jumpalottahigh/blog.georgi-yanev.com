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

      bigStripe: file(relativePath: { regex: "/^promo/banggood-big-stripe/" }) {
        name
        childImageSharp {
          fluid(maxWidth: 960, quality: 81) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      bigStripe2: file(
        relativePath: { regex: "/^promo/banggood-big-stripe-2/" }
      ) {
        name
        childImageSharp {
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      bigStripe3: file(
        relativePath: { regex: "/^promo/banggood-big-stripe-3/" }
      ) {
        name
        childImageSharp {
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      bigStripe4: file(
        relativePath: { regex: "/^promo/banggood-big-stripe-4/" }
      ) {
        name
        childImageSharp {
          fluid(maxWidth: 720, quality: 90) {
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

      stripe4: file(relativePath: { regex: "/^promo/banggood-stripe-4/" }) {
        name
        childImageSharp {
          fluid(maxWidth: 970, quality: 81) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      stripe5: file(relativePath: { regex: "/^promo/banggood-stripe-5/" }) {
        name
        childImageSharp {
          fluid(maxWidth: 1479, quality: 81) {
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
