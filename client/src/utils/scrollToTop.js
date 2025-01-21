import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Forces page to scroll to the top when a new page is loaded
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
