import {Container, WeInNumber, YoutubeBlock} from "UI/index.js";
import {InformationUs, PrivateHouses, InteriorDesign, VillagesNeighborhoods} from "modules/HomeModules/index.js";
import MainBanner from 'modules/HomeModules/MainBanner/MainBanner.jsx';
import {OurTeam} from "modules/HomeModules/OurTeam/OurTeam.jsx";
import {Helmet} from "react-helmet-async";

export const HomePage = () => {

  return (
      <Container>
          <Helmet>
              <title>Главная | АЙА</title>
              <meta name="description" content="Архитектурно-дизайнерская студия АЙА." />
          </Helmet>
          <MainBanner/>
          <InformationUs
              subtitle="Архитектурно-дизайнерская студия АЙА"
              description="Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit amet     consectetur. Mi tristique risus accumsan morbi. Sed a   dipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rarcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit  ut diam tincidunt.Lorem ipsum dolor sitetur. Mi tristique risus accumsan morbi."
          />

          <WeInNumber/>
          <OurTeam/>
         <PrivateHouses />
         <InteriorDesign />
         <VillagesNeighborhoods/>
         <YoutubeBlock videoId="eA0lHNZ1KCA" backgroundColor="black" />
      </Container>
  );
};

