import {createRef} from 'react';
import {renderHook} from '@testing-library/react-hooks';
import useIntersectionObserver from './use-intersection-observer';

describe('Custom Hook useIntersectionObserver', () => {
    beforeEach(async () => {
        const mockIntersectionObserver = jest.fn();
        mockIntersectionObserver.mockReturnValue({
            observe: () => null,
            unobserve: () => null,
            disconnect: () => null,
        });
        window.IntersectionObserver = mockIntersectionObserver;
    });

    it('should have basic instance', () => {
        const elementRef = createRef<HTMLDivElement>();
        const {result} = renderHook(() =>
            useIntersectionObserver({
                elementRef,
            }),
        );
        const [isLoaderVisible, entry] = result.current;
        expect(isLoaderVisible).toBeFalsy();
        expect(entry).toBeFalsy();
    });
});
