import { Container } from 'UI/Container/Container.jsx';
import { PublicArchitecture } from 'modules/PublicArchitectureModule/PublicArchitecture.jsx';
import {BlockTitle} from 'UI/BlockTitle/BlockTitle.jsx';

export const PublicArchitecturePage = () => {


   const  realizeConfig = {
      heading: 'Общественные здания',
      button:null
   }

    return (
       <Container>
          <BlockTitle config={realizeConfig} />
          <PublicArchitecture />
       </Container>
    );
};

