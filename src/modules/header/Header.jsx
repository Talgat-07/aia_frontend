import 'UI/typography/Typography.module.scss'
import {TopBar} from 'modules/header/Components/TopBar/TopBar.jsx'
import styles from './Header.module.scss'
import {BottomBar} from './components/BottomBar/BottomBar.jsx'

export const Header =  () => {

    return (
        <header className={styles.header}>
            <TopBar/>
            <BottomBar/>
        </header>
    );
};

