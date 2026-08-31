import { useParams } from 'react-router-dom'
import Approach from '../components/Treatment Details/Approach'
import Benefits from '../components/Treatment Details/Benefits'
import CTA from '../components/Treatment Details/CTA'
import Expectations from '../components/Treatment Details/Expectations'
import Hero from '../components/Treatment Details/Hero'
import LocalNavigation from '../components/Treatment Details/LocalNavigation'
import Overview from '../components/Treatment Details/Overview'
import { treatments } from '../data/treatments'

const TreatmentDetails = () => {

    const { treatmentId } = useParams()

    const treatment = treatments.find(
        (treatment) => treatment.slug === treatmentId
    )

    // if (!treatment) return <p>Treatment not found!</p>

  return (
    <main className="w-full min-h-screen overflow-x-hidden z-0 bg-white">
        <Hero 
            hero={treatment}
        />
        <LocalNavigation />    
        <Overview 
            overview={treatment.overview}
        />
        <Benefits 
            benefits={treatment.benefits}
        />
        <Expectations 
            expectations={treatment.expectations}
        />
        <Approach 
            approach={treatment.approach}
        />
        <CTA 
            cta={treatment.cta}
        />
    </main>
  )
}

export default TreatmentDetails
