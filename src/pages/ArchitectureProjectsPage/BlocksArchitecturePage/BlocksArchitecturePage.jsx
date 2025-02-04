import { Container } from 'UI/Container/Container.jsx';
import {BlocksArchitecture} from 'modules/BlocksArchitectureModule/BlocksArchitecture.jsx';
import {BlockTitle} from 'UI/BlockTitle/BlockTitle.jsx';


export const BlocksArchitecturePage = () => {

   const  realizeConfig = {
      heading: 'Поселки и кварталы',
      button:null
   }

   return (
      <Container>
         <BlockTitle config={realizeConfig} />
         <BlocksArchitecture />
      </Container>
   )
}