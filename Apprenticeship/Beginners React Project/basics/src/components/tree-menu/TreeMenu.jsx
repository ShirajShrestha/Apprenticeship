import MenuList from "./MenuList";
import "./treeMenu.css";

const TreeMenu = ({ menu = [] }) => {
  return (
    <div className="tree-menu-wrapper">
      <MenuList list={menu} />
    </div>
  );
};

export default TreeMenu;
