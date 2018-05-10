import React from 'react'

const SupportSection = () => {
  return (
    <div
      style={{
        marginTop: '1rem',
        paddingTop: '1rem',
        marginBottom: '3rem',
        borderTop: '1px solid #cecece'
      }}
    >
      {' '}
      If you would like to support the blog, you can do so here:{' '}
      <a
        className="button"
        style={{ fontSize: '1rem' }}
        target="_blank"
        rel="noopener"
        href="https://paypal.me/jumpalottahigh/20"
      >
        💳&nbsp;Support&nbsp;the&nbsp;blog
      </a>
    </div>
  )
}

export default SupportSection
