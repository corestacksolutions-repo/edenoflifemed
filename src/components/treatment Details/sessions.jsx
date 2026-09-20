

export default function Session({treatment}){
      return(
        <section className="w-full my-10">
              <header className="w-[92%] lg:w-[85%] mx-auto ">
                  <h3 className="text-[2.12rem] font-[Roboto] font-semibold ">
                    {treatment.session.title}
                  </h3>
              </header>
             <div className="w-[92%] lg:w-[85%] mx-auto grid md:grid-cols-4 gap-6 mt-8">
                   {treatment.session.steps.map((item)=>
                      <article key={item.number} className="w-full shadow border-blue-800  p-6 rounded-2xl space-y-3 bg-white blue-00">
                            <div className="w-[35px] h-[35px]  flex items-center justify-center p-2 shrink-0 rounded-full bg-blue-900/50 text-white font-serif font-semibold">
                               {item.number}
                            </div>
                            <h3 className="font-semibold ">
                                  {item.title}
                            </h3>
                            <p className="">
                                {item.description}
                            </p>
                      </article>
                 )}
             </div>
        </section>
      )
}