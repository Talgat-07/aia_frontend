import styles from './CustomButton.module.scss'

export const CustomButton = ({text, onClick, buttonStyles}) => {

   return (
      <div>
         <button className={`${ styles [buttonStyles]  }`} onClick = {onClick}>
            {text}
         </button>
      </div>
   )
}

