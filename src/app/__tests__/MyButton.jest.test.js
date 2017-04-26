import React from 'react';
import renderer from 'react-test-renderer';

import { MyButton } from '../MyButton';

describe('<Button />', () => {
    it('should render a button with a classname', () => {
        const tree = renderer.create(
            <MyButton />
        ).toJSON();
        // Generate and match snapshot
        expect(tree).toMatchSnapshot();
    });

    it('toggleState should be called on click', () => {
        const component = renderer.create(
            <MyButton />
        );
        let tree = component.toJSON();
        // Find the button element
        const button = tree.children.filter(child => child.type === 'button')[0];
        // Check if the button were found and is not null
        expect(button).toBeDefined();
        expect(button).not.toBeNull();
        // Simulate click on button
        button.props.onClick();
        // Generate snapshot after the button was clicked
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});