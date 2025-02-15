import { BreadCrumbs, Heading, Typography, CustomButton } from "UI/index.js";
import styles from './BlockTitle.module.scss';
import { path } from "utils/constants/constants.js";
import { BreadCrumbData } from 'utils/constants/constants.js';
import { useLocation } from "react-router-dom";
import { RegModal } from 'modules/User/Components/RegModal/RegModal.jsx';
import { useModal } from 'utils/hooks/useModal.js';
import {useMediaQuery} from "utils/hooks/useMediaQuery.js";

export const BlockTitle = ({ config = {} }) => {
   const {isOpen, openModal, closeModal} = useModal();
   const Desktop = useMediaQuery('(min-width: 1024px)');


   const {
      heading = "Архитектурная студия АЙА",
      subheading = "Подзаголовок",
      description = "",
      button = null,
      linkWidth = '210px'
   } = config;

   const location = useLocation();
   const currentPath = location.pathname;

   const filteredBreadCrumbData = [
      BreadCrumbData.find(item => item.link === path.home),
      BreadCrumbData.find(item => item.link === currentPath),
   ].filter(Boolean);
   return (
       <div className={styles.container}>
          <div className={styles.container_content}>
             <div className={styles.container__left}>
                {Desktop && (
                    <BreadCrumbs items={filteredBreadCrumbData} linkColor={"#828282"} activeColor={'#262626'}/>

                )}
                <Heading className={styles.left__heading} text={heading} linkWidth={linkWidth} color={"black"}
                         align={"left"}/>
             </div>
             <div className={styles.container__right}>
                <Typography variant={"bodyL"} weight={'medium'}>
                   {subheading}
                </Typography>
                <Typography variant={"bodyM"} weight={"light"}>
                   {description || "Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed a dipiscing libero vel enim justo phasellus a et."}
                </Typography>
                {button && (
                    <div className={styles.buttonContainer}>
                       <CustomButton
                           text={"Оставить заявку"}
                           onClick={openModal}
                           buttonStyles="customButtonAdaptive"
                       />
                    </div>
                )}

             </div>
          </div>
          {
             location.pathname === path.aboutUs && <hr/>
          }

          {isOpen ? (<RegModal closeModal={closeModal} isOpen={isOpen}/>) : null}

       </div>

   );
};
