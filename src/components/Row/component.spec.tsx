import Row from './component';
import {shallow} from 'enzyme';

describe('Row Component', () => {
    it('should render basic instance', () => {
        const wrapper = shallow(<Row />);
        expect(wrapper.length).toBe(1);
    });

    it('should render children', () => {
        const text = 'Row Children';
        const wrapper = shallow(<Row>{text}</Row>);
        expect(wrapper.length).toBe(1);
        expect(wrapper.props().children).toBe(text);
    });

    it('should handle className', () => {
        const className = 'test-class';
        const wrapper = shallow(<Row className={className} />);
        expect(wrapper.length).toBe(1);
        expect(wrapper.hasClass(className)).toBeTruthy();
    });

    it('should handle click', () => {
        const onClickHandler = jest.fn();
        const wrapper = shallow(<Row onClick={onClickHandler} />);
        expect(wrapper.length).toBe(1);
        wrapper.simulate('click');
        expect(onClickHandler).toHaveBeenCalledTimes(1);
    });
});
