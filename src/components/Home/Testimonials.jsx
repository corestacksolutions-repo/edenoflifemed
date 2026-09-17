
import testimonials from "../../data/testimonials"
import Carousel from "../carousel"



export default function Testmonials(){
    return(
        <section className="relative w-full bg-white  w-full py-20 space-y-10 relative overflow-hidden">
            <header className="w-[92%] md:w-[50%] mx-auto text-center space-y-6">
                <h2 className="heading-one">From our clients</h2>
                <p className="p">
                    The experience of care can be just as important as the care itself. 
                    Here's what some of our clients have to say about their experience 
                    at Eden of Life.
                </p>
            </header>

            {/*carousel */}
            <div className="w-[92%] lg:w-[85%] mx-auto relative">
               <Carousel slides={testimonials} />
            </div>

        </section>
    )
}