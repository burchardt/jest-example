import React from 'react';
import { shallow } from 'enzyme';

import MyButton from '../MyButton';

describe('<MyButton />', () => {
    it('should render a button with a classname', () => {
        const wrapper = shallow(
            <MyButton />
        );
        // Generate and match snapshot
        expect(wrapper).toMatchSnapshot();
    });

    it('toggleState should be called on click', () => {
        spyOn(MyButton.prototype, 'toggleState').and.callThrough();
        const wrapper = shallow(
            <MyButton />
        );
        // Find button element and simulate the click
        wrapper.find('#myButton').simulate('click');
        // Check if the toggleState method have been called
        expect(MyButton.prototype.toggleState).toHaveBeenCalled();
        // Generate snapshot after the button was clicked
        expect(wrapper).toMatchSnapshot();
    });

    it('getButtonText should be called', () => {
        spyOn(MyButton.prototype, 'getButtonText').and.returnValue("BUTTON");
        const wrapper = shallow(
            <MyButton />
        );
        // Check if the getButtonText method have been called
        expect(MyButton.prototype.getButtonText).toHaveBeenCalled();
        // Generate and match snapshot
        expect(wrapper).toMatchSnapshot();
    });
});