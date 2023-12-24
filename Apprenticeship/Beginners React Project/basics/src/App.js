import "./App.css";
import MenuData from "./components/tree-menu/MenuData";
// import Accordian from "./components/accordian/Accordian";
// import RandomColor from "./components/random-color-generator/RandomColor";
// import StarRating from "./components/star-rating/StarRating";
// import ImageSlider from "./components/image-slider/ImageSlider";
// import LoadMore from "./components/load-more/LoadMore";
import TreeMenu from "./components/tree-menu/TreeMenu";

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      {/* <LoadMore /> */}
      <TreeMenu menu={MenuData} />
    </div>
  );
}

export default App;
