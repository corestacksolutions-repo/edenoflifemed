import treatments from "../../../data/treatments"
import BodyMovementRender from "./bodyMovementRender";              
import TherapeuticTechnologiesRender from "./TherapeuticTechnogiesRender";
import NaturalAndPlantsRender from "./NaturalAndPlantsRender";
import AssessmentWellnessRender from "./AssessmentWellnessRender";

                /*filtred treatments */
                const bodyMovementTherapies = treatments.filter(
                         (treatment)=>treatment.category==="body-movement"
                    );
                const therapeuticTechnologies = treatments.filter(
                         (treatment)=>treatment.category==="therapeutic-technologies"
                    );
                const naturalAndPlants = treatments.filter(
                         (treatment)=>treatment.category==="natural-plant"
                    );
                const assessmentWellness = treatments.filter(
                         (treatment)=>treatment.category==="assessment-wellness"
                    );

export default function TreatmentCategories(){
      return(
           <>
             <BodyMovementRender treatments={bodyMovementTherapies}/>
             <TherapeuticTechnologiesRender treatments={therapeuticTechnologies}/>
             <NaturalAndPlantsRender treatments={naturalAndPlants}/>
             <AssessmentWellnessRender treatments={assessmentWellness}/> 
           </>
      )
}