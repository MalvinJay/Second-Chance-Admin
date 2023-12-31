import { CircularProgress } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "App";
import { AddShowAPIFn, PatchLiveServiceAPIFn } from "api/shows";
import { AxiosError } from "axios";
import BannerUploader from "components/BannerUploader/BannerUploader";
import { Button } from "components/Button";
import { Img } from "components/Img";
import { Input } from "components/Input";
import { Text } from "components/Text";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TAlertMsgProp } from "types/shared.type";

interface IAddEditShowProps {
  editMode: boolean;
  type?: string;
  handleClose: () => void;
  title?: string;
  showExtras?: boolean;
  setShowAlert?: (e: boolean) => void;
  setAlertMsg?: (e: TAlertMsgProp) => void;
  initialValues?: any;
}

const AddEditShow = (props: IAddEditShowProps) => {
  const {
    editMode,
    title,
    type = "show",
    showExtras = false,
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
      host: initialValues?.host,
      airing_date: initialValues?.airing_date,
      about_show: initialValues?.about_show,
      img_url: initialValues?.img_url,
      logo: initialValues?.img_url,
      video_url: initialValues?.video_url,
    },
  });
  const [formValues, setFormValues] = useState({
    logo: {},
    banner: {},
  });

  const {
    mutateAsync: isAddingShowMutate,
    isLoading,
    // isSuccess: isAddingShowSuccess,
    // error: isAddingShowError,
  } = useMutation({
    mutationFn: AddShowAPIFn,
    onError: (error: AxiosError) => error?.response?.data,
  });

  const { mutateAsync: patchVOGMutate, isLoading: isPatchingVOG } = useMutation(
    {
      mutationFn: PatchLiveServiceAPIFn,
      onError: (error: AxiosError) => error?.response?.data,
    }
  );

  const handleUpload = (val: any, type: string) => {
    console.log("Upload file:", val);
    setFormValues((prev: any) => {
      return {
        ...prev,
        [type]: {
          ...val,
          img_desc: type,
        },
      };
    });
  };

  const onSubmit = (values: any) => {
    let payload = {
      ...values,
    };

    console.log("formValues:", formValues);

    if (type === "vog") {
      if (editMode) {
        payload.thumbnail = initialValues.thumbnail;
      } else
        payload.thumbnail = {
          ...formValues.banner,
        };
    } else {
      payload = {
        ...payload,
        ...formValues,
      };
    }

    console.log("Final Payload:", payload);
    editMode
      ? patchVOGMutate({
          id: initialValues.id || payload.id,
          data: payload,
        })
          .then(
            (res) => {
              if (res) {
                handleClose();
                setAlertMsg({
                  status: "success",
                  msg: `${editMode ? "updated" : "added"} ${type} successfully`,
                });
                setShowAlert(true);

                queryClient.invalidateQueries(["vogLiveServices"]);
              } else {
                setAlertMsg({
                  status: "error",
                  msg: `Error ${editMode ? "updating" : "adding"} ${type}`,
                });
                setShowAlert(true);
              }
            },
            (err) => {
              console.error("Error adding show:", err);
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
      : isAddingShowMutate(payload)
          .then(
            (res) => {
              if (res) {
                handleClose();
                setAlertMsg({
                  status: "success",
                  msg: `${editMode ? "updated" : "added"} ${type} successfully`,
                });
                setShowAlert(true);

                queryClient.invalidateQueries(["vogLiveServices"]);
              } else {
                setAlertMsg({
                  status: "error",
                  msg: `Error ${editMode ? "updating" : "adding"} ${type}`,
                });
                setShowAlert(true);
              }
            },
            (err) => {
              console.error("Error adding show:", err);
            }
          )
          .catch((error) => {
            console.error("Error adding show:", error);
            setAlertMsg({
              status: "error",
              msg: "Error adding show",
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
              <Img
                className="h-3"
                src="images/img_close_blue_gray_900.svg"
                alt="close"
              />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6 w-full">
            <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-full">
              <Text
                className="text-blue_gray-900 text-xl w-auto"
                size="txtPlusJakartaSansRomanSemiBold20"
              >
                Shows Name
              </Text>
              <div className="w-full">
                <Input
                  name="title"
                  placeholder="Enter show name here"
                  className="p-0 placeholder:text-blue_gray-900_99 text-left text-sm w-full"
                  wrapClassName="border border-gray-900_26 border-solid w-full"
                  type="text"
                  {...register("title", { required: true })}
                  onChange={() => clearErrors("title")}
                />
                {errors?.title && (
                  <p className="text-sm text-red-600 font-black">
                    Provide show name
                  </p>
                )}
              </div>
            </div>
            <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-full">
              <Text
                className="text-blue_gray-900 text-xl w-auto"
                size="txtPlusJakartaSansRomanSemiBold20"
              >
                Host
              </Text>
              <Input
                name="host"
                placeholder="Enter host’s name here"
                className="p-0 placeholder:text-blue_gray-900_99 text-left text-sm w-full"
                wrapClassName="border border-gray-900_26 border-solid w-full"
                type="text"
                {...register("host", { required: false })}
                onChange={() => clearErrors("host")}
              />
            </div>
            <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-full">
              <Text
                className="text-blue_gray-900 text-xl w-auto"
                size="txtPlusJakartaSansRomanSemiBold20"
              >
                Streaming Day and Time
              </Text>
              <div className="w-full">
                <Input
                  name="airing_date"
                  placeholder="Select the date (eg. DD-MM-YYYY)"
                  className="p-0 placeholder:text-blue_gray-900_99 text-left text-sm w-full"
                  wrapClassName="border border-gray-900_26 border-solid flex w-full"
                  type="datetime-local"
                  {...register("airing_date", { required: true })}
                  onChange={() => clearErrors("airing_date")}
                  size="sm"
                  // suffix={
                  //   <Img
                  //     className="h-6 ml-[35px] my-auto"
                  //     src="images/img_calendar.svg"
                  //     alt="calendar"
                  //   />
                  // }
                />
                {errors?.airing_date && (
                  <p className="text-sm text-red-600 font-black">
                    Provide show airing day and time
                  </p>
                )}
              </div>
            </div>
          </div>

          {showExtras && (
            <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-full">
              <Text
                className="text-blue_gray-900 text-xl w-auto"
                size="txtPlusJakartaSansRomanSemiBold20"
              >
                About The Show
              </Text>
              <div className="w-full">
                <Input
                  name="about_show"
                  placeholder="Enter about here.."
                  className="p-0 placeholder:text-blue_gray-900_99 text-left text-sm w-full"
                  wrapClassName="border border-gray-900_26 border-solid w-full"
                  type="text"
                  {...register("about_show", { required: true })}
                  onChange={() => clearErrors("about_show")}
                />
                {errors?.about_show && (
                  <p className="text-sm text-red-600 font-black">
                    Provide details about the show
                  </p>
                )}
              </div>
            </div>
          )}

          {type === "vog" && (
            <div className="flex flex-col gap-4 items-start justify-start mt-8 w-auto md:w-full">
              <Text
                className="text-blue_gray-900 text-xl w-auto"
                size="txtPlusJakartaSansRomanSemiBold20"
              >
                Add Social Networks
              </Text>
              <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-auto md:w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[213px]"
                  leftIcon={
                    <Img
                      className="h-6 mr-2.5"
                      src="images/img_frame.svg"
                      alt="Frame"
                    />
                  }
                  color="blue_A200"
                  size="2xl"
                >
                  <div className="font-semibold text-left text-sm">
                    Connect Facebook
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[212px]"
                  leftIcon={
                    <Img
                      className="h-6 mr-2.5"
                      src="images/img_info.svg"
                      alt="info"
                    />
                  }
                  color="red_300"
                  size="2xl"
                >
                  <div className="font-semibold text-left text-sm">
                    Connect Instagram
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[201px]"
                  leftIcon={
                    <Img
                      className="h-6 mr-2.5"
                      src="images/img_user.svg"
                      alt="user"
                    />
                  }
                  color="blue_400"
                  size="2xl"
                >
                  <div className="font-semibold text-left text-sm">
                    Connect LinkedIn
                  </div>
                </Button>
              </div>
            </div>
          )}

          {showExtras && (
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <Text
                className="text-blue_gray-900 text-xl w-auto"
                size="txtPlusJakartaSansRomanSemiBold20"
              >
                Logo Image
              </Text>

              <BannerUploader
                name="logo"
                icon="images/img_television.svg"
                title="Upload Logo image"
                uploadText="Drag and drop or click here to browse files"
                ctaTypes=".jpeg, .png, .jpg"
                handleUpload={(e) => handleUpload(e, "logo")}
                uploadType={type}
                defaultValue={initialValues?.logo}
                key="logo"
              />
            </div>
          )}

          <div className="flex flex-col gap-5 items-start justify-start w-full">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtPlusJakartaSansRomanSemiBold20"
            >
              Banner Image
            </Text>

            <BannerUploader
              name="img_url"
              icon="images/img_television.svg"
              title="Upload Images"
              uploadText="Drag and drop or click here to browse files"
              ctaTypes=".jpeg, .png, .jpg"
              handleUpload={(e) => handleUpload(e, "banner")}
              uploadType={type}
              defaultValue={initialValues?.img_url}
              key="banner"
            />
            {errors?.img_url && (
              <p className="text-sm text-red-600 font-black">
                Provide show thumbnail image
              </p>
            )}
          </div>

          {/* <div className="flex flex-col gap-5 items-start justify-start w-full">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtPlusJakartaSansRomanSemiBold20"
            >
              Upload Video
            </Text>

            <BannerUploader
              icon="images/img_thumbsup_blue_gray_900.svg"
              title="Upload Video"
              uploadText="Drag and drop or click here to browse files"
              ctaTypes=".mp4, .avi"
              handleUpload={(e) => handleUpload(e, "video")}
              uploadType={type}
            />
          </div> */}

          <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-full">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtPlusJakartaSansRomanSemiBold20"
            >
              Upload Video Url
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
                {editMode ? "Update" : "Add"} {type === "vog" ? "VOG" : "Show"}
              </Text>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditShow;
