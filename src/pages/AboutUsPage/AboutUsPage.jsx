import {Container, WeInNumber,YoutubeBlock} from "UI/index.js";
import {Helmet} from "react-helmet-async";
import {BlockTitle} from "UI/index.js";
import {GeneralArchitects, OurTeam, HowWeWorks, TabNavigation} from "modules/OurModules/index.js";


export const AboutUsPage = () => {
    return (
       <Container>
          <Helmet>
             <title>О нас | АЙА</title>
             <meta name="description" content="Архитектурно-дизайнерская студия АЙА." />
          </Helmet>
          <BlockTitle />
          <WeInNumber />
          <GeneralArchitects />
          <OurTeam  />
          <TabNavigation />
          <YoutubeBlock videoId="eA0lHNZ1KCA" backgroundColor="black" />
          <HowWeWorks />
       </Container>
);
};

