
import React from 'react'
import ProductData from '../ProductData'
import { shallow } from 'enzyme'

/* global it describe expect jest */

describe(ProductData, () => {
  it('renders table', () => {
    /* eslint-disable react/jsx-boolean-value */
    const wrapper = shallow(
      <ProductData
        searchTerm=''
        inStock={true}
        catalog={[
          {category: 'Sporting Goods', price: 49.99, stocked: true, name: 'Football'},
          {category: 'Sporting Goods', price: 29.99, stocked: false, name: 'Basketball'}
        ]}
        isBuying={{}}
        onIsBuying={jest.fn()}
      />
    )
    const output = wrapper.instance().generateTableGuts()
    const expectedKeys = [
      'Sporting Goods',
      'Sporting GoodsFootball',
      'Sporting GoodsBasketball'
    ]
    expectedKeys.forEach((key, index) => {
      expect(output[index].key).toBe(key)
    })
  })
})
