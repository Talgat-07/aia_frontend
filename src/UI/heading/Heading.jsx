import { Typography } from "UI/Typography/Typography";
import classes from "UI/Heading/Heading.module.scss";

export const Heading = ({ text, className, color = "white", align = "center", fontWeight = "semibold", fontSize = "h2" }) => {
   const textColorClass = color === "black" ? classes.blackText : classes.whiteText;

   const alignmentClass =
      align === "left" ? classes.alignLeft :
         classes.alignCenter;

   return (
      <div className={`${classes.Heading} ${className} ${alignmentClass}`}>
         <Typography
            variant={fontSize}
            weight={fontWeight}
            className={`${classes.title} ${textColorClass}`}
         >
            {text}
         </Typography>
         <div className={classes.headingLink}></div>
      </div>
   );
};
