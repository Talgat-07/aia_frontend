import { Blog } from 'modules/BlogModule/components';
import { Outlet } from 'react-router-dom';
import {Container} from "UI/Container/Container.jsx";

export const BlogPage = () => {
   return (
      <Container>
         <Blog />
         <Outlet />
      </Container>
   );
};
