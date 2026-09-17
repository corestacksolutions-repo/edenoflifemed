import { useParams } from 'react-router-dom'
import Approach from '../components/Service Details/Approach'
import Benefits from '../components/Service Details/Benefits'
import CTA from '../components/Service Details/CTA'
import Expectations from '../components/Service Details/Expectations'
import Hero from '../components/Service Details/Hero'
import LocalNavigation from '../components/Service Details/LocalNavigation'
import Overview from '../components/Service Details/Overview'
import { services } from '../data/services'

const ServiceDetails = () => {

    const { treatmentId } = useParams()

    const treatment = services.find(
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

export default ServiceDetails
