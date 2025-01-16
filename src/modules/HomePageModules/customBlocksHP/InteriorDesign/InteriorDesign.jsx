import {CustomBlockHP} from 'modules/HomePageModules/index.js';

export const InteriorDesign = () => {

   const initialConfig = {
      image: "https://salon.ru/storage/thumbs/gallery/781/780042/2000_1500_s816.jpg",
      text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan ' +
         'morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ' +
         'ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum ' +
         'tortor eu ut diam tincidunt.Lorem ipsum dolor sit amet       consectetur. ' +
         'Mi tristique risus accumsan morbi. Sed  dipiscing libero vel.Lorem ipsum ' +
         'dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed ' +
         'adipiscing libero vel enim justo phasellus a et. Placerat ultricies ' +
         'ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortor ' +
         'eu ut diam tincidunt.Lorem ipsum dolor sit amet Lorem ipsum dolor sit ' +
         'amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero' +
         ' vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit ' +
         'et arcu. Feugiat arcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum' +
         ' dolor sit amet       consectetur. Mi tristique risus accumsan morbi. Sed' +
         '  dipiscing libero vel.Lorem ipsum dolor sit amet consectetur. Mi tristique' +
         ' risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et.' +
         ' Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis' +
         ' interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit amet   ',
      heading: "Дизайн интерьера",
      onLeft: true
   }

   return (
      <div>
         <CustomBlockHP items={initialConfig} />
      </div>
   )
}