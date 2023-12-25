import { CircularProgress } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { imageVideoUploadAPIFn } from "api/imageUploads";
import { AxiosError } from "axios";
import { Img } from "components/Img";
import { Text } from "components/Text";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IImageUploadPayload } from "types/shared.type";

interface IBannerProps {
  title: string;
  uploadType: string;
  handleUpload: (e: any) => void;
  name: string;
  icon?: string;
  uploadText?: string;
  ctaTypes?: string;
}

const BannerUploader = (props: IBannerProps) => {
  const {
    register,
    clearErrors,
    formState: { errors },
  } = useForm();
  const { icon, title, uploadText, name, uploadType, ctaTypes, handleUpload } =
    props;

  const {
    mutateAsync: isUploadingMutate,
    isLoading,
    isSuccess: isUploadingSuccess,
    // error: isUploadingError,
  } = useMutation({
    mutationFn: imageVideoUploadAPIFn,
    onError: (error: AxiosError) => error?.response?.data,
  });

  const handleItemUpload = (imgFile: File | undefined) => {
    clearErrors(name);
    // const formData = new FormData();
    // formData.append("image", imgFile);
    // formData.append("folder", uploadType);

    const payload = {
      image: imgFile,
      folder: uploadType,
    };

    isUploadingMutate(payload as unknown as IImageUploadPayload)
      .then(
        (res) => {
          console.log("IsUploading response:", res);
          // handleUpload();
        },
        (err) => {
          console.error("Error uploading:", err);
        }
      )
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="relative bg-gray-900_20 border border-gray-900_26 rounded-[10px] flex flex-col h-[132px] items-center justify-start p-6 sm:px-5 w-full">
      {isLoading && (
        <CircularProgress
          className="absolute top-4 left-2"
          color="inherit"
          size={24}
          sx={{ ml: 1 }}
        />
      )}
      <div
        className="cursor-pointer flex flex-col gap-2.5 items-center justify-start w-full"
        onClick={() => {
          document.getElementById("upload-item").click();
        }}
      >
        <input
          name={name}
          style={{ display: "none" }}
          id="upload-item"
          type="file"
          accept={ctaTypes}
          {...register(name, { required: true })}
          onChange={(e) => handleItemUpload(e.target?.files?.[0])}
        />
        <Img className="h-6 w-6" src={icon} alt="television" />
        <div className="flex flex-col gap-2 items-center justify-start w-full">
          <Text
            className="text-base text-blue_gray-900 w-auto"
            size="txtPlusJakartaSansRomanBold16"
          >
            {title}
          </Text>
          <Text
            className="text-blue_gray-900_87 text-center text-xs w-auto"
            size="txtPlusJakartaSansRomanRegular12"
          >
            {uploadText}
            (File format: {ctaTypes})
          </Text>
        </div>
      </div>
    </div>
  );
};

export default BannerUploader;
