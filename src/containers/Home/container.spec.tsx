import * as Hooks from '@app/hooks';

import {GalleryAPI} from '@app/enums';
import Home from './container';
import {Provider} from 'react-redux';
import {RootReducer} from '@app/reducers';
import {act} from '@testing-library/react-hooks';
import config from 'react-global-configuration';
import {createStore} from 'redux';
import {mount} from 'enzyme';

describe('Home Container', () => {
    type IntersectionReturnType = [boolean, IntersectionObserverEntry | undefined];

    beforeEach(() => {
        const intersecMock = jest.spyOn(Hooks, 'useIntersectionObserver');
        const mockIntersecValue: IntersectionReturnType = [true, undefined];
        intersecMock.mockReturnValue(mockIntersecValue);
        jest.spyOn(config, 'get').mockImplementation(() => GalleryAPI.Mock);
    });

    it('should render basic instance', async () => {
        const store = createStore(RootReducer);
        const wrapper = await mount(
            <Provider store={store}>
                <Home />
            </Provider>,
        );

        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            wrapper.update();
        });

        expect(wrapper.length).toBe(1);
        expect(wrapper.find('Gallery').length).toBe(1);
        expect(wrapper.find('Gallery').find('.gallery-view').length).toBe(1);
        expect(wrapper.find('Gallery').find('.gallery-view').find('Picture').length).toBe(25);
    });
});
