import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";
import "../../styles/imagesSection.css";

const ImagesSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  return (
    <div>
      <h2 className="images-heading">Images</h2>
      <div className="images-wrapper">
        <input
          type="file"
          multiple
          accept="image/*"
          className="image-style"
          {...register("imageFiles", {
            validate: (imageFiles) => {
              const totalLength = imageFiles.length;
              if (totalLength === 0) {
                return "At least one image should be added";
              }
              if (totalLength > 6) {
                return "Total number of images cannot be more than 6";
              }
            },
          })}
        />
      </div>
      {errors.imageFiles && (
        <span className="text-red-500 text-sm font-bold">
          {errors.imageFiles.message}{" "}
        </span>
      )}
    </div>
  );
};

export default ImagesSection;
