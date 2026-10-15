import { FaPeopleCarry } from "react-icons/fa";
import { LuFileArchive, LuShieldCheck } from "react-icons/lu";
import values from "../../data/values";
const Values = ()=>{
    return(
        <div className="w-[92%] md:w-[85%] mx-auto my-20">
            <header className="text-center space-y-2 my-6">
                <h1 className="heading-one">our values</h1>
            </header>
              {/**values */}
            <div id="our-values" className="scroll-mt-40 grid md:grid-cols-4 gap-6 w-full  ">
               {values.map((value)=>
                  <div key={value.id} className="p-6 rounded-xl space-y-3 shadow bg-white green-50/50">
                    <h3 className=" font-semibold text-lg text-green-800">
                       {value.title}
                    </h3>
                    <p className="text-black/50">
                        {value.description}
                    </p>
              </div> 
                )}
              
            </div>

            {/**mission & vission */}
            <div id="mission-and-vision" className="scroll-mt-40 relative grid md:grid-cols-3 grid-rows-auto my-10 lg:my-30">
                 <header className="relative lg:w-[85%] h-[300px] lg:h-[400px] rounded-xl overflow-hidden my-6 md:my-0">
                     {/**bg image */}
                     <img src="https://i.pinimg.com/736x/a1/9f/6b/a19f6b8ecfbdf8b4899a0e34e76f5ad4.jpg" 
                       alt="photo-theray" className="absolute inset-0 object-cover w-full h-full" />
                       {/**overlay */}
                       <div className="hidden absolute inset-0 w-full h-full bg-gradient-to-b from-blue-950 via-blue-900/96 to-blue-900/30"/>
                     
                 </header>
                 
                 <div className="row-start-1 md:col-start-2 w-full h-full md:col-span-2 my-6 md:my-0">
                     <h2 className="heading-one">Mission & Vission</h2>
                     <p className="p">Our mission and vision reflect what matters to us; caring 
                        for people with kindness and contributing to healthier 
                        communities.
                      </p>
                 </div>
                <div className="md:absolute bottom-5 right-0 md:w-[80%] h-fit md:col-span-2 grid md:grid-cols-2 gap-6">
                    <article className="flex items-center gap-6 rounded-xl px-6 py-3 bg-emerald-900 text-white /5">
                        
                        <div className="space-y-3">
                          <h3 className="font-bold text-lg">Mission</h3>
                          <p className="">
                            To empower individuals to achieve lasting vitality through an integrative
                            approach that combines traditional natural medicine with modern scientific
                            knowledge.
                          </p>
                        </div>
                    </article>

                    <article className="flex items-center gap-6 border border-green-600/10 rounded-xl px-6 py-3 bg-emerald-900 text-white">
                        
                        <div className="space-y-3">
                          <h3 className="font-bold text-lg">Vision</h3>
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