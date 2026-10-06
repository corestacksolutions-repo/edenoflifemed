
export default function VideoContainer({treatment}) {
    return(
        <section className="w-full my-10 lg:mb-40">
            <header className="text-center my-10 lg:my-20">
                <h2 className="text-[2.12rem] font-[Roboto] font-semibold my-6">
                    Massage in action
                </h2>
            </header>
            <div className="relativ w-[92%] lg:w-[85%] mx-auto grid lg:grid-cols-3 gap-3">
                {/* treatment video */}
                <video src={treatment.video} 
                  controls
                  className="absolutnset-0 rounded-2xl w-full h-full object-cover" 
                />
                 <video src={treatment.video} 
                  controls 
                  className="absolut rounded-2xl w-full h-full object-cover" 
                />
                 <video src={treatment.video} 
                  controls 
                  className="absolut rounded-2xl w-full h-full object-cover" 
                />
               
            </div>
        </section>
    )
}