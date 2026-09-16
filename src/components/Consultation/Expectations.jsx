import { IoCheckmarkOutline } from "react-icons/io5";
import { bookingSteps } from "../../data/consultationBookingGuide";


const Expectations = () => {
  return (
    <div className='basis-[30%] shadow bg-gradient-to-tr from-blue-200 via-blue-100/80 to-blue-200  space-y-4 p-8 rounded-xl min-h-[200px] flex flex-col gap-4'>
      {
        bookingSteps.map(({id, title, description, icon: Icon}) => (
            <div key={id} className="flex gap-2 items-center justify-between">
                {/* Icon */}
                <div className="flex items-center justify-center text-white bg-black h-[32px] w-[32px] shrink-0 rounded-full">
                    <Icon size={20} />
                </div>

                {/* Text Elements */}
                <div className="flex flex-col leading-none">
                    <h4 className="font-semibold mb-1">
                        {title}
                    </h4>

                    <p className="tracking-wide font-light text-[14px]">
                        {description}
                    </p>
                </div>
            </div>
        ))
      }      
    </div>
  )
}

export default Expectations
