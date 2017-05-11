import React, {Component} from 'react'
import SearchBox from './SearchBox'
import ProductLine from './ProductLine'
import {Jumbotron, Row, Col, Grid, Well, Panel} from 'react-bootstrap'

/* global fetch */
/**
converts catedgory and name to a valid key string
@param {string} category - the name of the category
@param  {string} name - the name of the string
@returns {string} - valid HTML id
*/

const SERVER_ROOT = 'https://inventory-ebb9d.firebaseio.com/catalog.json'

class App extends Component {
  constructor (props) {
    super(props)
    this.onFilterTextInput = this.onFilterTextInput.bind(this)
    this.onFilterCheckBoxInput = this.onFilterCheckBoxInput.bind(this)
    this.onIsBuying = this.onIsBuying.bind(this)
    this.state = {
      searchTerm: '',
      inStock: false,
      isBuying: {},
      total: 0,
      catalog: []
    }
  }

  /*
   * isBuying = {
   *   'Sporting GoodsBasketball': true,
   *   'ElectronicsNexus 7': true
   * }
   */

  onFilterTextInput (e) {
    this.setState({searchTerm: e.target.value})
  }

  onFilterCheckBoxInput (e) {
    this.setState({inStock: e.target.checked})
  }

  /**
   * a user has clicked a row
   * @param key {String} - combination of category and name to uniquely
   *   identify a row
   * @param value {bool} - selected or not
   * @param price {Number} - how much it costs
   */
  onIsBuying (key, value, price) {
    let newTotal
    // put in button value here
    if (value) {
      newTotal = this.state.total + price
    } else {
      newTotal = this.state.total - price
    }

    // Hey! if you want a variable as a key, put it in brackets!
    let newBuyObject = Object.assign(this.state.isBuying, {[key]: value})
    this.setState({isBuying: newBuyObject, total: newTotal})
  }
  componentWillMount () {
    fetch(`${SERVER_ROOT}`)
    .then((response) => {
      console.log('the server responded')
      console.log(response)
      return response.json()
    })
    .then((catalog) => {
      this.setState({catalog: catalog})
    })
    .catch((error) => {
      console.log('the server hates us')
      console.log(error)
    })
  }
  render () {
    return (

      <Grid>
        <Row className='show-grid'>
          <Col xs={10} xsOffset={1}>
            <Panel footer='&copy;2017  My Place Inc.'>
              <Jumbotron>
                <h1>Welcome to my shop!</h1>
                <p>We do not carry much but what we have is expensive!</p>
              </Jumbotron>
              <SearchBox
                searchTerm={this.state.searchTerm}
                inStock={this.state.inStock}
                onFilterTextInput={this.onFilterTextInput}
                onFilterCheckBoxInput={this.onFilterCheckBoxInput}
              />
              <ProductLine
                catalog={this.state.catalog}
                searchTerm={this.state.searchTerm}
                inStock={this.state.inStock}
                isBuying={this.state.isBuying}
                onIsBuying={this.onIsBuying}
              />
              <Well>
                <p id='total-price'>Total: ${this.state.total}</p>
              </Well>
            </Panel>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default App
