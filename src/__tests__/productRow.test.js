import React from 'react'
import ProductRow from '../ProductRow'
import { shallow } from 'enzyme'
/* global it describe expect jest */
// import renderer from 'react-test-renderer';

/* global it describe */

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
})
