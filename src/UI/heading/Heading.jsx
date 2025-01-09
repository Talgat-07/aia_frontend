import { Typography } from "UI/typography/Typography";
import classes from "UI/heading/Heading.module.scss";

export const Heading = ({ text, className }) => {
  return (
    <div className={`${classes.Heading} ${className}`}>
      <Typography variant="h2" weight="semibold" className={classes.title}>
        {text}
      </Typography>
      <div className={classes.headingLink}></div>
    </div>
  );
};

