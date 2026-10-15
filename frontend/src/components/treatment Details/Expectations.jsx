import {
  ClipboardCheck,
  HeartPulse,
  TrendingUp
} from "lucide-react";

export default function Expectations({treatment}){
       return(
          <section className="w-full lg:py-20 pb-10 bg-blue-50">
                <header className="w-[92%] lg:w-[85%] mx-auto">
                    <h2 className="text-[2.12rem] font-[Roboto] font-semibold">
                       {treatment.expectations.title}
                    </h2>
                </header>
                <div className="w-[92%] lg:w-[85%] mx-auto grid md:grid-cols-3 gap-x-3 gap-y-6 my-6">
                     {/**before */}
                     <article className="w-full border border-blue-800/40 p-6 rounded-2xl  bg-blue-100">
                         
                         <h3 className="font-bold text-lg mb-4">Before Treatment</h3>
                         {treatment.expectations.before.map((item)=>
                           <span key={item} className="flex gap-3 items-center">
                              <div className="size-[30px] shrink-0 border border-black/50 rounded-full"/>
                              <p className="my-2 text-sm tracking-wide" >
                                 {item} 
                              </p>
                           </span> 
                         )}
                     </article>

                     {/*during */}
                     <article className="w-full border border-sky-400/70 p-6 rounded-2xl  bg-sky-100">
                         <h3 className="font-bold text-lg mb-3">During Treatment</h3>
                         {treatment.expectations.during.map((item)=>(
                           <span key={item} className="flex gap-3 items-center">
                              <div className="size-[30px] shrink-0 border border-black/50 rounded-full"/>
                              <p  className="my-2 text-sm tracking-wide" >
                                 {item} 
                              </p>
                           </span>
                         ))}
                     </article>

                     {/*after */}
                     <article className="w-full border border-green-800/40 p-6 rounded-2xl  bg-green-100">
                         <h3 className="font-bold text-lg mb-3">After Treatment</h3>
                         {treatment.expectations.after.map((item)=>(
                           <span key={item} className="flex gap-3 items-center">
                              <div className="size-[30px] shrink-0 border border-black/50 rounded-full"/>
                              <p  className="my-2 text-sm tracking-wide" >
                                 {item} 
                              </p>
                           </span>
                         ))}
                     </article>
                     
                </div>
          </section>
       )
}