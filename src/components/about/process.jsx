import { PiFlowerLotusDuotone } from "react-icons/pi";


const Process =()=>{
     return(
        <div className="w-[92%] md:w-[85%] mx-auto my-20">
              <header className="text-center">
                <div className="text-blue-700 font-semibold tracking-wide relative uppercase flex items-center gap-3 text-sm w-fit mx-auto">
                    <PiFlowerLotusDuotone size={30} />
                    <span>Process</span>
                    <div className="absolute h-[1px] w-[32px] -bottom-1 left-0 border border-blue-700"/>
                </div>
                <h2 className="text-2xl font-serif my-6">
                     A three steps process to everlasting wellbeing
                </h2>
              </header>

              {/*steps */}
              <div className="grid md:grid-cols-2  gap-8 ">
                 {/*lest side-steps */}
                 <div className="w-full h-full space-y-4">
                    <article className="flex items-center gap-4 rounded-xl border p-6">
                        <div className="size-10 flex items-center justify-center text-2xl font-serif p-3 border rounded-full bg-blue-400 text-white">
                            1
                        </div>
                        <div className="space-y-3">
                            <h2 className="font-semibold">Uncover Your Health Story</h2>
                            <p className="">
                                Understand the underlying factors, patterns, and lifestyle influences shaping your health.
                            </p>
                        </div>
                    </article>

                    <article className="flex items-center gap-4 rounded-xl border p-6">
                        <div className="size-10 flex items-center justify-center text-2xl font-serif p-3 border rounded-full bg-blue-400 text-white">
                            2
                        </div>
                        <div className="space-y-3">
                            <h2 className="font-semibold">Begin Your Transformation</h2>
                            <p className="">
                                Follow a personalised care plan designed around your unique health needs and wellness goals.
                            </p>
                        </div>
                    </article>

                    <article className="flex items-center gap-4 rounded-xl border p-6">
                        <div className="size-10 flex items-center justify-center text-2xl font-serif p-3 border rounded-full bg-blue-400 text-white">
                            3
                        </div>
                        <div className="space-y-3">
                            <h2 className="font-semibold">Embrace Lasting Vitality</h2>
                            <p className="">
                                Build sustainable habits and practices that support continued wellbeing beyond your treatment.
                            </p>
                        </div>
                    </article>
                 </div>
                 
                 {/*right side-picture */}
                 <div className="w-full h-[85%] rounded-3xl bg-blue-300 overflow-hidden my-auto">
                     <img src="https://i.pinimg.com/736x/07/ac/48/07ac48c39792bf4bd065e3db74c5e3cf.jpg" 
                          alt="" className="w-full h-full object-cover" />

                 </div>
              </div>
        </div>
     )
}

export default Process;