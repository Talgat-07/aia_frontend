import { Typography } from "UI/typography/Typography";
import classes from "UI/heading/heading.module.scss";

const Heading = ({ text, className }) => {
  return (
    <div className={`${classes.Heading} ${className}`}>
      <Typography variant="h2" weight="semibold" className={classes.title}>
        {text}
      </Typography>
      <div className={classes.headingLink}></div>
    </div>
  );
};

export default Heading;
