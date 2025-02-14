import {Heading,Typography,CustomButton} from 'UI/index.js';
import styles from './EngineeringBlock.module.scss'

export const EngineeringBlock = ({config = {}}) => {
   const {
      subtitle = 'Подзаголовок',
      text = 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit amet   consectetur. Mi tristique risus accumsan morbi. Sed a   dipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rarcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit  ut diam tincidunt.Lorem ipsum dolor sitetur. Mi tristique risus accumsan morbi.',
      title = 'Проектирование',
      href = 'https://www.youtube.com/@geekskg/videos'
   } = config;
   return (
       <div className={styles.container}>

           <Heading text={title} color={"black"}/>
           <div className={styles.content}>
               <Typography variant="bodyL" color="black" weight="medium">{subtitle}</Typography>
           <div className={styles.des}>
               <Typography variant="bodyM" color="black" weight="light">{text}</Typography>
           </div>

               <CustomButton buttonStyles="customButtonAdaptive" text={"Видео о нас"} to={href}/>

           </div>
           <hr/>

       </div>
   );
};

