import {Typography} from "UI/typography/Typography.jsx";
import 'UI/typography/Typography.module.scss'

export const Header = () => {
    return (
        <header>
            <Typography style={{ fontFamily:"Noto Sans Bold"}} variant="h2" weight="bold" color="black">
                The quick brown fox jumps over the lazy dog.
            </Typography>
        </header>
    );
};

