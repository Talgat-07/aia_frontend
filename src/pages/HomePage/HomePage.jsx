import MoreProjects from "UI/moreProjects/moreProjects";
import image from "assets/img/moreProjects.png";
import { Heading } from "UI/heading/Heading";

const HomePage = () => {
  const initialConfig = {
    image: image,
    subtitle: 'Подзаголовок',
    text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortom dolor sit amet consectetur. Mi tristique risus.',
    buttons: [
      'Реализованные проекты',
      'Архитектурное проектирование',
      'Дизайн общественных пространств',
      'Дизайн квартир',
      'Дизайн квартир',
    ],
  };

  return (
    <div>
      HELLO
      <MoreProjects initialConfig={initialConfig}>
        <Heading text="Больше проектов" color="white" />
      </MoreProjects>
    </div>
  );
};

export default HomePage;
