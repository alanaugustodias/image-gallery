import PictureModal from './component';
import {PicturesContent} from '@app/interfaces';
import {mount} from 'enzyme';

describe('Picture Modal Component', () => {
    const picture: PicturesContent = {
        id: '123',
        title: 'Image Title',
        images: {
            preview: {
                url: 'image-src',
            },
            original: {
                url: 'image-src',
            },
        },
    };

    it('should render basic instance', () => {
        const wrapper = mount(<PictureModal picture={picture} show={true} onClose={() => ({})} />);
        expect(wrapper.length).toBe(1);
        expect(wrapper.find('.modal-content').length).toBe(1);
        expect(wrapper.find('.modal-content').find('figure').length).toBe(1);
        expect(wrapper.find('.modal-content').find('figure').find('img').length).toBe(1);
        expect(wrapper.find('.modal-content').find('figure').find('label').length).toBe(1);
    });

    it('should not render a picture', () => {
        const wrapper = mount(<PictureModal picture={picture} show={false} onClose={() => ({})} />);
        expect(wrapper.length).toBe(1);
        expect(wrapper.find('.modal-content').length).toBe(1);
        expect(wrapper.find('.modal-content').find('span').length).toBe(1);
    });

    it('should handle className', () => {
        const className = 'test-class';
        const wrapper = mount(<PictureModal className={className} show={false} onClose={() => ({})} />);
        expect(wrapper.length).toBe(1);
        expect(wrapper.hasClass(className)).toBeTruthy();
    });

    it('should handle click', () => {
        const onCloseHandler = jest.fn();
        const wrapper = mount(<PictureModal show onClose={onCloseHandler} />);
        expect(wrapper.length).toBe(1);
        const mockedEvent = {target: wrapper.find('.picture-modal').getDOMNode()};
        wrapper.simulate('click', mockedEvent);
        expect(onCloseHandler).toHaveBeenCalledTimes(1);
    });

    it('should close', () => {
        const onCloseHandler = jest.fn();
        const wrapper = mount(<PictureModal show onClose={onCloseHandler} />);
        wrapper.find('.picture-modal').find('.close').simulate('click');
        expect(onCloseHandler).toHaveBeenCalledTimes(1);
    });
});
