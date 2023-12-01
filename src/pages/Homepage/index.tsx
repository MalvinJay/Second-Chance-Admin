import { Button, Img, Input, Line, List, Text } from "components";
import Layout from "components/Layout/Layout";

const HomepagePage: React.FC = () => {
  return (
    <Layout title="Home">
      <div className="flex flex-col gap-8 items-center justify-start w-[96%] md:w-full">
        <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-col items-center justify-start p-[18px] rounded-[10px] w-full">
          <div className="flex flex-col gap-[17px] items-start justify-start w-[99%] md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[58%] md:w-full">
              <Text
                className="text-[22px] text-center text-gray-900 sm:text-lg md:text-xl"
                size="txtPlusJakartaSansRomanBold22"
              >
                Header Sections Content
              </Text>
              <Text
                className="text-gray-900 text-lg"
                size="txtPlusJakartaSansRomanBold18"
              >
                Video Preview
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-6 items-start justify-between w-full">
              <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start md:mt-0 mt-3 w-auto sm:w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
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
                  <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-base text-gray-900_7f w-auto"
                      size="txtPlusJakartaSansRomanMedium16"
                    >
                      Paste the youtube link here
                    </Text>
                    <Input
                      name="groupFour_One"
                      placeholder="youtube link will be here"
                      className="p-0 placeholder:text-gray-900_7f text-left text-xs w-full"
                      wrapClassName="border border-gray-900_19 border-solid w-full"
                      color="gray_50"
                      size="sm"
                    ></Input>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-semibold min-w-[140px] text-center text-sm"
                  size="xl"
                  variant="gradient"
                  color="purple_A200_purple_500"
                >
                  Upload Video
                </Button>
              </div>
              <div className="h-[373px] relative w-[54%] md:w-full">
                <Img
                  className="h-[373px] m-auto object-cover rounded-md w-full"
                  src="images/img_rectangle2.png"
                  alt="rectangleTwo"
                />
                <div className="absolute bg-gray-900_7f flex flex-col h-full inset-[0] items-center justify-center m-auto p-[131px] md:px-10 sm:px-5 rounded-md w-full">
                  <Img
                    className="h-[66px] mb-[45px] w-[66px]"
                    src="images/img_overflowmenu.svg"
                    alt="overflowmenu"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-col items-center justify-start pt-6 sm:px-5 px-6 rounded-[10px] w-full">
          <div className="flex flex-col gap-5 items-center justify-start w-full">
            <div className="flex flex-row md:gap-10 items-end justify-between w-full">
              <Text
                className="mb-0.5 mt-[9px] text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtPlusJakartaSansRomanBold22"
              >
                Upcoming Shows
              </Text>
              <Button
                className="cursor-pointer font-semibold min-w-[129px] text-center text-sm"
                color="deep_purple_A200_19"
              >
                + Add Show
              </Button>
            </div>
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <div className="bg-gray-50 border border-gray-900_19 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start p-3 rounded-md w-full">
                <div className="flex flex-row gap-4 items-start justify-start ml-2 md:ml-[0] w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_thumbsup.svg"
                    alt="thumbsup"
                  />
                  <Text
                    className="text-blue_gray-900_87 text-xs w-auto"
                    size="txtPlusJakartaSansRomanRegular12"
                  >
                    Shows Name
                  </Text>
                </div>
                <Text
                  className="ml-52 md:ml-[0] text-blue_gray-900_87 text-xs"
                  size="txtPlusJakartaSansRomanRegular12"
                >
                  Hosted By
                </Text>
                <Text
                  className="md:ml-[0] ml-[156px] text-blue_gray-900_87 text-xs"
                  size="txtPlusJakartaSansRomanRegular12"
                >
                  Time
                </Text>
                <Text
                  className="md:ml-[0] ml-[236px] text-blue_gray-900_87 text-xs"
                  size="txtPlusJakartaSansRomanRegular12"
                >
                  Social Networks
                </Text>
                <Text
                  className="md:ml-[0] ml-[121px] text-blue_gray-900_87 text-xs"
                  size="txtPlusJakartaSansRomanRegular12"
                >
                  Actions
                </Text>
              </div>
              <List
                className="flex flex-col items-start w-auto"
                orientation="vertical"
              >
                <div className="border-b border-black-900_19 border-solid flex md:flex-col flex-row md:gap-10 gap-[98px] items-center justify-start max-w-[1144px] my-0 pl-5 md:pr-10 pr-14 sm:pr-5 py-5 w-full">
                  <div className="flex md:flex-1 md:flex-col flex-row gap-[18px] items-center justify-start w-auto md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-auto md:w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-auto sm:w-full">
                        <div className="flex flex-row gap-3 items-center justify-start w-auto">
                          <Img
                            className="h-6 w-6"
                            src="images/img_thumbsup.svg"
                            alt="thumbsup"
                          />
                          <Img
                            className="h-[37px] md:h-auto object-cover rounded-md w-[43px]"
                            src="images/img_rectangle2161.png"
                            alt="rectangle2161"
                          />
                          <Text
                            className="text-blue_gray-900 text-xs w-auto"
                            size="txtPlusJakartaSansRomanRegular12Bluegray900"
                          >
                            Learn from the Prophet
                          </Text>
                        </div>
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
                        Sunday at 5:30pm
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-[104px]"
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
                <div className="border-b border-black-900_19 border-solid flex md:flex-col flex-row md:gap-10 gap-[98px] items-center justify-start max-w-[1144px] my-0 pl-5 md:pr-10 pr-14 sm:pr-5 py-5 w-full">
                  <div className="flex md:flex-1 md:flex-col flex-row gap-[18px] items-center justify-start w-auto md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-auto md:w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-auto sm:w-full">
                        <div className="flex flex-row gap-3 items-center justify-start w-auto">
                          <Img
                            className="h-6 w-6"
                            src="images/img_thumbsup.svg"
                            alt="thumbsup"
                          />
                          <Img
                            className="h-[37px] md:h-auto object-cover rounded-md w-[43px]"
                            src="images/img_rectangle2161.png"
                            alt="rectangle2161"
                          />
                          <Text
                            className="text-blue_gray-900 text-xs w-auto"
                            size="txtPlusJakartaSansRomanRegular12Bluegray900"
                          >
                            Learn from the Prophet
                          </Text>
                        </div>
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
                        Sunday at 5:30pm
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-[104px]"
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
                <div className="border-b border-black-900_19 border-solid flex md:flex-col flex-row md:gap-10 gap-[98px] items-center justify-start max-w-[1144px] my-0 pl-5 md:pr-10 pr-14 sm:pr-5 py-5 w-full">
                  <div className="flex md:flex-1 md:flex-col flex-row gap-[18px] items-center justify-start w-auto md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-auto md:w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-auto sm:w-full">
                        <div className="flex flex-row gap-3 items-center justify-start w-auto">
                          <Img
                            className="h-6 w-6"
                            src="images/img_thumbsup.svg"
                            alt="thumbsup"
                          />
                          <Img
                            className="h-[37px] md:h-auto object-cover rounded-md w-[43px]"
                            src="images/img_rectangle2161.png"
                            alt="rectangle2161"
                          />
                          <Text
                            className="text-blue_gray-900 text-xs w-auto"
                            size="txtPlusJakartaSansRomanRegular12Bluegray900"
                          >
                            Learn from the Prophet
                          </Text>
                        </div>
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
                        Sunday at 5:30pm
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-[104px]"
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
                <div className="flex md:flex-col flex-row md:gap-10 gap-[98px] items-center justify-start max-w-[1144px] my-0 pl-5 md:pr-10 pr-14 sm:pr-5 py-5 w-full">
                  <div className="flex md:flex-1 md:flex-col flex-row gap-[18px] items-center justify-start w-auto md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-auto md:w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-auto sm:w-full">
                        <div className="flex flex-row gap-3 items-center justify-start w-auto">
                          <Img
                            className="h-6 w-6"
                            src="images/img_thumbsup.svg"
                            alt="thumbsup"
                          />
                          <Img
                            className="h-[37px] md:h-auto object-cover rounded-md w-[43px]"
                            src="images/img_rectangle2161.png"
                            alt="rectangle2161"
                          />
                          <Text
                            className="text-blue_gray-900 text-xs w-auto"
                            size="txtPlusJakartaSansRomanRegular12Bluegray900"
                          >
                            Learn from the Prophet
                          </Text>
                        </div>
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
                        Sunday at 5:30pm
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-[104px]"
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
              </List>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-col items-center justify-start pt-6 sm:px-5 px-6 rounded-[10px] w-full">
          <div className="flex flex-col gap-5 items-center justify-start w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between w-full">
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtPlusJakartaSansRomanBold22"
              >
                Previous Shows
              </Text>
              <Button
                className="cursor-pointer font-semibold min-w-[129px] text-center text-sm"
                color="deep_purple_A200_19"
              >
                + Add Show
              </Button>
            </div>
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <div className="bg-gray-50 border border-gray-900_19 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start p-3 rounded-md w-full">
                <div className="flex flex-row gap-4 items-start justify-start ml-2 md:ml-[0] w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_thumbsup.svg"
                    alt="thumbsup_One"
                  />
                  <Text
                    className="text-blue_gray-900_87 text-xs w-auto"
                    size="txtPlusJakartaSansRomanRegular12"
                  >
                    Shows Name
                  </Text>
                </div>
                <Text
                  className="ml-52 md:ml-[0] text-blue_gray-900_87 text-xs"
                  size="txtPlusJakartaSansRomanRegular12"
                >
                  Hosted By
                </Text>
                <Text
                  className="md:ml-[0] ml-[156px] text-blue_gray-900_87 text-xs"
                  size="txtPlusJakartaSansRomanRegular12"
                >
                  Streamed On
                </Text>
                <Text
                  className="md:ml-[0] ml-[164px] text-blue_gray-900_87 text-xs"
                  size="txtPlusJakartaSansRomanRegular12"
                >
                  Views
                </Text>
                <Text
                  className="md:ml-[0] ml-[174px] text-blue_gray-900_87 text-xs"
                  size="txtPlusJakartaSansRomanRegular12"
                >
                  Actions
                </Text>
              </div>
              <List
                className="flex flex-col items-start w-auto"
                orientation="vertical"
              >
                <div className="border-b border-black-900_19 border-solid flex md:flex-col flex-row gap-[43px] items-center justify-start max-w-[1144px] my-0 pl-5 md:pr-10 pr-14 sm:pr-5 py-5 w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-start w-auto md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-auto">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-auto sm:w-full">
                        <div className="flex flex-row gap-3 items-center justify-start w-auto">
                          <Img
                            className="h-6 w-6"
                            src="images/img_thumbsup.svg"
                            alt="thumbsup"
                          />
                          <Img
                            className="h-[37px] md:h-auto object-cover rounded-md w-[43px]"
                            src="images/img_rectangle2161.png"
                            alt="rectangle2161"
                          />
                          <Text
                            className="text-blue_gray-900 text-xs w-auto"
                            size="txtPlusJakartaSansRomanRegular12Bluegray900"
                          >
                            Learn from the Prophet
                          </Text>
                        </div>
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
                        28 June, 2023 | 5:30 pm
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-xs w-auto"
                        size="txtPlusJakartaSansRomanRegular12Bluegray900"
                      >
                        157496
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-6 w-[68px]"
                    src="images/img_grid.svg"
                    alt="grid"
                  />
                </div>
                <div className="border-b border-black-900_19 border-solid flex md:flex-col flex-row gap-[43px] items-center justify-start max-w-[1144px] my-0 pl-5 md:pr-10 pr-14 sm:pr-5 py-5 w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-start w-auto md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-auto">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-auto sm:w-full">
                        <div className="flex flex-row gap-3 items-center justify-start w-auto">
                          <Img
                            className="h-6 w-6"
                            src="images/img_thumbsup.svg"
                            alt="thumbsup"
                          />
                          <Img
                            className="h-[37px] md:h-auto object-cover rounded-md w-[43px]"
                            src="images/img_rectangle2161.png"
                            alt="rectangle2161"
                          />
                          <Text
                            className="text-blue_gray-900 text-xs w-auto"
                            size="txtPlusJakartaSansRomanRegular12Bluegray900"
                          >
                            Learn from the Prophet
                          </Text>
                        </div>
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
                        28 June, 2023 | 5:30 pm
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-xs w-auto"
                        size="txtPlusJakartaSansRomanRegular12Bluegray900"
                      >
                        157496
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-6 w-[68px]"
                    src="images/img_grid.svg"
                    alt="grid"
                  />
                </div>
                <div className="border-b border-black-900_19 border-solid flex md:flex-col flex-row gap-[43px] items-center justify-start max-w-[1144px] my-0 pl-5 md:pr-10 pr-14 sm:pr-5 py-5 w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-start w-auto md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-auto">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-auto sm:w-full">
                        <div className="flex flex-row gap-3 items-center justify-start w-auto">
                          <Img
                            className="h-6 w-6"
                            src="images/img_thumbsup.svg"
                            alt="thumbsup"
                          />
                          <Img
                            className="h-[37px] md:h-auto object-cover rounded-md w-[43px]"
                            src="images/img_rectangle2161.png"
                            alt="rectangle2161"
                          />
                          <Text
                            className="text-blue_gray-900 text-xs w-auto"
                            size="txtPlusJakartaSansRomanRegular12Bluegray900"
                          >
                            Learn from the Prophet
                          </Text>
                        </div>
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
                        28 June, 2023 | 5:30 pm
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-xs w-auto"
                        size="txtPlusJakartaSansRomanRegular12Bluegray900"
                      >
                        157496
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-6 w-[68px]"
                    src="images/img_grid.svg"
                    alt="grid"
                  />
                </div>
                <div className="flex md:flex-col flex-row gap-[43px] items-center justify-start max-w-[1144px] my-0 pl-5 md:pr-10 pr-14 sm:pr-5 py-5 w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-start w-auto md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-auto">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-auto sm:w-full">
                        <div className="flex flex-row gap-3 items-center justify-start w-auto">
                          <Img
                            className="h-6 w-6"
                            src="images/img_thumbsup.svg"
                            alt="thumbsup"
                          />
                          <Img
                            className="h-[37px] md:h-auto object-cover rounded-md w-[43px]"
                            src="images/img_rectangle2161.png"
                            alt="rectangle2161"
                          />
                          <Text
                            className="text-blue_gray-900 text-xs w-auto"
                            size="txtPlusJakartaSansRomanRegular12Bluegray900"
                          >
                            Learn from the Prophet
                          </Text>
                        </div>
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
                        28 June, 2023 | 5:30 pm
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-xs w-auto"
                        size="txtPlusJakartaSansRomanRegular12Bluegray900"
                      >
                        157496
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-6 w-[68px]"
                    src="images/img_grid.svg"
                    alt="grid"
                  />
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-col items-end justify-start overflow-auto sm:pl-5 pl-6 py-6 rounded-[10px] w-full">
          <div className="overflow-x-auto w-full">
            <div className="flex flex-col gap-[18px] items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 gap-[716px] items-center justify-between w-auto md:w-full">
                <Text
                  className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-auto"
                  size="txtPlusJakartaSansRomanBold22"
                >
                  Advertisement
                </Text>
                <div className="flex flex-row gap-4 items-start justify-start w-auto">
                  <Button
                    className="cursor-pointer font-semibold min-w-[121px] text-center text-sm"
                    color="deep_purple_A200_19"
                  >
                    + Add New
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold min-w-[130px] text-center text-sm"
                    color="deep_purple_A200_19"
                  >
                    Edit Section
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                <div className="h-[292px] relative w-[33%] md:w-full">
                  <Img
                    className="h-[292px] m-auto object-cover rounded-lg w-full"
                    src="images/img_rectangle42.png"
                    alt="rectangleFortyTwo"
                  />
                  <div className="absolute flex flex-col gap-6 h-max inset-y-[0] items-start justify-start left-[7%] my-auto w-auto">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="leading-[28.00px] max-w-[236px] md:max-w-full text-gray-900 text-lg"
                        size="txtPlusJakartaSansRomanBold18"
                      >
                        This space is for an advertisement
                      </Text>
                      <Text
                        className="leading-[22.00px] max-w-[236px] md:max-w-full text-gray-900 text-xs"
                        size="txtPlusJakartaSansRomanRegular12Gray900"
                      >
                        Lorem ipsum dolor sit amet consectetur. Donec egestas ut
                        accumsan nisi
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-semibold leading-[normal] min-w-[93px] text-[10px] text-center"
                      color="gray_900"
                    >
                      Explore Now
                    </Button>
                  </div>
                  <Img
                    className="absolute h-11 object-cover right-[4%] top-[5%] w-[104px]"
                    src="images/img_frame43.png"
                    alt="frameFortyThree"
                  />
                </div>
                <div className="flex md:flex-1 md:flex-col flex-row gap-6 items-center justify-between w-[33%] md:w-full">
                  <div className="h-[292px] relative w-full">
                    <Img
                      className="h-[292px] m-auto object-cover rounded-lg w-full"
                      src="images/img_rectangle42_292x427.png"
                      alt="rectangleFortyTwo_One"
                    />
                    <div className="absolute flex flex-col gap-6 h-max inset-y-[0] items-start justify-start left-[7%] my-auto w-auto">
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <Text
                          className="leading-[28.00px] max-w-[236px] md:max-w-full text-gray-900 text-lg"
                          size="txtPlusJakartaSansRomanBold18"
                        >
                          This space is for an advertisement
                        </Text>
                        <Text
                          className="leading-[22.00px] max-w-[236px] md:max-w-full text-gray-900 text-xs"
                          size="txtPlusJakartaSansRomanRegular12Gray900"
                        >
                          Lorem ipsum dolor sit amet consectetur. Donec egestas
                          ut accumsan nisi
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] min-w-[93px] text-[10px] text-center"
                        color="gray_900"
                      >
                        Explore Now
                      </Button>
                    </div>
                    <Img
                      className="absolute h-11 object-cover right-[4%] top-[5%] w-[104px]"
                      src="images/img_frame43.png"
                      alt="frameFortyTwo"
                    />
                  </div>
                  <Img
                    className="h-[294px] sm:h-auto object-cover rounded-lg w-full"
                    src="images/img_rectangle42_294x426.png"
                    alt="rectangleFortyTwo_Two"
                  />
                </div>
                <div className="h-[294px] relative w-[33%] md:w-full">
                  <div className="flex flex-col h-full items-center justify-start my-auto w-[57%]">
                    <div className="h-[294px] w-full"></div>
                  </div>
                  <div className="absolute bg-gradient2  flex flex-col h-full inset-[0] justify-center m-auto p-4 rounded-lg w-full">
                    <Img
                      className="h-11 md:h-auto md:ml-[0] ml-[290px] mt-0.5 object-cover w-[104px] sm:w-full"
                      src="images/img_frame43.png"
                      alt="frame971"
                    />
                    <div className="flex flex-col gap-6 items-start justify-start mb-[46px] ml-4 md:ml-[0] mr-[142px] w-auto">
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <Text
                          className="leading-[28.00px] max-w-[236px] md:max-w-full text-gray-900 text-lg"
                          size="txtPlusJakartaSansRomanBold18"
                        >
                          This space is for an advertisement
                        </Text>
                        <Text
                          className="leading-[22.00px] max-w-[236px] md:max-w-full text-gray-900 text-xs"
                          size="txtPlusJakartaSansRomanRegular12Gray900"
                        >
                          Lorem ipsum dolor sit amet consectetur. Donec egestas
                          ut accumsan nisi
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] min-w-[93px] text-[10px] text-center"
                        color="gray_900"
                      >
                        Explore Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-col gap-[21px] items-start justify-end p-5 rounded-[10px] w-full">
          <Text
            className="ml-1 md:ml-[0] mt-0.5 text-[22px] text-gray-900 sm:text-lg md:text-xl"
            size="txtPlusJakartaSansRomanBold22"
          >
            Online Testimonies
          </Text>
          <Input
            name="groupEighteen"
            placeholder=""
            className="p-0 w-full"
            wrapClassName="border border-gray-900_19 border-solid flex ml-1 md:ml-[0] w-full"
            prefix={
              <Img
                className="h-6 mr-[35px] my-auto"
                src="images/img_thumbsup.svg"
                alt="thumbs_up"
              />
            }
            color="gray_50"
            size="xs"
          ></Input>
          <div className="h-[268px] md:h-[772px] ml-1 md:ml-[0] relative w-full">
            <List
              className="absolute flex flex-col gap-10 inset-[0] items-start m-auto w-auto"
              orientation="vertical"
            >
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
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
                  className="md:ml-[0] ml-[126px] md:mt-0 mt-[11px] text-blue_gray-900 text-xs"
                  size="txtPlusJakartaSansRomanRegular12Bluegray900"
                >
                  Lorem ipsum dolor sit amet consectetur. In morbi senectus.
                </Text>
                <Text
                  className="md:ml-[0] ml-[83px] md:mt-0 mt-[11px] text-blue_gray-900 text-xs"
                  size="txtPlusJakartaSansRomanRegular12Bluegray900"
                >
                  25 June, 2023
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start md:ml-[0] ml-[102px] w-auto">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[94px]"
                    leftIcon={
                      <Img
                        className="h-4"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                    }
                    color="light_green_700_19"
                  >
                    <div className="font-semibold text-[10px] text-left">
                      Approve
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[84px]"
                    leftIcon={
                      <Img
                        className="h-4"
                        src="images/img_close.svg"
                        alt="close"
                      />
                    }
                    color="red_500_19"
                  >
                    <div className="font-semibold text-[10px] text-left">
                      Reject
                    </div>
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
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
                  className="md:ml-[0] ml-[126px] md:mt-0 mt-3 text-blue_gray-900 text-xs"
                  size="txtPlusJakartaSansRomanRegular12Bluegray900"
                >
                  Lorem ipsum dolor sit amet consectetur. In morbi senectus.
                </Text>
                <Text
                  className="md:ml-[0] ml-[83px] md:mt-0 mt-3 text-blue_gray-900 text-xs"
                  size="txtPlusJakartaSansRomanRegular12Bluegray900"
                >
                  25 June, 2023
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start md:ml-[0] ml-[102px] md:mt-0 mt-0.5 w-auto">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[94px]"
                    leftIcon={
                      <Img
                        className="h-4"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                    }
                    color="light_green_700_19"
                  >
                    <div className="font-semibold text-[10px] text-left">
                      Approve
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[84px]"
                    leftIcon={
                      <Img
                        className="h-4"
                        src="images/img_close.svg"
                        alt="close"
                      />
                    }
                    color="red_500_19"
                  >
                    <div className="font-semibold text-[10px] text-left">
                      Reject
                    </div>
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
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
                  className="md:ml-[0] ml-[126px] md:mt-0 mt-[11px] text-blue_gray-900 text-xs"
                  size="txtPlusJakartaSansRomanRegular12Bluegray900"
                >
                  Lorem ipsum dolor sit amet consectetur. In morbi senectus.
                </Text>
                <Text
                  className="md:ml-[0] ml-[83px] md:mt-0 mt-[11px] text-blue_gray-900 text-xs"
                  size="txtPlusJakartaSansRomanRegular12Bluegray900"
                >
                  25 June, 2023
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start md:ml-[0] ml-[102px] w-auto">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[94px]"
                    leftIcon={
                      <Img
                        className="h-4"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                    }
                    color="light_green_700_19"
                  >
                    <div className="font-semibold text-[10px] text-left">
                      Approve
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[84px]"
                    leftIcon={
                      <Img
                        className="h-4"
                        src="images/img_close.svg"
                        alt="close"
                      />
                    }
                    color="red_500_19"
                  >
                    <div className="font-semibold text-[10px] text-left">
                      Reject
                    </div>
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
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
                  className="md:ml-[0] ml-[126px] md:mt-0 mt-[11px] text-blue_gray-900 text-xs"
                  size="txtPlusJakartaSansRomanRegular12Bluegray900"
                >
                  Lorem ipsum dolor sit amet consectetur. In morbi senectus.
                </Text>
                <Text
                  className="md:ml-[0] ml-[83px] md:mt-0 mt-[11px] text-blue_gray-900 text-xs"
                  size="txtPlusJakartaSansRomanRegular12Bluegray900"
                >
                  25 June, 2023
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start md:ml-[0] ml-[102px] w-auto">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[94px]"
                    leftIcon={
                      <Img
                        className="h-4"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                    }
                    color="light_green_700_19"
                  >
                    <div className="font-semibold text-[10px] text-left">
                      Approve
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[84px]"
                    leftIcon={
                      <Img
                        className="h-4"
                        src="images/img_close.svg"
                        alt="close"
                      />
                    }
                    color="red_500_19"
                  >
                    <div className="font-semibold text-[10px] text-left">
                      Reject
                    </div>
                  </Button>
                </div>
              </div>
            </List>
            <div className="absolute flex flex-col md:gap-10 gap-[76px] h-max inset-[0] items-center justify-center m-auto w-full">
              <Line className="bg-gray-900_19 h-px w-full" />
              <Line className="bg-gray-900_19 h-px w-full" />
              <Line className="bg-gray-900_19 h-px w-full" />
            </div>
          </div>
        </div>
        <div className="bg-white-A700 border border-gray-900_19 border-solid md:h-[1285px] sm:h-[344px] h-[388px] p-5 relative rounded-[10px] w-full">
          <div className="absolute flex flex-col gap-6 h-max inset-[0] items-start justify-start m-auto w-auto">
            <Text
              className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-auto"
              size="txtPlusJakartaSansRomanBold22"
            >
              Royal News
            </Text>
            <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-[1143px] w-full">
              <div className="bg-gray-50 border border-purple-A400 border-solid flex md:flex-1 flex-col items-center justify-start p-8 sm:px-5 rounded-lg w-[38%] md:w-full">
                <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <div className="bg-white-A700 border border-purple-A400 border-solid flex flex-col h-[82px] items-center justify-start p-[29px] sm:px-5 rounded-[50%] w-[82px]">
                      <Img
                        className="h-6 md:h-auto object-cover w-6"
                        src="images/img_documenttext.png"
                        alt="documenttext"
                      />
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtPlusJakartaSansRomanBold16"
                      >
                        Add new Royal News
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[324px] md:max-w-full text-blue_gray-900_87 text-center text-xs"
                        size="txtPlusJakartaSansRomanRegular12"
                      >
                        Lorem ipsum dolor sit amet consectetur. Turpis mi ut
                        bibendum vitae intege
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="!text-purple-A200 cursor-pointer font-semibold text-center text-xs w-[324px]"
                    variant="gradient"
                    color="purple_A200_19_purple_500_19"
                  >
                    + Add new
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-900_19 border-solid flex md:flex-1 flex-col items-end justify-start overflow-auto rounded-lg w-[38%] md:w-full">
                <List
                  className="sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 flex-col gap-6 items-center justify-start mb-[22px] sm:ml-[0] w-full">
                    <div className="h-[162px] relative w-full">
                      <Img
                        className="h-[162px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                        src="images/img_rectangle50.png"
                        alt="rectangleFifty"
                      />
                      <Img
                        className="absolute h-11 object-cover right-[4%] top-[10%] w-[104px]"
                        src="images/img_frame43.png"
                        alt="frameFortyTwo"
                      />
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtPlusJakartaSansRomanBold20"
                      >
                        News title will be here
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[387px] md:max-w-full text-gray-900_7f text-sm"
                        size="txtPlusJakartaSansRomanRegular14"
                      >
                        Lorem ipsum dolor sit amet consectetur. Donec egestas ut
                        accumsan nisi
                      </Text>
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-1 flex-col h-[292px] items-center justify-start sm:ml-[0] pb-[22px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group136.svg')",
                    }}
                  >
                    <div className="flex flex-col gap-6 items-center justify-start w-full">
                      <div className="h-[162px] relative w-full">
                        <Img
                          className="h-[162px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                          src="images/img_rectangle51.png"
                          alt="rectangleFiftyOne"
                        />
                        <Img
                          className="absolute h-11 object-cover right-[4%] top-[10%] w-[104px]"
                          src="images/img_frame43.png"
                          alt="frame928"
                        />
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtPlusJakartaSansRomanBold20"
                        >
                          News title will be here
                        </Text>
                        <Text
                          className="leading-[24.00px] max-w-[386px] md:max-w-full text-gray-900_7f text-sm"
                          size="txtPlusJakartaSansRomanRegular14"
                        >
                          Lorem ipsum dolor sit amet consectetur. Donec egestas
                          ut accumsan nisi
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="h-[292px] w-[22%]"></div>
            </div>
          </div>
          <Img
            className="absolute h-8 object-cover right-[2%] top-[5%] w-[72px]"
            src="images/img_frame42.png"
            alt="frameFortyTwo_One"
          />
        </div>
      </div>
    </Layout>
  );
};

export default HomepagePage;
