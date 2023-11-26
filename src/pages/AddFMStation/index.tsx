import React from "react";

import { Button, Img, Input, Text, TextArea } from "components";

const AddFMStationPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-500 flex flex-col font-plusjakartasans items-center justify-start mx-auto p-16 md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[1049px] mb-[59px] mx-auto p-8 md:px-5 rounded-[10px] shadow-bs w-full">
          <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
            <Text
              className="mb-1 mt-3 text-2xl md:text-[22px] text-gray-900 sm:text-xl"
              size="txtPlusJakartaSansRomanBold24"
            >
              Add Royal News
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
          <div className="flex flex-col gap-4 items-start justify-start mt-6 w-auto md:w-full">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtPlusJakartaSansRomanSemiBold20"
            >
              News Headline
            </Text>
            <Input
              name="frame1091"
              placeholder="News Headline will be here"
              className="p-0 placeholder:text-blue_gray-900_99 text-left text-sm w-full"
              wrapClassName="border border-gray-900_26 border-solid w-full"
              size="xl"
            ></Input>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start mt-6 w-auto md:w-full">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtPlusJakartaSansRomanSemiBold20"
            >
              Sub Headline
            </Text>
            <Input
              name="frame1091_One"
              placeholder="Sub-headline will be here"
              className="p-0 placeholder:text-blue_gray-900_99 text-left text-sm w-full"
              wrapClassName="border border-gray-900_26 border-solid w-full"
              size="xl"
            ></Input>
          </div>
          <div className="flex flex-col gap-5 items-start justify-start mt-6 w-auto md:w-full">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtPlusJakartaSansRomanSemiBold20"
            >
              Cover Image
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
          <div className="flex flex-col gap-4 items-start justify-start mt-10 w-auto md:w-full">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtPlusJakartaSansRomanSemiBold20"
            >
              News Details (Row-1)
            </Text>
            <TextArea
              className="bg-white-A700 border border-gray-900_26 border-solid gap-2.5 max-w-[985px] pb-[89px] pt-4 px-4 rounded-md placeholder:text-blue_gray-900_99 text-blue_gray-900_99 text-left text-sm w-full"
              name="frame1091_Two"
              placeholder="Add news details here"
            ></TextArea>
          </div>
          <div className="flex flex-col gap-5 items-start justify-start mt-6 w-auto md:w-full">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtPlusJakartaSansRomanSemiBold20"
            >
              Image (Under Row-1)
            </Text>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[132px] items-center justify-start p-6 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group10120.svg')" }}
            >
              <div className="flex flex-col gap-2.5 items-center justify-start w-auto sm:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_television.svg"
                  alt="television_One"
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
          <div className="flex flex-col gap-4 items-start justify-start mt-10 w-auto md:w-full">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtPlusJakartaSansRomanSemiBold20"
            >
              News Details (Row-2)
            </Text>
            <div className="bg-white-A700 border border-gray-900_26 border-solid flex flex-col items-center justify-start max-w-[985px] pb-[89px] pt-4 px-4 rounded-md w-full">
              <Text
                className="text-blue_gray-900_99 text-sm w-auto"
                size="txtPlusJakartaSansRomanRegular14Bluegray90099"
              >
                Add news details here
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-start justify-start mt-6 w-auto md:w-full">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtPlusJakartaSansRomanSemiBold20"
            >
              Image (Under Row-2)
            </Text>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[132px] items-center justify-start p-6 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group10120.svg')" }}
            >
              <div className="flex flex-col gap-2.5 items-center justify-start w-auto sm:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_television.svg"
                  alt="television_Two"
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
          <div className="flex flex-col gap-4 items-start justify-start mt-10 w-auto md:w-full">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtPlusJakartaSansRomanSemiBold20"
            >
              News Details (Row-3)
            </Text>
            <div className="bg-white-A700 border border-gray-900_26 border-solid flex flex-col items-center justify-start max-w-[985px] pb-[89px] pt-4 px-4 rounded-md w-full">
              <Text
                className="text-blue_gray-900_99 text-sm w-auto"
                size="txtPlusJakartaSansRomanRegular14Bluegray90099"
              >
                Add news details here
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-start justify-start mt-6 w-auto md:w-full">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtPlusJakartaSansRomanSemiBold20"
            >
              Image (Under Row-3)
            </Text>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[132px] items-center justify-start p-6 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group10120.svg')" }}
            >
              <div className="flex flex-col gap-2.5 items-center justify-start w-auto sm:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_television.svg"
                  alt="television_Three"
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
          <div className="flex flex-row gap-4 items-start justify-start md:ml-[0] ml-[635px] mt-6 w-auto">
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
                Save News
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFMStationPage;
