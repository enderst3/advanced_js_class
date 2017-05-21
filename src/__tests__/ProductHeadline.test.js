import React from 'react'
import ProductHeadline from '../ProductHeadline'
import { shallow } from 'enzyme'

/* global it describe expect */

describe('Filter tests', () => {
  it('will render the right number of table rows', () => {
    const app = shallow(<ProductHeadline />)
    expect(app.find('tr').length).toBe(1)
  })
})
