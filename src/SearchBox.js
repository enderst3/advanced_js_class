/**
 * This is a module that provides the top-level search-box
 */
import {Checkbox, FormControl, FormGroup} from 'react-bootstrap'
import React, { Component } from 'react'
import propTypes from 'prop-types'

export default class SearchBox extends Component {
  render () {
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
            type='checkbox'
            onChange={this.props.onFilterCheckBoxInput}
            checked={this.props.inStock}
          >
            Only show products in stock
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
