
import bgImage from "../../assets/images/cta-images/medical-attendance.png"
import { motion , AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import treatmentsData from "../../data/treatments";
const Hero = () => {
      const [currentIndex , setCurrentIndex] = useState(2);
      const currentTreatment = treatmentsData[currentIndex]
      console.log("services data", treatmentsData[currentIndex])
      {/* next treatment function */}
      const handleNext = () =>{
          setCurrentIndex(prev => (prev+1) % treatmentsData.length)
      }
    
      useEffect(()=>{
         const timerId = setInterval(handleNext, 5000);
         return() => clearInterval(timerId)
      }, [currentIndex])
      

    return (
    <section className="relative w-full h-[90vh]" >
      
      {/* Background Image */}
      <AnimatePresence mode="sync">
        <motion.img 
          key={currentTreatment.id}
          initial={{opacity:0, x:10}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:0.8, ease: "easeOut"}}
          src={bgImage} 
          alt="Background image of some remedy ingredients" 
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
      </AnimatePresence>
      {/* Dark Overlay */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-white/90 via-white/60 to-transparent backdrop-blur-px" />

       {/*hero content*/} 
       <AnimatePresence mode="wait">

          <div 
              key={currentTreatment.id}
              className="absolute top-[45%] -translate-y-1/2 left-6 lg:left-20 w-[92%] md:w-[85%] mx-auto text-start text-black h-fit pt-[30%] lg:pt-20">
              {/*link trail */}
                <span className="flex text-sm text-black/60 tracking-widest">
                    <Link to="/">Home</Link>
                    <Link to="/treatments">/treatments</Link>
                </span>

                {/*heading/ treatment title */}
              <motion.h1
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                }} 
                className="text-[2.5rem] lg:text-[3rem] font-extrabold text- red-800 ">
                 {currentTreatment.title}
              </motion.h1>
              <motion.p 
                 initial={{opacity:0, x: 0}}
                 whileInView={{opacity:1, x:0}}
                 transition={{duration:1, ease: "easeOut"}}
              
                 className="p max-w-2xl rounded-2xl my-6 text- white/70">
                 {currentTreatment.excerpt}
              </motion.p>
              {/*services details page link */}
 
                <motion.button
                   initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3,
                  }}
                   className="relative group px-4 mt- py-2 bg-red-800 text-white font-semibold font-[Roboto]">
                   <div className="hidden absolute inset-0 w-full 0 bg-black h-full group-hover:w-full transition-all duration-500"/>
                    <Link to={`/treatments/${currentTreatment.slug}`} className="relative group-hover:text-white transition-all duration-500">
                     Explore more
                     </Link> 
                </motion.button>
                     
          </div>
         </AnimatePresence>

         {/*slide indicators */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-10  flex gap-2 w-fit mx-auto">
               {treatmentsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to testimonial page ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === index
                        ? "w-6 bg-black"
                        : "w-2 bg-gray-500"
                    }`}
                  />
                ))}
          </div>
    </section>
    )
    
}
export default Hero;    
