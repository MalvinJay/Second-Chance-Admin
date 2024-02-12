import { CircularProgress } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "App";
import { AddFMStationAPIFn, EditFMStationAPIFn } from "api/fmStation";
import { AxiosError } from "axios";

import { Button } from "components/Button";
import { Img } from "components/Img";
import { Input } from "components/Input";
import { Text } from "components/Text";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IAddEditProps } from "types/shared.type";

const AddEditFMStation = (props: IAddEditProps) => {
  const {
    title,
    editMode,
    setAlertMsg,
    setShowAlert,
    handleClose,
    initialValues,
  } = props;

  const {
    register,
    clearErrors,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: initialValues?.name,
      frequency: initialValues?.frequency,
      station_link: initialValues?.station_link,
      available_show: initialValues?.available_show,
    },
  });

  const { mutateAsync: AddEditFMStationMutate, isLoading } = useMutation({
    mutationFn: editMode ? EditFMStationAPIFn : AddFMStationAPIFn,
    onError: (error: AxiosError) => error?.response?.data,
  });

  const onSubmit = async (values: any) => {
    let payload = {
      id: initialValues?.id || values?.id,
      ...values,
    };

    AddEditFMStationMutate(payload)
      .then(
        (res) => {
          const { code, data } = res;
          if (res && ((code && [200, 201].includes(code)) || data)) {
            handleClose();
            setAlertMsg({
              status: "success",
              msg: `${editMode ? "Updated" : "Added"} fm station successfully`,
            });
            setShowAlert(true);
            queryClient.invalidateQueries(["fm-stations"]);
          } else {
            setAlertMsg({
              status: "error",
              msg: `Error ${editMode ? "updating" : "adding"} fm station`,
            });
            setShowAlert(true);
          }
        },
        (err) => {
          console.error("Error adding fm station:", err);
          setAlertMsg({
            status: "error",
            msg: `Error ${editMode ? "updating" : "adding"} fm stations`,
          });
          setShowAlert(true);
        }
      )
      .catch((error) => {
        console.error("Error adding fm station:", error);
        setAlertMsg({
          status: "error",
          msg: "Error adding fm station",
        });
        setShowAlert(true);
      });
  };

  useEffect(() => {
    if (!editMode) reset();
  }, [editMode]);

  return (
    <div className="bg-gray-500 flex flex-col font-plusjakartasans items-center justify-end mx-auto w-full">
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

          <div className="grid grid-cols-1 gap-8 w-full">
            <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-full">
              <Text
                className="text-blue_gray-900 text-xl w-auto"
                size="txtPlusJakartaSansRomanSemiBold20"
              >
                FM Station Name
              </Text>
              <Input
                name="frame1091"
                placeholder="Enter FM Station name here"
                className="p-0 placeholder:text-blue_gray-900_99 text-left text-sm w-full"
                wrapClassName="border border-gray-900_26 border-solid w-full"
                type="text"
                {...register("name", { required: true })}
                onChange={() => clearErrors("name")}
              />
            </div>

            <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-full">
              <Text
                className="text-blue_gray-900 text-xl w-auto"
                size="txtPlusJakartaSansRomanSemiBold20"
              >
                Frequency
              </Text>
              <Input
                name="station_link"
                placeholder="Enter Radio link here"
                className="p-0 placeholder:text-blue_gray-900_99 text-left text-sm w-full"
                wrapClassName="border border-gray-900_26 border-solid w-full"
                type="text"
                {...register("frequency", { required: true })}
                onChange={() => clearErrors("frequency")}
              />
            </div>

            <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-full">
              <Text
                className="text-blue_gray-900 text-xl w-auto"
                size="txtPlusJakartaSansRomanSemiBold20"
              >
                Radio link
              </Text>
              <Input
                name="station_link"
                placeholder="Enter Radio link here"
                className="p-0 placeholder:text-blue_gray-900_99 text-left text-sm w-full"
                wrapClassName="border border-gray-900_26 border-solid w-full"
                type="text"
                {...register("station_link", { required: true })}
                onChange={() => clearErrors("station_link")}
              />
            </div>

            <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-full">
              <Text
                className="text-blue_gray-900 text-xl w-auto"
                size="txtPlusJakartaSansRomanSemiBold20"
              >
                Available Shows
              </Text>
              <Input
                name="station_link"
                placeholder="Enter Radio link here"
                className="p-0 placeholder:text-blue_gray-900_99 text-left text-sm w-full"
                wrapClassName="border border-gray-900_26 border-solid w-full"
                type="number"
                {...register("available_show", { required: true })}
                onChange={() => clearErrors("available_show")}
              />
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
              className="flex items-center justify-center gap-1 font-semibold h-14 min-w-[12rem]"
              size="xl"
              variant="gradient"
              color="purple_A200_purple_500"
            >
              {isLoading && <CircularProgress color="inherit" size={24} />}
              <Text
                className="text-sm text-center text-white-A700"
                size="txtPlusJakartaSansRomanSemiBold14"
              >
                {editMode ? "Update" : "Add"} Channel
              </Text>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditFMStation;
