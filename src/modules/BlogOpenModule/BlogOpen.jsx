import { useState, useEffect, useRef, useCallback } from 'react';
import styles from "modules/BlogOpenModule/BlogOpen.module.scss";
import img1 from "assets/img/BlogOpen.png";
import { Heading } from 'UI/index';
import { Typography } from 'UI/index';
import { VectorIcon } from "assets/icons/VectorIcon";

export const BlogOpen = () => {
  const staticData = {
    mission: "МИССИЯ - ТВОРИТЬ КРАСОТУ",
    totalImages: 10,
    images: new Array(10).fill(img1),
    title: "LOREM IPSUM",
    description: "Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit amet   consectetur. Mi tristique risus accumsan morbi. Sed a   dipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rarcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit  ut diam tincidunt.Lorem ipsum dolor sitetur. Mi tristique risus accumsan morbi.Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit amet   consecteturLorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit amet   consectetur. Mi tristique risus accumsan morbi. Sed a   dipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rarcuSed a   dipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rarcu. Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit amet   consectetur. Mi tristique risus accumsan morbi. Sed a   dipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rarcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit  ut diam tincidunt.Lorem ipsum dolor sitetur. Mi tristique risus accumsan morbi.Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultr",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
    publicationDate: "12 декабря 2024",
    author: "Ipsum Loran",
    mainTags: ["consectetur", "ultricies", "design", "all"],
    recommendedTags: ["creative", "ideas", "innovation"]
  };

  const [imageIndex, setImageIndex] = useState(1);
  const [activeTags, setActiveTags] = useState(staticData.mainTags);
  const [recommendedTags, setRecommendedTags] = useState(staticData.recommendedTags);
  const galleryRef = useRef(null);

  const copyPageUrl = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert('Ссылка скопирована в буфер обмена!');
    }).catch((error) => {
      console.error('Ошибка при копировании: ', error);
    });
  };

  const handleTagDelete = (tag) => {
    setActiveTags(prevTags => prevTags.filter((currentTag) => currentTag !== tag));
  };

  const handleTagClick = (tag) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter((currentTag) => currentTag !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
      setRecommendedTags(recommendedTags.filter((currentTag) => currentTag !== tag));
    }
  };

  const updateImageIndex = useCallback(() => {
    if (galleryRef.current) {
      const scrollLeft = galleryRef.current.scrollLeft;
      const imageWidth = galleryRef.current.querySelector('img')?.offsetWidth || 0;
      const index = Math.floor(scrollLeft / imageWidth) + 1;
      setImageIndex(Math.min(Math.max(index, 1), staticData.totalImages));
    }
  }, [staticData.totalImages]);

  useEffect(() => {
    const galleryElement = galleryRef.current;
    galleryElement.addEventListener('scroll', updateImageIndex);

    return () => {
      galleryElement.removeEventListener('scroll', updateImageIndex);
    };
  }, [updateImageIndex]);

  return (
    <div className={styles.page}>
      <Heading text={staticData.mission} align="left" color="black" />
      
      <Typography variant="bodyM" weight="light" className={styles.imageCounter}>
        {`${imageIndex}/${staticData.totalImages}`}
      </Typography>

      <div className={styles.gallery} ref={galleryRef}>
        <div className={styles.images}>
          {staticData.images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
        </div>
      </div>

      <div className={styles.description}>
        <Typography className={styles.desc_title} variant="bodyL" weight="semibold">{staticData.title}</Typography>
        <Typography variant="bodyM" weight="light">{staticData.description}</Typography>
      </div>

      <div className={styles.video}>
        <iframe 
          width="100%" 
          height="600" 
          src={staticData.videoSrc} 
          title="YouTube video player" 
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>

      <div className={styles.info}>
        <div className={styles.left}>
          <div className={styles.content}>
            <Typography variant="bodyXS" weight="regular" className={styles.label}>Дата публикации:</Typography>
            <Typography className={styles.author} variant="bodyXS" weight="light">{staticData.publicationDate}</Typography>
          </div>
          
          <div className={styles.content}>
            <Typography variant="bodyXS" weight="regular" className={styles.label}>Автор:</Typography>
            <Typography className={styles.author} variant="bodyXS" weight="light">{staticData.author}</Typography>
          </div>

          <div className={styles.content}>
            <Typography variant="bodyXS" weight="regular" className={styles.label}>Теги:</Typography>
            <div className={styles.tagsContainer}>
              <ul className={styles.tags}>
                {activeTags.map((tag, index) => (
                  <li key={index} className={`${styles.tag} ${styles.mainTag}`}>
                    <Typography variant="bodyXS" weight="light">{tag}</Typography>
                    <button className={styles.deleteButton} onClick={() => handleTagDelete(tag)}>×</button>
                  </li>
                ))}
                {recommendedTags.map((tag, index) => (
                  <li 
                    key={index} 
                    className={`${styles.tag} ${styles.recommendedTag}`} 
                    onClick={() => handleTagClick(tag)}
                  >
                    <Typography variant="bodyXS" weight="light">{tag}</Typography>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.shareContainer}>
          <Typography variant="bodyXS" weight="regular" ><a onClick={copyPageUrl} className={styles.shareLink}>
            Поделиться проектом <VectorIcon />
          </a></Typography>
        </div>
      </div>
    </div>
  );
};
