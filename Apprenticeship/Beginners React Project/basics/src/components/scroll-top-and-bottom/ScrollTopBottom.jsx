import { useRef } from "react";
import useFetch from "../use-fetch/useFetch";

const ScrollTopBottom = () => {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const bottomRef = useRef(null);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleScrollBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  if (error) {
    return <h2>Error occured. </h2>;
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Scroll Top and Bottom</h1>
      <h3>Top Section</h3>
      <button onClick={() => handleScrollBottom()}>Scroll to Bottom</button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li key={item.key}>{item.title}</li>)
          : null}
      </ul>
      <button onClick={() => handleScrollTop()}>Scroll to Top</button>
      <div ref={bottomRef}></div>
      <h3>Bottom Section</h3>
    </div>
  );
};

export default ScrollTopBottom;
