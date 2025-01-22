import { MoreProjects } from 'UI/MoreProjects/MoreProjects';
import img from "assets/img/moreProjects.png";
import { Heading } from 'UI/index';

export const ProgectCardMoreProjects = () => {
  const config = {
    image: img,
    subtitle: 'Наши проекты', 
    text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortom dolor sit amet   consectetur. Mi tristique risus.', 
    buttons: ['Реализованные проекты', 'Архитектурное проектирование', 'Дизайн общественных пространств', 'Дизайн домов'] 
  };

  return (
    <div>
      <MoreProjects initialConfig={config}>
        <Heading text={"Больше проектов"}/>
      </MoreProjects>
    </div>
  );
};
