
import { Link } from "react-router-dom"

export default function TherapeuticTechnologiesRender({treatments}){
      return(
        <section className="w-full py-10">
              <div className="w-[92%] lg:w-[85%] mx-auto gap-4 my-10 ">
                        <header className="lg:w-[65%] mx-auto gap-6 text-center space-y-4 py-8">
                            <h2 className="font-[Roboto] text-xl tracking-wide font-semibold">
                                THERAPEUTIC TECHNOLOGIES
                            </h2>
                            <h3 className="font-semibold">
                               Modern approaches to care
                            </h3>
                            <p className="p">
                              Our therapeutic technologies offer additional approaches that can be incorporated 
                              into personalized care. We take time to understand your needs and explain how 
                              each technology is used, what it is intended for and whether it may be appropriate
                              for you.
                            </p>
                        </header>
                         <div className="grid md:grid-cols-3 gap-4">
                               {treatments.map((item)=>
                         <article key={item.id} className="w-full rounded-2xl overflow-hidden shadow overflow-hidden">
                                 <figure className="w-full">
                                  <img src={item.image} alt={item.imageAlt} className="w-full h-60  object-cover" />
                               </figure>
                               <div className="md:w-full flex flex-col gap-4 p-6">
                                  <h3 className="font-semibold font-[Roboto]">
                                      {item.title}
                                  </h3>
                                   <p className="">
                                      {item.excerpt}
                                   </p>
                                  <Link to={item.cta} className="text-red-800">
                                   Learn more
                                  </Link>
                                  
                               </div>  
                         </article>  
                         )}
                         </div>
                        
              </div>
        </section>
      )
}