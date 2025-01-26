import { BreadCrumbs, CustomButton, Heading, Typography } from 'UI/index';
import styles from './StartBlock.module.scss';
import { RegModal } from 'modules/User/Components/RegModal/RegModal';
import { useModal } from 'utils/hooks/useModal';
import { useLocation } from 'react-router-dom';
import { BreadCrumbData, path } from 'utils/constants/constants';

export const StartBlock = () => {
   const mockData = [
      {
         title: 'Дизайн домов и котеджей',
         description: `Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. 
      Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum 
      blandit et arcu. Feugiat arcu turpis interdum tortor eu ut diam tincidunt. Lorem ipsum 
      dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel 
      enim justo phasellus a et. Placerat ultricies ultricies arcu turpis interdum tortor eu ut 
      diam tincidunt. Lorem ipsum dolor sit amet ut diam tincidunt. Lorem ipsum dolor sit amet 
      consectetur. Mi tristique risus accumsan morbi.`,
         subTitle: 'Подзаголовок',
      },
   ];

       const location = useLocation();
       const currentPath = location.pathname;
       const filteredBreadCrumbData = [
          BreadCrumbData.find((item) => item.link === path.home),
          BreadCrumbData.find((item) => item.link === currentPath),
       ].filter(Boolean);

   const { isOpen, openModal, closeModal, setIsOpen } = useModal();

   return (
      <div>
         {mockData.map((elem, index) => (
            <>
               <div key={index} className={styles.title_block}>
                  <div className={styles.title}>
                     <BreadCrumbs items={filteredBreadCrumbData} />
                     <Heading
                        className={styles.h}
                        text={elem.title}
                        align="left"
                        color="black"
                     />
                  </div>
                  <div className={styles.description}>
                     <Typography variant="bodyL" weight="medium">
                        {elem.subTitle}
                     </Typography>
                     <Typography variant="bodyM" weight="light">
                        {elem.description}
                     </Typography>
                     <CustomButton
                        onClick={openModal}
                        text="Оставить заявку"
                        buttonStyles="customButtonAdaptive"
                     />
                     {isOpen ? (
                        <RegModal
                           closeModal={closeModal}
                           isOpen={isOpen}
                           setIsOpen={setIsOpen}
                        />
                     ) : null}
                  </div>
               </div>
               <div className={styles.divider} />
            </>
         ))}
      </div>
   );
};
