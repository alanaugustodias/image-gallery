import Button from './component';
import {shallow} from 'enzyme';

describe('Button Component', () => {
    it('should render basic instance', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper.length).toBe(1);
    });

    it('should render children', () => {
        const text = 'Button Children';
        const wrapper = shallow(<Button>{text}</Button>);
        expect(wrapper.length).toBe(1);
        expect(wrapper.props().children).toBe(text);
    });

    it('should handle className', () => {
        const className = 'test-class';
        const wrapper = shallow(<Button className={className} />);
        expect(wrapper.length).toBe(1);
        expect(wrapper.hasClass(className)).toBeTruthy();
    });

    it('should handle click', () => {
        const onClickHandler = jest.fn();
        const wrapper = shallow(<Button onClick={onClickHandler} />);
        expect(wrapper.length).toBe(1);
        wrapper.simulate('click');
        expect(onClickHandler).toHaveBeenCalledTimes(1);
    });
});
