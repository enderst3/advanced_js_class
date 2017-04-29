import React, { Component } from 'react'
import propTypes from 'prop-types'
// import {Table} from 'react-bootstrap'

function makeKey (category, name) {
  const convertedCategory = category.toLowerCase().replace(/ /g, '-')
  const convertedName = name.toLowerCase().replace(/ /g, '-')
  return `${convertedCategory}-${convertedName}`
}
export default class ProductRow extends Component {
  constructor (props) {
    super(props)
    this.handleOnIsBuying = this.handleOnIsBuying.bind(this)
  }
  handleOnIsBuying (e) {
    const value = e.target.checked
    let key = `${this.props.currentCategory}${this.props.name}`
    this.props.onIsBuying(key, value, this.props.price)
  }
  render () {
    const filterMatch = this.props.name.indexOf(this.props.searchTerm) !== -1
    let style = {color: 'black'}
    if (this.props.currentCategory === this.props.category) {
      if (!this.props.stocked) {
        style.color = 'red'
      }
      let key = `${this.props.currentCategory}${this.props.name}`
      let amIChecked = this.props.isBuying[key] || false
      if (!this.props.inStock || this.props.stocked) {
        if (filterMatch) {
          return (
            <tbody>
              <tr>
                <td>
                  <input
                    id={makeKey(this.props.currentCategory, this.props.name)}
                    checked={amIChecked} type='checkbox'
                    onChange={this.handleOnIsBuying}
                  /></td>
                <td className='item-color' style={style}>
                  {this.props.name}</td>
                <td>${this.props.price}</td>
              </tr>
            </tbody>
          )
        }
      }
    }
    return null
  }
}

ProductRow.propTypes = {
  currentCategory: propTypes.string,
  searchTerm: propTypes.string,
  inStock: propTypes.bool,
  isBuying: propTypes.object,
  onIsBuying: propTypes.func,
  name: propTypes.string,
  price: propTypes.number,
  category: propTypes.string,
  stocked: propTypes.bool
}
