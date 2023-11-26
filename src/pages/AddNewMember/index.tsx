import React from "react";

import { Button, Img, Input, Text } from "components";

const AddNewMemberPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-500 flex flex-col font-plusjakartasans items-center justify-start mx-auto p-[182px] md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex flex-col items-start justify-end p-6 md:px-5 rounded-[10px] shadow-bs w-3/5 md:w-full">
          <div className="flex flex-row sm:gap-10 gap-[315px] items-center justify-between ml-2 md:ml-[0] mt-2 w-auto sm:w-full">
            <Text
              className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
              size="txtPlusJakartaSansRomanBold24"
            >
              {" "}
              Add New Member
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
          <div className="flex flex-col gap-4 items-start justify-start ml-2 md:ml-[0] mt-6 w-auto sm:w-full">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtPlusJakartaSansRomanSemiBold20"
            >
              Member Name
            </Text>
            <Input
              name="membername_One"
              placeholder="Enter show name here"
              className="p-0 placeholder:text-blue_gray-900_99 text-left text-sm w-full"
              wrapClassName="border border-gray-900_26 border-solid w-full"
              type="text"
            ></Input>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start ml-2 md:ml-[0] mt-8 w-auto sm:w-full">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtPlusJakartaSansRomanSemiBold20"
            >
              Designation
            </Text>
            <Input
              name="designation_One"
              placeholder="Designation here...."
              className="p-0 placeholder:text-blue_gray-900_99 text-left text-sm w-full"
              wrapClassName="border border-gray-900_26 border-solid w-full"
              size="xl"
            ></Input>
          </div>
          <div className="flex flex-col gap-5 items-start justify-start ml-2 md:ml-[0] mt-8 w-[577px] sm:w-full">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtPlusJakartaSansRomanSemiBold20"
            >
              Member Image
            </Text>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[132px] items-center justify-start p-6 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group10120.svg')" }}
            >
              <div className="flex flex-col gap-2.5 items-center justify-start w-[402px] sm:w-full">
                <Img className="h-6 w-6" src="images/img_lock.svg" alt="lock" />
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
          <div className="flex sm:flex-col flex-row gap-4 items-start justify-start ml-32 md:ml-[0] mt-6 w-auto sm:w-full">
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
                Add Member
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewMemberPage;
