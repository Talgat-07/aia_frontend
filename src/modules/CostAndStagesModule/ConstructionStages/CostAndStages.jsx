import { useState } from "react";
import styles from "modules/CostAndStagesModule/ConstructionStages/CostAndStages.module.scss";
import { CustomButton, Typography } from "UI/index";
import img from "assets/img/moreProjects.png";

export const CostAndStages = () => {
  const [activeTab, setActiveTab] = useState("introduction");

  const tabs = [
    {
      id: "introduction",
      label: "ЗНАКОМСТВО",
      content: {
        title: "Знакомство",
        description:
          "Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit amet consectetur.",
        duration: "7-14 дней",
        stages: [
          {
            description:
              "Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortor eu ut diam tincidunt.",
            image: img,
          },
          {
            description:
              "Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortor eu ut diam tincidunt.",
            image: img,
          },
        ],
      },
    },
    {
      id: "planning",
      label: "ЭСКИЗНЫЙ ПРОЕКТ",
      content: {
        title: "Эскизный проект - Этап 1",
        description: "Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit amet consectetur.",
        duration: "14-21 день",
        stages: [
          { title: "Идея", description: "Lorem ipsum dolor sit amet.", image: img },
          { title: "Функциональное зонирование", description: "Lorem ipsum dolor sit amet.", image: img },
          { title: "Интерактивная модель", description: "Lorem ipsum dolor sit amet.", image: img },
          { title: "Планировочное решение", description: "Lorem ipsum dolor sit amet.", image: img },
          { title: "Визуализация", description: "Lorem ipsum dolor sit amet.", image: img },
          { title: "Упаковка проекта в альбом", description: "Lorem ipsum dolor sit amet.", image: img },
          { title: "Итоги 1 этапа", description: "Lorem ipsum dolor sit amet." },
        ],
      },
    },
    {
      id: "foundation",
      label: "СТРОИТЕЛЬНЫЙ ПРОЕКТ",
      content: {
        title: "Строительный проект - Этап 2",
        description:
          "Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu.",
        duration: "21-28 дней",
        stages: [
          { title: "Конструктивные решения", description: "Lorem ipsum dolor sit amet.", image: img },
          { title: "Архитектурные решения", description: "Lorem ipsum dolor sit amet.", image: img },
          { title: "Итоги 2 этапа", description: "Lorem ipsum dolor sit amet." },
        ],
      },
    },
    {
      id: "walls",
      label: "ИНЖЕНЕРНЫЕ СЕТИ",
      content: {
        title: "Инженерные сети - Этап 3",
        description: "Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit amet consectetur.",
        duration: "28-35 дней",
        stages: [
          { title: "Изучение и анализ условий реализации", description: "Lorem ipsum dolor sit amet.", image: img },
          { title: "Детализированная Bim Модель", description: "Lorem ipsum dolor sit amet.", image: img },
          { title: "Итоги 3 этапа", description: "Lorem ipsum dolor sit amet." },
        ],
      },
    },
    {
      id: "roof",
      label: "СТРОИТЕЛЬСТВО ОБЪЕКТА",
      content: {
        title: "Строительство объекта - Этап 4",
        description: "Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit amet consectetur.",
        duration: "14 дней",
        stages: [
          { title: "Процесс работы", description: "Lorem ipsum dolor sit amet.", image: img },
          { title: "Авторский надзор", description: "Lorem ipsum dolor sit amet.", image: img },
          { title: "Итоги 4 этапа", description: "Lorem ipsum dolor sit amet." },
        ],
      },
    },
    {
      id: "finish",
      label: "ДИЗАЙН ИНТЕРЬЕРА",
      content: {
        title: "Дизайн интерьера - Этап 5",
        description: "Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit amet consectetur.",
        duration: "21-28 дней",
        stages: [
          { title: "Встреча-знакомство", description: "Lorem ipsum dolor sit amet.", image: img },
          { title: "Заключение договора", description: "Lorem ipsum dolor sit amet.", image: img },
          { title: "Концепция", description: "Lorem ipsum dolor sit amet.", image: img },
          { title: "Фотореалистичная визуализация", description: "Lorem ipsum dolor sit amet.", image: img },
          { title: "Детализация и упаковка проекта в альбом", description: "Lorem ipsum dolor sit amet.", image: img },
          { title: "Итоги 5 этапа", description: "Lorem ipsum dolor sit amet." },
        ],
      },
    },
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const currentContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className={styles.app}>
      <div className={styles.tabs}>
        <div className={styles.top_tabs}>
          {tabs.slice(0, 4).map((tab) => (
            <CustomButton
              key={tab.id}
              text={tab.label}
              onClick={() => handleTabChange(tab.id)}
              buttonStyles={activeTab === tab.id ? "activeButtonBrown" : "activeButton"}
            />
          ))}
        </div>
        <div className={styles.bottom_tabs}>
          {tabs.slice(4).map((tab) => (
            <CustomButton
              key={tab.id}
              text={tab.label}
              onClick={() => handleTabChange(tab.id)}
              buttonStyles={activeTab === tab.id ? "activeButtonBrown" : "activeButton"}
            />
          ))}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.title_section}>
          <Typography variant="h2" weight="semibold">
            {currentContent.title}
          </Typography>
          <div className={styles.duration_section}>
            <Typography variant="bodyM" weight="light">Срок реализации</Typography>
            <Typography variant="bodyM" weight="medium">{currentContent.duration}</Typography>
          </div>
        </div>
        <Typography variant="bodyM" weight="light">{currentContent.description}</Typography>
        {activeTab === "introduction" && (
          <CustomButton buttonStyles="customButtonAdaptive" text="Бриф" />
        )}
        <div className={styles.stages}>
          {currentContent.stages.map((stage, index) => (
            <div key={index}>
                <div key={index} className={styles.stage}>
              <div className={styles.stage_text}>
                {index !== currentContent.stages.length - 1 ? (
                  <div className={styles.stage_header}>
                    <Typography variant="bodyL" weight="medium">
                      {String(index + 1).padStart(2, "0")}
                    </Typography>
                    <Typography variant="bodyL" weight="medium">{stage.title}</Typography>
                  </div>
                ) : (
                  <Typography variant="bodyL" weight="medium">{stage.title}</Typography>
                )}
                <Typography variant="bodyM" weight="light" className={styles.stage_description}>
                  {stage.description}
                </Typography>
              </div>
              {index !== currentContent.stages.length - 1 && stage.image && (
                <div className={styles.stage_image_container}>
                  <img
                    src={stage.image}
                    alt={`Stage ${index + 1}`}
                    className={styles.stage_image}
                  />
                </div>
              )}
            </div>
            <div className={styles.divider}>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
