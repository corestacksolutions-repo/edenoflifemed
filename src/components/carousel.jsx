import React, { useState, useRef, useEffect, useLayoutEffect} from "react";
import { useItemsPerView } from "../hooks/ItemsPerView";
import TestimonialCard from "./Home/testimonialCard";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";


export default function Carousel({slides, intervalMs = 10000 }) {
    
    const itemsPerView = useItemsPerView();
    const [itemIndex, setItemIndex] = useState(0);
   // const pageCount = Math.ceil(slides.length / itemsPerView);
    
    const [transitionEnabled, setTransitionEnabled] = useState(true);
    const trackRef = useRef(null);

    const clonedPage = slides.slice(0, itemsPerView);
    const renderSlides = [...slides, ...clonedPage];
     
    const handlePrev = () => {
          setItemIndex((prev) => Math.max(prev - itemsPerView, 0));
    };
    const handleNext = () =>{
          setItemIndex((prev) => Math.min(prev + itemsPerView, slides.length));
    }
    const handleTransitionEnd = () => {
      if (itemIndex === slides.length) {
         setTransitionEnabled(false);
         setItemIndex(0);
      }
    };

    useLayoutEffect(() => {
        if (!transitionEnabled && trackRef.current) {
            // reading offsetWidth forces the browser to apply "no transition"
            // right now, before we schedule turning it back on
            void trackRef.current.offsetWidth;
            requestAnimationFrame(() => setTransitionEnabled(true));
        }
    }, [transitionEnabled]);

    const itemWidthPercent = 100 / itemsPerView;
    const offsetPercent = itemIndex * itemWidthPercent;

     // auto-slide on timer
    useEffect(() => {
        const id = setInterval(handleNext, intervalMs);
        return () => clearInterval(id);
    }, [itemsPerView, slides.length, intervalMs]);

    return (
    <div>
      <div className="relative overflow-hidden rounded-xl border ">
        <div
          ref={trackRef}
          className={`flex gap-4 p-4 ${transitionEnabled ? "transition-transform duration-1000 ease-out" : ""}`}
          style={{ transform: `translateX(-${offsetPercent}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {renderSlides.map((slide, i) => (
            <div
              key={i}
              className="shrink-0 box-border"
              style={{ width: `${itemWidthPercent}%` }}
            >
              <TestimonialCard testimonial={slide} />
            </div>
          ))}
        </div>
      </div>
       
       {/*controllers */}
      <footer className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between mb-20">
        <button onClick={handlePrev} className="mt-3 p-1 border rounded bg-red-700/20 hover:bg-red-700/30 transition-colors">
          <MdNavigateBefore className="size-5" />
        </button>
        <button onClick={handleNext} className="mt-3  p-1 border rounded bg-red-700/20 hover:bg-red-700/30 transition-colors">
          <MdNavigateNext className="size-5" />
        </button>
      </footer>
      
    </div>
  );
}