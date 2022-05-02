import React from 'react'

import PropTypes from 'prop-types'

import './store-banner.css'

const StoreBanner = (props) => {
  return (
    <div className="store-banner-store-banner">
      <a
        href="https://opensea.io/"
        target="_blank"
        rel="noreferrer noopener"
        className="store-banner-link"
      >
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="store-banner-image"
        />
      </a>
    </div>
  )
}

StoreBanner.defaultProps = {
  image_alt1: 'image',
  image_src1: '/playground_assets/os-200h.png',
}

StoreBanner.propTypes = {
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
}

export default StoreBanner
