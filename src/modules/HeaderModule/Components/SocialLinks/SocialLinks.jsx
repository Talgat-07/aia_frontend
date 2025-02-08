import styles from '../BurgerMenu/BurgerMenu.module.scss';
import {
   InstagramIconMain,
   TelegramIconMain,
   YoutubeIconMain,
   WhatsappIconMain,
} from 'assets/index.js';

export const SocialLinks = () => {
   const socialLinks = [
      {
         href: 'https://instagram.com',
         label: 'Instagram',
         Icon: InstagramIconMain,
      },
      {
         href: 'https://whatsapp.com',
         label: 'WhatsApp',
         Icon: WhatsappIconMain,
      },
      {
         href: 'https://telegram.org',
         label: 'Telegram',
         Icon: TelegramIconMain,
      },
      { href: 'https://youtube.com', label: 'YouTube', Icon: YoutubeIconMain },
   ];
   return (
      <>
         <div className={styles.socialIcons}>
            {socialLinks.map(({ href, label, Icon }) => (
               <a
                  key={label}
                  target="_blank"
                  href={href}
                  aria-label={label}
                  rel="noopener noreferrer"
               >
                  <Icon />
               </a>
            ))}
         </div>
      </>
   );
};
