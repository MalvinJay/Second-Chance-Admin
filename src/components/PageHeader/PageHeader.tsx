import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "App";
import { AddHeaderAPIFn, patchHeaderAPIFn } from "api/general";
import { AxiosError } from "axios";
import { Button } from "components/Button";
import { Img } from "components/Img";
import { Input } from "components/Input";
import { Text } from "components/Text";
import { useReactQuery } from "hooks/useReactQuery";
import { useForm } from "react-hook-form";
import { TAlertMsgProp } from "types/shared.type";

const PageHeader = () => {
  const {
    register,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showAlert, setShowAlert] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [alertMsg, setAlertMsg] = useState<TAlertMsgProp>({
    msg: "",
    status: "success",
  });
  const { mutateAsync: addHeaderMutate, isLoading: isAddingHeader } =
    useMutation({
      mutationFn: AddHeaderAPIFn,
      onError: (error: AxiosError) => error?.response?.data,
    });

  const { mutateAsync: patchHeaderMutate, isLoading: isPatchingHeader } =
    useMutation({
      mutationFn: patchHeaderAPIFn,
      onError: (error: AxiosError) => error?.response?.data,
    });

  const { isLoading, data: header }: { isLoading: boolean; data: any } =
    useReactQuery(["header"], "/content/header");

  if (header) {
    console.log("header:", header.data);
  }
  const onSubmit = (values: any) => {
    let payload = {
      ...values,
    };

    console.log("Final Payload:", payload);

    header
      ? patchHeaderMutate({
          id: header?.id || payload.id,
          data: payload,
        })
          .then(
            (res) => {
              if (res) {
                setAlertMsg({
                  status: "success",
                  msg: `${editMode ? "updated" : "added"} ${type} successfully`,
                });
                setShowAlert(true);

                queryClient.invalidateQueries(["header"]);
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
      : addHeaderMutate(payload)
          .then(
            (res) => {
              if (res) {
                setAlertMsg({
                  status: "success",
                  msg: `${editMode ? "updated" : "added"} ${type} successfully`,
                });
                setShowAlert(true);

                queryClient.invalidateQueries(["header"]);
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
    <div className="grid grid-cols-2 w-full gap-6">
      <form
        className="flex sm:flex-1 flex-col gap-4 items-start justify-start md:mt-0 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Text
          className="text-[22px] text-center text-gray-900 sm:text-lg md:text-xl"
          size="txtPlusJakartaSansRomanBold22"
        >
          Header Sections Content
        </Text>

        <div className="flex flex-col gap-6 items-start justify-start w-full">
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <Text
              className="text-base text-gray-900_7f w-auto"
              size="txtPlusJakartaSansRomanMedium16"
            >
              Header Text
            </Text>

            <div className="w-full">
              <Input
                name="groupFour"
                placeholder="Write the header content here"
                className="p-0 placeholder:text-blue_gray-900_99 text-left text-sm w-full"
                wrapClassName="border border-gray-900_19 border-solid w-full"
                color="gray_50"
                size="sm"
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
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <Text
              className="text-base text-gray-900_7f w-auto"
              size="txtPlusJakartaSansRomanMedium16"
            >
              Paste the youtube link here
            </Text>

            <div className="w-full">
              <Input
                name="groupFour_One"
                placeholder="youtube link will be here"
                className="p-0 placeholder:text-blue_gray-900_99 text-left text-sm w-full"
                wrapClassName="border border-gray-900_19 border-solid w-full"
                color="gray_50"
                size="sm"
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

        <Button
          className="cursor-pointer font-semibold min-w-[140px] text-center text-sm"
          size="xl"
          variant="gradient"
          color="purple_A200_purple_500"
          type="submit"
        >
          {(isAddingHeader || isPatchingHeader) && (
            <CircularProgress color="inherit" size={24} />
          )}
          Upload Video
        </Button>
      </form>

      <div className="w-full">
        <Text
          className="text-gray-900 text-lg"
          size="txtPlusJakartaSansRomanBold18"
        >
          Video Preview
        </Text>
        <div className="h-[373px] relative w-full mt-5">
          <Img
            className="h-[373px] m-auto object-cover rounded-md w-full"
            src="images/img_rectangle2.png"
            alt="rectangleTwo"
          />
          <div className="absolute bg-gray-900_7f flex flex-col h-full inset-[0] items-center justify-center m-auto p-[131px] md:px-10 sm:px-5 rounded-md w-full">
            <Img
              className="h-[66px] mb-[45px] w-[66px]"
              src="images/img_overflowmenu.svg"
              alt="overflowmenu"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
