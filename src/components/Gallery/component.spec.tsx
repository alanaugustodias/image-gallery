import * as Hooks from '@app/hooks';
import * as redux from 'react-redux';

import {mount, shallow} from 'enzyme';

import Gallery from './component';
import {GalleryActions} from '@app/actions';

describe('Gallery Component', () => {
    const galleryData = {
        images: [
            {
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
            },
        ],
    };

    type IntersectionReturnType = [boolean, IntersectionObserverEntry | undefined];

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render basic instance', () => {
        const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
        const mockDispatchFn = jest.fn();
        useDispatchSpy.mockReturnValue(mockDispatchFn);

        const wrapper = shallow(<Gallery galleryData={galleryData} />);
        expect(wrapper.length).toBe(1);
        expect(wrapper.find('.gallery-view').length).toBe(1);
        expect(wrapper.find('.gallery-view').find('Picture').length).toBe(galleryData.images.length);
        expect(wrapper.find('.scroll-loader').length).toBe(1);
        expect(wrapper.find('.scroll-loader').html()).toContain('Loading images...');
        expect(useDispatchSpy).toHaveBeenCalledTimes(1);
    });

    it('should render with no pictures', () => {
        jest.spyOn(redux, 'useDispatch').mockImplementation(jest.fn());
        const wrapper = shallow(<Gallery galleryData={{images: []}} />);
        expect(wrapper.length).toBe(1);
        expect(wrapper.find('.gallery-view').length).toBe(1);
        expect(wrapper.find('.gallery-view').find('Picture').length).toBe(0);
    });

    it('should handle className', () => {
        jest.spyOn(redux, 'useDispatch').mockImplementation(jest.fn());
        const className = 'test-class';
        const wrapper = shallow(<Gallery className={className} galleryData={galleryData} />);
        expect(wrapper.length).toBe(1);
        expect(wrapper.hasClass(className)).toBeTruthy();
    });

    it('should render last page', () => {
        const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
        const mockDispatchFn = jest.fn();
        useDispatchSpy.mockReturnValue(mockDispatchFn);

        const wrapper = shallow(<Gallery galleryData={galleryData} isLastPage />);
        expect(wrapper.length).toBe(1);
        expect(wrapper.find('.gallery-view').length).toBe(1);
        expect(wrapper.find('.gallery-view').find('Picture').length).toBe(galleryData.images.length);
        expect(wrapper.find('.scroll-loader').length).toBe(1);
        expect(wrapper.find('.scroll-loader').html()).toContain('No more images to show for now :(');
        expect(useDispatchSpy).toHaveBeenCalledTimes(1);
    });

    it('should dispath next page', () => {
        const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
        const mockDispatchResult = jest.fn();
        const mockDispatchFn = jest.fn().mockReturnValue(mockDispatchResult);
        useDispatchSpy.mockReturnValue(mockDispatchFn);

        const intersecMock = jest.spyOn(Hooks, 'useIntersectionObserver');
        const mockIntersecValue: IntersectionReturnType = [true, undefined];
        intersecMock.mockReturnValue(mockIntersecValue);

        const wrapper = mount(<Gallery galleryData={galleryData} />);
        expect(wrapper.length).toBe(1);
        expect(wrapper.find('.gallery-view').length).toBe(1);
        expect(wrapper.find('.gallery-view').find('Picture').length).toBe(galleryData.images.length);
        expect(wrapper.find('.scroll-loader').length).toBe(1);
        expect(wrapper.find('.scroll-loader').html()).toContain('Loading images...');
        expect(useDispatchSpy).toHaveBeenCalledTimes(1);
        expect(mockDispatchFn).toHaveBeenCalledWith(GalleryActions.getNextPage());
    });
});
