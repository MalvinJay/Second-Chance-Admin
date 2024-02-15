import { CircularProgress } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "App";
import {
  AddShowAPIFn,
  AddShowEpisodeAPIFn,
  PatchLiveServiceAPIFn,
  PatchShowEpisodeAPIFn,
} from "api/shows";
import { AxiosError } from "axios";
import BannerUploader from "components/BannerUploader/BannerUploader";
import { Button } from "components/Button";
import { Img } from "components/Img";
import { Input } from "components/Input";
import { Text } from "components/Text";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TAlertMsgProp } from "types/shared.type";
import closeImg from "/images/img_close_blue_gray_900.svg";
import bannerIconImg from "/images/img_television.svg";

interface IAddEditShowEpisodeProps {
  editMode: boolean;
  handleClose: () => void;
  title?: string;
  showExtras?: boolean;
  setShowAlert?: (e: boolean) => void;
  setAlertMsg?: (e: TAlertMsgProp) => void;
  initialValues?: any;
}

const AddEditShowEpisode = (props: IAddEditShowEpisodeProps) => {
  const {
    editMode,
    title,
    handleClose,
    setAlertMsg,
    setShowAlert,
    initialValues,
  } = props;
  const {
    register,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: initialValues?.title,
      video_url: initialValues?.video_url,
      banner: initialValues?.banner,
    },
  });
  const [formValues, setFormValues] = useState({});

  const { mutateAsync: isAddingShowEpisodeMutate, isLoading } = useMutation({
    mutationFn: AddShowEpisodeAPIFn,
    onError: (error: AxiosError) => error?.response?.data,
  });

  const { mutateAsync: patchShowEpisodeMutate, isLoading: isPatchingVOG } =
    useMutation({
      mutationFn: PatchShowEpisodeAPIFn,
      onError: (error: AxiosError) => error?.response?.data,
    });

  const handleUpload = (val: any, type: string) => {
    setFormValues({
      ...val,
      img_desc: type,
    });
  };

  const onSubmit = (values: any) => {
    console.log("initialValues:", initialValues);
    if (!initialValues?.id) return;

    const payload = {
      ...values,
      show_id: Number(initialValues?.id),
      banner: formValues,
    };

    console.log("Final Payload:", payload);

    editMode
      ? patchShowEpisodeMutate({
          id: initialValues.id || payload.id,
          data: payload,
        })
          .then(
            (res) => {
              if (res) {
                handleClose();
                setAlertMsg({
                  status: "success",
                  msg: "Updated show episode successfully",
                });
                setShowAlert(true);

                queryClient.invalidateQueries([
                  "tvShowEpisodes",
                  initialValues?.slug,
                ]);
              } else {
                setAlertMsg({
                  status: "error",
                  msg: "Error updating show episode",
                });
                setShowAlert(true);
              }
            },
            (err) => {
              console.error("Error adding show episode:", err);
            }
          )
          .catch((error) => {
            console.error("Error adding show:", error);
            setAlertMsg({
              status: "error",
              msg: "Error adding show",
            });
            setShowAlert(true);
          })
      : isAddingShowEpisodeMutate(payload)
          .then(
            (res) => {
              if (res) {
                handleClose();
                setAlertMsg({
                  status: "success",
                  msg: "Added show episode successfully",
                });

                setShowAlert(true);
                queryClient.invalidateQueries([
                  "tvShowEpisodes",
                  initialValues?.slug,
                ]);
              } else {
                setAlertMsg({
                  status: "error",
                  msg: "Error adding show episode",
                });
                setShowAlert(true);
              }
            },
            (err) => {
              console.error("Error adding show episode:", err);
            }
          )
          .catch((error) => {
            console.error("Error adding show episode:", error);
            setAlertMsg({
              status: "error",
              msg: "Error adding show episode",
            });
            setShowAlert(true);
          });
  };

  return (
    <div className="flex flex-col font-plusjakartasans items-center justify-end mx-auto w-full">
      <div className="bg-white-A700 flex flex-col items-center justify-end p-6 md:px-5 rounded-[10px] shadow-bs w-full">
        <form
          className="grid grid-cols-1 gap-8 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
            <Text
              className="mb-1 mt-3 text-2xl md:text-[22px] text-gray-900 sm:text-xl"
              size="txtPlusJakartaSansRomanBold24"
            >
              {title}
            </Text>
            <Button
              className="border border-gray-900_19 border-solid flex h-12 items-center justify-center w-12"
              shape="circle"
              color="gray_50_01"
              size="xs"
              onClick={handleClose}
            >
              <Img className="h-3" src={closeImg} alt="close" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6 w-full">
            <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-full">
              <Text
                className="text-blue_gray-900 text-xl w-auto"
                size="txtPlusJakartaSansRomanSemiBold20"
              >
                Title
              </Text>
              <div className="w-full">
                <Input
                  name="name"
                  placeholder="Enter show name here"
                  className="p-0 placeholder:text-blue_gray-900_99 text-left text-sm w-full"
                  wrapClassName="border border-gray-900_26 border-solid w-full"
                  type="text"
                  {...register("title", { required: true })}
                  onChange={() => clearErrors("title")}
                />
                {errors?.title && (
                  <p className="text-sm text-red-600 font-black">
                    Provide episode title
                  </p>
                )}
              </div>
            </div>
            <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-full">
              <Text
                className="text-blue_gray-900 text-xl w-auto"
                size="txtPlusJakartaSansRomanSemiBold20"
              >
                Video Url
              </Text>
              <div className="w-full">
                <Input
                  name="video_url"
                  placeholder="Enter video url here..."
                  className="p-0 placeholder:text-blue_gray-900_99 text-left text-sm w-full"
                  wrapClassName="border border-gray-900_26 border-solid w-full"
                  type="text"
                  {...register("video_url", { required: true })}
                  onChange={() => clearErrors("video_url")}
                />
                {errors?.video_url && (
                  <p className="text-sm text-red-600 font-black">
                    Provide video url
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 items-start justify-start w-full">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtPlusJakartaSansRomanSemiBold20"
            >
              Banner Image
            </Text>

            <BannerUploader
              name="banner"
              icon={bannerIconImg}
              title="Upload Images"
              uploadText="Drag and drop or click here to browse files"
              ctaTypes=".jpeg, .png, .jpg"
              handleUpload={(e) => {
                handleUpload(e, "tv-shows");
              }}
              uploadType="tv-shows"
              // defaultValue={initialValues?.banner.img_url}
              key="banner"
            />
            {errors?.banner && (
              <p className="text-sm text-red-600 font-black">
                Provide show thumbnail image
              </p>
            )}
          </div>

          <div className="flex gap-4 items-start justify-end w-full">
            <Button
              className="h-14 min-w-[12rem] border border-gray-900_26"
              variant="gradient"
              color="white"
              onClick={handleClose}
            >
              <Text
                className="text-blue_gray-900 text-sm"
                size="txtPlusJakartaSansRomanRegular14Bluegray900"
              ></Text>
              Cancel
            </Button>

            <Button
              className="flex justify-center items-center gap-1 font-semibold h-14 min-w-[12rem]"
              size="xl"
              variant="gradient"
              color="purple_A200_purple_500"
              type="submit"
              disabled={isLoading || isPatchingVOG}
            >
              {(isLoading || isPatchingVOG) && (
                <CircularProgress color="inherit" size={24} />
              )}
              <Text
                className="text-sm text-center text-white-A700"
                size="txtPlusJakartaSansRomanSemiBold14"
              >
                {editMode ? "Update" : "Add"} Episode
              </Text>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditShowEpisode;
