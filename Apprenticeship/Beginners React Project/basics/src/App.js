import "./App.css";
// import Accordian from "./components/accordian/Accordian";
// import RandomColor from "./components/random-color-generator/RandomColor";
// import StarRating from "./components/star-rating/StarRating";
// import ImageSlider from "./components/image-slider/ImageSlider";
// import LoadMore from "./components/load-more/LoadMore";
// import TreeMenu from "./components/tree-menu/TreeMenu";
// import MenuData from "./components/tree-menu/MenuData";
import QR from "./components/qr-code-generator/QR";

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
      {/* <TreeMenu menu={MenuData} /> */}
      <QR />
    </div>
  );
}

export default App;
