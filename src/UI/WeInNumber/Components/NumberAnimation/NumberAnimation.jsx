import { useState, useEffect } from 'react';
import {Typography} from "UI/typography/Typography.jsx";

export const NumberAnimation = ({ endValue, duration = 2000 }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = endValue / (duration / 16);
        const step = () => {
            start += increment;
            if (start >= endValue) {
                setValue(endValue);
            } else {
                setValue(Math.floor(start));
                requestAnimationFrame(step);
            }
        };

        step();
    }, [endValue, duration]);

    // Форматирование числа
    const formattedValue = value.toLocaleString();

    return <Typography variant="h1" weight="bold" color="primary" >
        {formattedValue}

           </Typography>;
};
