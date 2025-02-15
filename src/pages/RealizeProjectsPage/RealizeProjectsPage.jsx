import { BlockTitle, Container } from 'UI/index.js';
import {RealizeProjects} from 'modules/RealizeProjectsModules/components/RealizeProjects.jsx';

export const RealizeProjectsPage = () => {
   const  realizeConfig = {
       heading: 'Реализованные проекты',
       button:null,
       description: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit amet   consectetur. Mi tristique risus accumsan morbi. Sed a   dipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rarcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit  ut diam tincidunt.Lorem ipsum dolor sitetur. Mi tristique risus accumsan morbi..Lorem ipsum dolor sit  ut diam tincidunt.Lorem ipsum dolor sitetur. Mi tristique risus accumsan morbi.'


    }
    return (
        <Container >
            <BlockTitle config={realizeConfig} />
            <RealizeProjects/>
        </Container>
    );
};

