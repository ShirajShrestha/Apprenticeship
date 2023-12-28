import { useContext } from "react";
import { GlobalCoxtext } from "../../context/GlobalState";
import RecipeItem from "../../components/recipe-item/RecipeItem";

const Favourites = () => {
  const { favouriteList } = useContext(GlobalCoxtext);
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favouriteList && favouriteList.length > 0 ? (
        favouriteList.map(() => <RecipeItem item={item} key={item.id} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is added in favourites.
          </p>
        </div>
      )}
    </div>
  );
};

export default Favourites;
