import ListItems from "./ListItems";
import "./treeMenu.css";

const MenuList = ({ list = [] }) => {
  return (
    <ul className="menu-list-wrapper">
      {list && list.length
        ? list.map((listItem) => <ListItems item={listItem} />)
        : null}
    </ul>
  );
};

export default MenuList;
