import React from 'react'
import { ThemeProvider } from './src/context/ThemeContext'

export const wrapRootElement = ({ element }) => (
    <ThemeProvider>{element}</ThemeProvider>
)

export const onRouteUpdate = () => {
    const images = document.querySelectorAll('.gatsby-resp-image-image')

    images.forEach(img => {
        if (!img.getAttribute('data-zoom-src')) {
            let srcset = img.getAttribute('srcset')
            if (!srcset && img.parentElement.tagName === 'PICTURE') {
                const source = img.parentElement.querySelector('source[srcset]')
                if (source) {
                    srcset = source.getAttribute('srcset')
                }
            }

            if (srcset) {
                // The last source in srcset is typically the largest
                const sources = srcset.split(',')
                const largestSource = sources[sources.length - 1].trim()
                const [url] = largestSource.split(' ')

                if (url) {
                    img.setAttribute('data-zoom-src', url)
                }
            }
        }
    })
}
