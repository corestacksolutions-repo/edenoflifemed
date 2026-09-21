import { useParams } from "react-router-dom"
import treatments from "../data/treatments"

import Hero from "../components/treatment Details/Hero"
import OverView from "../components/treatment Details/overView";
import Session from "../components/treatment Details/sessions";
import Suitability from "../components/treatment Details/Suitability";
import Expectations from "../components/treatment Details/Expectations";
import CTA from "../components/treatment Details/cta";

import RelatedTreatment from "../components/treatment Details/RelatedTreatments";


export default function TreatmentDetail(){
        const {treatmentId: slug} = useParams();
        const  treatment = treatments.find(
            (item) => item.slug === slug
        )
        // related treatments
        const relatedTreatments = treatments.filter(
            (item)=> item.title != treatment.title 
        )
        // random treatments from related treatments
        function getRandomTreatments(t, c) {
           return [...t]
                  .sort(() => Math.random() - 0.5)
                  .slice(0, c);
        }
        const randomTreatments = getRandomTreatments(relatedTreatments, 5);
     
        if(!treatment){
            return(<div className="m-auto font-bold">Treatment not found</div>)
        }
        
        return(
              <>
                <Hero  treatment={treatment}/>
                <OverView treatment={treatment} />
                <Session treatment={treatment} />
                <Suitability treatment={treatment} />
                <Expectations treatment={treatment}/>
                <CTA treatment={treatment}/>
                <RelatedTreatment relatedTreatments={randomTreatments}/>
              </>
        )
}