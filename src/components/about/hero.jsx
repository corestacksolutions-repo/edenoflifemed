import backgroundImage from '../../assets/contact page/medical equipment.jpg'
import heart from "../../assets/contact page/heart.jpg"
import naturalPathy from "../../assets/contact page/natural-therapy.png"
import { LuArrowRight } from 'react-icons/lu'

const Hero = () => {
    return (
        <div className="relative w-full  min-h-[80vh] md:min-h-[40vh] lg:min-h-[70vh] mt-20 py-8  text-white text-center flex bg-gradient-to-tr from-black /70 via-black/90 to-transparent">  
           {/*overlay */}
            <div className="w-[92%] lg:w-[85%] m-auto absolute inset-0 "/>
            {/*bg image */}
            <img src={backgroundImage} alt="Contact Hero" 
                 className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" />
          
          {/*hero content*/}  
          <div className="relative flex flex-col gap-6 md:flex-row w-[92%] md:w-[85%] mx-auto justify-between overflow-hidden ">
              {/*left content */}
             <div className="text-start w-full md:w-[65%] my-auto space-y-6">
                 <small className="uppercase text-xs text-red-600 font-bold">About Us</small>
                 <h1 className="text-6xl font-bold leading-[1] tracking-wide">
                    Rooted In Nature, 
                    <br/>
                    Committed to You.

                </h1>
                 <div className="bg-blue-600 h-px w-[40px]"/>

                <p className="text-lg italic p-3 border border-dotted rounded-2xl w-fit bg-white/10 backdrop-blur-sm">
                    Eden of life is a naturalpathy amd wellness center to helping you 
                    achieve lasting health through natural, holistic, and personalised care.
                    <br/>
                    Reach out to us. We'd love to hear from you.
                </p>

                
             </div>

             {/*right content */}
             <div className="hidden md:w-[25%] h-60 rounded-2xl backdrop-blur-[2px]  my-auto space-y-4">
                <div className="flex justify-end gap-3">
                  <img src={heart} alt="Contact Hero" className="hidden h-20 rounded-full 2xl object-cover" />
                  <img src={naturalPathy} alt="Contact Hero" className="h0 rounded-full 2xl object-cover" />
                </div >
                 <div className="hidden lex justify-start gap-3">
                  <img src={heart} alt="Contact Hero" className="h-20 rounded-full 2xl object-cover" />
                  <img src={naturalPathy} alt="Contact Hero" className="h-20 rounded-full 2xl object-cover" />
                </div>
                
             </div>
        
          </div> 
    
        </div>
    )
    
}
export default Hero;    
