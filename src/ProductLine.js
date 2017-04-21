import React, { Component } from 'react'
import ProductData from './ProductData'
import ProductHeadline from './ProductHeadline'


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
