import { CircularProgress } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "App";
import { AddTestimonyAPIFn } from "api/testimonies";
import { AxiosError } from "axios";
import BannerUploader from "components/BannerUploader/BannerUploader";
import { Button } from "components/Button";
import { Img } from "components/Img";
import { Input } from "components/Input";
import { Text } from "components/Text";

// import ReactQuillWrapper from "../ReactEditor";
import { TextArea } from "components/TextArea";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TAlertMsgProp } from "types/shared.type";

interface IAddEditTestimonyProps {
  editMode: boolean;
  type?: string;
  handleClose: () => void;
  title: string;
  setShowAlert?: (e: boolean) => void;
  setAlertMsg?: (e: TAlertMsgProp) => void;
  initialValues?: any;
}

const AddEditTestimony = (props: IAddEditTestimonyProps) => {
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
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: initialValues?.name,
      testimony: initialValues?.testimony,
      photos: initialValues?.photos,
    },
  });

  const [formValues, setFormValues] = useState({});

  const handleUpload = (val: any, type: string) => {
    setFormValues((prev) => {
      return {
        ...prev,
        [type]: val,
      };
    });
  };

  const { mutateAsync: AddTestimonyMutate, isLoading } = useMutation({
    mutationFn: AddTestimonyAPIFn,
    onError: (error: AxiosError) => error?.response?.data,
  });

  const onSubmit = async (values: any) => {
    let payload = {
      id: initialValues?.id || values?.id,
      ...values,
      ...formValues,
    };

    AddTestimonyMutate(payload)
      .then(
        (res) => {
          const { code } = res;
          if (res && code && [200, 201].includes(code)) {
            handleClose();
            setAlertMsg({
              status: "success",
              msg: `${editMode ? "Updated" : "Added"} testimony successfully`,
            });
            setShowAlert(true);
            queryClient.invalidateQueries(["onlineTestimonies"]);
          } else {
            setAlertMsg({
              status: "error",
              msg: `Error ${editMode ? "updating" : "adding"} testimony`,
            });
            setShowAlert(true);
          }
        },
        (err) => {
          console.error("Error adding category:", err);
          setAlertMsg({
            status: "error",
            msg: `Error ${editMode ? "updating" : "adding"} testimony`,
          });
          setShowAlert(true);
        }
      )
      .catch((error) => {
        console.error("Error adding testimony:", error);
        setAlertMsg({
          status: "error",
          msg: "Error adding testimony",
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

          <div className="grid gap-6 w-full">
            <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-full">
              <Text
                className="text-blue_gray-900 text-xl w-auto"
                size="txtPlusJakartaSansRomanSemiBold20"
              >
                Name
              </Text>
              <Input
                name="name"
                placeholder="Enter username"
                className="p-0 placeholder:text-blue_gray-900_99 text-left text-sm w-full"
                wrapClassName="border border-gray-900_26 border-solid w-full"
                type="text"
                {...register("name", { required: true })}
                onChange={() => clearErrors("name")}
              />
            </div>
          </div>

          <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-full">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtPlusJakartaSansRomanSemiBold20"
            >
              Testimony
            </Text>

            <TextArea
              name="content"
              className="bg-gray-50 border border-gray-900_19 border-solid pb-[35px] pl-4 sm:pr-5 pr-[35px] pt-[18px] rounded-md placeholder:text-gray-900_7f text-gray-900 text-left text-base w-full"
              placeholder="Write testimony info here"
              rows={4}
              {...register("testimony", { required: true })}
              onChange={() => clearErrors("testimony")}
            />
          </div>

          <div className="flex flex-col gap-5 items-start justify-start w-full">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtPlusJakartaSansRomanSemiBold20"
            >
              Upload Photos
            </Text>

            <BannerUploader
              name="before"
              icon="images/img_television.svg"
              title="Upload Image (Before)"
              uploadText="Drag and drop or click here to browse files"
              ctaTypes=".jpeg, .png, .jpg"
              handleUpload={(e) => {
                handleUpload(e, "before");
              }}
              uploadType="banner"
              key="before"
            />

            <BannerUploader
              name="after"
              icon="images/img_television.svg"
              title="Upload Image (After)"
              uploadText="Drag and drop or click here to browse files"
              ctaTypes=".jpeg, .png, .jpg"
              handleUpload={(e) => {
                handleUpload(e, "after");
              }}
              uploadType="banner"
              key="after"
            />
          </div>

          <div className="flex flex-col gap-5 items-start justify-start w-full">
            {/* <ReactQuillWrapper /> */}
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
              type="submit"
            >
              {isLoading && <CircularProgress color="inherit" size={24} />}
              <Text
                className="text-sm text-center text-white-A700"
                size="txtPlusJakartaSansRomanSemiBold14"
              >
                {editMode ? "Update" : "Save"} Testimony
              </Text>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditTestimony;
