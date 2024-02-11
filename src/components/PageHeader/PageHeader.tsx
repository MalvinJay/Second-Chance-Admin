import { memo, useEffect, useMemo, useRef, useState } from "react";
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
import { getEmbededYTLink } from "utils";

interface PageHeaderProps {
  setAlertMsg: (e: TAlertMsgProp) => void;
  setShowAlert: (e: boolean) => void;
}

const PageHeader = (props: PageHeaderProps) => {
  const {
    register,
    setValue,
    getValues,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setAlertMsg, setShowAlert } = props;
  const [show, setshow] = useState(true);
  const iframeRef = useRef(null);
  const { isLoading, data: header }: { isLoading: boolean; data: any } =
    useReactQuery(["header"], "/content/header");

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
                  msg: `Updated page header successfully`,
                });
                setShowAlert(true);

                queryClient.invalidateQueries(["header"]);
              } else {
                setAlertMsg({
                  status: "error",
                  msg: `Error updating page header`,
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
                  msg: `Added page header successfully`,
                });
                setShowAlert(true);

                queryClient.invalidateQueries(["header"]);
              } else {
                setAlertMsg({
                  status: "error",
                  msg: `Error adding page header`,
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

  const currentHeaderVideo = useMemo(() => {
    if (header && header?.video?.video_url) {
      return getEmbededYTLink(header?.video?.video_url);
    } else return "https://www.youtube.com/embed/mBnq_Y3dUw0";
  }, [header]);

  useEffect(() => {
    setValue("title", header?.title);
    setValue("video_url", header?.video?.video_url);
  }, [currentHeaderVideo, header]);

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
          className="cursor-pointer font-semibold flex justify-center gap-2 min-w-[140px] text-center text-sm"
          size="xl"
          variant="gradient"
          color="purple_A200_purple_500"
          type="submit"
        >
          {(isLoading || isAddingHeader || isPatchingHeader) && (
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

        <div className="h-[373px] mt-5 relative w-full md:bg-black-900">
          <iframe
            id="pageHeader"
            ref={iframeRef}
            className="w-full h-full rounded-lg bg-black-900"
            src={currentHeaderVideo}
            title={getValues("title")}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default memo(PageHeader);
