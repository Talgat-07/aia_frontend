import styles from  './Container.module.scss'
export const Container = ({children, className}) => {
    return (
        <div className={`${styles.Container} ${className || ''}`}>
            {children}
        </div>
    );
};

