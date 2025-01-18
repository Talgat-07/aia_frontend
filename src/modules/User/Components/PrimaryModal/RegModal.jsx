import { useModal } from 'utils/hooks/useModal.js';
import {CustomButton, Typography} from 'UI/index.js';
import styles from './RegModal.module.scss';
import { useForm } from 'react-hook-form';
import { schema } from 'utils/helpers/schemaYup.js';
import { yupResolver } from '@hookform/resolvers/yup';
import {useOutsideClick} from "utils/hooks/useClickOutside.js";
import {useRef} from "react";

export const RegModal = ({closeModal, isOpen}) => {
    const modalRef = useRef(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    });
    useOutsideClick(modalRef, () => closeModal(false));

    const handleClose = () => {
        closeModal()
        isOpen(false);
    }


    const onSubmit = (data) => {
        console.log(data);
        reset();
        closeModal();
    };

    return(


            <div className={styles.modal} aria-modal="true" role="dialog">
                
                        <div className={styles.modalOverlay}>
                            <div className={styles.modalBox} ref={modalRef} onClick={(e) => e.stopPropagation()}>
                                <div className={styles.closeModal} onClick={closeModal}>
                                    <div></div>
                                    <div></div>
                                </div>


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
                                                    {...register('name', {required: 'Введите ФИО'})}
                                                    type="text"
                                                    className={`${styles.input} ${errors.name && styles.error}`}
                                                    placeholder=""
                                                />
                                                <div className={styles.labelline}>
                                                    ФИО <span>*</span>
                                                </div>
                                                {errors.name && <p className={styles.errorMessage}>{errors.name.message}</p>}
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
                                                {errors.country && <p className={styles.errorMessage}>{errors.country.message}</p>}
                                            </div>

                                            <div className={styles.FormArea}>
                                                <input
                                                    id="phone"
                                                    {...register('phone', {required: 'Введите телефон'})}
                                                    type="tel"
                                                    className={`${styles.input} ${errors.phone && styles.error}`}
                                                    placeholder=" "
                                                />
                                                <label htmlFor="phone" className={styles.labelline}>
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
                                            <CustomButton type="Submit" buttonStyles={"wideButton"} text={"Отправить"}/>
                                        </div>


                                    </form>
                                </div>
                            </div>
                        </div>

            </div>

    )
};
