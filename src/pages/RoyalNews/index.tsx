import { Button, Img, Text } from "components";
import Layout from "components/Layout/Layout";
import RoyalNewsItem from "components/RoyalNews/RoyalNewsItem";

const news = [
  {
    banner: "images/img_rectangle50_155x349.png",
    title: "News Heading will be here",
    description: "Lorem ipsum dolor sit amet consectetur. Donec egestas ut",
    comments: "70",
    views: "12.4k",
  },
  {
    banner: "images/img_rectangle50_155x349.png",
    title: "News Heading will be here",
    description: "Lorem ipsum dolor sit amet consectetur. Donec egestas ut",
    comments: "70",
    views: "12.4k",
  },
  {
    banner: "images/img_rectangle50_155x349.png",
    title: "News Heading will be here",
    description: "Lorem ipsum dolor sit amet consectetur. Donec egestas ut",
    comments: "70",
    views: "12.4k",
  },
  {
    banner: "images/img_rectangle50_155x349.png",
    title: "News Heading will be here",
    description: "Lorem ipsum dolor sit amet consectetur. Donec egestas ut",
    comments: "70",
    views: "12.4k",
  },
  {
    banner: "images/img_rectangle50_155x349.png",
    title: "News Heading will be here",
    description: "Lorem ipsum dolor sit amet consectetur. Donec egestas ut",
    comments: "70",
    views: "12.4k",
  },
];

const RoyalNewsPage: React.FC = () => {
  return (
    <Layout title="Royal News">
      <div className="flex flex-col items-center justify-start w-[96%] md:w-full">
        <div className="flex flex-row md:gap-10 items-center justify-between w-full">
          <Text
            className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
            size="txtPlusJakartaSansRomanSemiBold22Gray900"
          >
            News List
          </Text>
          <div className="flex flex-col items-center justify-start">
            <Button
              className="cursor-pointer font-semibold min-w-[129px] text-center text-sm"
              color="deep_purple_A200_19"
            >
              + Add News
            </Button>
          </div>
        </div>

        <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] mt-6 w-full">
          {news?.map((item, index) => (
            <RoyalNewsItem key={index} {...item} />
          ))}
        </div>

        <div className="flex sm:flex-col flex-row gap-6 items-start justify-start mt-[138px] w-auto sm:w-full">
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

export default RoyalNewsPage;
