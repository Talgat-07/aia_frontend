import { PrivateHouses } from 'modules/customBlocksHP/privateHouses/PrivateHouses.jsx';
import { InteriorDesign } from 'modules/customBlocksHP/interiorDesign/InteriorDesign.jsx';
import { VillagesNeighborhoods } from 'modules/customBlocksHP/villagesNeighborhoods/VillagesNeighborhoods.jsx';


export const HomePage = () => {



    return (
        <div>
          <PrivateHouses />
           <InteriorDesign />
           <VillagesNeighborhoods/>
        </div>
    );
};

