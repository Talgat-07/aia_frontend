import { useState } from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import classes from 'UI/MoreProjects/MoreProjects.module.scss';
import { Typography } from '..';
=======
import styles from 'UI/MoreProjects/MoreProjects.module.scss';
import { Typography } from 'UI/index.js';
>>>>>>> acc26d007076ad0aed45beb219ec0291d843677b

export const MoreProjects = ({ initialConfig, children }) => {
  const [config] = useState(initialConfig);

<<<<<<< HEAD
  const contentClass = config.image ? classes.content : `${classes.content} ${classes.noImage}`;
  const textClass = config.image ? classes.textContainer : `${classes.textContainer} ${classes.noImageText}`;
  const textHead = config.image ? classes.text : `${classes.text} ${classes.noImageTextHead}`;

  return (
      <div className={classes.custom_block}>
        {children}
        <div className={contentClass}>
          {config.image && (
              <div className={`${classes.imageContainer}`}>
                <img src={config.image} alt="Project" className={classes.custom_image} />
=======
  const contentClass = config.image ? styles.content : `${styles.content} ${styles.noImage}`;
  const textClass = config.image ? styles.textContainer : `${styles.textContainer} ${styles.noImageText}`;
  const textHead = config.image ? styles.text : `${styles.text} ${styles.noImageTextHead}`;

  return (
      <div className={styles.custom_block}>
        {children}
        <div className={contentClass}>
          {config.image && (
              <div className={`${styles.imageContainer}`}>
                <img src={config.image} alt="Project" className={styles.custom_image} />
>>>>>>> acc26d007076ad0aed45beb219ec0291d843677b
              </div>
          )}
          {(config.subtitle || config.text) && (
              <div className={textClass}>
                {config.subtitle && (
                    <Typography variant="bodyXl" color="white">
                      {config.subtitle}
                    </Typography>
                )}
                {config.text && (
                    <Typography
                        variant="bodyM"
                        color="white"
                        weight="light"
                        className={textHead}
                    >
                      {config.text}
                    </Typography>
                )}
                {config.buttons && config.buttons.length > 0 && (
<<<<<<< HEAD
                    <div className={classes.buttons}>
=======
                    <div className={styles.buttons}>
>>>>>>> acc26d007076ad0aed45beb219ec0291d843677b
                      {config.buttons.map((buttonText, index) => (
                          <button key={index}>{buttonText}</button>
                      ))}
                    </div>
                )}
              </div>
          )}
        </div>
      </div>
  );
};

MoreProjects.propTypes = {
  initialConfig: PropTypes.shape({
    image: PropTypes.string,
    subtitle: PropTypes.string,
    text: PropTypes.string.isRequired,
    buttons: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  children: PropTypes.node,
};