import React from "react";
import { CircularProgress } from "@mui/material";
import { Button } from "components/Button";
import { Text } from "components/Text";
import { Img } from "components/Img";
import { useForm } from "react-hook-form";
import { TAlertMsgProp } from "types/shared.type";
import { Input } from "components/Input";
import { AddEditCategoryAPIFn } from "api/royalNews";
import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "App";

interface IAddEditShowProps {
  editMode: boolean;
  handleClose: () => void;
  title?: string;
  setShowAlert?: (e: boolean) => void;
  setAlertMsg?: (e: TAlertMsgProp) => void;
  initialValues?: any;
}

const AddEditCategory = (props: IAddEditShowProps) => {
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
      name: initialValues?.name,
    },
  });

  const { mutateAsync: AddPatchCatMutate, isLoading } = useMutation({
    mutationFn: AddEditCategoryAPIFn,
    onError: (error: AxiosError) => error?.response?.data,
  });

  const onSubmit = async (values: any) => {
    AddPatchCatMutate({
      id: initialValues?.id || values?.id,
      mode: editMode ? "update" : "add",
      ...values,
    })
      .then(
        (res) => {
          if (res) {
            handleClose();
            setAlertMsg({
              status: "success",
              msg: `${editMode ? "Updated" : "Added"} category successfully`,
            });
            setShowAlert(true);
            queryClient.invalidateQueries(["royal-news", "categories"]);
          } else {
            setAlertMsg({
              status: "error",
              msg: `Error ${editMode ? "updating" : "adding"} category`,
            });
            setShowAlert(true);
          }
        },
        (err) => {
          console.error("Error adding category:", err);
        }
      )
      .catch((error) => {
        console.error("Error adding category:", error);
        setAlertMsg({
          status: "error",
          msg: "Error adding category",
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

          <div className="grid grid-cols-1 gap-6 w-full">
            <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-full">
              <Text
                className="text-blue_gray-900 text-xl w-auto"
                size="txtPlusJakartaSansRomanSemiBold20"
              >
                Name
              </Text>
              <div className="w-full">
                <Input
                  name="name"
                  placeholder="Enter show name here"
                  className="p-0 placeholder:text-blue_gray-900_99 text-left text-sm w-full"
                  wrapClassName="border border-gray-900_26 border-solid w-full"
                  type="text"
                  {...register("name", { required: true })}
                  onChange={() => clearErrors("name")}
                />
                {errors?.name && (
                  <p className="text-sm text-red-600 font-black">
                    Provide category name
                  </p>
                )}
              </div>
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
              disabled={isLoading}
            >
              {isLoading && <CircularProgress color="inherit" size={24} />}
              <Text
                className="text-sm text-center text-white-A700"
                size="txtPlusJakartaSansRomanSemiBold14"
              >
                {editMode ? "Update" : "Add"} Category
              </Text>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditCategory;
