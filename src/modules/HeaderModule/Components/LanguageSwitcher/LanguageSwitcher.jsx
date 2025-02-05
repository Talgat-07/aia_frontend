import { CustomButton, Typography } from 'UI/index';
import { useState } from 'react';
import styles from '../BurgerMenu/BurgerMenu.module.scss';

export const LanguageSwitcher = () => {
   const [activeLanguage, setActiveLanguage] = useState('Русский');

   const languages = ['Русский', 'English', 'Кыргыз'];
   return (
      <>
         <div className={styles.languageSwitcher}>
            {languages.map((language) => (
               <CustomButton
                  key={language}
                  buttonStyles={
                     language === activeLanguage
                        ? 'languageButtonActive'
                        : 'languageButton'
                  }
                  onClick={() => setActiveLanguage(language)}
                  text={
                     <Typography
                        variant="bodyS"
                        color="white"
                        weight="regular"
                        lineHeight="linel"
                     >
                        {language}
                     </Typography>
                  }
               />
            ))}
         </div>
      </>
   );
};
