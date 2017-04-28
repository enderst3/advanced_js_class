/**
 * This is a module that provides the top-level search-box
 */
import {Checkbox, FormControl, FormGroup} from 'react-bootstrap'
import React, { Component } from 'react'
import propTypes from 'prop-types'
// import './SearchBox.css'

export default class SearchBox extends Component {
  render () {
    // const textChangeCallback = this.props.onFilterTextInput
    // const checkboxChangeCallback = this.props.onFilterCheckBoxInput
    return (
      <div className='SearchBox'>
        <FormGroup>
          <FormControl
            id='item-search'
            type='text'
            onChange={this.props.onFilterTextInput}
            placeholder='Search...'
            value={this.props.searchTerm} />
        </FormGroup>
        <div>
          <Checkbox
            id='stocked-checkbox'
            onChange={this.props.onFilterCheckBoxInput}
            checked={this.props.inStock}
            type='checkbox'>Only show products in stock
          </Checkbox>
        </div>
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
