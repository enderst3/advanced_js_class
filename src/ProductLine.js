import React, { Component } from 'react'
import ProductData from './ProductData'
import ProductHeadline from './ProductHeadline'
import propTypes from 'prop-types'

export default class ProductLine extends Component {
  render () {
    return (
      <table>
        <ProductHeadline />
        <ProductData
          searchTerm={this.props.searchTerm}
          inStock={this.props.inStock}
          catalog={this.props.catalog}
          isBuying={this.props.isBuying}
          onIsBuying={this.props.onIsBuying}
        />
      </table>
    )
  }
}

ProductLine.propTypes = {
  catalog: propTypes.array,
  searchTerm: propTypes.string,
  inStock: propTypes.bool,
  isBuying: propTypes.object,
  onIsBuying: propTypes.func
}
