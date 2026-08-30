import Hero from '../components/Treatments/Hero'
import Philosophy from '../components/Treatments/Philosophy'
import TreatmentsBody from '../components/Treatments/TreatmentsBody'

const Treatments = () => {
  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-white">
      <Hero />
      <TreatmentsBody />
      <Philosophy />
    </main>
  )
}

export default Treatments