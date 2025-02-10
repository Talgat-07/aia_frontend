import { Container } from "UI/index";
import { CostAndStages } from "modules/CostAndStagesModule/ConstructionStages/CostAndStages.jsx";
import { ConstructionCost } from "modules/CostAndStagesModule/ConstructionCost/ConstructionCost";

export const CostAndStagesPage = () => {
    return (
            <Container>
                <ConstructionCost/>
                <CostAndStages/>
            </Container>
    );
};

