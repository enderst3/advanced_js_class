import React from 'react'
import ReactDOM from 'react-dom'
import ProductRow from '../ProductRow'
import { shallow, mount, render } from 'enzyme'
// import renderer from 'react-test-renderer';

/* global is describe */

describe('ProductRow', () => {
  it('performs callback functionality', () => {
    const callback = jest.fn();

    const wrapper = shallow(
      <ProductRow
        currentCategory='electronics'
        category='electronics'
        name='iphone 7'
        price={429}
        stocked={true}
        inStock={true}
        isBuying={{}}
        searchTerm=''
        onIsBuying={callback}
      />
    )
    const inputObject = wrapper .find('input')
    inputObject.simulate('change', {target: {checked: true}})
    expect(callback.mock.calls).toEqual([['electronicsiphone 7', true, 429]])
  })

  it('will show out of stock items in red', () => {
    const callback = jest.fn();

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

})
