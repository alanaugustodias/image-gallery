import {configureStore} from '../store';

describe('Store', () => {
    it('should have a basic instance', () => {
        expect(configureStore()).toBeTruthy();
    });
});
