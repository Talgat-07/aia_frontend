import { useEffect } from "react";
import { useModal } from "utils/hooks/useModal";
import PropTypes from "prop-types";
import styles from "UI/YoutubeBlock/YoutubeBlock.module.scss";
import { Heading } from "UI/index.js";

export const YoutubeBlock = ({ videoId, backgroundColor }) => {
  const { isOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(styles.no_scroll);
    } else {
      document.body.classList.remove(styles.no_scroll);
    }

    return () => document.body.classList.remove(styles.no_scroll);
  }, [isOpen]);

  const colorOptions = {
    white: "white",
    black: "#262626",
  };

  const videoContainerStyle = {
    backgroundColor: colorOptions[backgroundColor] || "transparent",
  };

  const headingColor = backgroundColor === 'white' ? 'black' : 'white';

  return (
     <div className={styles.video_container} style={videoContainerStyle}>
       <Heading text="YouTube" color={headingColor} />

       <div className={styles.video_preview} onClick={openModal}>
         <iframe
            src={`https://www.youtube.com/embed/${videoId}?controls=1&autoplay=0`}
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
         ></iframe>
         <div className={styles.clickable_overlay}></div>
       </div>

       {isOpen && (
          <div className={styles.modal} onClick={closeModal}>
            <div
               className={styles.modalContent}
               onClick={(e) => e.stopPropagation()}
            >
            <span className={styles.closeButton} onClick={closeModal}>
              &times;
            </span>
              <iframe
                 src={`https://www.youtube.com/embed/${videoId}?controls=1&autoplay=1`}
                 title="YouTube Video"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 allowFullScreen
                 width="900px"
                 height="500px"
              ></iframe>
            </div>
          </div>
       )}
       {backgroundColor === 'white' && <hr />}

     </div>
  );
};

YoutubeBlock.propTypes = {
  videoId: PropTypes.string.isRequired,
  backgroundColor: PropTypes.oneOf(["white", "black"]),
};
