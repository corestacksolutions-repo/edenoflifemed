import backgroundImage from '../../assets/contact page/medical equipment.jpg'
import heart from "../../assets/contact page/heart.jpg"
import naturalPathy from "../../assets/contact page/natural-therapy.png"

const Hero = () => {
    return (
        <div className="relative w-[92%] lg:w-[85%] m-auto min-h-[80vh] md:min-h-[40vh] lg:min-h-[60vh] mt-20 py-8  text-white text-center flex bg-black/40 overflow-hidden rounded-xl ">  
           {/*overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"/>
            {/*bg image */}
            <img src={backgroundImage} alt="Contact Hero" 
                 className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" />
          
          {/*hero content*/}  
          <div className="relative flex flex-col gap-6 md:flex-row justify-between w-[92%] m-auto overflow-hidden ">
              {/*left content */}
             <div className="text-start w-full md:w-[65%] my-auto space-y-6">
                 <small className="uppercase text-xs text-red-600 font-bold">Contact Us</small>
                 <h1 className="text-5xl font-bold leading-[1] tracking-wide">
                    Navigate Your Health Journey With Confidence.    
                </h1>

                <p className="text-lg italic p-3 border border-dotted rounded-2xl w-fit bg-white/10 backdrop-blur-sm">
                    Have a question or ready to begin? 
                    <br/>
                    Reach out to us. We'd love to hear from you.
                </p>
             </div>

             {/*right content */}
             <div className=" md:w-[25%] h-60 rounded-2xl p-6 border-2 border-blue-600 bg-blue-600/30 backdrop-blur-[2px]  my-auto space-y-4">
                <div className="flex justify-end gap-3">
                  <img src={heart} alt="Contact Hero" className="h-20 rounded-full 2xl object-cover" />
                  <img src={naturalPathy} alt="Contact Hero" className="h-20 rounded-full 2xl object-cover" />
                </div>
                 <div className="flex justify-start gap-3">
                  <img src={heart} alt="Contact Hero" className="h-20 rounded-full 2xl object-cover" />
                  <img src={naturalPathy} alt="Contact Hero" className="h-20 rounded-full 2xl object-cover" />
                </div>
                
             </div>
        
          </div> 
    
        </div>
    )
    
}
export default Hero;    
