import { Link } from "react-router-dom"
export default function RelatedTreatment({relatedTreatments}){
     
     return(
          <section className="w-full bg-blue-50 py-10 ">
               <header className="w-[90%] lg:w-[70%] mx-auto border-t pt-10">
                    <h2 className="font-bold text-center text-xl">
                         Related Treaments
                    </h2>
               </header>
               <div className="w-[92%] lg:w-[65%] flex gap-4 flex-wrap justify-center mx-auto py-10 pb-20">
                    {relatedTreatments.map((item)=>
                    <Link to={`/treatments/${item.slug}`}
                          key={item.id}
                          className="w-fit border border-emerald-950/10 text-center rounded-full shandow px-4 py-2 font-semibold bg-emerald-900/10"
                    >
                         {item.title}
                     </Link>
                    )}
                    
               </div>
          </section>
     )
}