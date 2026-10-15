

export default function Hero({treatment}){
     
     console.log(treatment.hero)
    
    return(
        <section  className="relative w-[100%] h-[50vh] lg:h-[70vh] py-8 pt-[100px]  text-white text-center flex bg-blue-950 overflow-hidden">  
          <img src={treatment.image} alt="" className="hidden absolute w-full h-full inset-0 object-cover mix-blend-overlay" />
          {/*overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/70 via-black/50 to-transparent"/>
          {/*hero content*/} 
          <div className="relative w-[98%] md:w-[85%] mx-auto text-center text-white/60 px-4">
                <h1 className="text-[1.2rem] text-blue-800">
                    Treatments / {treatment.title}
                </h1>
                <h2 className="heading font-bold text-[2.5rem] lg:text-[4rem] leading-[40px] lg:leading-[60px] my-4 ">
                  Rooted in nature <br/> committed to you.
                </h2>
                <p className="p max-w-2xl mx-auto text-center rounded-2xl my-6">
                    {treatment.hero.tagline}
                </p>        
          </div> 
    </section>
     )
}