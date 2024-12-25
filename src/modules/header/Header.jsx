import {Typography} from "UI/typography/Typography.jsx";
import 'UI/typography/Typography.module.scss'

export const Header =  () => {

    return (
        <header>
           <Typography variant="h1" weight="semibold" color="black">
               The quick brown fox jumps over the lazy dog.
           </Typography>
        </header>
    );
};

