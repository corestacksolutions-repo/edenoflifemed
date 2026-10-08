import { Link } from "react-router-dom"

export default function NaturalAndPlantsRender({treatments}){
       return(
           <section className="w-[92%] md:w-[85%] lg:w-[75%] mx-auto">
                 <header className="text-center my-8">
                      <h2 className="font-bold font-[Roboto] text-2xl">
                        Natural and plant treatment
                      </h2>
                      <h3 className="hidden font-semibold">
                          Natural approaches, thoughtfully personalized
                      </h3>
                      <p className="hidden p">
                        Our natural and plant-based therapies draw on carefully selected natural 
                        approaches as part of personalized care. We take time to understand your 
                        needs and explain how each therapy is used, what it is intended for and whether 
                        it may be appropriate for you.
                      </p>
                </header>
                <div className=" my-10 mb-40 ">
                        {treatments.map((item)=>{
                            const reverse= item.id % 2 !== 0
                            return(
                            <article key={item.id} className={`grid md:grid-cols-2 w-full ${reverse ? "lg:[&>*:first-child]:order-2" : ""} my-8`}>
                                <div className="border relative h-full my-auto flex flex-col justify-center gap-4 p-2 px-6">
                                    <h3 className="font-bold text-[1.25rem] tracking-[-1px] leading-[40px]">
                                        {item.title}
                                    </h3>
                                    <p className="p">
                                        A computer-based wellness assessment device that records selected body measurements 
                                        and generates a detailed report for review. The assessment provides additional information 
                                        that can help to better understand areas of your wellbeing and guide further discussion 
                                        about your health and lifestyle.
                                    </p>
                                    <Link to={`/treatments/${item.slug}`} className="group relative w-fit flex border border-black/40 px-4 py-2 text-14px] font-light border border ">
                                        <div className="absolute inset-0 w-0 h-full bg-black group-hover:w-full transition-all duration-500"/>
                                        <p className="relative group-hover:text-white transition-all duration-500">
                                          Explore 
                                        </p>
                                    </Link> 
                                </div>
                                <figure className="">
                                  <img src={item.image} alt={item.imageAlt} className="w-full max-h-[450px] object-contain" />
                                </figure>
                            </article>    
                         )})}
                      </div>
           </section>
       )
}