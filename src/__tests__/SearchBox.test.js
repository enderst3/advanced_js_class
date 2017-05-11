import React from 'react'
import SearchBox from '../SearchBox'
import { shallow } from 'enzyme'

/* global it describe expect jest */

describe('SearchBox', () => {
  let onFilterTextInput = jest.fn()
  let onFilterCheckBoxInput = jest.fn()

  it('will filter input, and check', () => {
    /* eslint-disable react/jsx-boolean-value */
    const wrapper = shallow(
      <SearchBox
        searchTerm='ball'
        inStock={true}
        onFilterTextInput={onFilterTextInput}
        onFilterCheckBoxInput={onFilterCheckBoxInput}
      />
    )
    const event = {target: {checked: true}}
    wrapper.find('#stocked-checkbox').simulate('change', event)
    expect(onFilterCheckBoxInput.mock.calls).toEqual([[{target: {checked: true}}]])
  })
})
