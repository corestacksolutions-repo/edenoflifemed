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

    const { serviceId } = useParams()

    const service = services.find(
        (treatment) => treatment.slug === serviceId
    )
    console.log(service)
    // if (!treatment) return <p>Treatment not found!</p>

  return (
    <main className="w-full min-h-screen overflow-x-hidden z-0 bg-white">
        <Hero 
            hero={service}
        />
        <LocalNavigation />    
        <Overview 
            overview={service.overview}
        />
        <Benefits 
            benefits={service.benefits}
        />
        <Expectations 
            expectations={service.expectations}
        />
        <Approach 
            approach={service.approach}
        />
        <CTA 
            cta={service.cta}
        />
    </main>
  )
}

export default ServiceDetails
