import { useState } from "react";
// import "./customTabs.css";

const Tabs = ({ tabContent, onChange }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleClick = (index) => {
    setTabIndex(index);
    console.log(tabIndex);
    onChange(index);
    console.log(tabIndex);
  };

  return (
    <div className="tab-wrapper">
      <div className="heading">
        {tabContent.map((item, index) => (
          <div
            className={`tabs ${tabIndex === index ? "active" : ""}`}
            key={item.label}
            onClick={() => handleClick(index)}
          >
            <span className="label">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabContent[tabIndex] && tabContent[tabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
