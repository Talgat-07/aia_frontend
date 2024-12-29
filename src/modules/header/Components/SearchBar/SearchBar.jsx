import {LoopInput} from "assets/index.js";
import styles from "./SearchBar.module.scss";

export const SearchBar = () => {
    const languages = [
        "Издөө",
        "Поиск",
        "Search"
    ]


    return (
        <form action="" className={styles.search}>
                <input placeholder={languages[1]} type="search" className={styles.search_input}/>
                <span className={styles.search_icon}>
                    <LoopInput/>
                </span>
        </form>



    );
};

