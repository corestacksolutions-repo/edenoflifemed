import { PiFlowerLotusDuotone } from "react-icons/pi";


const Process =()=>{
     return(
        <section id="our-process" className="scroll-mt-40 w-[92%] md:w-[85%] mx-auto my-20">
              <header className="text-center mb-6">
                    <h1 className="heading-one">Our Process</h1>
              </header>

              {/*steps */}
              <div className="grid md:grid-cols-2  gap-8 ">
                 {/*lest side-steps */}
                 <div className="w-full h-full space-y-4">
                    <article className="flex items-center gap-4 rounded-xl shadow bg-white p-6">
                        <div className="size-10 shrink-0 flex items-center justify-center text-2xl font-[Roboto] p-3 border rounded-full bg-blue-900 text-white">
                            1
                        </div>
                        <div className="space-y-3">
                            <h2 className="font-[Roboto] font-semibold text-lg">Consultation</h2>
                            <p className="">
                                Start with a conversation about your health, concerns, lifestyle and goals. We take the 
                                time to understand what you need before recommending a suitable approach.
                            </p>
                        </div>
                    </article>

                    <article className="flex items-center gap-4 rounded-xl shadow bg-white p-6">
                        <div className="size-10 shrink-0 flex items-center justify-center text-2xl font-[Roboto] p-3 border rounded-full bg-blue-900 text-white">
                            2
                        </div>
                        <div className="space-y-3">
                            <h2 className="font-[Roboto] font-semibold text-lg">Treatment & Care</h2>
                            <p className="">
                                Receive personalized care based on your needs, which may include natural 
                                therapies, nutritional guidance or other appropriate treatments.
                            </p>
                        </div>
                    </article>

                    <article className="flex items-center gap-4 rounded-xl shadow bg-white p-6">
                        <div className="size-10 shrink-0 flex items-center justify-center text-2xl font-[Roboto] p-3 rounded-full bg-blue-900 text-white">
                            3
                        </div>
                        <div className="space-y-3">
                            <h2 className="font-[Roboto] font-semibold text-lg">Lasting Vitality</h2>
                            <p className="">
                                Build sustainable habits and practices that support continued wellbeing beyond your treatment.
                            </p>
                        </div>
                    </article>
                 </div>
                 
                 {/*right side-picture */}
                 <div className="w-full h-[85%] rounded-3xl bg-blue-300 overflow-hidden my-auto">
                     <img src="https://i.pinimg.com/736x/94/ac/b1/94acb151c5825c1e06a5ca45e2d243c6.jpg" 
                          alt="consultation-with-the-doctor" className="w-full h-full object-cover" />

                 </div>
              </div>
        </section>
     )
}

export default Process;