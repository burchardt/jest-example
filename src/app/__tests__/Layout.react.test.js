import React from 'react';
import renderer from 'react-test-renderer';

import Layout from '../Layout';

describe('<Layout />', () => {
    it('should render the whole layout', () => {
        const tree = renderer.create(
            <Layout />
        ).toJSON();
        // Generate and match snapshot
        expect(tree).toMatchSnapshot();
    });
});