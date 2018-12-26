import React from 'react'

const SupportSection = ({ affiliateNote }) => {
  return (
    <div className="support-section">
      <div>
        If you'd like to support the blog, you can do so by clicking the
        affiliate link below before making any purchase.
      </div>
      <div>
        <a
          className="banggood"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.banggood.com/?p=NY211410857261201705"
        >
          Banggood
          <span role="img" aria-label="card">
            🅱
          </span>
        </a>
      </div>
      <div>
        Every little bit counts and doing so you support the blog at no
        additional cost to you. Additionally you can buy me a coffee via paypal.
      </div>
      <div>
        <a
          className="paypal"
          style={{ fontSize: '1rem' }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://paypal.me/jumpalottahigh/10"
        >
          &nbsp;Buy&nbsp;me&nbsp;a&nbsp;coffee
          <span role="img" aria-label="card">
            💳
          </span>
        </a>
      </div>
      <div className="support-section-affiliate-note">{affiliateNote}</div>
    </div>
  )
}

export default SupportSection
