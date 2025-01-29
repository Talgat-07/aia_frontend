import PropTypes from 'prop-types';
import styles from 'UI/MoreProjects/MoreProjects.module.scss';
import { CustomButton, Heading, Typography } from 'UI/index.js';

export const MoreProjects = ({ config = {}, children }) => {
   const {
      image = null,
      subtitle = '',
      text = '',
      buttons = [],
      title = '',
   } = config;

   if (!config) {
      return null;
   }

   const contentClass = image ? styles.content : `${styles.content} ${styles.noImage}`;
   const textClass = image ? styles.textContainer : `${styles.textContainer} ${styles.noImageText}`;
   const textHead = image ? styles.text : `${styles.text} ${styles.noImageTextHead}`;
   const buttonHead = image ? styles.text : `${styles.buttons} ${styles.buttons_noImage}`;

   return (
      <div className={styles.custom_block}>
         {children}
         {title && <Heading text={title} color="white" />}
         <div className={contentClass}>
            {image && (
               <div className={styles.imageContainer}>
                  <img src={image} alt="Project" className={styles.custom_image} />
               </div>
            )}
            {(subtitle || text) && (
               <div className={textClass}>
                  {subtitle && (
                     <Typography variant="bodyXl" color="white">
                        {subtitle}
                     </Typography>
                  )}
                  {text && (
                     <Typography
                        variant="bodyM"
                        color="white"
                        weight="light"
                        className={textHead}
                     >
                        {text}
                     </Typography>
                  )}
                  {buttons.length > 0 && (
                     <div className={buttonHead}>
                        {buttons.map((button, index) => (
                           <CustomButton
                              text={button.text}
                              key={index}
                              to={button.link}
                              buttonStyles="wideButton"
                           />
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
   config: PropTypes.shape({
      image: PropTypes.any,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      text: PropTypes.string.isRequired,
      buttons: PropTypes.arrayOf(
         PropTypes.shape({
            text: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
         })
      ).isRequired,
   }).isRequired,
   children: PropTypes.node,
};
