import { useEffect, useRef } from 'react';

export const useLatest = (value) => {
    const valueRef = useRef(value);

    useEffect(() => {
        valueRef.current = value;
    }, [value]);

    return valueRef;
};





export function useOutsideClick(elemRef, handler, attached) {
    const latestHandler = useLatest(handler);

    useEffect(() => {
        if (!attached) return;

        const handleClick = (e) => {
            if (!elemRef.current || !(elemRef.current instanceof HTMLElement)) return;

            if (!elemRef.current.contains(e.target)) {
                latestHandler.current();
            }
        };

        const timeout = setTimeout(() => document.addEventListener('click', handleClick));

        return () => {
            document.removeEventListener('click', handleClick);
            clearTimeout(timeout);
        };
    }, [
        attached,
        latestHandler,
        elemRef,
    ]);
}
