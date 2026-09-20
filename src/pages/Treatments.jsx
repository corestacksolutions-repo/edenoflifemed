

import Hero from "../components/treatments/Hero"
import LocalNavigation from "../components/treatments/localNavigation"
import TreatmentCategories from "../components/treatments/treatmentCategories.jsx/treatmentCategoriesRender"

export default function Treatments(){
      return(
          <>
            <Hero/>
            <LocalNavigation/>
            <TreatmentCategories/>
          </>
      )
}