import {Outlet} from 'react-router-dom';
import {MoreProjects} from 'UI/MoreProjects/MoreProjects.jsx';
import { path } from 'utils/constants/constants.js';

export const ArchitectureProjectsPage = () => {
   const configMore = {
      image:null,
      title:'Больше проектов',
      text: "Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortom dolor sit amet   consectetur. Mi tristique risus..",
      subtitle: null,
      buttons: [
         { text: "Частные дома", link: path.privateArchitecture },
         { text: "Общественные здания", link: path.publicArchitecture },
         { text: "Поселки и кварталы", link: path.blocksArchitecture },
      ]

   }
    return (
        <div>


            <MoreProjects config={configMore}/>
            <Outlet/>
        </div>
    );
};

