import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from 'UI/MoreProjects/MoreProjects.module.scss';
import { Typography } from 'UI/index.js';

export const MoreProjects = ({ initialConfig, children }) => {
  const [config] = useState(initialConfig);

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
                    <div className={styles.buttons}>
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