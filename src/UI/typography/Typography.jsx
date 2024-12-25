import styles from './Typography.module.scss';
import { Fragment } from 'react';

export const Typography = props => {
    const {
        variant = 'h4',
        weight = 'regular',
        children,
        className,
        color = 'black',
        truncate = false,
    } = props;

    const Tags = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6:'h6'
    };

    const classNamedGenerated = [
        styles.text,
        styles[variant],
        styles[weight],
        styles[color],
        className,
    ]
        .join(' ')
        .trim();

    const truncateString = (str, maxNumber) => {
        if (typeof str === 'string') {
            return str.length <= maxNumber
                ? str
                : str.slice(0, maxNumber) + '...';
        }
        return str;
    };

    const convertNewlinesToBreaks = text => {
        if (typeof text === 'string') {
            return text
                .split('\r\n')
                .map((line, index) => <Fragment key={index}>{line}</Fragment>);
        } else {
            return text;
        }
    };

    const TagName = Tags[variant in Tags ? variant : 'bodyXL'];

    return (
        <TagName className={classNamedGenerated}>
            {!truncate
                ? convertNewlinesToBreaks(children)
                : truncateString(children, truncate)}
        </TagName>
    );
};