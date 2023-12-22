import "./App.css";
// import Accordian from "./components/accordian/Accordian";
// import RandomColor from "./components/random-color-generator/RandomColor";
// import StarRating from "./components/star-rating/StarRating";
import ImageSlider from "./components/image-slider/ImageSlider";

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </div>
  );
}

export default App;
