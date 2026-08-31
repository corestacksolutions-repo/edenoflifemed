import { FaPeopleCarry } from "react-icons/fa";
import { GiLotus, GiPlantRoots, GiRoad, GiTreeRoots } from "react-icons/gi";
import { LuFileArchive, LuShieldCheck } from "react-icons/lu";


const Values = ()=>{
    return(
        <div className="w-[92%] md:w-[85%] mx-auto my-20">
            <header className="text-center space-y-2 my-6">
                <h1 className="uppercase text-blue-600">our values</h1>
                <h2 className="text-2xl font-semibold">What Drives Us</h2>
            </header>

            <div className="grid md:grid-cols-4 gap-y-6  w-full ">
              
              <div className="text-center space-y-3 border-r p-3">
                <div className="w-fit mx-auto p-3 rounded-full border border-green-600/20 bg-green-700/10">
                     <FaPeopleCarry className="size-6 text-green-700"/>
                </div>
                <h3 className="font-semibold">Empowerment</h3>
                 <p className="">
                    We equip our patients with the knowledge, guidance, 
                    and confidence to participate actively in their healthcare 
                    and make informed decisions about their well-being.
                 </p>
              </div> 

              <div className="text-center md:border-r space-y-3 p-3">
                <div className="w-fit mx-auto p-3 rounded-full border border-green-600/20 bg-green-700/10">
                     <GiLotus className="size-6 text-green-700"/>
                </div>
                <h3 className="font-semibold">Wholeness</h3>
                 <p className="">
                    We care for the whole person-not simply the 
                    condition-recognizing the interconnected relationship 
                    between physical, mental, emotional, and spiritual
                    health.
                 </p>
              </div> 

              <div className="text-center space-y-3  p-3">
                <div className="w-fit mx-auto p-3 rounded-full border border-green-600/20 bg-green-700/10">
                     <GiTreeRoots className="size-6 text-green-700"/>
                </div>
                <h3 className="font-semibold">Root-Cause Focus</h3>
                 <p className="">
                    We look beyond symptoms to understand and address the 
                    underlying factors contributing to illness, with the aim
                    of supporting lasting health and well-being.
                 </p>
              </div> 

              <div className="text-center space-y-3 border-l p-3">
                <div className="w-fit mx-auto p-3 rounded-full border border-green-600/20 bg-green-700/10">
                     <LuShieldCheck className="size-6 text-green-700"/>
                </div>
                <h3 className="font-semibold">Integrity</h3>
                 <p className="">
                    We are committed to delivering care that is ethical, 
                    compassionate, transparent, safe, and informed by the 
                    best available evidence.
                 </p>
              </div> 
            </div>

            {/**mission & vission */}
            <div className="my-20 space-y-6">
                 <header className="text-center">
                     <h1 className="text-blue-600">Mission & Vision</h1>
                 </header>
                <div className="grid md:grid-cols-2 gap-6">
                    <article className="flex items-center gap-6 border border-green-600/10 rounded-xl px-6 py-3 bg-green-600 text-white /5">
                        <div className="w-fit rounded-full border p-4">
                          <LuShieldCheck className="size-6 text-white green-700"/>
                        </div>
                        <div className="space-y-3">
                          <h3 className="font-bold">Mission</h3>
                          <p className="">
                            To empower individuals to achieve lasting vitality through an integrative
                            approach that combines traditional natural medicine with modern scientific
                            knowledge. We focus on identifying and addressing the underlying causes of
                            illness to support meaningful, sustainable health outcomes.
                          </p>
                        </div>
                    </article>

                    <article className="flex items-center gap-6 border border-green-600/10 rounded-xl px-6 py-3 bg-blue-700 text-white">
                        <div className="w-fit rounded-full border p-4">
                          <LuShieldCheck className="size-6 text-white green-700"/>
                        </div>
                        <div className="space-y-3">
                          <h3 className="font-bold">Vision</h3>
                          <p className="">
                            To help shape the future of healthcare by establishing integrative, root-cause
                            natural medicine as a trusted standard for community wellness, disease
                            prevention, and healthy longevity.
                          </p>
                        </div>
                    </article>
                </div>

            </div>

            {/**footer */}
            <footer className="w-full"></footer>
            
        </div>
    )
}

export default Values;