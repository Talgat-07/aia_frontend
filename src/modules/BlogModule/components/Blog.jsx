import {
   BreadCrumbs,
   Container,
   FollowUs,
   Heading,
   Typography,
} from 'UI/index';
import styles from './Blog.module.scss';
import { useLocation } from 'react-router-dom';
import { BreadCrumbData, path } from 'utils/constants/constants';
import { Cards, FilterButtons } from '.';


export const Blog = () => {
   const location = useLocation();
   const currentPath = location.pathname;
   const filteredBreadCrumbData = BreadCrumbData.filter(
      (item) => item.link === path.home || item.link === currentPath
   );

   return (
      <>
         <Container>
            <div className={styles.blogContainer}>
               <div className={styles.startBlock}>
                  <div className={styles.leftBlock}>
                     <BreadCrumbs
                        items={filteredBreadCrumbData}
                        linkColor={'#828282'}
                        activeColor={'#262626'}
                     />
                     <div className={styles.pageTitleAndDescription}>
                        <div>
                           <Heading
                              text="Блог"
                              align="left"
                              color="black"
                              fontSize="h1"
                              fontWeight="bold"
                              className={styles.heading}
                           />
                        </div>
                        <Typography
                           variant="bodyXl"
                           weight="medium"
                           className={styles.description}
                        >
                           Основные темы
                        </Typography>
                     </div>
                  </div>
                  <div className={styles.rightBlock}>
                     <FilterButtons />
                  </div>
               </div>

               <hr className={styles.divider} />
            </div>
            <Heading
               text="Новости"
               align="center"
               color="black"
               fontSize="h1"
               fontWeight="bold"
               className={styles.heading}
            />
            <Cards/>
            <FollowUs />
         </Container>
      </>
   );
};
