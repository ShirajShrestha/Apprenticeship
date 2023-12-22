import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./imageSlider.css";

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [image, setImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? image.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(
      currentSlide === image.length ? image.length - 1 : currentSlide + 1
    );
  };

  async function fetchImages(url) {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImage(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);
  console.log(image);

  if (loading) {
    return <div>Loading.....</div>;
  }

  if (errorMsg !== null) {
    console.log(errorMsg);
    // return <div>Error. {errorMsg}</div>;
  }

  return (
    <div className="image-slider-wrapper">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={() => handlePrevious()}
      />
      {image && image.length
        ? image.map((item, index) => (
            <img
              key={item.id}
              src={item.download_url}
              alt={item.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={() => handleNext()}
      />
      <span className="circle-indicator">
        {image && image.length
          ? image.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
