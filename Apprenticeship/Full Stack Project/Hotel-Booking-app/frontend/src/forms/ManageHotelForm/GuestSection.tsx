import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";
import "../../styles/guestSection.css";

const GuestSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  return (
    <div>
      <h2 className="guests-header">Guests</h2>
      <div className="guests-wrapper">
        <label className="user-input ">
          Adults
          <input
            type="number"
            min={1}
            className="name-input "
            {...register("adultCount", { required: "This field is required" })}
          />
          {errors.adultCount && (
            <span className="text-red-500 text-sm font-bold">
              {errors.adultCount.message}
            </span>
          )}
        </label>
        <label className="user-input ">
          Children
          <input
            type="number"
            min={0}
            className="name-input "
            {...register("childCount", { required: "This field is required" })}
          />
          {errors.childCount && (
            <span className="text-red-500 text-sm font-bold">
              {errors.childCount.message}
            </span>
          )}
        </label>
      </div>
    </div>
  );
};

export default GuestSection;
