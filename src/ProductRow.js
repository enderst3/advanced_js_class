import React, { Component } from 'react'

function makeKey(category, name) {
  const convertedCategory = category.toLowerCase().replace(/ /g, '-')
  const convertedName = name.toLowerCase().replace(/ /g, '-')
  return `${convertedCategory}-${convertedName}`
}

export default class ProductRow extends Component {

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
          return(
            <tr>
              <td className='item-color' style={style}>
                <input
                  id={makeKey(this.props.currentCategory, this.props.name)}
                  checked={amIChecked} type="checkbox"
                  onChange={this.handleOnIsBuying.bind(this)}
               />{this.props.name}
              </td>
              <td>${this.props.price}</td>
            </tr>
          )
        }
      }
    }
    return null
  }
}
