import { Link } from "react-router-dom"

export default function NaturalAndPlantsRender({treatments}){
       return(
           <section className="w-[92%] lg:w-[85%] mx-auto">
                <header className="lg:w-[65%] gap-6 space-y-4 py-8">
                      <h2 className="font-[Roboto] text-xl tracking-wide font-semibold">
                          NATURAL & PLANT-BASED THERAPIES
                      </h2>
                      <h3 className="font-semibold">
                          Natural approaches, thoughtfully personalized
                      </h3>
                      <p className="p">
                        Our natural and plant-based therapies draw on carefully selected natural 
                        approaches as part of personalized care. We take time to understand your 
                        needs and explain how each therapy is used, what it is intended for and whether 
                        it may be appropriate for you.
                      </p>
                </header>
                <div className=" grid md:grid-cols-2  gap-4 my-10 ">
                        {treatments.map((item)=>
                          <article key={item.id} className="grid md:grid-cols-2 w-full border rounded-3xl overflow-hidden">
                            <figure className="w-full h-full rounded-2xl">
                                <img src={item.image} alt={item.imageAlt} className="w-full h-80 object-cover" />
                            </figure>
                            <div className="flex flex-col justify-center gap-4 w-full p-6">
                                <h3 className="font-[Roboto] font-semibold text-lg">
                                    {item.title}
                                </h3> 
                               <p className="">
                                   {item.excerpt}
                               </p>
                               <Link to={item.cta} className="w-fit text-red-800 font-semibold px-3 py-1 border rounded-3xl">
                                  learn more
                               </Link>
                            </div>
                               
                          </article>   
                        )}
                      </div>
           </section>
       )
}