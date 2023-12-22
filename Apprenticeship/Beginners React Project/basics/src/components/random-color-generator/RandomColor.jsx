import { useEffect, useState } from "react";

const RandomColor = () => {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#4d4d4d");

  useEffect(() => {
    colorType === "hex" ? generateHex() : generateRgb();
  }, [colorType]);

  function generateHex() {
    const hexValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hexValues[Math.floor(Math.random() * hexValues.length)];
    }
    setColor(hexColor);
  }

  const generateRgb = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    setColor(`rgb (${r},${g},${b})`);
  };

  return (
    <div
      className="color-generator-wrapper"
      style={{ background: color, height: "100vh" }}
    >
      <button onClick={() => setColorType("hex")}>Hex Color</button>
      <button onClick={() => setColorType("rgb")}>RGB Color</button>
      <button onClick={colorType === "hex" ? generateHex : generateRgb}>
        Generate Color
      </button>
      <div
        className="colorCode"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10rem",
          color: "#fff",
        }}
      >
        <h2>{colorType === "hex" ? "HEX color" : "RGB color"} </h2>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
