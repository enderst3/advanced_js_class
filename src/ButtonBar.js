import React, { Component} from 'react'
import propTypes from 'prop-types'
import {Button} from 'react-bootstrap'

export default class ButtonBar extends Component {
  render () {
    if (this.props.editOn) {
      return (
        <div>
          <Button>Save</Button>
          <Button>Cancel</Button>
        </div>
      )
    } else {
      return (
        <div>
          <Button
          >
            Edit
          </Button>
        </div>
      )
    }
  }
}
// $<input placeholder={this.props.price}/>
ButtonBar.propTypes = {
  editOn: propTypes.bool
}
