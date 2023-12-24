import { useEffect, useState } from "react";
import "./scrollIndicator.css";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [scrollPercent, setScrollPercent] = useState(0);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const responseData = await response.json();

      if (
        responseData &&
        responseData.products &&
        responseData.products.length > 0
      ) {
        setData(responseData.products);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  const handleScrollPercent = () => {
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercent((scrolled / height) * 100);
    console.log(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercent);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  return (
    <div>
      <div className="top-container">
        <h1>Scroll Indicator</h1>
        <div className="tracker-wrapper">
          <div
            className="progress-bar"
            style={{ width: `${scrollPercent}%` }}
          ></div>
        </div>
      </div>
      <div className="data-wrapper">
        {data && data.length > 0
          ? data.map((item) => <p key={item.id}>{item.title}</p>)
          : null}
      </div>
    </div>
  );
};

export default ScrollIndicator;
