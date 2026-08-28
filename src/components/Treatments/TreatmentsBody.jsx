import React from 'react'
import TreatmentGrids from './TreatmentGrids'
import Expectations from './Expectations'
import CTA from './CTA'

const TreatmentsBody = () => {
  return (
    <section className="w-[90%] max-w-7xl mx-auto my-10 px-0 md:px-2 flex flex-col lg:flex-row gap-6 items-stretch">
      {/* Treatments Grid */}
      <div className="w-full lg:basis-[65%] min-w-0">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h4 className="text-3xl font-serif text-emerald-950">
            Our Treatments
          </h4>

          <p className="w-full sm:w-[300px] text-sm text-black/55 leading-relaxed">
            Evidence-informed, natural therapies tailored to you.
          </p>
        </header>

        {/* Divider */}
        <div className="my-5 w-full border-t border-black/10"></div>

        {/* Treatment Grids */}
        <TreatmentGrids />
      </div>

      {/* Offers & CTA */}
      <div className="w-full lg:flex-1 min-w-0 flex flex-col gap-5">
        <Expectations />
        <CTA />
      </div>
    </section>
  )
}

export default TreatmentsBody