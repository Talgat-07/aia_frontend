import {Heading, Typography,CustomButton} from 'UI/index.js';
import image from 'assets/img/IndividualBlock.png'
import styles from './IndividualBlock.module.scss'
import { useModal } from 'utils/hooks/useModal.js';
import { RegModal } from 'modules/User/Components/RegModal/RegModal.jsx';

export const IndividualBlock = () => {
   const {openModal,isOpen,closeModal} = useModal()
   const config = {

      image:image,


   }
   return (
      <div className={styles.container}>
         <Heading className={styles.heading}  text={"Индивидуальное проектирование дома"} color={"black"}/>
         <div className={styles.content}>
            <img src={config.image} alt="individualBlockpng" />
            <div className={styles.content_des}>
               <Typography variant={"bodyM"} weight={"light"} lineHeight={"lineM"}>
                  Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit amet
               </Typography>
               <CustomButton text={"Заказать индивидуальный проект"} onClick={openModal} buttonStyles={"customButtonAdaptive"}/>
            </div>
         </div>
         {isOpen? (<RegModal closeModal={closeModal} isOpen={isOpen}/>) : null}
         <hr/>
      </div>
   );
};

