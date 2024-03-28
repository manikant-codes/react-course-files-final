import { useEffect, useState } from "react";

function useScroll() {
  const [scroll, setScroll] = useState(window.scrollY);

  function scrollToTop() {
    window.scroll(0, 0);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return { scroll, scrollToTop };
}

export default useScroll;
