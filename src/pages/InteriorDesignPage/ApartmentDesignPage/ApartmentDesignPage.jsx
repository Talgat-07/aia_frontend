import { Container } from 'UI/index';
import { ApartmentDesign } from 'modules/ApartmentDesignModule/components';
import { Outlet } from 'react-router-dom';

export const ApartmentDesignPage = () => {
   return (
      <>
         <Container>
            <ApartmentDesign />
            <Outlet />
         </Container>
      </>
   );
};
