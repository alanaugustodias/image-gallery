import {RefObject, useEffect, useRef, useState} from 'react';

interface Args<T> extends IntersectionObserverInit {
    elementRef: RefObject<T>;
    freezeOnceVisible?: boolean;
}

type ReturnType = [boolean, IntersectionObserverEntry | undefined];

function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>({
    elementRef,
    threshold = 0.1,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false,
}: Args<T>): ReturnType {
    const observer = useRef<IntersectionObserver | null>(null);
    const [entry, setEntry] = useState<IntersectionObserverEntry>();
    const noUpdate = entry?.isIntersecting && freezeOnceVisible;
    const observerOptions = {
        threshold,
        root,
        rootMargin,
    };

    const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
        setEntry(entry);
    };

    useEffect(() => {
        const node = elementRef?.current;
        if (!node || noUpdate) {
            return;
        }

        if (observer.current) {
            observer.current.disconnect();
        }

        observer.current = new IntersectionObserver(updateEntry, observerOptions);
        const {current: currentObserver} = observer;
        currentObserver.observe(node);

        return () => {
            currentObserver.disconnect();
        };
    }, [elementRef, threshold, root, rootMargin, freezeOnceVisible]);

    return [!!entry?.isIntersecting, entry];
}

export default useIntersectionObserver;
