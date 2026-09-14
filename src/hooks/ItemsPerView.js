import { useState, useEffect } from "react";
export function useItemsPerView() {
  const [itemsPerView, setItemsPerView] = useState(() => calc());

  function calc() {
    const w = window.innerWidth;
    if (w >= 1024) return 3;  // matches Tailwind's lg: breakpoint
    if (w >= 640) return 2;   // matches Tailwind's sm: breakpoint
    return 1;                 // mobile
  }

  useEffect(() => {
    const onResize = () => setItemsPerView(calc());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return itemsPerView;
}