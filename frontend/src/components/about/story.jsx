import { LucideLeaf } from "lucide-react";
import heart from "../../assets/contact page/heart.jpg"
import { LuArrowRight } from "react-icons/lu";
import { FaLeaf } from "react-icons/fa";
import { GiLeafSkeleton } from "react-icons/gi";
import { IoLeafOutline } from "react-icons/io5";

const Story = ()=>{
      return(
        <div id="our-story" className="scroll-mt-40 w-[92%] lg:w-[85%] m-auto  grid md:grid-cols-2 gap-6 gap-y-10 my-10">
            <article className="sticky top-0 h-fit space-y-8 md:pt-40">
                <p className="p">
                    When someone puts their health in our hands, 
                    we treat that trust with patience, kindness 
                    and genuine care.
                </p>
                <p className="">
                Dr. Dominic James Dombola
                <br className="" />
                <small className="">Managing Director</small>
                </p>
            </article>

             {/*
          
            <small className="">Our Story</small>
                <h1 className="">
                    Our Journey to
                    <br/>
                    better <span className="text-blue-700"> wellness</span>
                </h1>
                <div className="bg-blue-600 h-px w-[35px]"/>
                <p className="">
                   Eden of Life was founded on a simple belief:
                   the body has an icredible ability to heal itself
                   when given th right support.
                </p>
                <p className="">
                  We continue the wisdom of nature evidence informed 
                  practices to address the root causes of health concerns.
                </p>
                <p className="">
                    Every treatment we give is guided by companssion, integrity
                    and deep respect for your wellness journey.
                </p>

                <button className="flex items-center gap-3 p-2 border border-blue-600/40 text-blue-600 font-semibold rounded-md mt-[40px]">
                    <LuArrowRight className='size-5'/>
                    Learn More About Our Approach
                </button>
          
          */}
            <div className="relative w-full  border rounded-2xl">
                 <img src='https://i.pinimg.com/1200x/63/61/a5/6361a5ededda4a9cad21c5b98c1ca12d.jpg' 
                      alt="naturalpathy treatment" 
                      className="w-full max-h-[600px] rounded-2xl" />

                 <div className="z-100 absolute right-3 bottom-3 w-[250px] bg-white p-4 shadow rounded-2xl space-y-4">
                    <h2 className="text-xl font-semibold">Healing naturaly</h2>
                    <p className="font-[Roboto] font-light text-sm tracking-wide">
                        We use natural therapies to 
                        support balance, restore vitality,
                        and promote long-term wellness.
                    </p>

                 </div>
            </div>
        
        </div>
      )
}
export default Story;