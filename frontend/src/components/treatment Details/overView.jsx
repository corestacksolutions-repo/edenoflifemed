import { span } from "framer-motion/client"


export default function OverView({treatment}){
    console.log(treatment)
    return(
        <section className="w-full py-8 lg:py-10">
             
            <div className="w-[92%] lg:w-[85%] mx-auto grid md:grid-cols-3 grid-rows-auto gap-6">
                  {/*image */}
                 <figure className="row-start-1 z-10 bg-gray-100/60 w-full h-full rounded-2xl overflow-hidden rounded-3xl">
                   <img src= {treatment.image} alt={treatment.imageAlt} className="w-full h-full object-cover" />
                 </figure>

                 {/*content */}
                <div className="md:row-start-1 md:pl-8 md:col-span-2">
                    <header className="">
                       <h2 className="text-[2.12rem] font-[Roboto] font-semibold mb-6">Overview </h2>
                    </header>
                    {/*description */}
                    <article className="space-y-3">
                       <h3 className="text-lg font-bold">
                         Understand {treatment.title}
                       </h3> 
                       <p className="p">
                         {treatment.overview.content}
                      </p> 
                    </article>
                    {/*may help with */}
                    <article className="space-y-2 my-4">
                         <h4 className="font-semibold">
                           {treatment.mayHelpWith.title}
                         </h4>
                        {treatment.mayHelpWith.items.map((item, index)=>
                          <span key={index} className="flex gap-3 items-center">
                              <div className="size-[10px] bg-black rounded-full text-white"/>
                              <p key={item} className="text-[16px]">
                                {item}
                            </p>
                          </span>
                          
                        )}
                    </article>
                </div>
            </div>
        </section>
    )
}