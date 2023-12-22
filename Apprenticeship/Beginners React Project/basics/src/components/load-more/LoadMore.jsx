import { useEffect, useState } from "react";
import "./loadMore.css";

const LoadMore = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);
  useEffect(() => {
    fetchProducts();
  }, [count]);
  useEffect(() => {
    if (products && products.length === 100) {
      setDisableBtn(true);
    }
  }, [products]);
  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        // setProducts((prevData) => [...prevData, ...result.products]);
        setProducts((prevData) => {
          const uniqueProducts = new Set([...prevData, ...result.products]);
          return [...uniqueProducts];
        });
        setLoading(false);
      }
      console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
  if (loading) {
    return <div>Loading.....</div>;
  }
  return (
    <div className="load-more-wrapper">
      <div className="product-wrapper">
        {products && products.length
          ? products.map((item, index) => (
              //   <div className="product" key={item.id}>
              <div className="product" key={`${item.id}-${index}`}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title} </p>
              </div>
            ))
          : null}
      </div>
      <div className="load-btn">
        <button disabled={disableBtn} onClick={() => setCount(count + 1)}>
          Load More
        </button>
        {disableBtn ? <p>You have reached the end</p> : null}
      </div>
    </div>
  );
};

export default LoadMore;
