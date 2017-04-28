import React from 'react'
import ProductRow from '../ProductRow'
import { shallow } from 'enzyme'

// import renderer from 'react-test-renderer';

/* global it describe expect jest */

describe('ProductRow', () => {
  it('performs callback functionality', () => {
    const callback = jest.fn()

    const wrapper = shallow(
      <ProductRow
        currentCategory='electronics'
        category='electronics'
        name='iphone 7'
        price={429}
        stocked
        inStock
        isBuying={{}}
        searchTerm=''
        onIsBuying={callback}
      />
    )
    const inputObject = wrapper.find('input')
    inputObject.simulate('change', {target: {checked: true}})
    expect(callback.mock.calls).toEqual([['electronicsiphone 7', true, 429]])
  })

  it('will show out of stock items in red', () => {
    const callback = jest.fn()
    const wrapper = shallow(
      <ProductRow
        currentCategory='electronics'
        category='electronics'
        name='iphone 7'
        price={429}
        stocked={false}
        inStock={false}
        isBuying={{}}
        searchTerm=''
        onIsBuying={callback}
      />
    )
    const itemObject = wrapper.find('.item-color')
    expect(itemObject.node.props.style.color).toBe('red')
    // console.log(itemObject.node.props)
  })

  it('will show in stock items in black', () => {
    const callback = jest.fn()
    const wrapper = shallow(
      <ProductRow
        currentCategory='electronics'
        category='electronics'
        name='iphone 7'
        price={429}
        stocked
        inStock
        isBuying={{}}
        searchTerm=''
        onIsBuying={callback}
      />
    )
    const itemObject = wrapper.find('.item-color')
    expect(itemObject.node.props.style.color).toBe('black')
  })

  it('will not render if not in stock, and checking for stocked items', () => {
    const callback = jest.fn()
    const wrapper = shallow(
      <ProductRow
        currentCategory='electronics'
        category='electronics'
        name='iphone 7'
        price={429}
        stocked={false}
        inStock
        isBuying={{}}
        searchTerm=''
        onIsBuying={callback}
      />
    )
    const itemObject = wrapper.find('input')
    expect(itemObject.length).toBe(0)
  })

  it('will not render if not searched', () => {
    const callback = jest.fn()
    const wrapper = shallow(
      <ProductRow
        currentCategory='electronics'
        category='electronics'
        name='iphone 7'
        price={429}
        stocked
        inStock
        isBuying={{}}
        searchTerm='elvis'
        onIsBuying={callback}
      />
    )
    const itemObject = wrapper.find('input')
    expect(itemObject.length).toBe(0)
  })
})

// describe('makeKey', () => {
//   it('can make key', () => {
//     let newKey = makeKey('king', 'elvis')
//     expect(newKey).toEqual('king-elvis')
//   })
// })
