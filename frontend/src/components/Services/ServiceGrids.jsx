import { GiTreeBranch } from "react-icons/gi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import services from "../../data/services";

const ServiceGrids = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const servicesPerPage = 6
  const startIndex = (currentPage-1) * servicesPerPage;
  {/*current services */} 
  const currentServices = services.slice(
        startIndex,
        startIndex + servicesPerPage
  );
  
  {/*number of pages that exist */}
  const pageCount = Math.ceil(services.length / servicesPerPage);

  {/*handle next page */}
  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, pageCount));
  };

  return (
    <section className="h-full lg:h-[90%] relative">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Individual Card */}
            {
              currentServices.map(({ id, title, slug, excerpt, icon: Icon }) => (
                <article key={id} className="bg-white border border-black/10 flex flex-col gap-2 rounded-3xl p-5 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  {/* Watermark */}
                  <GiTreeBranch size={65} className="-rotate-180 absolute top-4 right-2 text-gray-300/15" />

                  {/* Icon */}
                  <div className="bg-blue-100 w-[42px] h-[42px] rounded-full flex items-center justify-center text-emerald-800 shrink-0">
                    <Icon size={20} />
                  </div>

                  {/* Heading */}
                  <h3 className="font-[Roboto] text-[1rem] font-semibold text-emerald-950 mt-1 tracking-wider">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm tracking-wide text-black/60 leading-relaxed">
                    {excerpt}
                  </p>

                  {/* CTA */}
                  <Link to={`/services/${slug}`} className="mt-auto pt-2 flex gap-1 tracking-wide items-center text-sm text-blue-700 font-medium w-fit hover:gap-2 transition-all duration-300">
                    Learn More
                    <IoIosArrowRoundForward size={20} />
                  </Link>
                </article>
              ))
            }
          </div>
          {/*page number controllers */}
          <footer className="mx-auto w-fit my-6">
               <div className="flex gap-1 mx-auto">
                    {Array.from({ length: pageCount }).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentPage(index + 1)}
                          className={`px-2 py-1 text-xs ${
                            currentPage === index + 1
                              ? "bg-black text-white"
                              : "bg-gray-100"
                          } transition-all duration-500`}
                        >
                          {index + 1}
                        </button>
                      ))}
               </div>
          </footer>
  </section>
  )
}

export default ServiceGrids