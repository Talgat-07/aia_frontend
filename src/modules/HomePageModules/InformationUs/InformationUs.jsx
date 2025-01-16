import styles from './InformationUs.module.scss';
import { Heading, Typography, CustomButton } from "UI/index.js";
import AboutUs from 'assets/img/AboutUs.png';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
export const InformationUs = ({ subtitle, description }) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/about-us');
    };

    return (
        <div className={styles.Information}>
            <Heading text="Информация о нас" color="black" />
            <div className={styles.Information_Content}>
                <div className={styles.Information_Left}>
                    <div className={styles.Information_LeftInformation}>
                        <Typography variant="bodyL" weight="medium" color="black">
                            {subtitle}
                        </Typography>
                        <Typography variant="bodyM" weight="light" color="black" lineHeight="lineXl">
                            {description}
                        </Typography>
                    </div>

                    <CustomButton
                        buttonStyles="customButtonAdaptive"
                        text="Как мы работаем"
                        onClick={handleButtonClick}
                    />
                </div>
                <div className={styles.Information_Right}>
                    <img src={AboutUs} alt="About Us" />
                </div>
            </div>
            <hr />
        </div>
    );
};

InformationUs.propTypes = {
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

