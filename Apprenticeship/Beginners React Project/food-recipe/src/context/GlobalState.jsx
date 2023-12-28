import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalCoxtext = createContext(null);

const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeData, setRecipeData] = useState(null);
  const [favouritesList, setFavouritesList] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam} `
      );
      const responseData = await response.json();
      if (responseData.data.recipes) {
        setRecipeList(responseData.data.recipes);
      }
      setLoading(false);
      setSearchParam("");
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearchParam("");
      navigate("/");
    }
  };

  function handleAddToFavourite(getCurrentItem) {
    console.log(getCurrentItem);
    let cpyFavouritesList = [...favouritesList];
    const index = cpyFavouritesList.findIndex(
      (item) => item.id === getCurrentItem.id
    );

    if (index === -1) {
      cpyFavouritesList.push(getCurrentItem);
    } else {
      cpyFavouritesList.splice(index);
    }

    setFavouritesList(cpyFavouritesList);
  }
  //   console.log(recipeList);

  return (
    <GlobalCoxtext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipeList,
        recipeData,
        setRecipeData,
        favouritesList,
        handleAddToFavourite,
      }}
    >
      {children}
    </GlobalCoxtext.Provider>
  );
};

export default GlobalState;
