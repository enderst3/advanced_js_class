import React, { Component } from 'react'
import ProductData from './ProductData'
import ProductHeadline from './ProductHeadline'
import propTypes from 'prop-types'
import {Table} from 'react-bootstrap'

export default class ProductLine extends Component {
  render () {
    return (
      <Table bordered>
        <thead>
         <ProductHeadline />
        </thead>
        <tbody>
          <ProductData
            searchTerm={this.props.searchTerm}
            inStock={this.props.inStock}
            catalog={this.props.catalog}
            isBuying={this.props.isBuying}
            onIsBuying={this.props.onIsBuying}
          />
        </tbody>
      </Table>
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
