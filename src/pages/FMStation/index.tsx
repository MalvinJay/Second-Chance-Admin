import { Button, Img, List, Text } from "components";
import Layout from "components/Layout/Layout";

const FMStationPage: React.FC = () => {
  return (
    <Layout title="FM Stations">
      <div className="flex flex-col items-center justify-start w-[96%] md:w-full">
        <div className="flex flex-row md:gap-10 items-center justify-between w-full">
          <Text
            className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
            size="txtPlusJakartaSansRomanSemiBold22Gray900"
          >
            Channel List
          </Text>
          <div className="flex flex-col items-center justify-start">
            <Button
              className="cursor-pointer font-semibold min-w-[146px] text-center text-sm"
              color="deep_purple_A200_19"
            >
              + Add Channel
            </Button>
          </div>
        </div>
        <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-col items-center justify-start mt-8 pt-6 sm:px-5 px-6 rounded-[10px] w-full">
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
                Channel Name
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[200px] text-blue_gray-900_87 text-xs"
              size="txtPlusJakartaSansRomanRegular12"
            >
              Frequency
            </Text>
            <Text
              className="md:ml-[0] ml-[155px] text-blue_gray-900_87 text-xs"
              size="txtPlusJakartaSansRomanRegular12"
            >
              Available Shows (Daily)
            </Text>
            <Text
              className="md:ml-[0] ml-[93px] text-blue_gray-900_87 text-xs"
              size="txtPlusJakartaSansRomanRegular12"
            >
              Status
            </Text>
            <Text
              className="md:ml-[0] ml-[215px] text-blue_gray-900_87 text-xs"
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
              <div className="flex md:flex-1 flex-col items-center justify-start w-auto md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-auto">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-auto sm:w-full">
                    <div className="flex flex-row gap-3 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_thumbsup.svg"
                        alt="thumbsup"
                      />
                      <Text
                        className="text-blue_gray-900 text-xs w-auto"
                        size="txtPlusJakartaSansRomanBold12"
                      >
                        Kumasi
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-900 text-xs w-auto"
                      size="txtPlusJakartaSansRomanRegular12Bluegray900"
                    >
                      88.9 Mhz
                    </Text>
                  </div>
                  <Text
                    className="text-blue_gray-900 text-xs w-auto"
                    size="txtPlusJakartaSansRomanRegular12Bluegray900"
                  >
                    8
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-xs w-auto"
                    size="txtPlusJakartaSansRomanRegular12Bluegray900"
                  >
                    Active
                  </Text>
                </div>
              </div>
              <Img
                className="h-6 w-[68px]"
                src="images/img_grid.svg"
                alt="grid"
              />
            </div>
            <div className="border-b border-black-900_19 border-solid flex md:flex-col flex-row md:gap-10 gap-[98px] items-center justify-start max-w-[1144px] my-0 pl-5 md:pr-10 pr-14 sm:pr-5 py-5 w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-auto md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-auto">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-auto sm:w-full">
                    <div className="flex flex-row gap-3 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_thumbsup.svg"
                        alt="thumbsup"
                      />
                      <Text
                        className="text-blue_gray-900 text-xs w-auto"
                        size="txtPlusJakartaSansRomanBold12"
                      >
                        Kumasi
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-900 text-xs w-auto"
                      size="txtPlusJakartaSansRomanRegular12Bluegray900"
                    >
                      88.9 Mhz
                    </Text>
                  </div>
                  <Text
                    className="text-blue_gray-900 text-xs w-auto"
                    size="txtPlusJakartaSansRomanRegular12Bluegray900"
                  >
                    9
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-xs w-auto"
                    size="txtPlusJakartaSansRomanRegular12Bluegray900"
                  >
                    Active
                  </Text>
                </div>
              </div>
              <Img
                className="h-6 w-[68px]"
                src="images/img_grid.svg"
                alt="grid"
              />
            </div>
            <div className="border-b border-black-900_19 border-solid flex md:flex-col flex-row md:gap-10 gap-[98px] items-center justify-start max-w-[1144px] my-0 pl-5 md:pr-10 pr-14 sm:pr-5 py-5 w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-auto md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-auto">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-auto sm:w-full">
                    <div className="flex flex-row gap-3 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_thumbsup.svg"
                        alt="thumbsup"
                      />
                      <Text
                        className="text-blue_gray-900 text-xs w-auto"
                        size="txtPlusJakartaSansRomanBold12"
                      >
                        Kumasi
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-900 text-xs w-auto"
                      size="txtPlusJakartaSansRomanRegular12Bluegray900"
                    >
                      88.9 Mhz
                    </Text>
                  </div>
                  <Text
                    className="text-blue_gray-900 text-xs w-auto"
                    size="txtPlusJakartaSansRomanRegular12Bluegray900"
                  >
                    -
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-xs w-auto"
                    size="txtPlusJakartaSansRomanRegular12Bluegray900"
                  >
                    Deactivate
                  </Text>
                </div>
              </div>
              <Img
                className="h-6 w-[68px]"
                src="images/img_grid.svg"
                alt="grid"
              />
            </div>
            <div className="border-b border-black-900_19 border-solid flex md:flex-col flex-row md:gap-10 gap-[98px] items-center justify-start max-w-[1144px] my-0 pl-5 md:pr-10 pr-14 sm:pr-5 py-5 w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-auto md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-auto">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-auto sm:w-full">
                    <div className="flex flex-row gap-3 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_thumbsup.svg"
                        alt="thumbsup"
                      />
                      <Text
                        className="text-blue_gray-900 text-xs w-auto"
                        size="txtPlusJakartaSansRomanBold12"
                      >
                        Kumasi
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-900 text-xs w-auto"
                      size="txtPlusJakartaSansRomanRegular12Bluegray900"
                    >
                      88.9 Mhz
                    </Text>
                  </div>
                  <Text
                    className="text-blue_gray-900 text-xs w-auto"
                    size="txtPlusJakartaSansRomanRegular12Bluegray900"
                  >
                    4
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-xs w-auto"
                    size="txtPlusJakartaSansRomanRegular12Bluegray900"
                  >
                    Active
                  </Text>
                </div>
              </div>
              <Img
                className="h-6 w-[68px]"
                src="images/img_grid.svg"
                alt="grid"
              />
            </div>
            <div className="border-b border-black-900_19 border-solid flex md:flex-col flex-row md:gap-10 gap-[98px] items-center justify-start max-w-[1144px] my-0 pl-5 md:pr-10 pr-14 sm:pr-5 py-5 w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-auto md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-auto">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-auto sm:w-full">
                    <div className="flex flex-row gap-3 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_thumbsup.svg"
                        alt="thumbsup"
                      />
                      <Text
                        className="text-blue_gray-900 text-xs w-auto"
                        size="txtPlusJakartaSansRomanBold12"
                      >
                        Kumasi
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-900 text-xs w-auto"
                      size="txtPlusJakartaSansRomanRegular12Bluegray900"
                    >
                      88.9 Mhz
                    </Text>
                  </div>
                  <Text
                    className="text-blue_gray-900 text-xs w-auto"
                    size="txtPlusJakartaSansRomanRegular12Bluegray900"
                  >
                    -
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-xs w-auto"
                    size="txtPlusJakartaSansRomanRegular12Bluegray900"
                  >
                    Deactivate{" "}
                  </Text>
                </div>
              </div>
              <Img
                className="h-6 w-[68px]"
                src="images/img_grid.svg"
                alt="grid"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[98px] items-center justify-start max-w-[1144px] my-0 pl-5 md:pr-10 pr-14 sm:pr-5 py-5 w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-auto md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-auto">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-auto sm:w-full">
                    <div className="flex flex-row gap-3 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_thumbsup.svg"
                        alt="thumbsup"
                      />
                      <Text
                        className="text-blue_gray-900 text-xs w-auto"
                        size="txtPlusJakartaSansRomanBold12"
                      >
                        Kumasi
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-900 text-xs w-auto"
                      size="txtPlusJakartaSansRomanRegular12Bluegray900"
                    >
                      88.9 Mhz
                    </Text>
                  </div>
                  <Text
                    className="text-blue_gray-900 text-xs w-auto"
                    size="txtPlusJakartaSansRomanRegular12Bluegray900"
                  >
                    -
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-xs w-auto"
                    size="txtPlusJakartaSansRomanRegular12Bluegray900"
                  >
                    Deactivate
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
        <div className="flex sm:flex-col flex-row gap-6 items-start justify-start mt-[308px] w-auto sm:w-full">
          <div className="flex flex-col h-8 md:h-auto items-center justify-start px-3 py-2 rounded-lg w-20">
            <Text
              className="text-deep_purple-A200 text-xs w-auto"
              size="txtPlusJakartaSansRomanSemiBold12"
            >
              Previous
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row gap-1 items-center justify-start w-auto sm:w-full">
            <div className="flex flex-col h-8 md:h-auto items-center justify-start p-2 rounded-[50%] w-8">
              <Text
                className="text-center text-gray-500_01 text-xs w-auto"
                size="txtPlusJakartaSansRomanRegular12Gray50001"
              >
                1
              </Text>
            </div>
            <div className="flex flex-col h-8 md:h-auto items-center justify-start p-2 rounded-[50%] w-8">
              <Text
                className="text-center text-gray-500_01 text-xs w-auto"
                size="txtPlusJakartaSansRomanRegular12Gray50001"
              >
                ...
              </Text>
            </div>
            <Button
              className="cursor-pointer h-8 rounded-lg text-center text-xs w-8"
              color="gray_200"
              size="sm"
            >
              10
            </Button>
            <div className="flex flex-col h-8 md:h-auto items-center justify-start p-2 rounded-lg w-8">
              <Text
                className="text-center text-gray-500_01 text-xs w-auto"
                size="txtPlusJakartaSansRomanRegular12Gray50001"
              >
                11
              </Text>
            </div>
            <Button
              className="cursor-pointer font-semibold h-8 rounded-lg text-center text-xs w-8"
              color="deep_purple_A200"
              size="sm"
            >
              12
            </Button>
            <div className="flex flex-col h-8 md:h-auto items-center justify-start p-2 rounded-lg w-8">
              <Text
                className="text-center text-gray-500_01 text-xs w-auto"
                size="txtPlusJakartaSansRomanRegular12Gray50001"
              >
                13
              </Text>
            </div>
            <div className="flex flex-col h-8 md:h-auto items-center justify-start p-2 rounded-lg w-8">
              <Text
                className="text-center text-gray-500_01 text-xs w-auto"
                size="txtPlusJakartaSansRomanRegular12Gray50001"
              >
                14
              </Text>
            </div>
            <div className="flex flex-col h-8 md:h-auto items-center justify-start p-2 rounded-lg w-8">
              <Text
                className="text-center text-gray-500_01 text-xs w-auto"
                size="txtPlusJakartaSansRomanRegular12Gray50001"
              >
                15
              </Text>
            </div>
            <div className="flex flex-col h-8 md:h-auto items-center justify-start p-2 rounded-lg w-8">
              <Text
                className="text-center text-gray-500_01 text-xs w-auto"
                size="txtPlusJakartaSansRomanRegular12Gray50001"
              >
                16
              </Text>
            </div>
            <div className="flex flex-col h-8 md:h-auto items-center justify-start p-2 rounded-lg w-8">
              <Text
                className="text-center text-gray-500_01 text-xs w-auto"
                size="txtPlusJakartaSansRomanRegular12Gray50001"
              >
                ...
              </Text>
            </div>
            <div className="flex flex-col h-8 md:h-auto items-center justify-start p-2 rounded-lg w-8">
              <Text
                className="text-center text-gray-500_01 text-xs"
                size="txtPlusJakartaSansRomanRegular12Gray50001"
              >
                26
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start px-3 py-2 rounded-lg w-auto">
            <Text
              className="text-center text-deep_purple-A200 text-xs w-auto"
              size="txtPlusJakartaSansRomanSemiBold12"
            >
              Next
            </Text>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FMStationPage;
