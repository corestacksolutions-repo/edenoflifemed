

export default function Suitability({treatment}){
       return(
          <section className="w-full py-20 bg-blue-50">
                 <header className="w-[92%] lg:w-[85%] mx-auto">
                     <h2 className="text-[2.12rem] font-[Roboto] font-semibold">
                        May this be suiable fo you?
                     </h2>
                  </header>
                <div className="w-[92%] lg:w-[85%] mx-auto grid md:grid-cols-2 gap-x-3 gap-y-6 my-6">
                  <div className="w-full ">
                     <h3 className="font-bold mb-4">
                        {treatment.suitability.title}
                     </h3>
                     <p className="">
                        {treatment.suitability.content}
                     </p>
                  </div>
                  <div className="w-full">
                     <h3 className="font-bold mb-4">
                        {treatment.considerations.title}
                     </h3>
                     <p className="">
                        {treatment.considerations.content}
                     </p>
                  </div>
                </div>
          </section>
       )
}