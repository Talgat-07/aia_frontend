import { Fragment } from "react";
import styles from "./Typography.module.scss";

export const Typography = (props) => {
    const {
        variant = "bodyXL",
        weight = "regular",
        children,
        className,
        truncate = false,
        id,
        style,
        color = "white"
    } = props;

    const Tags = {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        bodyXL: "p",
        bodyL: "p",
        bodyM: "p",
        bodyS: "p",
        bodyXS: "p",
        span: "span",
    };

    const classNamedGenerated = [
        styles.text,
        styles[variant],
        styles[weight],
        styles[color],
        className,
    ]
        .join(" ")
        .trim();

    const truncateString = (str, maxNumber) => {
        if (typeof str === "string") {
            return str.length <= maxNumber ? str : str.slice(0, maxNumber) + "...";
        }
        return str;
    };

    const TagName = Tags[variant];

    const convertNewlinesToBreaks = (text) => {
        if (typeof (text) === "string") {
            return text.split("\r\n").map((line, index) => (
                <Fragment key={index}>
                    {line}
                </Fragment>
            ));
        } else {
            return text;
        }
    };

    return (
        <TagName style={{ ...style}} id={id} className={classNamedGenerated}>
            {!truncate ? convertNewlinesToBreaks(children) : truncateString(children, truncate)}
        </TagName>
    );
};