import BannerUploader from "components/BannerUploader/BannerUploader";
import { Button } from "components/Button";
import { Img } from "components/Img";
import { Input } from "components/Input";
import { Text } from "components/Text";

interface IAddEditFMStationProps {
  handleClose: () => void;
}

const AddEditFMStation = (props: IAddEditFMStationProps) => {
  const { handleClose } = props;

  return (
    <div className="bg-gray-500 flex flex-col font-plusjakartasans items-center justify-end mx-auto w-full">
      <div className="bg-white-A700 flex flex-col items-center justify-end p-6 md:px-5 rounded-[10px] shadow-bs w-full">
        <div className="grid grid-cols-1 gap-8 w-full">
          <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
            <Text
              className="mb-1 mt-3 text-2xl md:text-[22px] text-gray-900 sm:text-xl"
              size="txtPlusJakartaSansRomanBold24"
            >
              Add FM Station
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
                name="frame1091"
                placeholder="Enter Radio link here"
                className="p-0 placeholder:text-blue_gray-900_99 text-left text-sm w-full"
                wrapClassName="border border-gray-900_26 border-solid w-full"
                type="text"
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
              className="font-semibold h-14 min-w-[12rem]"
              size="xl"
              variant="gradient"
              color="purple_A200_purple_500"
            >
              <Text
                className="text-sm text-center text-white-A700"
                size="txtPlusJakartaSansRomanSemiBold14"
              >
                Add Channel
              </Text>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEditFMStation;
