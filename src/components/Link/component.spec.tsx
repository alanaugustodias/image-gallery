import Link from './component';
import {shallow} from 'enzyme';

describe('Link Component', () => {
    it('should render basic instance', () => {
        const linkPath = 'https://google.com';
        const wrapper = shallow(<Link href={linkPath} />);
        expect(wrapper.length).toBe(1);
        expect(wrapper.props().href).toBe(linkPath);
    });

    it('should render children', () => {
        const linkPath = 'https://google.com';
        const text = 'Google';
        const wrapper = shallow(<Link href={linkPath}>{text}</Link>);
        expect(wrapper.length).toBe(1);
        expect(wrapper.props().href).toBe(linkPath);
        expect(wrapper.props().children).toBe(text);
    });

    it('should handle className', () => {
        const className = 'test-class';
        const wrapper = shallow(<Link className={className} />);
        expect(wrapper.length).toBe(1);
        expect(wrapper.hasClass(className)).toBeTruthy();
    });

    it('should handle click', () => {
        const onClickHandler = jest.fn();
        const wrapper = shallow(<Link onClick={onClickHandler} />);
        expect(wrapper.length).toBe(1);
        wrapper.simulate('click');
        expect(onClickHandler).toHaveBeenCalledTimes(1);
    });
});
