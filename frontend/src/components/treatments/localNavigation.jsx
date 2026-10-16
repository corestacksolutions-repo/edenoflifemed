
export default function LocalNavigation(){
        return(
            <section className="hidden w-[92%] lg:w-[85%] flex gap-6 items-center mx-auto my-8">
                   <nav className="shrink-0 lg:w-[40%] grid grid-cols-2 gap-3">
                        <div className="w-full p-8 rounded-2xl shadow bg-white">
                              Natural & plant based
                        </div>
                        <div className="w-full  p-8 rounded-2xl shadow bg-white">
                              Body Movement therapies
                        </div>
                        <div className="w-full p-8 rounded-2xl shadow bg-white">
                              Therapeutic Technology
                        </div>
                        <div className="w-full p-8 rounded-2xl shadow bg-white">
                              Assessment & Wellness
                        </div>
                   </nav>
                   <div className="w-full h-20 bg-black/10"></div>
            </section>
        )
}