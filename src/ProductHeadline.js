import React, { Component } from 'react'
import {Table} from 'react-bootstrap'

export default class ProductHeadline extends Component {
  render () {
    return (
      <Table bordered>
        <thead>
          <tr><td>Buy</td><td>Name</td><td>Price</td></tr>
        </thead>
      </Table>
    )
  }
}
