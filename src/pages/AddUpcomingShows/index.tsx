import React from "react";

import { Button, Img, Input, Text } from "components";

const AddUpcomingShowsPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-500 flex flex-col font-plusjakartasans items-center justify-end mx-auto p-[101px] md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-end max-w-[1049px] mx-auto p-6 md:px-5 rounded-[10px] shadow-bs w-full">
          <div className="flex flex-col items-start justify-start mt-2 w-[99%] md:w-full">
            <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
              <Text
                className="mb-1 mt-3 text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                size="txtPlusJakartaSansRomanBold24"
              >
                Add Upcoming Shows
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
            <div className="flex md:flex-col flex-row gap-6 items-center justify-between mt-[29px] w-full">
              <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-auto sm:w-full">
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
                ></Input>
              </div>
              <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-auto sm:w-full">
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
                ></Input>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-6 items-center justify-between mt-8 w-full">
              <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-auto sm:w-full">
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
                  wrapClassName="border border-gray-900_26 border-solid flex w-[485px] sm:w-full"
                  suffix={
                    <Img
                      className="h-6 ml-[35px] my-auto"
                      src="images/img_calendar.svg"
                      alt="calendar"
                    />
                  }
                  size="sm"
                ></Input>
              </div>
              <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-auto sm:w-full">
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
                  wrapClassName="border border-gray-900_26 border-solid flex w-[476px] sm:w-full"
                  suffix={
                    <Img
                      className="h-6 ml-[35px] my-auto"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                  }
                  size="sm"
                ></Input>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start mt-8 w-auto md:w-full">
              <Text
                className="text-blue_gray-900 text-xl w-auto"
                size="txtPlusJakartaSansRomanSemiBold20"
              >
                Banner Image
              </Text>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[132px] items-center justify-start p-6 sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_group10120.svg')" }}
              >
                <div className="flex flex-col gap-2.5 items-center justify-start w-auto sm:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_television.svg"
                    alt="television"
                  />
                  <div className="flex flex-col gap-2 items-center justify-start w-auto sm:w-full">
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtPlusJakartaSansRomanBold16"
                    >
                      Upload Images
                    </Text>
                    <Text
                      className="text-blue_gray-900_87 text-center text-xs w-auto"
                      size="txtPlusJakartaSansRomanRegular12"
                    >
                      Drag and drop or click here to browse files (File format :
                      JPEG, PNG, JPG)
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start mt-8 w-auto md:w-full">
              <Text
                className="text-blue_gray-900 text-xl w-auto"
                size="txtPlusJakartaSansRomanSemiBold20"
              >
                Upload Video
              </Text>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[132px] items-center justify-start p-6 sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_group10120.svg')" }}
              >
                <div className="flex flex-col gap-2.5 items-center justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_thumbsup_blue_gray_900.svg"
                    alt="thumbsup"
                  />
                  <div className="flex flex-col gap-2 items-center justify-start w-auto">
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtPlusJakartaSansRomanBold16"
                    >
                      Upload Video
                    </Text>
                    <Text
                      className="text-blue_gray-900_87 text-center text-xs w-auto"
                      size="txtPlusJakartaSansRomanRegular12"
                    >
                      Drag and drop or click here to browse files (File format:
                      MP4, AVI)
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-4 items-start justify-start md:ml-[0] ml-[528px] mt-6 w-auto sm:w-full">
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
                  Add Show
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUpcomingShowsPage;
