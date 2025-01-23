import {CustomButton, Typography} from 'UI/index.js';
import styles from './RegModal.module.scss';
import { useForm } from 'react-hook-form';
import { schema } from 'utils/helpers/schemaYup.js';
import { yupResolver } from '@hookform/resolvers/yup';
import {useEffect, useRef, useState} from "react";
import {SubmitApprovedIcon} from "assets/index.js";
import {useOutsideClick} from "utils/hooks/useClickOutside.js";
import PhoneInput from "react-phone-input-2";

export const RegModal = ({closeModal, isOpen}) => {
    const modalRef = useRef(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [phone, setPhone] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e) => {
        setIsFocused(false);
        setIsFilled(!!e.target.value); // Проверяем, есть ли значение в поле
    };

    const handlePhoneChange = (value) => {
        setPhone(value);
    };
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add(styles.no_scroll);
        } else {
            document.body.classList.remove(styles.no_scroll);
        }

        return () => document.body.classList.remove(styles.no_scroll);
    }, [isOpen]);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    });


    useOutsideClick(modalRef, closeModal, isOpen);

    const onSubmit = (data) => {
        console.log(data);
        reset();
        setIsSubmitted(true);
    };

    return (
        <div className={styles.modal} aria-modal="true" role="dialog" >
            <div className={styles.modalOverlay}  >
                <div className={styles.modalBox} ref={modalRef} >
                    <div className={styles.closeModal} onClick={() => closeModal(false)}>

                        <div></div>
                        <div></div>
                    </div>

                    {isSubmitted ? (
                        <div className={styles.successMessage}>
                            <SubmitApprovedIcon/>
                            <div className={styles.successContent}>
                                <Typography variant="h2" weight="semibold">
                                    Спасибо за доверие!
                                    <br/>
                                    Ваша заявка отправлена
                                </Typography>
                                <Typography variant="bodyXS" weight="regular">
                                    Ожидайте, скоро с Вами свяжутся
                                </Typography>

                                <CustomButton
                                    onClick={() => closeModal(false)}
                                    buttonStyles="customButtonBrown"
                                    text="Закрыть"
                                />
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className={styles.modalHeader}>
                                <Typography variant="h2" weight="semibold">
                                    Напишите нам
                                </Typography>
                                <Typography weight="medium" variant="bodyXS">
                                    И мы ответим на любые интересующие вас вопросы
                                </Typography>
                            </div>
                            <div className={styles.modalContent}>
                                <form className={styles.modalForm} onSubmit={handleSubmit(onSubmit)}>
                                    <div className={styles.modalFormInputs}>
                                        <div className={styles.FormArea}>
                                            <input
                                                id="name"
                                                {...register('username', {required: 'Введите ФИО'})}
                                                type="text"
                                                className={`${styles.input} ${errors.name && styles.error}`}
                                                placeholder=" "
                                            />
                                            <div className={styles.labelline}>
                                                ФИО <span>*</span>
                                            </div>
                                        </div>

                                        <div className={styles.FormArea}>
                                            <select
                                                id="country"
                                                {...register('country', {required: 'Выберите страну'})}
                                                className={`${styles.select} ${errors.country && styles.error}`}
                                            >
                                                <option value="" disabled>
                                                    Выберите страну
                                                </option>
                                                <option value="Россия">Россия</option>
                                                <option value="Казахстан">Казахстан</option>
                                                <option value="Киргизия">Киргизия</option>
                                            </select>

                                        </div>

                                        <div className={styles.FormArea}>
                                            <PhoneInput
                                                value={phone || ''}
                                                onChange={handlePhoneChange}
                                                country={null}
                                                id="phone"
                                                {...register('phone', {required: 'Введите телефон'})}
                                                type="tel"
                                                className={`${styles.input} ${errors.phone && styles.error} ${styles.inputphone}`}
                                                placeholder=" "
                                                onFocus={handleFocus}
                                                onBlur={handleBlur}
                                            />
                                            <label
                                                htmlFor="phone"
                                                className={`${styles.labelline} ${styles.labelphone} ${
                                                    (isFocused || isFilled) ? styles.active : ''
                                                }`}
                                            >
                                                (996) 556 - 123 - 456 <span>*</span>
                                            </label>
                                        </div>

                                        <div className={styles.FormArea}>
                                            <input
                                                id="email"
                                                {...register('email', {required: 'Введите email'})}
                                                type="email"
                                                className={`${styles.input} ${errors.email && styles.error}`}
                                                placeholder=" "
                                            />
                                            <div className={styles.labelline}>
                                                email <span>*</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.modalFormArea}>
                                        <textarea
                                            id="question"
                                            {...register('question')}
                                            className={styles.textarea}
                                            placeholder="Ваш запрос"
                                        />
                                        <CustomButton type="submit" buttonStyles="wideButton" text="Отправить"/>
                                    </div>
                                </form>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
