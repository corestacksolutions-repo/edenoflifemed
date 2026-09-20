import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
export default function AssessmentWellnessRender({treatments}){
      return(
        <section className="w-full bg-gradient-to-tr from-black to-blue-950 ">
              <div className="w-[92%] lg:w-[85%] mx-auto mx-auto gap-4 py-20 pb-80">
                {treatments.map((item)=>
                    <article key={item.id} className="grid md:grid-cols-2 gap-4 w-full">
                        <div className="relative flex flex-col text-white/80">
                             <h3 className="font-bold text-[2.3rem] mb-6 tracking-[-1px] leading-[40px]">
                                {item.title}
                             </h3>
                             <p className="p">
                                 A computer-based wellness assessment device that records selected body measurements 
                                 and generates a detailed report for review. The assessment provides additional information 
                                 that can help to better understand areas of your wellbeing and guide further discussion 
                                 about your health and lifestyle.
                             </p>
                             <Link to={item.cta} className="flex gap-3 items-center w-fit md:absolute bottom-5  font-bold text-red-800 text-lg my-8 ">
                                Explore
                                <ArrowRight className="size-5 "/>
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