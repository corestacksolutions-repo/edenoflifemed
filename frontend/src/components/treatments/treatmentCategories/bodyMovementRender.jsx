import { ArrowBigRight, ArrowRight } from "lucide-react";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function BodyMovementRender({treatments}){
                            
               return(
                <section className="w-full lg:py-20">
                      <header className="text-center my-8">
                          <h2 className="font-bold font-[Roboto] text-2xl">
                              Body Movement Treatments
                          </h2>
                      </header>
                      
                      <div className="">
                        <div className="w-[92%]  md:w-[85%] lg:w-[60%] mx-auto grid md:grid-cols-3 lg:grd-cols-4 lg:gap-y-10 gap-10">
                        {treatments.map((item)=>
                           <article to={`/treatments/${item.slug}`} key={item.id} className=" flex flex-col gap-4 bg-white w-full h-fit">
                              <div  className="overflow-hidden border bg-red-50 ">
                                 <img src={item.image} alt={item.imageAlt} className="w-full h- object-cober" />
                              </div>
                              <div className="space-y-4">
                                 <p className="font-semibold font-[Roboto] text-[0.875rem]">{item.title}</p>   
                                 <p className="">
                                    {item.excerpt}
                                 </p>
                                 <Link to={`/treatments/${item.slug}`} className="group relative w-fit flex border px-2 py-1 text-14px] font-light border border ">
                                    <div className="absolute inset-0 w-0 h-full bg-black group-hover:w-full transition-all duration-500"/>
                                    <p className="relative group-hover:text-white transition-all duration-500">
                                       Learn More
                                    </p>
                                 </Link>
                              </div> 
                          </article>   
                        )}
                        </div>
                      </div>
                </section>
               )
} 