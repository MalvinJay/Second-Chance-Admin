import { Button, Img, Input, Line, Text } from "components";
import Layout from "components/Layout/Layout";

const VOGLiveSeriesPage: React.FC = () => {
  return (
    <Layout title="VOG Live Services">
      <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-col items-center justify-end mt-6 p-5 rounded-[10px] w-[96%] md:w-full">
        <div className="flex flex-col items-center justify-start mt-1 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
            <Text
              className="mb-0.5 md:mt-0 mt-[9px] text-[22px] text-gray-900 sm:text-lg md:text-xl"
              size="txtPlusJakartaSansRomanBold22"
            >
              Live Services Listings
            </Text>
            <div className="bg-gray-900_19 flex flex-col h-10 md:h-auto items-center justify-center md:ml-[0] ml-[743px] px-3 py-2 rounded-md w-auto">
              <Img
                className="h-5 w-5"
                src="images/img_thumbsup_blue_gray_900_20x20.svg"
                alt="thumbsup"
              />
            </div>
            <Button
              className="cursor-pointer font-semibold min-w-[121px] md:ml-[0] ml-[9px] text-center text-sm"
              color="deep_purple_A200_19"
            >
              + Add New
            </Button>
          </div>
          <Input
            name="groupTwentyThree"
            placeholder=""
            className="p-0 w-full"
            wrapClassName="border border-gray-900_19 border-solid flex mt-4 w-full"
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
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-5 w-[95%] md:w-full">
            <Img
              className="h-6 w-6"
              src="images/img_thumbsup.svg"
              alt="thumbsup_One"
            />
            <Img
              className="h-10 sm:h-auto ml-3.5 md:ml-[0] object-cover rounded-md w-[5%] md:w-full"
              src="images/img_rectangle2161_40x48.png"
              alt="rectangle2161"
            />
            <Text
              className="ml-2.5 md:ml-[0] text-blue_gray-900 text-xs"
              size="txtPlusJakartaSansRomanRegular12Bluegray900"
            >
              Lorem ipsum dolor sit amet...
            </Text>
            <Text
              className="ml-28 md:ml-[0] text-blue_gray-900 text-xs"
              size="txtPlusJakartaSansRomanRegular12Bluegray900"
            >
              Stephen Adom
            </Text>
            <Text
              className="md:ml-[0] ml-[124px] text-blue_gray-900 text-xs"
              size="txtPlusJakartaSansRomanRegular12Bluegray900"
            >
              Sunday at 5:30pm
            </Text>
            <Img
              className="h-6 md:ml-[0] ml-[135px] w-[104px]"
              src="images/img_frame899.svg"
              alt="frame899"
            />
            <Img
              className="h-6 md:ml-[0] ml-[89px] w-[68px]"
              src="images/img_grid.svg"
              alt="grid"
            />
          </div>
          <Line className="bg-gray-900_19 h-px mt-5 w-full" />
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[19px] w-[95%] md:w-full">
            <Img
              className="h-6 w-6"
              src="images/img_thumbsup.svg"
              alt="thumbsup_Two"
            />
            <Img
              className="h-10 sm:h-auto ml-3.5 md:ml-[0] object-cover rounded-md w-[5%] md:w-full"
              src="images/img_rectangle2161_40x48.png"
              alt="rectangle2161_One"
            />
            <Text
              className="ml-2.5 md:ml-[0] text-blue_gray-900 text-xs"
              size="txtPlusJakartaSansRomanRegular12Bluegray900"
            >
              Lorem ipsum dolor sit amet...
            </Text>
            <Text
              className="ml-28 md:ml-[0] text-blue_gray-900 text-xs"
              size="txtPlusJakartaSansRomanRegular12Bluegray900"
            >
              Lauren Kyle
            </Text>
            <Text
              className="md:ml-[0] ml-[145px] text-blue_gray-900 text-xs"
              size="txtPlusJakartaSansRomanRegular12Bluegray900"
            >
              Sunday at 5:30pm
            </Text>
            <Img
              className="h-6 md:ml-[0] ml-[135px] w-[104px]"
              src="images/img_frame899.svg"
              alt="frame899_One"
            />
            <Img
              className="h-6 md:ml-[0] ml-[89px] w-[68px]"
              src="images/img_grid.svg"
              alt="grid_One"
            />
          </div>
          <Line className="bg-gray-900_19 h-px mt-5 w-full" />
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[19px] w-[95%] md:w-full">
            <Img
              className="h-6 w-6"
              src="images/img_thumbsup.svg"
              alt="thumbsup_Three"
            />
            <Img
              className="h-10 sm:h-auto ml-3.5 md:ml-[0] object-cover rounded-md w-[5%] md:w-full"
              src="images/img_rectangle2161_40x48.png"
              alt="rectangle2161_Two"
            />
            <Text
              className="ml-2.5 md:ml-[0] text-blue_gray-900 text-xs"
              size="txtPlusJakartaSansRomanRegular12Bluegray900"
            >
              Lorem ipsum dolor sit amet...
            </Text>
            <Text
              className="ml-28 md:ml-[0] text-blue_gray-900 text-xs"
              size="txtPlusJakartaSansRomanRegular12Bluegray900"
            >
              Alex baker
            </Text>
            <Text
              className="md:ml-[0] ml-[150px] text-blue_gray-900 text-xs"
              size="txtPlusJakartaSansRomanRegular12Bluegray900"
            >
              Sunday at 5:30pm
            </Text>
            <Img
              className="h-6 md:ml-[0] ml-[135px] w-[104px]"
              src="images/img_frame899.svg"
              alt="frame899_Two"
            />
            <Img
              className="h-6 md:ml-[0] ml-[89px] w-[68px]"
              src="images/img_grid.svg"
              alt="grid_Two"
            />
          </div>
          <Line className="bg-gray-900_19 h-px mt-5 w-full" />
          <div className="flex h-10 sm:h-[117px] md:h-[191px] justify-end mt-[19px] relative w-[95%] md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-5 h-full items-center justify-end mb-2.5 ml-24 mt-auto w-[55%]">
              <Text
                className="text-blue_gray-900 text-xs"
                size="txtPlusJakartaSansRomanRegular12Bluegray900"
              >
                Lorem ipsum dolor sit amet...
              </Text>
              <Text
                className="ml-28 sm:ml-[0] text-blue_gray-900 text-xs"
                size="txtPlusJakartaSansRomanRegular12Bluegray900"
              >
                Henry Ayensu
              </Text>
              <Text
                className="sm:ml-[0] ml-[133px] text-blue_gray-900 text-xs"
                size="txtPlusJakartaSansRomanRegular12Bluegray900"
              >
                Sunday at 5:30pm
              </Text>
            </div>
            <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-center justify-center m-auto w-full">
              <Img
                className="h-6 w-6"
                src="images/img_thumbsup.svg"
                alt="thumbsup_Four"
              />
              <Img
                className="md:flex-1 h-10 sm:h-auto ml-3.5 md:ml-[0] object-cover rounded-md w-[5%] md:w-full"
                src="images/img_rectangle2161_40x48.png"
                alt="rectangle2161_Three"
              />
              <Img
                className="h-6 md:ml-[0] ml-[738px] w-[104px]"
                src="images/img_frame899.svg"
                alt="frame899_Three"
              />
              <Img
                className="h-6 md:ml-[0] ml-[89px] w-[68px]"
                src="images/img_grid.svg"
                alt="grid_Three"
              />
            </div>
          </div>
          <Line className="bg-gray-900_19 h-px mt-5 w-full" />
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[19px] w-[95%] md:w-full">
            <Img
              className="h-6 w-6"
              src="images/img_thumbsup.svg"
              alt="thumbsup_Five"
            />
            <Img
              className="h-10 sm:h-auto ml-3.5 md:ml-[0] object-cover rounded-md w-[5%] md:w-full"
              src="images/img_rectangle2161_40x48.png"
              alt="rectangle2161_Four"
            />
            <Text
              className="ml-2.5 md:ml-[0] text-blue_gray-900 text-xs"
              size="txtPlusJakartaSansRomanRegular12Bluegray900"
            >
              Lorem ipsum dolor sit amet...
            </Text>
            <Text
              className="ml-28 md:ml-[0] text-blue_gray-900 text-xs"
              size="txtPlusJakartaSansRomanRegular12Bluegray900"
            >
              Walker Max
            </Text>
            <Text
              className="md:ml-[0] ml-[145px] text-blue_gray-900 text-xs"
              size="txtPlusJakartaSansRomanRegular12Bluegray900"
            >
              Sunday at 5:30pm
            </Text>
            <Img
              className="h-6 md:ml-[0] ml-[135px] w-[104px]"
              src="images/img_frame899.svg"
              alt="frame899_Four"
            />
            <Img
              className="h-6 md:ml-[0] ml-[89px] w-[68px]"
              src="images/img_grid.svg"
              alt="grid_Four"
            />
          </div>
          <Line className="bg-gray-900_19 h-px mt-5 w-full" />
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[19px] w-[95%] md:w-full">
            <Img
              className="h-6 w-6"
              src="images/img_thumbsup.svg"
              alt="thumbsup_Six"
            />
            <Img
              className="h-10 sm:h-auto ml-3.5 md:ml-[0] object-cover rounded-md w-[5%] md:w-full"
              src="images/img_rectangle2161_40x48.png"
              alt="rectangle2161_Five"
            />
            <Text
              className="ml-2.5 md:ml-[0] text-blue_gray-900 text-xs"
              size="txtPlusJakartaSansRomanRegular12Bluegray900"
            >
              Lorem ipsum dolor sit amet...
            </Text>
            <Text
              className="ml-28 md:ml-[0] text-blue_gray-900 text-xs"
              size="txtPlusJakartaSansRomanRegular12Bluegray900"
            >
              Walker Max
            </Text>
            <Text
              className="md:ml-[0] ml-[145px] text-blue_gray-900 text-xs"
              size="txtPlusJakartaSansRomanRegular12Bluegray900"
            >
              Sunday at 5:30pm
            </Text>
            <Img
              className="h-6 md:ml-[0] ml-[135px] w-[104px]"
              src="images/img_frame899.svg"
              alt="frame899_Five"
            />
            <Img
              className="h-6 md:ml-[0] ml-[89px] w-[68px]"
              src="images/img_grid.svg"
              alt="grid_Five"
            />
          </div>
          <Line className="bg-gray-900_19 h-px mt-5 w-full" />
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[19px] w-[95%] md:w-full">
            <Img
              className="h-6 w-6"
              src="images/img_thumbsup.svg"
              alt="thumbsup_Seven"
            />
            <Img
              className="h-10 sm:h-auto ml-3.5 md:ml-[0] object-cover rounded-md w-[5%] md:w-full"
              src="images/img_rectangle2161_40x48.png"
              alt="rectangle2161_Six"
            />
            <Text
              className="ml-2.5 md:ml-[0] text-blue_gray-900 text-xs"
              size="txtPlusJakartaSansRomanRegular12Bluegray900"
            >
              Lorem ipsum dolor sit amet...
            </Text>
            <Text
              className="ml-28 md:ml-[0] text-blue_gray-900 text-xs"
              size="txtPlusJakartaSansRomanRegular12Bluegray900"
            >
              Walker Max
            </Text>
            <Text
              className="md:ml-[0] ml-[145px] text-blue_gray-900 text-xs"
              size="txtPlusJakartaSansRomanRegular12Bluegray900"
            >
              Sunday at 5:30pm
            </Text>
            <Img
              className="h-6 md:ml-[0] ml-[135px] w-[104px]"
              src="images/img_frame899.svg"
              alt="frame899_Six"
            />
            <Img
              className="h-6 md:ml-[0] ml-[89px] w-[68px]"
              src="images/img_grid.svg"
              alt="grid_Six"
            />
          </div>
          <Line className="bg-gray-900_19 h-px mt-5 w-full" />
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[19px] w-[95%] md:w-full">
            <Img
              className="h-6 w-6"
              src="images/img_thumbsup.svg"
              alt="thumbsup_Eight"
            />
            <Img
              className="h-10 sm:h-auto ml-3.5 md:ml-[0] object-cover rounded-md w-[5%] md:w-full"
              src="images/img_rectangle2161_40x48.png"
              alt="rectangle2161_Seven"
            />
            <Text
              className="ml-2.5 md:ml-[0] text-blue_gray-900 text-xs"
              size="txtPlusJakartaSansRomanRegular12Bluegray900"
            >
              Lorem ipsum dolor sit amet...
            </Text>
            <Text
              className="ml-28 md:ml-[0] text-blue_gray-900 text-xs"
              size="txtPlusJakartaSansRomanRegular12Bluegray900"
            >
              Walker Max
            </Text>
            <Text
              className="md:ml-[0] ml-[145px] text-blue_gray-900 text-xs"
              size="txtPlusJakartaSansRomanRegular12Bluegray900"
            >
              Sunday at 5:30pm
            </Text>
            <Img
              className="h-6 md:ml-[0] ml-[135px] w-[104px]"
              src="images/img_frame899.svg"
              alt="frame899_Seven"
            />
            <Img
              className="h-6 md:ml-[0] ml-[89px] w-[68px]"
              src="images/img_grid.svg"
              alt="grid_Seven"
            />
          </div>
        </div>
      </div>
      <div className="flex sm:flex-col flex-row gap-6 items-start justify-start mt-[76px] w-auto sm:w-full">
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
    </Layout>
  );
};

export default VOGLiveSeriesPage;
