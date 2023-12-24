import { useState } from "react";
import MenuList from "./MenuList";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./treeMenu.css";

const ListItems = ({ item }) => {
  const [showChildren, setShowChildren] = useState({});

  const handleChildren = (label) => {
    setShowChildren({ ...showChildren, [label]: !showChildren[label] });
  };
  console.log(showChildren);

  return (
    <li className="list-items">
      <div className="each-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handleChildren(item.label)}>
            {showChildren[item.label] ? <FaMinus /> : <FaPlus />}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      showChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default ListItems;
