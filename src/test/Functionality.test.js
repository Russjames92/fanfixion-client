import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import CreateForm from '../components/CreateForm/CreateForm'

describe('renders create form', () => {
    const wrapper = shallow(<CreateForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
})