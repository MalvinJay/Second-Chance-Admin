import BannerUploader from "components/BannerUploader/BannerUploader";
import { Button } from "components/Button";
import { Img } from "components/Img";
import { Input } from "components/Input";
import { Text } from "components/Text";

interface IAddEditShowProps {
  type?: string;
  handleClose: () => void;
  title: string;
  showExtras?: boolean;
}

const AddEditShow = (props: IAddEditShowProps) => {
  const { title, type, showExtras = false, handleClose } = props;
  return (
    <div className="flex flex-col font-plusjakartasans items-center justify-end mx-auto w-full">
      <div className="bg-white-A700 flex flex-col items-center justify-end p-6 md:px-5 rounded-[10px] shadow-bs w-full">
        <div className="grid grid-cols-1 gap-8 w-full">
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
              <Input
                name="frame1091"
                placeholder="Enter show name here"
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
                Host
              </Text>
              <Input
                name="frame1091_One"
                placeholder="Enter host’s name here"
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
                Streaming Date
              </Text>

              <Input
                name="language"
                placeholder="Select the date   (eg. DD-MM-YYYY)"
                className="p-0 placeholder:text-blue_gray-900_99 text-left text-sm w-full"
                wrapClassName="border border-gray-900_26 border-solid flex w-full"
                suffix={
                  <Img
                    className="h-6 ml-[35px] my-auto"
                    src="images/img_calendar.svg"
                    alt="calendar"
                  />
                }
                size="sm"
              />
            </div>
            <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-full">
              <Text
                className="text-blue_gray-900 text-xl w-auto"
                size="txtPlusJakartaSansRomanSemiBold20"
              >
                Streaming Time
              </Text>
              <Input
                name="frame1091_Two"
                placeholder="Set streaming time"
                className="p-0 placeholder:text-blue_gray-900_99 text-left text-sm w-full"
                wrapClassName="border border-gray-900_26 border-solid flex w-full"
                suffix={
                  <Img
                    className="h-6 ml-[35px] my-auto"
                    src="images/img_clock.svg"
                    alt="clock"
                  />
                }
                size="sm"
              />
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
              <Input
                name="frame1091"
                placeholder="Enter about here.."
                className="p-0 placeholder:text-blue_gray-900_99 text-left text-sm w-full"
                wrapClassName="border border-gray-900_26 border-solid w-full"
                type="text"
              />
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
                icon="images/img_television.svg"
                title="Upload Logo image"
                uploadText="Drag and drop or click here to browse files (File format : JPEG, PNG, JPG)"
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
              icon="images/img_television.svg"
              title="Upload Images"
              uploadText="Drag and drop or click here to browse files (File format :JPEG, PNG, JPG)"
            />
          </div>

          <div className="flex flex-col gap-5 items-start justify-start w-full">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtPlusJakartaSansRomanSemiBold20"
            >
              Upload Video
            </Text>

            <BannerUploader
              icon="images/img_thumbsup_blue_gray_900.svg"
              title="Upload Video"
              uploadText="Drag and drop or click here to browse files (File format: MP4, AVI)"
            />
          </div>

          <div className="flex gap-4 items-start justify-end w-full">
            <Button
              className="h-14 min-w-[12rem] border border-gray-900_26"
              variant="gradient"
              color="white"
            >
              <Text
                className="text-blue_gray-900 text-sm"
                size="txtPlusJakartaSansRomanRegular14Bluegray900"
              ></Text>
              Cancel
            </Button>

            <Button
              className="font-semibold h-14 min-w-[12rem]"
              size="xl"
              variant="gradient"
              color="purple_A200_purple_500"
            >
              <Text
                className="text-sm text-center text-white-A700"
                size="txtPlusJakartaSansRomanSemiBold14"
              >
                Add Show
              </Text>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEditShow;
