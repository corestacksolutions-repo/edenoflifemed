import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
export default function AssessmentWellnessRender({treatments}){
      return(
        <section className="w-full mb-40">
              <div className="w-[92%]  md:w-[85%] mx-auto mx-auto py-20 pb-80">
                {treatments.map((item)=>
                    <article key={item.id} className="grid md:grid-cols-2 gap-4 w-full">
                        <div className="relative flex flex-col  space-y-6">
                             <h3 className="font-bold text-[2.3rem] mb-6 tracking-[-1px] leading-[40px]">
                                {item.title}
                             </h3>
                             <p className="p">
                                 A computer-based wellness assessment device that records selected body measurements 
                                 and generates a detailed report for review. The assessment provides additional information 
                                 that can help to better understand areas of your wellbeing and guide further discussion 
                                 about your health and lifestyle.
                             </p>
                             <Link to={`/treatments/${item.slug}`} className="group relative w-fit flex border border-red-800 px-4 py-2 text-14px] font-light border border ">
                                    <div className="absolute inset-0 w-0 h-full bg-red-900 group-hover:w-full transition-all duration-500"/>
                                    <p className="relative group-hover:text-white transition-all duration-500">
                                       Learn more 
                                    </p>
                              </Link> 
                        </div>
                        <figure className="rounded-xl overflow-hidden">
                          <img src={item.image} alt={item.imageAlt} className="w-full max-h-[450px] object-contain" />
                        </figure>
                    </article>   
                )}
                </div>
        </section>
      )
}