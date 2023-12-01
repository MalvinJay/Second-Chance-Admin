import { Button, Img, Input, List, Text, TextArea } from "components";
import Layout from "components/Layout/Layout";

const AboutusPage: React.FC = () => {
  return (
    <Layout title="About Us">
      <div className="flex flex-col gap-6 items-center justify-start w-[96%] md:w-full">
        <div className="grid grid-cols-2 gap-6 items-center justify-between w-full">
          <div className="bg-white-A700 border border-gray-900_19 border-solid flex md:flex-1 flex-col items-start justify-end p-4 rounded-[10px] w-full">
            <Text
              className="md:ml-[0] ml-[7px] mt-0.5 text-[22px] text-center text-gray-900 sm:text-lg md:text-xl"
              size="txtPlusJakartaSansRomanBold22"
            >
              Header Sections Content
            </Text>
            <div className="flex flex-col items-start justify-start ml-2 md:ml-[0] mt-[29px] w-auto sm:w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-base text-gray-900_7f w-auto"
                  size="txtPlusJakartaSansRomanMedium16"
                >
                  Header Text
                </Text>
                <Input
                  name="groupFour"
                  placeholder="Write the header content here"
                  className="p-0 placeholder:text-gray-900_7f text-left text-xs w-full"
                  wrapClassName="border border-gray-900_19 border-solid w-full"
                  color="gray_50"
                  size="sm"
                ></Input>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start justify-start ml-2 md:ml-[0] mt-5 w-auto sm:w-full">
              <Text
                className="text-base text-gray-900_7f w-auto"
                size="txtPlusJakartaSansRomanMedium16"
              >
                Sub-header Text
              </Text>
              <TextArea
                className="bg-gray-50 border border-gray-900_19 border-solid pb-[35px] pl-4 sm:pr-5 pr-[35px] pt-[18px] rounded-md placeholder:text-gray-900_7f text-gray-900_7f text-left text-xs w-full"
                name="groupFour_One"
                placeholder="Write the sub-header content here"
              ></TextArea>
            </div>
            <div className="flex flex-row gap-3.5 items-start justify-start md:ml-[0] ml-[287px] mt-5 w-auto">
              <Button
                className="cursor-pointer font-semibold min-w-[96px] text-center text-sm"
                color="blue_gray_900_19"
                size="xl"
              >
                Cancel
              </Button>
              <Button
                className="cursor-pointer font-semibold text-center text-sm w-[119px]"
                size="xl"
                variant="gradient"
                color="purple_A200_purple_500"
              >
                Save
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 border border-gray-900_19 border-solid flex md:flex-1 flex-col gap-[26px] items-start justify-end p-5 rounded-[10px] w-full">
            <Text
              className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
              size="txtPlusJakartaSansRomanBold22"
            >
              Backdrop Image
            </Text>
            <div className="bg-gray-100 border border-gray-900_19 border-solid flex flex-col items-center justify-start p-[84px] md:px-10 sm:px-5 rounded-[10px] w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start my-[53px] w-[402px] sm:w-full">
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
        </div>

        <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-col items-center justify-start p-[18px] rounded-[10px] w-full">
          <div className="flex flex-col items-start justify-start mb-[5px] w-[99%] md:w-full">
            <Text
              className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
              size="txtPlusJakartaSansRomanBold22"
            >
              About Second chances Tv
            </Text>
            <div className="flex flex-row md:gap-10 items-start justify-between mt-[29px] w-full">
              <Text
                className="mt-0.5 text-base text-gray-900_7f"
                size="txtPlusJakartaSansRomanSemiBold16"
              >
                Title Text
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_settings.svg"
                alt="settings"
              />
            </div>
            <Input
              name="group108"
              placeholder="Write the title text here"
              className="p-0 placeholder:text-gray-900_7f text-left text-xs w-full"
              wrapClassName="border border-gray-900_19 border-solid mt-4 w-full"
              color="gray_50"
              size="sm"
            ></Input>
            <div className="flex flex-row md:gap-10 items-start justify-between mt-6 w-full">
              <Text
                className="mt-1 text-base text-gray-900_7f"
                size="txtPlusJakartaSansRomanSemiBold16"
              >
                Description
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_settings.svg"
                alt="settings_One"
              />
            </div>
            <div className="flex flex-col gap-6 items-center justify-start mt-3.5 w-full">
              <TextArea
                className="bg-gray-50 border border-gray-900_19 border-solid pb-[35px] pl-[13px] sm:pr-5 pr-[35px] pt-[19px] rounded-md placeholder:text-gray-900_7f text-gray-900_7f text-left text-xs w-full"
                name="groupFour_Two"
                placeholder="Write description here"
              ></TextArea>
              <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                <Text
                  className="mt-1 text-base text-gray-900_7f"
                  size="txtPlusJakartaSansRomanSemiBold16"
                >
                  Image
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_settings.svg"
                  alt="settings_Two"
                />
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-900_19 border-solid flex flex-col items-center justify-start mt-3.5 p-[27px] sm:px-5 rounded-md w-full">
              <div className="flex flex-col items-start justify-start w-auto">
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <div className="bg-white-A700 border border-purple-A400 border-solid flex flex-col h-[82px] items-center justify-start p-[29px] sm:px-5 rounded-[50%] w-[82px]">
                    <Img
                      className="h-6 md:h-auto object-cover w-6"
                      src="images/img_image.png"
                      alt="image_Two"
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-center justify-start w-auto">
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
                      Click here to upload images about Second Chances TV.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-col gap-4 items-center justify-end pt-4 px-4 rounded-[10px] w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between w-[99%] md:w-full">
            <Text
              className="mb-0.5 sm:mt-0 mt-[9px] text-[22px] text-gray-900 sm:text-lg md:text-xl"
              size="txtPlusJakartaSansRomanBold22"
            >
              Manage Team Members
            </Text>
            <Button
              className="cursor-pointer font-semibold text-center text-sm w-[180px]"
              color="deep_purple_A200_19"
            >
              + Add New Member
            </Button>
          </div>
          <div className="bg-gray-50 border border-gray-900_19 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start p-3 rounded-md w-[99%] md:w-full">
            <Img
              className="h-6 ml-1 md:ml-[0] w-6"
              src="images/img_thumbsup.svg"
              alt="thumbsup"
            />
            <Text
              className="ml-4 md:ml-[0] text-blue_gray-900_87 text-xs"
              size="txtPlusJakartaSansRomanRegular12"
            >
              Members Name
            </Text>
            <Text
              className="md:ml-[0] ml-[299px] text-blue_gray-900_87 text-xs"
              size="txtPlusJakartaSansRomanRegular12"
            >
              Designation
            </Text>
            <Text
              className="md:ml-[0] ml-[299px] text-blue_gray-900_87 text-xs"
              size="txtPlusJakartaSansRomanRegular12"
            >
              Social Networks
            </Text>
            <Text
              className="md:ml-[0] ml-[125px] text-blue_gray-900_87 text-xs"
              size="txtPlusJakartaSansRomanRegular12"
            >
              Actions
            </Text>
          </div>
          <List
            className="flex flex-col items-start w-auto"
            orientation="vertical"
          >
            <div className="border-b border-black-900_19 border-solid flex flex-col items-start justify-start max-w-[1144px] my-0 pl-4 pr-2.5 py-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[104px] items-center justify-between w-auto md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 gap-[221px] items-center justify-between w-auto md:w-full">
                  <div className="flex flex-row sm:gap-10 gap-[235px] items-center justify-between w-auto sm:w-full">
                    <div className="flex flex-row gap-3 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_thumbsup.svg"
                        alt="thumbsup"
                      />
                      <Img
                        className="h-[37px] md:h-auto object-cover rounded-md w-[43px]"
                        src="images/img_rectangle2161_37x43.png"
                        alt="rectangle2161"
                      />
                      <Text
                        className="text-blue_gray-900 text-xs w-auto"
                        size="txtPlusJakartaSansRomanRegular12Bluegray900"
                      >
                        Christopher Nolan
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-900 text-xs w-auto"
                      size="txtPlusJakartaSansRomanRegular12Bluegray900"
                    >
                      CEO, Second Chances TV
                    </Text>
                  </div>
                  <Img
                    className="h-6 w-[102px]"
                    src="images/img_frame899.svg"
                    alt="frame899"
                  />
                </div>
                <Img
                  className="h-6 w-[68px]"
                  src="images/img_grid.svg"
                  alt="grid"
                />
              </div>
            </div>
            <div className="border-b border-black-900_19 border-solid flex flex-col items-start justify-start max-w-[1144px] my-0 pl-4 pr-2.5 py-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[104px] items-center justify-between w-auto md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 gap-[221px] items-center justify-between w-auto md:w-full">
                  <div className="flex flex-row sm:gap-10 gap-[235px] items-center justify-between w-auto sm:w-full">
                    <div className="flex flex-row gap-3 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_thumbsup.svg"
                        alt="thumbsup"
                      />
                      <Img
                        className="h-[37px] md:h-auto object-cover rounded-md w-[43px]"
                        src="images/img_rectangle2161_37x43.png"
                        alt="rectangle2161"
                      />
                      <Text
                        className="text-blue_gray-900 text-xs w-auto"
                        size="txtPlusJakartaSansRomanRegular12Bluegray900"
                      >
                        Christopher Nolan
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-900 text-xs w-auto"
                      size="txtPlusJakartaSansRomanRegular12Bluegray900"
                    >
                      CEO, Second Chances TV
                    </Text>
                  </div>
                  <Img
                    className="h-6 w-[102px]"
                    src="images/img_frame899.svg"
                    alt="frame899"
                  />
                </div>
                <Img
                  className="h-6 w-[68px]"
                  src="images/img_grid.svg"
                  alt="grid"
                />
              </div>
            </div>
            <div className="border-b border-black-900_19 border-solid flex flex-col items-start justify-start max-w-[1144px] my-0 pl-4 pr-2.5 py-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[104px] items-center justify-between w-auto md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 gap-[221px] items-center justify-between w-auto md:w-full">
                  <div className="flex flex-row sm:gap-10 gap-[235px] items-center justify-between w-auto sm:w-full">
                    <div className="flex flex-row gap-3 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_thumbsup.svg"
                        alt="thumbsup"
                      />
                      <Img
                        className="h-[37px] md:h-auto object-cover rounded-md w-[43px]"
                        src="images/img_rectangle2161_37x43.png"
                        alt="rectangle2161"
                      />
                      <Text
                        className="text-blue_gray-900 text-xs w-auto"
                        size="txtPlusJakartaSansRomanRegular12Bluegray900"
                      >
                        Christopher Nolan
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-900 text-xs w-auto"
                      size="txtPlusJakartaSansRomanRegular12Bluegray900"
                    >
                      CEO, Second Chances TV
                    </Text>
                  </div>
                  <Img
                    className="h-6 w-[102px]"
                    src="images/img_frame899.svg"
                    alt="frame899"
                  />
                </div>
                <Img
                  className="h-6 w-[68px]"
                  src="images/img_grid.svg"
                  alt="grid"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start max-w-[1144px] my-0 pl-4 pr-2.5 py-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[104px] items-center justify-between w-auto md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 gap-[221px] items-center justify-between w-auto md:w-full">
                  <div className="flex flex-row sm:gap-10 gap-[235px] items-center justify-between w-auto sm:w-full">
                    <div className="flex flex-row gap-3 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_thumbsup.svg"
                        alt="thumbsup"
                      />
                      <Img
                        className="h-[37px] md:h-auto object-cover rounded-md w-[43px]"
                        src="images/img_rectangle2161_37x43.png"
                        alt="rectangle2161"
                      />
                      <Text
                        className="text-blue_gray-900 text-xs w-auto"
                        size="txtPlusJakartaSansRomanRegular12Bluegray900"
                      >
                        Christopher Nolan
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-900 text-xs w-auto"
                      size="txtPlusJakartaSansRomanRegular12Bluegray900"
                    >
                      CEO, Second Chances TV
                    </Text>
                  </div>
                  <Img
                    className="h-6 w-[102px]"
                    src="images/img_frame899.svg"
                    alt="frame899"
                  />
                </div>
                <Img
                  className="h-6 w-[68px]"
                  src="images/img_grid.svg"
                  alt="grid"
                />
              </div>
            </div>
          </List>
        </div>
      </div>
    </Layout>
  );
};

export default AboutusPage;
