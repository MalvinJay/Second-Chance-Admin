import React from "react";

import { Button, Img, Input, Text } from "components";

const AddFMStationOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-500 flex flex-col font-plusjakartasans items-center justify-start mx-auto p-72 md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex flex-col items-start justify-end p-6 md:px-5 rounded-[10px] shadow-bs w-[64%] md:w-full">
          <div className="flex flex-row items-center justify-between ml-2 md:ml-[0] mt-2 w-[97%] md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
              size="txtPlusJakartaSansRomanBold24"
            >
              Add FM Station
            </Text>
            <Button
              className="border border-gray-900_19 border-solid flex h-12 items-center justify-center w-12"
              shape="circle"
              color="gray_50_01"
              size="xs"
            >
              <Img
                className="h-10"
                src="images/img_close_blue_gray_900.svg"
                alt="close"
              />
            </Button>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start ml-2 md:ml-[0] mt-8 w-auto sm:w-full">
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
            ></Input>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start ml-2 md:ml-[0] mt-6 w-auto sm:w-full">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtPlusJakartaSansRomanSemiBold20"
            >
              Radio link
            </Text>
            <Input
              name="frame1091_One"
              placeholder="Enter Radio link here"
              className="p-0 placeholder:text-blue_gray-900_99 text-left text-sm w-full"
              wrapClassName="border border-gray-900_26 border-solid w-full"
            ></Input>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start md:ml-[0] ml-[134px] mt-6 w-auto">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-14 items-center justify-end p-[18px]"
              style={{ backgroundImage: "url('images/img_group10109.svg')" }}
            >
              <Text
                className="text-blue_gray-900 text-sm"
                size="txtPlusJakartaSansRomanRegular14Bluegray900"
              >
                Cancel
              </Text>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-14 items-center justify-end p-[18px]"
              style={{ backgroundImage: "url('images/img_group10110.png')" }}
            >
              <Text
                className="text-sm text-white-A700"
                size="txtPlusJakartaSansRomanSemiBold14"
              >
                Add Channel
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFMStationOnePage;
