import { Blog } from 'modules/BlogModule/components';
import { Outlet } from 'react-router-dom';

export const BlogPage = () => {
   return (
      <>
         <Blog />
         <Outlet />
      </>
   );
};
