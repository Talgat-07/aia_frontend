import { useState } from 'react';
import PropTypes from 'prop-types'; 
import classes from 'UI/moreProjects/moreProjects.module.scss';
import { Typography } from '..';

const MoreProjects = ({ initialConfig, children }) => {
  const [config] = useState(initialConfig);

  return (
    <div className={classes.custom_block}>
      {children}
      <div className={classes.content}>
        <div className={classes.imageContainer}>
          <img src={config.image} alt="Project" className={classes.custom_image} />
        </div>
        <div className={classes.textContainer}>
          <Typography variant="bodyXl" color="white">{config.subtitle}</Typography>
          <Typography variant="bodyM" color="white" weight="light" className={classes.textt}>{config.text}</Typography>
          <div className={classes.buttons}>
            {config.buttons.map((buttonText, index) => (
              <button key={index}>{buttonText}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

MoreProjects.propTypes = {
  initialConfig: PropTypes.shape({
    image: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    buttons: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  children: PropTypes.node,
};

export default MoreProjects;
