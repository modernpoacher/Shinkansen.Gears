import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from 'react-router'

export default class Reverse extends React.Component {
  render () {
    const {
      pathname
    } = this.props

    const key = `${pathname}-reverse`
    const to = {
      pathname
    }

    return (
      <li key={key} className='react-gears-reverse'>
        <Link to={to}>
          Reverse
        </Link>
      </li>
    )
  }
}

Reverse.propTypes = {
  pathname: PropTypes.string.isRequired
}
