import React from 'react'
import { shallow } from 'enzyme'

import RegistrationForm from '../../client/components/RegistrationForm'

let wrapper

describe('<RegistrationForm />', () => {
  beforeEach(() => {
    wrapper = shallow(<RegistrationForm />)

    wrapper.instance().setState({
      name: 'Arthur',
      age: 24,
      languages: 'English, French',
      location: 'Wellington',
      occupation: 'student',
      interests: 'soccer',
      support: 'friendship',
      email: 'arthur@gmail.com'
    })
  })

  describe('form renders correct values', () => {
    test('name', () => {
      let input = wrapper.find('#name')
      expect(input.prop('value')).toBe('Arthur')
    })
    test('age', () => {
      let input = wrapper.find('#age')
      expect(input.prop('value')).toBe(24)
    })
    test('languages', () => {
      let input = wrapper.find('#languages')
      expect(input.prop('value')).toBe('English, French')
    })
    test('location', () => {
      let input = wrapper.find('#location')
      expect(input.prop('value')).toBe('Wellington')
    })
  })

  describe('triggers eventhandler functions', () => {
    test('handleChange', () => {
      wrapper.instance().handleChange = jest.fn()
      wrapper.instance().forceUpdate()

      wrapper.find('#name').simulate('change')
      expect(wrapper.instance().handleChange).toHaveBeenCalled()
    })

    test('handleSubmit', () => {
      wrapper.instance().handleSubmit = jest.fn()
      wrapper.instance().forceUpdate()

      wrapper.find('form').simulate('submit')
      expect(wrapper.instance().handleSubmit).toHaveBeenCalled()
    })
  })

  describe('update state on input change event', () => {
    test('occupation', () => {
      let input = wrapper.find('#occupation')
      input.simulate('change', {
        target: {
          name: 'occupation',
          value: 'golfer'
        }
      })
      let state = wrapper.instance().state
      expect(state.occupation).toBe('golfer')
    })
    test('interests', () => {
      let input = wrapper.find('#interests')
      input.simulate('change', {
        target: {
          name: 'interests',
          value: 'films'
        }
      })
      let state = wrapper.instance().state
      expect(state.interests).toBe('films')
    })
    test('support', () => {
      let input = wrapper.find('#support')
      input.simulate('change', {
        target: {
          name: 'support',
          value: 'housing'
        }
      })
      let state = wrapper.instance().state
      expect(state.support).toBe('housing')
    })
    test('email', () => {
      let input = wrapper.find('#email')
      input.simulate('change', {
        target: {
          name: 'email',
          value: 'test@gmail.com'
        }
      })
      let state = wrapper.instance().state
      expect(state.email).toBe('test@gmail.com')
    })
  })
})
