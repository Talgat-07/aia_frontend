import { Heading, Typography } from "UI/index.js";
import styles from './GeneralArchitects.module.scss';
import { WhatsappBlackIconMain, TelegramBlackIconMain, InstagramBlackIconMain } from 'assets/index.js';
import GeneralArchitectImage from 'assets/img/generalArchitects.png';

export const GeneralArchitects = () => {
    const socialLinks = [
        { id: 1, href: "https://telegram.org", label: "Telegram", Icon: TelegramBlackIconMain },
        { id: 2, href: "https://instagram.com", label: "Instagram", Icon: InstagramBlackIconMain },
        { id: 3, href: "https://whatsapp.com", label: "WhatsApp", Icon: WhatsappBlackIconMain },
    ];
    const config = {
        title: "Имя фамилия",
        subtitle: 'Llandit et arcu. Feugiat arcu turpis inmet consectetur. Mi tristique risus accumsan morbi.Lorem ipsum dolor sit amet comet consectetur. Mi tristique risus accumsan morbi.',
        image: GeneralArchitectImage,

    };

    return (
        <div className={styles.container}>
            <Heading text={"Главные архитекторы"} color="black" />
            <div className={styles.BlockGeneral}>
                <div className={styles.BlockGeneral__Left}>
                    <img src={config.image} alt="" />
                </div>
                <div className={styles.BlockGeneral__Right}>
                    <div className={styles.BlockGeneral__Typography}>
                        <Typography variant="bodyXl" weight="medium">{config.title}</Typography>
                        <div className={styles.BlockGeneral__Typography_Icons}>
                            {socialLinks.map(({ id, href, label, Icon }) => (
                                <a
                                    key={id}
                                    href={href}
                                    aria-label={label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className={styles.BlockGeneral__Typography}>
                        <Typography variant="bodyXl" weight="medium">Имя фамилия</Typography>
                        <div className={styles.BlockGeneral__Typography_Icons}>
                            {socialLinks.map(({ id, href, label, Icon }) => (
                                <a
                                    key={id}
                                    href={href}
                                    aria-label={label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className={styles.BlockGeneral__description}>
                        <Typography variant="bodyM" weight="light">
                            {config.subtitle}
                        </Typography>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};
