import styles from  './Container.module.scss'
export const Container = ({children, className }) => {
    return (
        <main className={`${styles.Container} ${className || ''}`}>
            {children}
        </main>
    );
};