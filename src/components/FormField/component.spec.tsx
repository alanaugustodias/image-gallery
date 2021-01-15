import FormField from './component';
import {shallow} from 'enzyme';

describe('FormField Component', () => {
    it('should render basic instance', () => {
        const wrapper = shallow(<FormField />);
        expect(wrapper.length).toBe(1);
    });

    it('should render children', () => {
        const text = 'FormField Children';
        const wrapper = shallow(<FormField>{text}</FormField>);
        expect(wrapper.length).toBe(1);
        expect(wrapper.props().children).toBe(text);
    });

    it('should handle className', () => {
        const className = 'test-class';
        const wrapper = shallow(<FormField className={className} />);
        expect(wrapper.length).toBe(1);
        expect(wrapper.hasClass(className)).toBeTruthy();
    });

    it('should handle click', () => {
        const onClickHandler = jest.fn();
        const wrapper = shallow(<FormField onClick={onClickHandler} />);
        expect(wrapper.length).toBe(1);
        wrapper.simulate('click');
        expect(onClickHandler).toHaveBeenCalledTimes(1);
    });
});
