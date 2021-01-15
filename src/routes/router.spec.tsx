import Router from './router';
import {shallow} from 'enzyme';

describe('Router', () => {
    it('should have a basic instance', () => {
        const wrapper = shallow(<Router />);
        expect(wrapper.length).toBeTruthy();
    });
});
