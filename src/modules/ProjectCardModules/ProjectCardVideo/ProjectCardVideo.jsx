import styles from "./ProjectCardVideo.module.scss";
import { CustomButton } from "UI/index";
import { VectorIcon } from "assets/icons/VectorIcon";

export const ProjectCardVideo = ({ videoId = 'dQw4w9WgXcQ' }) => {
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : '';

  const copyPageUrl = () => {
    const currentUrl = window.location.href; 
    navigator.clipboard.writeText(currentUrl).then(
      () => alert('Ссылка на страницу скопирована в буфер обмена!'),
      () => alert('Не удалось скопировать ссылку.')
    );
  };

  return embedUrl ? (
    <div className={styles.project_video}>
      <div className={styles.video_container}>
        <iframe
          src={embedUrl}
          title="Обзор дома"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.video_iframe}
        ></iframe>
      </div>

      <div className={styles.video_down}>
        <CustomButton
          text="Заказать индивидуальный проект"
          buttonStyles="customButtonBrown"
        />
        <div className={styles.share_container}>
          <a onClick={copyPageUrl} className={styles.share_link}>
            Поделиться проектом <VectorIcon />
          </a>
        </div>
      </div>
    </div>
  ) : (
    <p className={styles.error_message}>Видео не доступно</p>
  );
};
