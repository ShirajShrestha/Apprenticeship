import QRCode from "react-qr-code";
import "./qr.css";
import { useState } from "react";

const QR = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerate = () => {
    setQrCode(input);
    setInput("");
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div className="qr-code-wrapper">
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text or link"
          value={input}
          className="qr-code"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={() => handleGenerate()}
        >
          Generate
        </button>
      </div>
      <div className="qr-image">
        <QRCode id="qr-code-value" value={qrCode} />
      </div>
    </div>
  );
};

export default QR;
