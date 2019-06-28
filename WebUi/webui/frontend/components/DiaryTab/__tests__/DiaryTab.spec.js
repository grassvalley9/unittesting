import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { createSerializer } from 'enzyme-to-json'

import Diary from '../index'

import * as c from '../../../store/actionTypes'

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))

configure({ adapter: new Adapter() })

global.mount = mount
global.shallow = shallow

describe('<DiaryTabView />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <Diary
        loadItems={() => console.log('items')}
        updateTime={() => console.log('updateTime')}
      />
    )
  })
  it(`render <Diary /> without data`, () => {
    expect(wrapper).toMatchSnapshot()
  })
})