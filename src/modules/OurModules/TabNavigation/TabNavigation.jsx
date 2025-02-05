import { useState } from "react";
import Image from 'assets/img/moreProjects.png';
import { CustomButton, MoreProjects } from "UI/index.js";
import styles from './TabNavigation.module.scss';
import { path } from 'utils/constants/constants.js';

export const TabNavigation = () => {
    const [activeTab, setActiveTab] = useState("architecture");

    const tabsConfig =  {
        architecture: {
            image: Image,
            subtitle: "Архитектурное проектирование",
            text: "Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortom dolor sit amet   consectetur. Mi tristique risus..",
            buttons: [
                { text: "Частные дома", link: path.privateArchitecture },
                { text: "Поселки и кварталы", link: path.blocksArchitecture },
                { text: "Общественные здания", link: path.publicArchitecture },
            ],
        },
        design: {
            image: Image,
            subtitle: "Дизайн интерьера",
            text: "Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortom dolor sit amet   consectetur. Mi tristique risus..",
            buttons: [
                { text: "Дизайн домов", link: path.houseDesignPage },
                { text: "Дизайн квартир", link: path.apartmentDesignPage },
                { text: "Дизайн общественных пространств", link: path.publicSpacesInterior },
            ],
        },
    };

    const tabLabels = [
        { id: "architecture", label: "Архитектурное проектирование" },
        { id: "design", label: "Дизайн интерьера" },
    ];

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const currentTab = tabsConfig[activeTab] || tabsConfig.architecture;

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.content_buttons}>
                    {tabLabels.map((tab) => (
                       <CustomButton
                          key={tab.id}
                          text={tab.label}
                          buttonStyles={activeTab === tab.id ? 'twoButtonsActive' : 'twoButtons'}
                          onClick={() => handleTabClick(tab.id)}
                          aria-pressed={activeTab === tab.id}
                       />
                    ))}
                </div>
                <div className={styles.content_information}>
                    <MoreProjects config={currentTab} />
                </div>
                <div className={styles.content_hr}>
                    <hr />

                </div>

            </div>
        </div>
    );
};
