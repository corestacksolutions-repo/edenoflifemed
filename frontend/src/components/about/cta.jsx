import { GrSchedule } from "react-icons/gr"
import { Link } from "react-router-dom";
import medicalAttendance from "../../assets/images/cta-images/medical-attendance.png"
import medicalAttendancePhone from "../../assets/images/cta-images/medical-attendance-potrait.png"
const CTA = () =>{
      return(
         <div className="relative w-[92%] md:w-[85%] mx-auto  gap-3 bg-blue-900 text-white my-20 rounded-3xl p-6 lg:px-16 py-16 overflow-hidden">
                {/**background image */}
                {/*narrow screen */}
                <img src={medicalAttendancePhone} alt="medical-attendance" className="md:hidden absolute inset-0 object-cover w-full h-full bg-gray-400" />
                {/*wider screen */}
                <img src={medicalAttendance} alt="medical-attendance" className="hidden md:block absolute inset-0 object-cover w-full h-full bg-gray-400" />
                
                {/*overlay*/}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-tr md:bg-gradient-to-tr from-black via-black/80 to-transparent"/>
               
               <div className="relative w-full w-full md:w-[60%] lg:w-[50%] space-y-6">
                   <small className="hidden uppercase text-blue-700">YOUR WELLNESS JOURNEY STARTS HERE</small>
                   <h1 className="text-4xl md:text-5xl font-[Roboto] font-bold w-2/10 ">
                      Ready to Experience Care for Yourself?
                   </h1>
                   <p className="">
                     You can be one of the people who have chosen Eden of Life for a more personal approach to their health. 
                     Start with a consultation, tell us what you need, and let's explore how we can support you.
                   </p>

                   <div className="w-full md:w-fit text-center md:text-left flex flex-col md:flex-row gap-4">
                      <Link to='/consultation' className='px-6 w-full md:w-fit text-white gap-3 bg-red-900 rounded-xl p-3 p2 font-semibold'> 
                         Book a consultation
                      </Link>
                      <Link to='/contact' className='px-12 w-full md:w-fit bg-green-800 border border-green-900/70 rounded-xl p-3 -2 font-semibold'>
                          Contact us
                      </Link>
                      
                   </div>
               </div>
               
         </div>
      )
}

export default CTA;