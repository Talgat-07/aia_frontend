import styles from './CustomButton.module.scss'

export const CustomButton = ({text, onClick}) => {

   return (
      <div>
         <button className={styles.customButton} onClick = {onClick}>
            {text}
         </button>
      </div>
   )
}