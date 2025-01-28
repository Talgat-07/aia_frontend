import { Heading, Typography } from "UI/index";
import styles from "modules/CostAndStagesModeles/ConstructionCost/ConstructionCost.module.scss";

export const ConstructionCost = () => {
  const mockData = {
    title: "Стоимость и этапы строительства",
    description: `Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. 
      Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum 
      blandit et arcu. Feugiat arcu turpis interdum tortor eu ut diam tincidunt. Lorem ipsum 
      dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel 
      enim justo phasellus a et. Placerat ultricies ultricies arcu turpis interdum tortor eu ut 
      diam tincidunt. Lorem ipsum dolor sit amet ut diam tincidunt. Lorem ipsum dolor sit amet 
      consectetur. Mi tristique risus accumsan morbi.`,
  };

  return (
    <div>
      <div className={styles.title_block}>
        <div className={styles.title}>
          <Heading text={mockData.title} align="left" color="black" />
        </div>
        <div className={styles.description}>
          <Typography variant="bodyL" weight="medium">
            {mockData.title}
          </Typography>
          <Typography variant="bodyM" weight="light">
            {mockData.description}
          </Typography>
        </div>
      </div>
      <div className={styles.divider}></div>
    </div>
  );
};
