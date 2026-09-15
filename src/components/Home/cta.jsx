import { 
    Link 
 } from "react-router-dom"
 import medicalAttendance from "../../assets/images/cta-images/medical-attendance.png"
import { HeartPulseIcon } from "lucide-react"

export default function CTA() {
    return(
        <section className="w-full py-20">
            <div className="w-[92%] lg:w-[85%] mx-auto grid md:grid-cols-2 rounded-3xl bg-gradient-to-tr from-blue-950 to-blue-900  overflow-hidden">
                 <div className="flex flex-col justify-center  w-full h-full space-y-4 px-6 py-8 md:pl-12">
                     <span className="text-xl font-[roboto] text-white/80">
                        Your health,your priority
                     </span> 
                     <h2 className="text-3xl text-white/80 lg:text-5xl font-[roboto] font-bold leading-relaxed">
                        Let's discuss the next chapter of your life today.
                     </h2>
                     <div className="flex flex-col md:flex-row gap-4">
                         <Link to="/booking" className="mt-3 bg-red-700 p-3 rounded-lg hover:bg-red-800 font-bold text-center text-white">
                           Book an Appointment
                         </Link>
                         <Link to="/contact" className="mt-3 border border-red-700 px-12 p-3 text-center  rounded-lg hover:bg-red-800/50 font-bold text-white">
                           Contact us
                         </Link>
                     </div>
                 </div>
                 <div className="p-4 border-box flex">
                  <img src={medicalAttendance} 
                       alt="medical attendance" 
                       className="m-auto w-[90%] h-[90%] object-cover rounded-xl bg-white/80" 
                  />
                  
                 </div>
                 
            </div>
        </section>
    )}