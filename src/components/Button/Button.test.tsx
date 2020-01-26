import React from 'react'
import { mount } from 'enzyme'
import { Button } from './Button';

describe('Button', () => {
    it('Should mount', () => {
        const wrapper = mount(<Button />)

        expect(wrapper.exists()).toBeTruthy();
    })
})
