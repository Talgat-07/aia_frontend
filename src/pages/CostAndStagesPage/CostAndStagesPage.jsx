import { Container } from "UI/index";
import { ConstAndStages } from "modules/CostAndStagesModeles/ConstructionStages/CostAndStages";
import { ConstructionCost } from "modules/CostAndStagesModeles/ConstructionCost/ConstructionCost";

export const CostAndStagesPage = () => {
    return (
        <div>
            <Container>
                <ConstructionCost/>
                <ConstAndStages/>
            </Container>
        </div>
    );
};

