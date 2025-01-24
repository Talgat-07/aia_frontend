import { BreadCrumbs, Heading, Typography } from "UI/index.js";
import styles from './BlockTitle.module.scss';
import { path } from "utils/constants/constants.js";
import {BreadCrumbData} from 'utils/constants/constants.js'
import {useLocation} from "react-router-dom";



export const BlockTitle = ({ subheading = "Подзаголовок", text = "" }) => {
    const location = useLocation();
    const currentPath = location.pathname;
    const filteredBreadCrumbData = [
        BreadCrumbData.find(item => item.link === path.home),
        BreadCrumbData.find(item => item.link === currentPath),
    ].filter(Boolean);

    return (
        <div className={styles.container}>
            <div className={styles.container__left}>
                <BreadCrumbs items={filteredBreadCrumbData} />
                <Heading className={styles.left__heading} text={"Архитектурная студия АЙА"} color={"black"} align={"left"} />
            </div>
            <div className={styles.container__right}>
                <Typography variant={"bodyL"} weight={"semibold"}>
                    {subheading}
                </Typography>
                <Typography variant={"bodyM"} weight={"regular"}>
                    {text || "Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed a dipiscing libero vel enim justo phasellus a et."}
                </Typography>
            </div>
        </div>
    );
};
