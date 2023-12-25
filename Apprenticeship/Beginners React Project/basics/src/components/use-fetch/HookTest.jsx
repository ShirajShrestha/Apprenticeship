import useFetch from "./useFetch";

const HookTest = () => {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products",
    {}
  );
  console.log(data, error, loading);
  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {loading ? <h2>Loading...</h2> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((productItem) => (
            <p key={productItem.key}>{productItem.title}</p>
          ))
        : null}
    </div>
  );
};

export default HookTest;
