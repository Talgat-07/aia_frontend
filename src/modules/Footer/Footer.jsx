import styles from './Footer.module.scss';
import {
   InstagramIconMain,
   WhatsappIconMain,
   TelegramIconMain,
   YoutubeIconMain,
   GeeksProIcon,
   TwitterIconMain,
} from 'assets/index.js';
import { NavLinks,path } from 'utils/constants/constants.js';
import { Link } from 'react-router-dom';
import { Typography } from 'UI/index';
import Logo from 'assets/img/logo.svg';
import {useMediaQuery} from "utils/hooks/useMediaQuery.js";

export const Footer = () => {
   const socialLinks = [
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
      {
         href: 'https://instagram.com',
         label: 'Instagram',
         Icon: InstagramIconMain,
      },

      {
         href: 'https://x.com/AIANational/status/1430999858173853699?mx=2',
         label: 'Twitter',
         Icon: TwitterIconMain,
      },
      { href: 'https://youtube.com', label: 'YouTube', Icon: YoutubeIconMain },
   ];
   const Desktop = useMediaQuery('(min-width: 1030px)');
   const Tablet = useMediaQuery('(max-width: 1024px)');
   //fix me const Mobile = useMediaQuery('(min-width: 300px)');

   return (
       <footer className={styles.footer}>
          <div className={styles.logo}>
             {Tablet && (
                 <Link to="/">
                    <img src={Logo} alt="Логотип"/>
                 </Link>)}
          </div>
          <div className={styles.container}>

             {Desktop &&(<div className={styles.container_contacts}>
                <div className={styles.logo}>
                       <Link to="/">
                          <img src={Logo} alt="Логотип"/>
                       </Link>
                </div>
                <div className={styles.contacts}>
                   <Typography variant="bodyL" weight="medium" color="white">
                      Телефон:
                   </Typography>
                   <div className={styles.contacts_phone}>
                      <Typography
                          variant="bodyS"
                          weight="light"
                          color="white"
                          className={styles.phoneNumber}
                      >
                         <a className={styles.phone} href="tel:+996020373712">
                            +996020373712
                         </a>
                      </Typography>
                      <Typography
                          variant="bodyS"
                          weight="light"
                          color="white"
                          className={styles.phoneNumber}
                      >
                         <a className={styles.phone} href="tel:+996020373712">
                            +996020373712
                         </a>
                      </Typography>
                   </div>
                </div>
             </div>)}
             <nav className={styles.links}>
                <ul>
                   {NavLinks
                       .filter(link => link.path !== path.home)
                       .map((link) => (
                           <li key={link.path}>
                              <Link to={link.path}>{link.title}</Link>
                           </li>
                       ))}
                </ul>
             </nav>
             <div className={styles.hours}>
                <div>
                   <Typography variant="bodyL" weight="regular" color="white">
                      Время Работы:
                   </Typography>
                   <Typography variant="bodyXS" weight="light" color="white">
                      Пн-Пт: 10:00-18:00
                   </Typography>
                   <Typography variant="bodyXS" weight="light" color="white">
                      Сб: 10:00-15:00
                   </Typography>
                   <Typography variant="bodyXS" weight="light" color="white">
                      Вс: выходной
                   </Typography>
                </div>

                {Tablet && (
                    <div className={styles.contacts}>
                       <Typography variant="bodyL" weight="medium" color="white">
                          Телефон:
                       </Typography>
                       <div className={styles.contacts_phone}>
                          <Typography
                              variant="bodyS"
                              weight="light"
                              color="white"
                              className={styles.phoneNumber}
                          >
                             <a className={styles.phone} href="tel:+996020373712">
                                +996020373712
                             </a>
                          </Typography>
                          <Typography
                              variant="bodyS"
                              weight="light"
                              color="white"
                              className={styles.phoneNumber}
                          >
                             <a className={styles.phone} href="tel:+996020373712">
                                +996020373712
                             </a>
                          </Typography>
                       </div>
                    </div>
                )}
                <div>
                   <Typography variant="bodyL" weight="regular" color="white">
                      Адрес:
                   </Typography>
                   <a href="">г. Бишкек, ул. Боконбаева 204, 6 этаж</a>
                </div>
             </div>
          </div>
          <div className={styles.social}>
             {socialLinks.map(({href, label, Icon}) => (
                 <a
                     key={label}
                     target="_blank"
                     href={href}
                     aria-label={label}
                     rel="noopener noreferrer"
                 >
                    <Icon/>
                 </a>
             ))}
          </div>

          <div className={styles.copyright}>
             <a
                 href="https://geeks.kg/geeks-pro"
                 target="_blank"
                 className={styles.copyright_name}
             >
                Made By GeeksPro
             </a>
             <GeeksProIcon/>
          </div>
       </footer>
   );
};
