import {MainCards} from "UI/Cards/MainCards/MainCards"
import styles from "modules/RealizeProjectsPageModules/CardsContainer/CardsContainer.module.scss";
import img from "assets/img/RealProjects.png"

export const CardContainer = () => {
  const cardsData = [
    {
      image: img,
      title: "Заголовок",
      text: "Коттеджные поселки",
    },
    {
      image: img,
      title: "Заголовок",
      text: "Коттеджные поселки",
    },
    {
      image: img,
      title: "Заголовок",
      text: "Коттеджные поселки",
    },
    {
      image: img,
      title: "Заголовок",
      text: "Коттеджные поселки",
    },
    {
      image: img,
      title: "Заголовок",
      text: "Коттеджные поселки",
    },
    {
      image: img,
      title: "Заголовок",
      text: "Коттеджные поселки",
    },
  ];

  return (
    <div className={styles.card_container}>
      {cardsData.map((card, index) => (
        <MainCards
          key={index}
          image={card.image}
          title={card.title}
          text={card.text}
        />
      ))}
    </div>
  );
};

