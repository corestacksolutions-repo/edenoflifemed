

import { useState } from "react";
import careBenefits from "../../data/why us";
import { ChevronDown } from "lucide-react";

export default function ChooseUs(){
      const [isExpanded, setIsExpanded] = useState(null);
      const handleExpansion = (id) =>{
            setIsExpanded(isExpanded === id ? null : id)
            console.log(isExpanded)
      }
      return(
          <section id="why-us" className="scroll-mt-40 w-full ">
                <header className="text-center px-6">
                    <h1 className="text-blue-800 text-[2rem] leading-[40px] font-bold md:heading-one">The reasons others have chosen Eden of Life</h1>
                </header>
              <div className="w-[92%] md:w-[75%] 2px] mx-auto">
                     {/*why choose us */}
                 <div className="my-10  space-y-3">
                    {careBenefits.map((item)=>
                      <article key={item.id} onClick={()=> handleExpansion(item.id)} 
                               className={`${isExpanded ===item.id ? 'h-fit': 'h-[56px]'} transition-all duration-500 w-full rounded-3xl border overflow-hidden`}>
                        <div className="flex justify-between items-center  borr p-3 rounded-3xl">
                           <h3 className="font-[Roboto] font-semibold text-lg text-">
                            {item.title}
                           </h3>
                           <span className="flex items-center justify-center text-white bg-black lue-950 size-[24px] shrink-0 rounded-full">
                            <ChevronDown className={`size-4 ${isExpanded ===item.id ? 'rotate-180': ''} transition-all duration-500`}/> 
                           </span>
                        </div>
                        <p className={`px-4 pb-4 ${isExpanded ===item.id ? 'opacity-100': 'opacity-0'} text-lg transition-all duration-500`}>
                            {item.description}
                        </p>
                      </article>
                    )}
                 </div>
              </div>
          </section>
      )
}