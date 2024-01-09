import { useFormContext } from "react-hook-form";
import { hotelTypes } from "../../config/hotel-options-config";
import "../../styles/typeSection.css";
import { HotelFormData } from "./ManageHotelForm";

const TypeSection = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  const typeWatch = watch("type");
  return (
    <div>
      <h2 className="type-heading">Type</h2>
      <div className="type-grid">
        {hotelTypes.map((type) => (
          <label
            className={
              typeWatch === type
                ? "custom-option selected-option"
                : "custom-option unselected-option"
            }
          >
            <input
              type="radio"
              value={type}
              {...register("type", { required: "This field is required" })}
              className="remove-circle"
            />
            <span>{type} </span>
          </label>
        ))}
      </div>
      {errors.type && (
        <span className="text-red-500 text-sm font-bold">
          {errors.type.message}
        </span>
      )}
    </div>
  );
};

export default TypeSection;
