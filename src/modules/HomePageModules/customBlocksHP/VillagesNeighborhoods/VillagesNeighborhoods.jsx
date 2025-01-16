import {CustomBlockHP} from 'modules/HomePageModules/index.js';

export const VillagesNeighborhoods = () => {

   const initialConfig = {
      image: "https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
      subtitle: '',
      text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan ' +
         'morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ' +
         'ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum ' +
         'tortor eu ut diam tincidunt.Lorem ipsum dolor sit amet       consectetur. ' +
         'Mi tristique risus accumsan morbi. Sed  dipiscing libero vel.Lorem ipsum ' +
         'dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed ' +
         'et arcu. Feugiat arcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum' +
         ' dolor sit amet       consectetur. Mi tristique risus accumsan morbi. Sed' +
         '  dipiscing libero vel.Lorem ipsum dolor sit amet consectetur. Mi tristique' +
         ' risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et.' +
         ' Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis' +
         ' interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit amet   ',
      heading: "Проектирование коттеджных поселков и кварталов",
      onLeft: false
   }

   return (
      <div>
         <CustomBlockHP items={initialConfig} />
      </div>
   )
}