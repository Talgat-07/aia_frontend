import { useEffect, useState } from 'react';


export const ArchitectureDesign = () => {

   const [data, setData] = useState([]);
   const [filteredData, setFilteredData] = useState([]);
   const [selectedCategory, setSelectedCategory] = useState('все');
   const [loading, setLoading] = useState(true);

   const contentData = [
      { id: 1, category: 'архитектура', title: 'Проект дома', description: 'Описание проекта дома', image: '/images/house.jpg' },
      { id: 2, category: 'дизайн', title: 'Интерьер кухни', description: 'Описание дизайна кухни', image: '/images/kitchen.jpg' },
      { id: 3, category: 'архитектура', title: 'Городская застройка', description: 'Описание городской застройки', image: '/images/city.jpg' },
      { id: 4, category: 'дизайн', title: 'Декор спальни', description: 'Описание декора спальни', image: '/images/bedroom.jpg' },
   ];

   useEffect(() => {
      const fetchData = async () => {
         setLoading(true);
         try{
            // const response = await fetch(contentData);
            // const result = await response.json();
            // setData(result);
            // setFilteredData(result);
            setData(contentData);
            setFilteredData(contentData);
         } catch (error) {
            console.error('Ошибка при загрузке данных:', error);
         } finally {
            setLoading(false);
         }
      }
      fetchData();
   }, []);

   useEffect(() => {
      if(selectedCategory === 'все'){
         setFilteredData(data);
      } else {
         setFilteredData(data.filter(item => item.category === selectedCategory));
      }
   }, [selectedCategory, data])

   return (
      <div>
         <div>
            <button className={`filterItem ${selectedCategory === 'все' ? 'active' : ''}`}
                 onClick={() => setSelectedCategory('все')}>
               <span>Все</span>
            </button>
            <button className={`filterItem ${selectedCategory === 'архитектура' ? 'active' : ''}`}
                 onClick={() => setSelectedCategory('архитектура')}>
               <span>Архитектура</span>
            </button>
            <button className={`filterItem ${selectedCategory === 'дизайн' ? 'active' : ''}`}
                 onClick={() => setSelectedCategory('дизайн')}>
               <span>Дизайн</span>
            </button>
         </div>
         {
            loading ? (
               <div>Загрузка...</div>
            ) : (
               <div>
                  {filteredData.map((item) => (
                     <div key={item.id}>
                        {/*<img src={item.image} alt={item.title} className="content-image" />*/}
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                     </div>
                  ))}
               </div>
            )
         }
      </div>
   )
}
