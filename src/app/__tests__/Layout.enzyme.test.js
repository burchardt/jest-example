import React from 'react';
import { shallow, mount} from 'enzyme';

import Layout from '../Layout';

describe('<Layout />', () => {
    it('should render a shallow snapshot with no children', () => {
        const wrapper = shallow(
            <Layout />
        );
        // Generate and match a shallow snapshot
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a deep snapshot with its children', () => {
        const wrapper = mount(
            <Layout />
        );
        // Generate and match a deep snapshot
        expect(wrapper).toMatchSnapshot();
    });
});