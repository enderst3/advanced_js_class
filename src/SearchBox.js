/**
 * This is a module that provides the top-level search-box
 */

import React, { Component } from 'react'
import propTypes from 'prop-types'
// import './SearchBox.css'

export default class SearchBox extends Component {
  render () {
    // const textChangeCallback = this.props.onFilterTextInput
    // const checkboxChangeCallback = this.props.onFilterCheckBoxInput
    return (
      <div className='SearchBox'>
        <button style={{color: 'red'}}>Confirm</button>
        <input
          id='item-search'
          type='text'
          onChange={this.props.onFilterTextInput}
          placeholder='Search...'
          value={this.props.searchTerm} />
        <p>
          <input
            id='stocked-checkbox'
            onChange={this.props.onFilterCheckBoxInput}
            checked={this.props.inStock}
            type='checkbox' />Only show products in stock
        </p>
      </div>
    )
  }
}

SearchBox.propTypes = {
  searchTerm: propTypes.string,
  inStock: propTypes.bool,
  onFilterTextInput: propTypes.func,
  onFilterCheckBoxInput: propTypes.func
}
