import {Container, WeInNumber,YoutubeBlock} from "UI/index.js";
import {Helmet} from "react-helmet-async";

export const AboutUsPage = () => {
    return (
        <Container>
            <Helmet>
                <title>О нас | АЙА</title>
                <meta name="description" content="Архитектурно-дизайнерская студия АЙА." />
            </Helmet>
            <WeInNumber/>
            <YoutubeBlock videoId="eA0lHNZ1KCA" backgroundColor="black" />



        </Container>
    );
};

