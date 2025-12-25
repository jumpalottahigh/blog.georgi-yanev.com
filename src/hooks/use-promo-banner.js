import { graphql, useStaticQuery } from 'gatsby'

const usePromoBanner = (name = 'stripe') => {
  const data = useStaticQuery(graphql`
    {
      stripe: file(relativePath: { regex: "/^promo/banggood-stripe/" }) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 923, quality: 81, placeholder: BLURRED)
        }
      }

      bigStripe: file(relativePath: { regex: "/^promo/banggood-big-stripe/" }) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 960, quality: 81, placeholder: BLURRED)
        }
      }

      bigStripe2: file(
        relativePath: { regex: "/^promo/banggood-big-stripe-2/" }
      ) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90, placeholder: BLURRED)
        }
      }

      bigStripe3: file(
        relativePath: { regex: "/^promo/banggood-big-stripe-3/" }
      ) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90, placeholder: BLURRED)
        }
      }

      bigStripe4: file(
        relativePath: { regex: "/^promo/banggood-big-stripe-4/" }
      ) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 720, quality: 90, placeholder: BLURRED)
        }
      }

      stripe2: file(relativePath: { regex: "/^promo/banggood-stripe-2/" }) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 1080, quality: 81, placeholder: BLURRED)
        }
      }

      stripe3: file(relativePath: { regex: "/^promo/banggood-stripe-3/" }) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 728, quality: 81, placeholder: BLURRED)
        }
      }

      stripe4: file(relativePath: { regex: "/^promo/banggood-stripe-4/" }) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 970, quality: 81, placeholder: BLURRED)
        }
      }

      stripe5: file(relativePath: { regex: "/^promo/banggood-stripe-5/" }) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 1479, quality: 81, placeholder: BLURRED)
        }
      }

      square: file(relativePath: { regex: "/^promo/banggood-square/" }) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 750, quality: 81, placeholder: BLURRED)
        }
      }
    }
  `)

  return data[name]
}

export default usePromoBanner
