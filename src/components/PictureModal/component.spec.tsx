import Picture from './component';
import {shallow} from 'enzyme';

describe('Picture Component', () => {
    it('should render basic instance', () => {
        const title = 'Picture Title';
        const wrapper = shallow(<Picture title={title} />);
        expect(wrapper.length).toBe(1);
        expect(wrapper.props().title).toBe(title);
    });

    it('should handle className', () => {
        const className = 'test-class';
        const wrapper = shallow(<Picture className={className} title="Picture Title" />);
        expect(wrapper.length).toBe(1);
        expect(wrapper.hasClass(className)).toBeTruthy();
    });

    it('should handle click', () => {
        const onClickHandler = jest.fn();
        const wrapper = shallow(<Picture onClick={onClickHandler} title="Picture Title" />);
        expect(wrapper.length).toBe(1);
        wrapper.simulate('click');
        expect(onClickHandler).toHaveBeenCalledTimes(1);
    });
});
