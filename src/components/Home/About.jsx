import { Link } from "react-router-dom"
import medicalPractioner from "../../assets/images/about-images/edenam-practioner.png"
import medicine from "../../assets/images/about-images/medicine.jpg"
import aboutmetrics from "../../data/about-metrics"
import { easeOut, motion } from "framer-motion"


export default function About(){
      return(
           <section className="relative z-10 bg-white w-full py-20 mt-[50vh] lg:mt-[100vh] z-20">
                <div className="w-[92%] lg:w-[85%] mx-auto grid md:grid-cols-2 gap-6">

                    <motion.figure className="w-full overflow-hidden rounded-xl"
                      initial={{opacity:0, x:-80}}
                      whileInView={{opacity:1, x:0}}
                      viewport={{once:true, amount:0.8}}
                      transition={{duration:2, ease: "easeOut"}}
                    >
                        <img src={medicalPractioner} alt="Medical Practitioner" className="w-full h-full object-cover" />
                    </motion.figure>
                                     

                    {/*about content */}
                    <motion.div className="space-y-8 "
                        initial={{opacity:0, x:80}}
                        whileInView={{opacity:1, x:0}}
                        viewport={{once:true, amount:0.8}}
                        transition={{duration:2, ease: "easeOut"}}
                    >
                        <h1 className="heading-one">Our Clinic</h1>
                        <p className="p">
                            At Eden of Life, we believe good healthcare starts with understanding the person, 
                            not just the health concern. We take time to understand your health desires, lifestyle 
                            and the factors that may be affecting your wellness.
                        </p> 
                        <p className="p">
                            Through natural therapies, nutritional guidance and personalized care, we support 
                            you in making informed choices about your health and building habits that can support 
                            your wellbeing over time.
                        </p>   
                        
                         {/*micro metrics */}
                         <div className="grid md:grid-cols-2 gap-4 w-full mt-8">                            
                            {aboutmetrics.map((metric) => (
                                <span key={metric.id} className="flex items-center gap-4  w-full h-fit ">
                                    <div className="size-10 bg-blue-800  rounded-full">

                                    </div>
                                    <div className="">
                                        <h3 className="font-semibold text-blue-900">{metric.title}</h3>
                                        <p className="">{metric.description}</p>
                                    </div>
                                </span>
                            ))}                          
                         </div>
                    </motion.div>

                     {/*mission & vission */}
                    <motion.div className="w-full md:col-span-2 space-y-6 my-10 text-center md:text-left"
                            initial={{opacity:0, x:-80}}
                            whileInView={{opacity:1, x:0}}
                            viewport={{once:true, amount:0.8}}
                            transition={{duration:2, ease: "easeOut"}}
                     >
                        <h2 className="text-[2.25rem] text-blue-800 font-[Roboto]">Mission</h2>
                        <p className="p leading-7 md:w-[70%] text-justify md:text-left">
                            To empower individuals to achieve lasting vitality through an integrative
                            approach that combines traditional natural medicine with modern scientific
                            knowledge. We focus on identifying and addressing the underlying causes of
                            illness to support meaningful, sustainable health outcomes.
                        </p>

                    </motion.div>


                    <motion.div className="flex flex-col md:flex-row w-full  md:col-span-2 gap-x-8 gap-y-6 items-center"
                           initial={{opacity:0, x:80}}
                           whileInView={{opacity:1, x:0}}
                           viewport={{once:true, amount:0.8}}
                           transition={{duration:2, ease: "easeOut"}}   
                    >
                        <figure className="border md:w-[40%] rounded-2xl overflow-hidden">
                            <img src={medicine} alt="our medicine" className="w-full h-full object-cover" />
                        </figure>
                        <div className="space-y-6 w-full md:max-w-[60%] text-center md:text-left">
                            <h2 className="text-[2.25rem] text-blue-800 font-[Roboto]">Vision</h2>
                            <p className="p leading-7 text-justify md:text-left">
                                To help shape the future of healthcare by establishing integrative, root-cause
                                natural medicine as a trusted standard for community wellness, disease
                                prevention, and healthy longevity.
                            </p>
                        </div>

                    </motion.div>

                    
                </div>
                 

                

                {/*cta */}
                <footer className="w-full w-[92%] lg:w-[85%] mx-auto my-8 flex justify-between">
                    <div className=""></div>
                    <Link to="/about" className="hidden bg-red-700 text-white px-6 py-3 rounded-md hover:bg-red-800 font-semibold transition-colors">
                        Learn More about us
                    </Link>
                </footer>
 
           </section>
      )
}