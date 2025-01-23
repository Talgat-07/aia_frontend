import { Typography } from "UI/Typography/Typography.jsx";
import classes from "./FollowUs.module.scss";
import { TelegramIconMain, YoutubeIconMain, InstagramIconMain } from "assets/index.js";

export const FollowUs = () => {
  return (
    <div className={classes.followBlockWrapper}>
      <div className={classes.followBlock}>
        {}
        <div className={classes.leftSide}>
          <Typography variant="h2" weight="medium" color="white">
            Следите за нами
          </Typography>
          <div className={classes.orangeLine}></div>
        </div>

        {}
        <div className={classes.rightSide}>
          <Typography variant="bodyM" weight="light" color="white">
            Следите за нашими новостями в самых популярных сетях
          </Typography>
          <div className={classes.icons}>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer">
              <TelegramIconMain />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <YoutubeIconMain />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIconMain />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

