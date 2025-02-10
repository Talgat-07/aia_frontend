import styles from  './Container.module.scss'
export const Container = ({children, className }) => {
    return (
        <main className={`${styles.Container} ${className || ''}`}>
            {children}
        </main>
    );
};

export const ContentContainer = ({children}) => {
    return (
       <div className={styles.ContentContainer}>
           {children}
       </div>
    )
}