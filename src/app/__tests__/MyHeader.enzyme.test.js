import React from 'react';
import { shallow, mount} from 'enzyme';

import MyHeader from '../MyHeader';

describe('<MyHeader />', () => {
    it('should render a snapshot with a right header', () => {
        const wrapper = shallow(
            <MyHeader header="Header!!!" />
        );
        // Generate and match a shallow snapshot
        expect(wrapper).toMatchSnapshot();
    });
});