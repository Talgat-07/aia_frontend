import { Typography } from "UI/Typography/Typography";
import classes from "UI/Heading/Heading.module.scss";

export const Heading = ({ text, className, color = "white" }) => {
  const textColorClass = color === "black" ? classes.blackText : classes.whiteText;

  return (
    <div className={`${classes.Heading} ${className}`}>
      <Typography
        variant="h2"
        weight="semibold"
        className={`${classes.title} ${textColorClass}`}
      >
        {text}
      </Typography>
      <div className={classes.headingLink}></div>
    </div>
  );
};
