import { Link } from "react-router-dom"
import medicalPractioner from "../../assets/images/about-images/edenam-practioner.png"
export default function About(){
      return(
           <section className="w-full my-40">
                <div className="w-[92%] lg:w-[85%] mx-auto grid md:grid-cols-2 gap-6">
                    <figure className="w-full overflow-hidden rounded-xl">
                        <img src={medicalPractioner} alt="Medical Practitioner" className="w-full h-full object-cover" />
                    </figure>
                                     

                    {/*about content */}
                    <div className=" space-y-3">
                        <h1 className="text-first font-mono bold text-blue-900 mb-4">Our Clinic</h1>
                        <p className="text-[1.12rem] text-sky-950/70">
                            At Eden of Life, we believe good healthcare starts with understanding the person, 
                            not just the health concern. We take time to understand your health desires, lifestyle 
                            and the factors that may be affecting your wellness.
                        </p> 
                        <p className="text-lg text-sky-950/70">
                            Through natural therapies, nutritional guidance and personalized care, we support 
                            you in making informed choices about your health and building habits that can support 
                            your wellbeing over time.
                        </p>   
                         
                         {/*micro metrics */}
                         <div className="grid md:grid-cols-2 w-full">
                            <span className="w-full p-3 border space-y-4">
                                <h3 className="font-semibold text-blue-900">Personalised</h3>
                                <p className="text-sky-950/70">Care for every individual</p>
                            </span>
                            <span className="w-full p-3 border space-y-4">
                                <h3 className="font-semibold text-blue-900">Qualified</h3>
                                <p className="text-sky-950/70">Professional practitioners</p>
                            </span>
                            <span className="w-full p-3 border space-y-4">
                                <h3 className="font-semibold text-blue-900">Natural</h3>
                                <p className="text-sky-950/70">Evidence-informed therapies</p>
                            </span>
                            <span className="w-full p-3 border space-y-4">
                                <h3 className="font-semibold text-blue-900">Patient-first</h3>
                                <p className="text-sky-950/70">Care built around you</p>
                            </span>

                         </div>
                    </div>

                    
                </div>

                {/*cta */}
                <footer className="w-full w-[92%] lg:w-[85%] mx-auto my-8 flex justify-between">
                    <div className=""></div>
                    <Link to="/about" className="bg-red-700 text-white px-6 py-3 rounded-md hover:bg-red-800 font-semibold transition-colors">
                        Learn More about us
                    </Link>
                </footer>
 
           </section>
      )
}