import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";
import "../../styles/signIn.css";
import "../../styles/detailSection.css";

const DetailsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  return (
    <div className="detail-container">
      <h1 className="detail-header">Add Hotel</h1>
      <label className="user-input email">
        Name
        <input
          type="text"
          className="name-input "
          {...register("name", { required: "This field is required" })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm font-bold">{errors.name.message} </span>
        )}
      </label>
      <div className="show-flex-lg-screen">
        <label className="user-input city">
          City
          <input
            type="text"
            className="name-input "
            {...register("city", { required: "This field is required" })}
          />
          {errors.city && (
            <span className="text-red-500 text-sm font-bold">{errors.city.message} </span>
          )}
        </label>
        <label className="user-input country">
          Country
          <input
            type="text"
            className="name-input "
            {...register("country", { required: "This field is required" })}
          />
          {errors.country && (
            <span className="text-red-500 text-sm font-bold">{errors.country.message} </span>
          )}
        </label>
      </div>
      <label className="user-input description">
        Description
        <textarea
          rows={8}
          className="name-input "
          {...register("description", { required: "This field is required" })}
        />
        {errors.description && (
          <span className="text-red-500 text-sm font-bold">{errors.description.message} </span>
        )}
      </label>
      <label className="user-input half-width">
        Price Per Night
        <input
          type="number"
          min={1}
          className="name-input "
          {...register("pricePerNight", { required: "This field is required" })}
        />
        {errors.pricePerNight && (
          <span className="text-red-500 text-sm font-bold">{errors.pricePerNight.message} </span>
        )}
      </label>
      <label className="user-input half-width">
        Star Rating
        <select
          {...register("starRating", {
            required: "This field is required",
          })}
          className="star-rating"
        >
          <option value="" className="select-options">
            Select a Rating
          </option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option value={num}>{num}</option>
          ))}
        </select>
        {errors.starRating && (
          <span className="text-red-500 text-sm font-bold">{errors.starRating.message} </span>
        )}
      </label>
    </div>
  );
};

export default DetailsSection;
