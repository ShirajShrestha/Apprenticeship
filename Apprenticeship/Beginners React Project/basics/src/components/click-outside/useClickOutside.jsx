import { useEffect } from "react";

const useClickOutside = (ref, handler) => {
  useEffect(() => {
    function listner(e) {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler(e);
    }
    document.addEventListener("mousedown", listner);
    document.addEventListener("touchstart", listner);
    return () => {
      document.removeEventListener("mousedown", listner);
      document.removeEventListener("touchstart", listner);
    };
  }, [handler, ref]);
  return <div></div>;
};

export default useClickOutside;
