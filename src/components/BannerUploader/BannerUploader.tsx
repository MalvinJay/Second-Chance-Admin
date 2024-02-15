import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { imageVideoUploadAPIFn } from "api/imageUploads";
import { AxiosError } from "axios";
import { Img } from "components/Img";
import { Text } from "components/Text";
import { useForm } from "react-hook-form";
import placeholder from "/images/img_img60591.png";

interface IBannerProps {
  title: string;
  uploadType: string;
  handleUpload: (e: any) => void;
  name: string;
  defaultValue?: string;
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
  const {
    icon,
    title,
    uploadText,
    name,
    uploadType,
    ctaTypes,
    handleUpload,
    defaultValue,
  } = props;

  const [preview, setPreview] = useState<string>("");

  const { mutateAsync: isUploadingMutate, isLoading } = useMutation({
    mutationFn: imageVideoUploadAPIFn,
    onError: (error: AxiosError) => {
      error?.response?.data;
    },
  });

  const handleItemUpload = async (imgFile: File | undefined) => {
    clearErrors(name);

    const payload = {
      image: imgFile,
      folder: uploadType,
    };

    const {
      data: { data },
    } = await isUploadingMutate(payload as any);

    setPreview(data.previewImage);

    const newData = { ...data };
    if (newData.previewImage) delete newData.previewImage;

    handleUpload(newData);
  };

  useEffect(() => {
    if (defaultValue) setPreview(defaultValue);
  }, [defaultValue]);

  return (
    <div className="relative bg-gray-900_20 border border-gray-900_26 rounded-[10px] flex flex-col min-h-[132px] items-center justify-start p-6 sm:px-5 w-full">
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
          document.getElementById(`upload-item-${uploadType}`).click();
        }}
      >
        <input
          name={name}
          style={{ display: "none" }}
          id={`upload-item-${uploadType}`}
          type="file"
          accept={ctaTypes}
          {...register(name, { required: true })}
          onChange={(e) => handleItemUpload(e.target?.files?.[0])}
        />
        {preview ? (
          <Img
            className="min-w-64 min-h-64 object-cover"
            src={preview}
            alt="uploads"
            placeholder={placeholder}
          />
        ) : (
          <>
            <Img className="h-6 w-6" src={icon} alt="television" />
          </>
        )}

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
