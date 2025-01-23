import { useEffect, useState, useRef } from 'react';

export const useOverflowCheck = () => {
    const [isOverflowing, setIsOverflowing] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new ResizeObserver(() => {
            if (ref.current) {
                setIsOverflowing(ref.current.scrollHeight > ref.current.clientHeight);
            }
        });
        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return { ref, isOverflowing };
};
