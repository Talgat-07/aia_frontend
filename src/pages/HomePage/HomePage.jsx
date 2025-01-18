import {Container, WeInNumber, YoutubeBlock} from "UI/index.js";
import {InformationUs, PrivateHouses, InteriorDesign, VillagesNeighborhoods} from "modules/HomePageModules/index.js";
import MainBanner from 'modules/HomePageModules/MainBanner/MainBanner.jsx';
import {OurTeam} from "modules/HomePageModules/OurTeam/OurTeam.jsx";
export const HomePage = () => {

  return (
      <Container>
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

