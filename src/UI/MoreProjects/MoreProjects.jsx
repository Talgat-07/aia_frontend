import { useState } from 'react';
import PropTypes from 'prop-types';
import classes from 'UI/MoreProjects/MoreProjects.module.scss';
import { Typography } from '..';

export const MoreProjects = ({ initialConfig, children }) => {
  const [config] = useState(initialConfig);

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
                    <div className={classes.buttons}>
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