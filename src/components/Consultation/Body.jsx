import React from 'react'
import Expectations from './Expectations'
import Form from './Form'

const Body = () => {
  return (
    <section className='w-full mb-20 '>
        <div className="w-[92%] md:w-[85%] mx-auto  flex flex-col md:flex-row gap-8 md:gap-4 items-center justify-between">
            <Expectations />
            <Form />
        </div>      
    </section>
  )
}

export default Body
