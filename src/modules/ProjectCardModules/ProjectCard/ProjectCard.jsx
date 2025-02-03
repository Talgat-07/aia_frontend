import styles from "./ProjectCard.module.scss";
import img from "assets/img/CardProject.png";
import floor from "assets/img/CardProgects.png";
import { Heading,Typography, BreadCrumbs } from "UI/index";
import { BreadCrumbData, path } from 'utils/constants/constants.js';
import { useParams } from 'react-router-dom';

const FloorDetails = ({ floorNumber, rooms }) => (

  <div>
    <Typography variant="bodyL">{floorNumber} Этаж</Typography>
    <img src={floor} alt={`Floor plan for ${floorNumber}`} />
    {rooms.map((room, index) => (
      <div key={index} className={styles.left_bottom_floors}>
        <Typography variant="bodyM" weight="light">{room.name}</Typography>
        <Typography variant="bodyM" weight="light">{room.size}</Typography>
      </div>
    ))}
  </div>
);

const ImageGallery = ({ images }) => (
  <div className={styles.right}>
    {images.map((src, index) => (
      <img key={index} src={src} alt={`Project image ${index + 1}`} className={styles.right_image} />
    ))}
  </div>
);

export const ProjectCard = () => {
  const { projectId } = useParams();
  const projects = [
    { id: "1", title: "INSIDE RESIDENCE" },
    { id: "2", title: "Проект 2" },
    { id: "3", title: "Проект 3" },
  ]
  const project = projects.find(p => p.id === projectId);

  const projectTitle = project ? project.title : "Неизвестный проект";




  const filteredBreadCrumbData = [
    BreadCrumbData.find(item => item.link === path.home),
    BreadCrumbData.find(item => item.link === path.architectureProjects),
    { label: projectTitle },
  ].filter(Boolean);


  const floorData = [
    {
      floorNumber: 1,
      rooms: [
        { name: "Спальня", size: "20.2 m" },
        { name: "Спальня", size: "20.2 m" },
        { name: "Спальня", size: "20.2 m" },
        { name: "Спальня", size: "20.2 m" },
      ],
    },
    {
      floorNumber: 2,
      rooms: [
        { name: "Спальня", size: "20.2 m" },
        { name: "Спальня", size: "20.2 m" },
        { name: "Спальня", size: "20.2 m" },
        { name: "Спальня", size: "20.2 m" },
      ],
    },
    {
      floorNumber: 3,
      rooms: [
        { name: "Спальня", size: "20.2 m" },
        { name: "Спальня", size: "20.2 m" },
        { name: "Спальня", size: "20.2 m" },
        { name: "Спальня", size: "20.2 m" },
      ],
    },
    {
      floorNumber: 4,
      rooms: [
        { name: "Спальня", size: "20.2 m" },
        { name: "Спальня", size: "20.2 m" },
        { name: "Спальня", size: "20.2 m" },
        { name: "Спальня", size: "20.2 m" },
      ],
    },
    {
      floorNumber: 5,
      rooms: [
        { name: "Спальня", size: "20.2 m" },
        { name: "Спальня", size: "20.2 m" },
        { name: "Спальня", size: "20.2 m" },
        { name: "Спальня", size: "20.2 m" },
      ],
    },
  ];

  const images = [img, img, img, img,img];


  return (
      <div className={styles.project_card}>
        <div className={styles.left}>
          <div className={styles.left_top}>
            <div className={styles.breadcrumb}>
              <BreadCrumbs items={filteredBreadCrumbData} linkColor={'#828282'} activeColor={'#262626'} />

            </div>
            <Heading align="left" color="black" text={projectTitle} />
            <Typography className={styles.subtitle} weight={"medium"} variant="bodyL">Подзаголовок</Typography>
            <div>
              {[
                { label: "Студия", value: "Студия" },
                { label: "Над проектом работали", value: "Студия" },
                { label: "Расположение", value: "Студия" },
                { label: "Площадь", value: "Студия" },
                { label: "Год", value: "Студия" },
                { label: "Категория", value: "Студия" },
              ].map((item, index) => (
                <div key={index} className={styles.left_top_text }>
                  <Typography className={styles.left_top_text_label} variant="bodyM" weight="medium">{item.label}:</Typography>
                  <Typography variant="bodyM" weight="light">{item.value}</Typography>
                </div>
              ))}
              <Typography className={styles.project_description} variant="bodyL">Описание проекта</Typography>
              <Typography variant="bodyM" weight="light">
                Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortor eu ut diam tincidunt. Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu.
              </Typography>
              <Typography className={styles.floors_plan} variant="bodyL">План этажей</Typography>
            </div>
          </div>
          <div className={styles.left_bottom}>
            <div className={styles.left_bottom_scroll}>
              {floorData.map((floor, index) => (
                <FloorDetails
                  key={index}
                  floorNumber={floor.floorNumber}
                  rooms={floor.rooms}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.right_images}>
            <ImageGallery images={images} />
          </div>
        </div>
      </div>
  );
};
