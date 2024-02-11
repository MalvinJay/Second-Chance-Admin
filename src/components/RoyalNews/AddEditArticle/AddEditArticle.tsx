import { CircularProgress } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "App";
import { AddArticleAPIFn } from "api/royalNews";
import { AxiosError } from "axios";
import BannerUploader from "components/BannerUploader/BannerUploader";
import { Button } from "components/Button";
import { Img } from "components/Img";
import { Input } from "components/Input";
import { SelectBox } from "components/SelectBox";
import { Text } from "components/Text";

// import ReactQuillWrapper from "../ReactEditor";
import { TextArea } from "components/TextArea";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TAlertMsgProp } from "types/shared.type";

interface IAddEditArticleProps {
  editMode: boolean;
  type?: string;
  handleClose: () => void;
  title: string;
  setShowAlert?: (e: boolean) => void;
  setAlertMsg?: (e: TAlertMsgProp) => void;
  initialValues?: any;
  categories?: any[];
}

const AddEditArticle = (props: IAddEditArticleProps) => {
  const {
    title,
    editMode,
    setAlertMsg,
    setShowAlert,
    handleClose,
    initialValues,
    categories,
  } = props;
  const {
    register,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: initialValues?.name,
      featured_img: initialValues?.featured_img,
    },
  });

  const [formValues, setFormValues] = useState({});

  const handleUpload = (val: any, type: string) => {
    setFormValues(val);
  };

  const { mutateAsync: AddPatchNewsMutate, isLoading } = useMutation({
    mutationFn: AddArticleAPIFn,
    onError: (error: AxiosError) => error?.response?.data,
  });

  const onSubmit = async (values: any) => {
    let payload = {
      id: initialValues?.id || values?.id,
      ...values,
    };

    payload.featured_img = formValues;

    AddPatchNewsMutate(payload)
      .then(
        (res) => {
          const { code } = res;
          if (res && code && [200, 201].includes(code)) {
            handleClose();
            setAlertMsg({
              status: "success",
              msg: `${editMode ? "Updated" : "Added"} category successfully`,
            });
            setShowAlert(true);
            queryClient.invalidateQueries(["royal-news"]);
          } else {
            setAlertMsg({
              status: "error",
              msg: `Error ${editMode ? "updating" : "adding"} news article`,
            });
            setShowAlert(true);
          }
        },
        () => {
          setAlertMsg({
            status: "error",
            msg: `Error ${editMode ? "updating" : "adding"} news article`,
          });
          setShowAlert(true);
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

          <div className="grid gap-6 w-full">
            <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-full">
              <Text
                className="text-blue_gray-900 text-xl w-auto"
                size="txtPlusJakartaSansRomanSemiBold20"
              >
                News Headline
              </Text>
              <Input
                name="headline"
                placeholder="Enter show name here"
                className="p-0 placeholder:text-blue_gray-900_99 text-left text-base w-full"
                wrapClassName="border border-gray-900_26 border-solid w-full"
                type="text"
                {...register("headline", { required: true })}
                onChange={() => clearErrors("headline")}
              />
            </div>

            <div className="grid grid-cols-2 gap-4 items-center">
              <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-blue_gray-900 text-xl w-auto"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Sub Headline <i className="text-sm">(optional)</i>
                </Text>
                <Input
                  name="frame1091_One"
                  placeholder="Enter sub headline here..."
                  className="p-0 placeholder:text-blue_gray-900_99 text-left text-sm w-full"
                  wrapClassName="border border-gray-900_26 border-solid w-full"
                  type="text"
                />
              </div>
              <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-blue_gray-900 text-xl w-auto"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Category
                </Text>
                <select
                  name="category_id"
                  className="border border-gray-900_26 border-solid w-full px-4 placeholder:text-blue_gray-900_99 text-left text-sm h-[67px] rounded-md"
                  placeholder="Featured"
                  {...register("category_id")}
                  onChange={() => clearErrors("category_id")}
                >
                  {categories?.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-full">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtPlusJakartaSansRomanSemiBold20"
            >
              Content
            </Text>

            <TextArea
              name="content"
              className="bg-gray-50 border border-gray-900_19 border-solid pb-[35px] pl-4 sm:pr-5 pr-[35px] pt-[18px] rounded-md placeholder:text-gray-900_7f text-gray-900 text-left text-base w-full"
              placeholder="Write article content here"
              rows={4}
              {...register("content", { required: true })}
              onChange={() => clearErrors("content")}
            ></TextArea>
          </div>

          <div className="flex flex-col gap-5 items-start justify-start w-full">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtPlusJakartaSansRomanSemiBold20"
            >
              Banner Image
            </Text>

            <BannerUploader
              name="featured_img"
              icon="images/img_television.svg"
              title="Upload Image"
              uploadText="Drag and drop or click here to browse files"
              ctaTypes=".jpeg, .png, .jpg"
              handleUpload={(e) => {
                handleUpload(e, "featured_img");
              }}
              uploadType="banner"
              key="featured_img"
            />
            {errors?.featured_img && (
              <p className="text-sm text-red-600 font-black">
                Provide show thumbnail image
              </p>
            )}
          </div>

          {/* Editor */}

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
                {editMode ? "Update" : "Save"} News
              </Text>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditArticle;
