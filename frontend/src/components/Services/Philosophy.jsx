import { TbSeedling } from "react-icons/tb";
import PhilosophyRenderer from "./PhilosophyRenderer";

const Philosophy = () => {
  return (
    <section className="w-[90%] max-w-7xl mx-auto my-10 p-5 md:p-6 flex flex-col lg:flex-row gap-8 rounded-3xl items-start bg-blue-50 border border-blue-900/5 my-20">
      {/* Philosophy Header */}
      <div className="w-full lg:basis-[25%] flex gap-3 text-blue-800">
        {/* Philosophy Icon */}
        <div className="shrink-0">
          <TbSeedling size={35} />
        </div>

        {/* Philosophy Description */}
        <div className="flex flex-col gap-2 text-blue-800">
          <h3 className="font-serif text-[1.3rem] font-semibold">
            Our Philosophy
          </h3>

          <p className="tracking-wide text-sm leading-relaxed">
            We believe true health comes from balance of body, mind, and spirit. Our treatments work with nature to restore that balance.
          </p>
        </div>
      </div>

      {/* Individual Philosophy */}
      <PhilosophyRenderer />
    </section>
  )
}

export default Philosophy