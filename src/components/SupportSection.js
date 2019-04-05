import React from 'react'

const SupportSection = ({ affiliateNote }) => {
  return (
    <div className="support-section">
      <h4 style={{ margin: 0 }}>Support the blog:</h4>
      <div>
        I hope you find my content helpful. If you'd like to support the blog,
        you can do so by clicking the affiliate links below before making a
        purchase. This comes at no additional cost to you.
      </div>
      <div className="support-section-link-container">
        <a
          className="amazon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.amazon.com/?&_encoding=UTF8&tag=fpvtips-20&linkCode=ur2&linkId=a2998a197ad4644b89d7145c68771860&camp=1789&creative=9325"
        >
          Amazon
        </a>
        <a
          className="banggood"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.banggood.com/?p=NY211410857261201705"
        >
          Banggood
        </a>
      </div>
      <div>
        Or you can buy me a coffee via paypal and support me on Patreon.
      </div>
      <div className="support-section-link-container">
        <a
          className="paypal"
          style={{ fontSize: '1rem' }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://paypal.me/jumpalottahigh/10"
        >
          PayPal
        </a>
        <a
          className="patreon"
          style={{ fontSize: '1rem' }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.patreon.com/bePatron?u=3061524"
        >
          Patreon
        </a>
      </div>
      <div className="support-section-affiliate-note">{affiliateNote}</div>
    </div>
  )
}

export default SupportSection
