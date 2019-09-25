import React from 'react'
import { shallow } from 'enzyme'

import RegistrationForm from '../../client/components/RegistrationForm'

const wrapper = shallow(<RegistrationForm />)

describe('<RegistrationForm />', () => {
    beforeEach(() => {
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
    test('form renders correct value for name', () => {
        let input = wrapper.find('#name')
        expect(input.prop('value')).toBe('Arthur')
    })
    test('form renders correct value for age', () => {
        let input = wrapper.find('#age')
        expect(input.prop('value')).toBe(24)
    })
    test('form renders correct value for languages', () => {
        let input = wrapper.find('#languages')
        expect(input.prop('value')).toBe('English, French')
    })
    test('form renders correct value for location', () => {
        let input = wrapper.find('#location')
        expect(input.prop('value')).toBe('Wellington')
    })

    test('state of occupation updates when content entered', () => {
        let input = wrapper.find('#occupation')
        input.simulate('onKeyPress', { target: {
            name: 'occupation',
            value: 'student'
        }})
        let state = wrapper.instance().state
        expect(state.occupation).toBe('student')
    })
    test('state of interests updates when content entered', () => {
        let input = wrapper.find('#interests')
        input.simulate('onKeyPress', { target: {
            name: 'interests',
            value: 'soccer'
        }})
        let state = wrapper.instance().state
        expect(state.interests).toBe('soccer')
    })
    test('state of support updates when content entered', () => {
        let input = wrapper.find('#support')
        input.simulate('onKeyPress', { target: {
            name: 'support',
            value: 'friendship'
        }})
        let state = wrapper.instance().state
        expect(state.support).toBe('friendship')
    })
    test('state of email updates when content entered', () => {
        let input = wrapper.find('#email')
        input.simulate('onKeyPress', { target: {
            name: 'email',
            value: 'arthur@gmail.com'
        }})
        let state = wrapper.instance().state
        expect(state.email).toBe('arthur@gmail.com')
    })
})