import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import { mount } from 'enzyme'
import fetch from 'jest-fetch-mock'
import {FAKE_SERVER_DATA} from '../test-data'

/* global beforeEach it describe expect */

global.fetch = fetch

fetch.mockResponse(JSON.stringify(FAKE_SERVER_DATA))

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

describe('Filter tests', () => {
  let app

  beforeEach((done) => {
    app = mount(<App />)
    setTimeout(() => {
      done()
    }, 50)
  })

  it('will render the right number of table rows', () => {
    expect(app.find('tr').length).toBe(9)
  })

  it('will filter out of stock item when inStock checked', () => {
    //  gives checked a value
    const event = {target: {checked: true}}
    app.find('#stocked-checkbox').simulate('change', event)
    expect(app.find('tr').length).toBe(7)
  })

  it('will filter out items when "ball" is typed in search-box', () => {
    const event = {target: {value: 'ball'}}
    app.find('#item-search').simulate('change', event)
    expect(app.find('tr').length).toBe(6)
  })

  it('will filter out items with text, and checkbox', () => {
    const event = {target: {value: 'ball'}}
    const eventTwo = {target: {checked: true}}
    app.find('#item-search').simulate('change', event)
    app.find('#stocked-checkbox').simulate('change', eventTwo)
    expect(app.find('tr').length).toBe(5)
  })
})

describe('Pricing tests', () => {
  let app

  beforeEach((done) => {
    app = mount(<App />)
    setTimeout(() => {
      done()
    }, 50)
  })

  it('will render zero when unchecked', () => {
    expect(app.find('#total-price').text()).toBe('Total: $0')
  })

  it('put the correct value when clicking once on iphone', () => {
    const event = {target: {checked: true}}
    app.find('#electronics-iphone-5').simulate('change', event)
    expect(app.find('#total-price').text()).toBe('Total: $399.99')
  })

  it('put the correct value when clicking twice on iphone', () => {
    const event = {target: {checked: true}}
    app.find('#electronics-iphone-5').simulate('change', event)
    const eventTwo = {target: {checked: false}}
    app.find('#electronics-iphone-5').simulate('change', eventTwo)
    expect(app.find('#total-price').text()).toBe('Total: $0')
  })

  it('adds values together properly', () => {
    const event = {target: {checked: true}}
    app.find('#sporting-goods-football').simulate('change', event)
    const eventTwo = {target: {checked: true}}
    app.find('#electronics-iphone-5').simulate('change', eventTwo)
    expect(app.find('#total-price').text()).toBe('Total: $449.98')
  })
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

// groups tests together

describe('Filter tests', () => {
  let app

  beforeEach((done) => {
    app = mount(<App />)
    setTimeout(() => {
      done()
    }, 50)
  })

  it('will render the right number of table rows', () => {
    expect(app.find('tr').length).toBe(9)
  })

  it('will filter out of stock item when inStock checked', () => {
    const event = {target: {checked: true}}
    app.find('#stocked-checkbox').simulate('change', event)
    expect(app.find('tr').length).toBe(7)
  })

  it('will filter out items when "ball" is typed in search-box', () => {
    const event = {target: {value: 'ball'}}
    app.find('#item-search').simulate('change', event)
    expect(app.find('tr').length).toBe(6)
  })

  it('will filter out items with text, and checkbox', () => {
    const event = {target: {value: 'ball'}}
    const eventTwo = {target: {checked: true}}
    app.find('#item-search').simulate('change', event)
    app.find('#stocked-checkbox').simulate('change', eventTwo)
    expect(app.find('tr').length).toBe(5)
  })
})

describe('Pricing tests', () => {
  let app

  beforeEach((done) => {
    app = mount(<App />)
    setTimeout(() => {
      done()
    }, 50)
  })

  it('will render zero when unchecked', () => {
    expect(app.find('#total-price').text()).toBe('Total: $0')
  })

  it('put the correct value when clicking once on iphone', () => {
    const event = {target: {checked: true}}
    app.find('#electronics-iphone-5').simulate('change', event)
    expect(app.find('#total-price').text()).toBe('Total: $399.99')
  })

  it('put the correct value when clicking twice on iphone', () => {
    const event = {target: {checked: true}}
    app.find('#electronics-iphone-5').simulate('change', event)
    const eventTwo = {target: {checked: false}}
    app.find('#electronics-iphone-5').simulate('change', eventTwo)
    expect(app.find('#total-price').text()).toBe('Total: $0')
  })

  it('adds values together properly', () => {
    const event = {target: {checked: true}}
    app.find('#sporting-goods-football').simulate('change', event)
    const eventTwo = {target: {checked: true}}
    app.find('#electronics-iphone-5').simulate('change', eventTwo)
    expect(app.find('#total-price').text()).toBe('Total: $449.98')
  })
})
