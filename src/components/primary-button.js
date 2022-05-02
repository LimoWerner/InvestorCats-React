import React from 'react'

import PropTypes from 'prop-types'

import './primary-button.css'

const PrimaryButton = (props) => {
  return (
    <div className="primary-button-container">
      <button className="primary-button-button">{props.button}</button>
    </div>
  )
}

PrimaryButton.defaultProps = {
  button: 'Roadmap',
}

PrimaryButton.propTypes = {
  button: PropTypes.string,
}

export default PrimaryButton
