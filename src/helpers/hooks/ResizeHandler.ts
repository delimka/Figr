import {  useEffect } from "react";

interface ResizeHandlerProps {
  setWindowWidth: React.Dispatch<React.SetStateAction<number>>;
}

function ResizeHandler({ setWindowWidth }: ResizeHandlerProps) {
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWindowWidth]);

  return null;
}

export default ResizeHandler;
