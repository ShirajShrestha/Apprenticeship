import Tabs from "./Tabs";
import "./customTabs.css";

const RandomComponent = () => {
  return <div>That time I got reincarnated as a slime</div>;
};

const CustomTabs = () => {
  const arr = [
    {
      label: "Tab 1",
      content: <div>Naruto</div>,
    },
    {
      label: "Tab 2",
      content: <div>Eminence in Shadow</div>,
    },
    {
      label: "Tab 3",
      content: <div>Demon Slayer</div>,
    },
    {
      label: "Tab 4",
      content: <RandomComponent />,
    },
  ];

  const handleChange = (tabIndex) => {
    //Later see why is it not working
    console.log(tabIndex);
  };

  return (
    <div>
      <h1>Custom Tabs</h1>
      <Tabs tabContent={arr} onChange={() => handleChange()} />
    </div>
  );
};

export default CustomTabs;
