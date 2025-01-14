import styles from "./ContactModal.module.scss";

//TODO FIX ME Использовать это модальное окно начиная с таблет версии до мобильного

export const ContactModal = ({ isOpen, onClose, onCall, phoneNumber }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modal}>
            <div className={styles.overlay} onClick={onClose}></div>
            <div className={styles.content}>
                <p>Вы хотите позвонить на номер {phoneNumber}?</p>
                <div className={styles.actions}>
                    <button onClick={onCall} className={styles.callButton}>
                        Позвонить
                    </button>
                    <button onClick={onClose} className={styles.cancelButton}>
                        Отменить
                    </button>
                </div>
            </div>
        </div>
    );
};
