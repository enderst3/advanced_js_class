import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import { mount } from 'enzyme'
/* global it describe expect */

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

// groups tests together

describe('Filter tests', () => {
  it('will render the right number of table rows', () => {
    const app = mount(<App />)
    expect(app.find('tr').length).toBe(9)
  })

  it('will filter out of stock item when inStock checked', () => {
    const app = mount(<App />)
    //  gives checked a value
    const event = {target: {checked: true}}
    app.find('#stocked-checkbox').simulate('change', event)
    expect(app.find('tr').length).toBe(7)
  })

  it('will filter out items when "ball" is typed in search-box', () => {
    const app = mount(<App />)
    const event = {target: {value: 'ball'}}
    app.find('#item-search').simulate('change', event)
    expect(app.find('tr').length).toBe(6)
  })

  it('will filter out items with text, and checkbox', () => {
    const app = mount(<App />)
    const event = {target: {value: 'ball'}}
    const eventTwo = {target: {checked: true}}
    app.find('#item-search').simulate('change', event)
    app.find('#stocked-checkbox').simulate('change', eventTwo)
    expect(app.find('tr').length).toBe(5)
  })
})

describe('Pricing tests', () => {
  it('will render zero when unchecked', () => {
    const app = mount(<App />)
    expect(app.find('#total-price').text()).toBe('Total: $0')
  })

  it('put the correct value when clicking once on iphone', () => {
    const app = mount(<App />)
    const event = {target: {checked: true}}
    app.find('#electronics-iphone-5').simulate('change', event)
    expect(app.find('#total-price').text()).toBe('Total: $399.99')
  })

  it('put the correct value when clicking twice on iphone', () => {
    const app = mount(<App />)
    const event = {target: {checked: true}}
    app.find('#electronics-iphone-5').simulate('change', event)
    const eventTwo = {target: {checked: false}}
    app.find('#electronics-iphone-5').simulate('change', eventTwo)
    expect(app.find('#total-price').text()).toBe('Total: $0')
  })

  it('adds values together properly', () => {
    const app = mount(<App />)
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
  it('will render the right number of table rows', () => {
    const app = mount(<App />)
    expect(app.find('tr').length).toBe(9)
  })

  it('will filter out of stock item when inStock checked', () => {
    const app = mount(<App />)
    //  gives checked a value
    const event = {target: {checked: true}}
    app.find('#stocked-checkbox').simulate('change', event)
    expect(app.find('tr').length).toBe(7)
  })

  it('will filter out items when "ball" is typed in search-box', () => {
    const app = mount(<App />)
    const event = {target: {value: 'ball'}}
    app.find('#item-search').simulate('change', event)
    expect(app.find('tr').length).toBe(6)
  })

  it('will filter out items with text, and checkbox', () => {
    const app = mount(<App />)
    const event = {target: {value: 'ball'}}
    const eventTwo = {target: {checked: true}}
    app.find('#item-search').simulate('change', event)
    app.find('#stocked-checkbox').simulate('change', eventTwo)
    expect(app.find('tr').length).toBe(5)
  })
})

describe('Pricing tests', () => {
  it('will render zero when unchecked', () => {
    const app = mount(<App />)
    expect(app.find('#total-price').text()).toBe('Total: $0')
  })

  it('put the correct value when clicking once on iphone', () => {
    const app = mount(<App />)
    const event = {target: {checked: true}}
    app.find('#electronics-iphone-5').simulate('change', event)
    expect(app.find('#total-price').text()).toBe('Total: $399.99')
  })

  it('put the correct value when clicking twice on iphone', () => {
    const app = mount(<App />)
    const event = {target: {checked: true}}
    app.find('#electronics-iphone-5').simulate('change', event)
    const eventTwo = {target: {checked: false}}
    app.find('#electronics-iphone-5').simulate('change', eventTwo)
    expect(app.find('#total-price').text()).toBe('Total: $0')
  })

  it('adds values together properly', () => {
    const app = mount(<App />)
    const event = {target: {checked: true}}
    app.find('#sporting-goods-football').simulate('change', event)
    const eventTwo = {target: {checked: true}}
    app.find('#electronics-iphone-5').simulate('change', eventTwo)
    expect(app.find('#total-price').text()).toBe('Total: $449.98')
  })
})
