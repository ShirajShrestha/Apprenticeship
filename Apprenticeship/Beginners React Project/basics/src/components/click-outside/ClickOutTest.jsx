import { useRef, useState } from "react";
import useClickOutside from "./useClickOutside";

const ClickOutTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useClickOutside(ref, () => setShowContent(false));
  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h3>Click anywhere outside to close this</h3>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default ClickOutTest;
