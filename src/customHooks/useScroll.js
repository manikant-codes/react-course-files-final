import { useEffect, useState } from "react";

function useScroll() {
  const [scroll, setScroll] = useState(window.scrollY);

  function scrollToTop() {
    window.scroll(0, 0);
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  return { scroll, scrollToTop };
}

export default useScroll;
