import { LucideLeaf } from "lucide-react";
import heart from "../../assets/contact page/heart.jpg"
import { LuArrowRight } from "react-icons/lu";
import { FaLeaf } from "react-icons/fa";
import { GiLeafSkeleton } from "react-icons/gi";
import { IoLeafOutline } from "react-icons/io5";

const Story = ()=>{
      return(
        <div className="w-[92%] lg:w-[85%] m-auto  grid md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10  my-10">
            <div className="space-y-4">
                <small className="text-blue-600 uppercase font-semibold">Our Story</small>
                <h1 className="text-3xl font-serif">
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
            </div>
            <div className="relative w-full h-full border rounded-2xl lg:col-span-2 ">
                 <img src='https://i.pinimg.com/1200x/c2/7f/3b/c27f3bd8346a588a9295d9f317efb506.jpg' 
                      alt="naturalpathy treatment" 
                      className="max-h-[500px] w-full rounded-2xl" />

                 <div className="z-100 absolute -right-5 -bottom-5 w-[250px] bg-white p-4 shadow rounded-2xl space-y-4">
                     <div className="w-fit p-2 rounded-full border">
                        <IoLeafOutline className="size-8 text-green-900 rotate-45"/>
                     </div>
                    <h2 className="text-xl font-semibold">Healing naturaly</h2>
                    <p className="text-sm tracking-wide">
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