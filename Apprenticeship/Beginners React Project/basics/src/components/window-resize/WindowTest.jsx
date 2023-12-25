import useWindowResize from "./useWindowResize";

const WindowTest = () => {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;
  return (
    <div>
      <h1>Window Resize Hook</h1>
      <p>Width is {width} </p>
      <p>Height is {height} </p>
    </div>
  );
};

export default WindowTest;
