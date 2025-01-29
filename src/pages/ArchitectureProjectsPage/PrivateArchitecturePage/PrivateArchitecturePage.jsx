import { Container } from 'UI/Container/Container.jsx';
import {PrivateArchitecture} from 'modules/PrivateArchitectureModule/components/PrivateArchitecture.jsx';
import { BlockTitle } from 'UI/BlockTitle/BlockTitle.jsx';


export const PrivateArchitecturePage = () => {

   const  realizeConfig = {
      heading: 'Частные дома',
      button:null
   }

   return (
      <Container>
         <BlockTitle config={realizeConfig} />
         <PrivateArchitecture/>
      </Container>
   )
}