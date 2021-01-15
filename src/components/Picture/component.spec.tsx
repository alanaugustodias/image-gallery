import Picture from './component';
import {shallow} from 'enzyme';

describe('Picture Component', () => {
    it('should render basic instance', () => {
        const wrapper = shallow(<Picture />);
        expect(wrapper.length).toBe(1);
    });

    it('should handle className', () => {
        const className = 'test-class';
        const wrapper = shallow(<Picture className={className} />);
        expect(wrapper.length).toBe(1);
        expect(wrapper.hasClass(className)).toBeTruthy();
    });

    it('should handle click', () => {
        const onClickHandler = jest.fn();
        const wrapper = shallow(<Picture onClick={onClickHandler} />);
        expect(wrapper.length).toBe(1);
        wrapper.simulate('click');
        expect(onClickHandler).toHaveBeenCalledTimes(1);
    });
});
