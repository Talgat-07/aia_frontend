import styles from "modules/CottageVillageCardModule/CottageVillageCard.module.scss";
import img from "assets/img/vilageCard.png";
import { Heading, Typography } from "UI/index";
import { CustomButton } from "UI/index";
import { VectorIcon } from "assets/icons/VectorIcon";
import { useModal } from "utils/hooks/useModal.js";
import { RegModal } from "modules/User/Components/RegModal/RegModal.jsx";
import { MainCards } from "UI/Cards/MainCards/MainCards";

export const CottageVillageCard = () => {
  const projectData = {
    location: '500 м²',
    area: '500 м²',
    scale: '500 м²',
    year: '2024',
    photo: img,
    descriptions: [
      {
        title: "Описание проекта",
        text: "Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit amet   consectetur. Mi tristique risus accumsan morbi. Sed a   dipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rarcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit  ut diam tincidunt.Lorem ipsum dolor sitetur. Mi tristique risus accumsan morbi.Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan mo Placerat ultricies ultricies rarcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit  ut diam tincidunt.Lorem ipsum dolor sitetur. Mi tristique risus accumsan morbi.Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan mo Placerat ultricies ultricies rarcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit  ut diam tincidunt.Lorem ipsum dolor sitetur.",
        images: [img, img]
      },
      {
        title: "ГенПлан",
        text: "Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit amet   consectetur. Mi tristique risus accumsan morbi. Sed a   dipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rarcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit  ut diam tincidunt.Lorem ipsum dolor sitetur. Mi tristique risus accumsan morbi.Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan mo Placerat ultricies ultricies rarcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit  ut diam tincidunt.Lorem ipsum dolor sitetur. Mi tristique risus accumsan morbi.Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan mo Placerat ultricies ultricies rarcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit  ut diam tincidunt.Lorem ipsum dolor sitetur.",
        images: [img, img]
      },
      {
        title: "Концепция",
        text: "Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit amet   consectetur. Mi tristique risus accumsan morbi. Sed a   dipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rarcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit  ut diam tincidunt.Lorem ipsum dolor sitetur. Mi tristique risus accumsan morbi.Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan mo Placerat ultricies ultricies rarcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit  ut diam tincidunt.Lorem ipsum dolor sitetur. Mi tristique risus accumsan morbi.Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan mo Placerat ultricies ultricies rarcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit  ut diam tincidunt.Lorem ipsum dolor sitetur.",
        images: [img, img]
      },
      {
        title: "Функциональное зонирование",
        text: "Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit amet   consectetur. Mi tristique risus accumsan morbi. Sed a   dipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rarcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit  ut diam tincidunt.Lorem ipsum dolor sitetur. Mi tristique risus accumsan morbi.Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan mo Placerat ultricies ultricies rarcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit  ut diam tincidunt.Lorem ipsum dolor sitetur. Mi tristique risus accumsan morbi.Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan mo Placerat ultricies ultricies rarcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit  ut diam tincidunt.Lorem ipsum dolor sitetur.",
        images: [img, img]
      },
      {
        title: "Фотогалерея",
        text: "Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit amet   consectetur. Mi tristique risus accumsan morbi. Sed a   dipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rarcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit  ut diam tincidunt.Lorem ipsum dolor sitetur. Mi tristique risus accumsan morbi.Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan mo Placerat ultricies ultricies rarcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit  ut diam tincidunt.Lorem ipsum dolor sitetur. Mi tristique risus accumsan morbi.Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan mo Placerat ultricies ultricies rarcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit  ut diam tincidunt.Lorem ipsum dolor sitetur.",
        images: [img, img]
      },
    ],
    cards: [
      {
        title: "Заголовок",
        text: "Коттеджные поселки",
        image: img
      },
      {
        title: "Заголовок",
        text: "Коттеджные поселки",
        image: img
      },
      {
        title: "Заголовок",
        text: "Коттеджные поселки",
        image: img
      },
    ]
  };

  const { isOpen, openModal, closeModal } = useModal();

  const copyPageUrl = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert('Ссылка скопирована в буфер обмена!');
    }).catch((error) => {
      console.error('Ошибка при копировании: ', error);
    });
  };

  return (
    <div>
      <div
        className={styles.hero_block}
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className={styles.hero_text}>
          <Heading text={"INSIDE RESIDENCE"} align="left" />
          <Typography variant="bodyXl" weight="medium" color="white">Подзаголовок</Typography>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.project_info}>
          <div className={styles.info_row}>
            <div className={styles.info_item}>
              <Typography variant="bodyL">{projectData.area}</Typography>
              <Typography variant="bodyM" weight="light">Расположение</Typography>
            </div>
            <div className={styles.info_item}>
              <Typography variant="bodyL">{projectData.area}</Typography>
              <Typography variant="bodyM" weight="light">Площадь</Typography>
            </div>
            <div className={styles.info_item}>
              <Typography variant="bodyL">{projectData.scale}</Typography>
              <Typography variant="bodyM" weight="light">Масштаб проекта</Typography>
            </div>
            <div className={styles.info_item}>
              <Typography variant="bodyL">{projectData.year}</Typography>
              <Typography variant="bodyM" weight="light">Год</Typography>
            </div>
          </div>
        </div>

        <div className={styles.video_block}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {projectData.descriptions.map((desc, index) => (
          <div key={desc.title}>
            <div className={styles.description_block}>
              <div className={styles.desc_text}>
                <Typography variant="bodyL" weight="medium" className={styles.desc_title}>{desc.title}</Typography>
                <Typography variant="bodyM" weight="light" color="black">{desc.text}</Typography>
              </div>
              <div className={styles.image_scroll_block}>
                <div className={styles.image_scroll_container}>
                  {desc.images.map((image, idx) => (
                    <img key={idx} src={image} alt={`Project ${index + 1} Image ${idx + 1}`} className={styles.scroll_image} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className={styles.project_down}>
          <CustomButton
            text="Заказать индивидуальный проект"
            buttonStyles="customButtonBrown"
            onClick={openModal}
          />
          <div className={styles.share_container}>
            <a onClick={copyPageUrl} className={styles.share_link}>
              Поделиться проектом <VectorIcon />
            </a>
          </div>

          {isOpen && <RegModal closeModal={closeModal} isOpen={isOpen} />}
        </div>

        <div className={styles.line}></div>

        <div className={styles.additional_block}>
          <Typography variant="h1" weight="semibold">Проекты в этом поселке</Typography>
          <div className={styles.cards_container}>
            {projectData.cards.map((card, index) => (
              <MainCards 
                key={index} 
                image={card.image} 
                title={card.title} 
                text={card.text}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
