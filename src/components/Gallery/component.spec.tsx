import Gallery from './component';
import {shallow} from 'enzyme';

describe('Gallery Component', () => {
    it('should render basic instance', () => {
        const wrapper = shallow(<Gallery />);
        expect(wrapper.length).toBe(1);
    });

    it('should handle className', () => {
        const className = 'test-class';
        const wrapper = shallow(<Gallery className={className} />);
        expect(wrapper.length).toBe(1);
        expect(wrapper.hasClass(className)).toBeTruthy();
    });

    it('should handle click', () => {
        const onClickHandler = jest.fn();
        const wrapper = shallow(<Gallery onClick={onClickHandler} />);
        expect(wrapper.length).toBe(1);
        wrapper.simulate('click');
        expect(onClickHandler).toHaveBeenCalledTimes(1);
    });
});
