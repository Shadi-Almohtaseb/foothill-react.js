import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function useActiveLink() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const isLinkActive = (path) => path === activeLink;

  return { activeLink, isLinkActive };
}

export default useActiveLink;
