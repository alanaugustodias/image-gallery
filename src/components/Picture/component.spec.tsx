import {mount, shallow} from 'enzyme';

import Picture from './component';
import {PicturesContent} from '@app/interfaces';

describe('Picture Component', () => {
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
        const wrapper = shallow(<Picture picture={picture} src={picture.images.preview.url} />);
        expect(wrapper.length).toBe(1);
        const img = wrapper.find('.picture-wrapper').find('img');
        const title = wrapper.find('.picture-wrapper').find('.title-overlay');
        const pictureModal = wrapper.find('PictureModal');
        expect(img.html()).toContain(picture.images.preview.url);
        expect(title.length).toBe(1);
        expect(pictureModal.length).toBe(1);
    });

    it('should handle className', () => {
        const className = 'test-class';
        const wrapper = shallow(<Picture className={className} picture={picture} />);
        expect(wrapper.length).toBe(1);
        expect(wrapper.find('.picture-wrapper').hasClass(className)).toBeTruthy();
    });

    it('should handle click', () => {
        const onClickHandler = jest.fn();
        const wrapper = shallow(<Picture onClick={onClickHandler} picture={picture} />);
        expect(wrapper.length).toBe(1);
        wrapper.find('img').simulate('click');
        expect(onClickHandler).toHaveBeenCalledTimes(1);
    });

    it('should open Picture Modal', () => {
        const wrapper = mount(<Picture picture={picture} src={picture.images.preview.url} />);
        wrapper.find('.picture-wrapper').simulate('click');
        expect(wrapper.find('PictureModal').prop('show')).toBeTruthy();
    });

    it('should close Picture Modal', () => {
        const wrapper = mount(<Picture picture={picture} src={picture.images.preview.url} />);
        wrapper.find('.picture-wrapper').simulate('click');
        expect(wrapper.find('PictureModal').prop('show')).toBeTruthy();
        wrapper.find('PictureModal').find('.picture-modal').find('.close').simulate('click');
        expect(wrapper.find('PictureModal').prop('show')).toBeFalsy();
    });

    it('should render with no title', () => {
        const noTitlePic = {
            ...picture,
            title: '',
        };
        const wrapper = shallow(<Picture picture={noTitlePic} />);
        const title = wrapper.find('.picture-wrapper').find('.title-overlay');
        expect(title.length).toBe(0);
    });
});
