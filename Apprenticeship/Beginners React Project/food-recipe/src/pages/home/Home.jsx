import { useContext } from "react";
import { GlobalCoxtext } from "../../context/GlobalState";
import RecipeItem from "../../components/recipe-item/RecipeItem";

const Home = () => {
  const { recipeList, loading } = useContext(GlobalCoxtext);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} key={item.id} />)
      ) : (
        <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
          Nothing to show. Search something
        </p>
      )}
    </div>
  );
};

export default Home;
