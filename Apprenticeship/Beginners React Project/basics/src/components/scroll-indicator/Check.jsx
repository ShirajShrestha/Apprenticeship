// This is just a random component I created to check. It is not related to any of these component.
import React, { useEffect, useState } from "react";

const Check = () => {
  const [randValue, setRandValue] = useState("");

  useEffect(() => {
    console.log("hello", randValue);
  }, [randValue]);

  const handleClick = () => {
    setRandValue(Number(randValue + 1));
  };

  return (
    <div>
      <button onClick={() => handleClick()}>Click Here</button>
    </div>
  );
};

export default Check;
