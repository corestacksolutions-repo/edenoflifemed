import Hero from '../components/Services/Hero'
import Philosophy from '../components/Services/Philosophy'
import ServicesBody from '../components/Services/ServicesBody'

const Services = () => {
  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-white">
      <Hero />
      <ServicesBody />
      <Philosophy />
    </main>
  )
}

export default Services