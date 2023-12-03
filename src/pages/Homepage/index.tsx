"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { Button, Img, Input, List, Text } from "components";
import Layout from "components/Layout/Layout";
import CustomTable from "components/Shared/Table/CustomTable";
import { Checkbox } from "../../components/Shared/Checkbox";
import SliderItem from "components/Shared/Slider/SliderItem";
import AddArticle from "components/RoyalNews/AddArticle";
import ArticleItem from "components/RoyalNews/ArticleItem";
import AddEditShow from "components/AddEditShow/AddEditShow";
import MyModal from "components/Shared/Modal/Modal";

// Upcoming shows
const upcomingColumns = [
  {
    label: "Shows Name",
    renderCell: (item) => item.name,
    select: {
      renderHeaderCellSelect: () => (
        <Checkbox
        // checked={select.state.all}
        // indeterminate={!select.state.all && !select.state.none}
        // onChange={select.fns.onToggleAll}
        />
      ),
      renderCellSelect: (item) => (
        <Checkbox
        // checked={select.state.ids.includes(item.id)}
        // onChange={() => select.fns.onToggleById(item.id)}
        />
      ),
    },
  },
  { label: "Hosted By", renderCell: (item) => item.host },
  { label: "Time", renderCell: (item) => item.created_at },
  { label: "Social Networks", renderCell: (item) => item.socials },
  { label: "Actions", renderCell: (item) => item.actions },
];
const upcoming = [
  {
    name: "new",
    hostedBy: "3rd Dec. 2023",
    time: "TASK",
    social: (
      <div className="flex items-center gap-2">
        <img src="images/img_frame899.svg" />
      </div>
    ),
    actions: (
      <div className="flex items-center gap-2">
        <img src="images/img_grid.svg" alt="" />
      </div>
    ),
  },
  {
    name: "Obrapa",
    hostedBy: "3rd Dec. 2023",
    time: "TASK",
    social: (
      <div className="flex items-center gap-2">
        <img src="images/img_frame899.svg" />
      </div>
    ),
    actions: (
      <div className="flex items-center gap-2">
        <img src="images/img_grid.svg" alt="" />
      </div>
    ),
  },
];

// Previous show
const previousColumns = [
  {
    label: "Show Name",
    renderCell: (item) => item.name,
    select: {
      renderHeaderCellSelect: () => <Checkbox />,
      renderCellSelect: (item) => <Checkbox />,
    },
  },
  { label: "Hosted By", renderCell: (item) => item.host },
  { label: "Streamed On", renderCell: (item) => item.created_at },
  { label: "Views", renderCell: (item) => item.socials },
  { label: "Actions", renderCell: (item) => item.actions },
];
const previous = [
  {
    name: (
      <div className="flex gap-4 items-center">
        <Img
          className="h-[37px] md:h-auto object-cover rounded-md w-[43px]"
          src="images/img_rectangle2161.png"
          alt="rectangle2161"
        />
        <span>Miracle hour</span>
      </div>
    ),
    hostedBy: "Malvin Jay",
    streamed_on: "27 June, 2023 | 5:30 pm",
    views: "4856",
    actions: (
      <div className="flex items-center gap-2">
        <img src="images/img_grid.svg" alt="" />
      </div>
    ),
  },
  {
    name: (
      <div className="flex gap-4 items-center">
        <Img
          className="h-[37px] md:h-auto object-cover rounded-md w-[43px]"
          src="images/img_rectangle2161.png"
          alt="rectangle2161"
        />
        <span>Learn from the prophet</span>
      </div>
    ),
    hostedBy: "Malvin Jay",
    streamed_on: "28 June, 2023 | 5:30 pm",
    views: "4856",
    actions: (
      <div className="flex items-center gap-2">
        <img src="images/img_grid.svg" alt="" />
      </div>
    ),
  },
];

// Advertisements
const advertisements = [
  {
    title: "This space is for an advertisement",
    banner: "images/img_rectangle42.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Donec egestas ut accumsan nisi",
    cta: "Explore Now",
    className: "sm:w-1/2 w-[427px]",
  },
  {
    title: "This space is for an advertisement",
    banner: "images/img_rectangle42_292x427.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Donec egestas ut accumsan nisi",
    cta: "Explore Now",
    className: "sm:w-1/2 w-[427px]",
  },
  {
    title: "This space is for an advertisement",
    banner: "images/img_rectangle42_294x426.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Donec egestas ut accumsan nisi",
    cta: "Explore Now",
    className: "sm:w-1/2 w-[427px]",
  },
];

// Online Testimonies show
const onlineColumns = [
  {
    label: "Sent By",
    renderCell: (item) => item.sent_by,
    select: {
      renderHeaderCellSelect: () => <Checkbox />,
      renderCellSelect: (item) => <Checkbox />,
    },
  },
  { label: "Review", renderCell: (item) => item.review },
  { label: "Sent On", renderCell: (item) => item.sent_on },
  { label: "Actions", renderCell: (item) => item.actions },
];
const testimonies = [
  {
    sent_by: (
      <div className="flex gap-3 items-center relative">
        <Img
          className="h-[37px] md:h-auto object-cover rounded-md w-[43px]"
          src="images/img_rectangle2161_37x43.png"
          alt="rectangle2161"
        />
        <span>Christopher Nolan</span>
      </div>
    ),
    review: "Lorem ipsum dolor sit amet consectetur. In morbi senectus.",
    sent_on: "25 June, 2023",
    actions: (
      <div className="flex gap-2 items-center">
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[94px] gap-1"
          leftIcon={
            <Img
              className="h-4"
              src="images/img_checkmark.svg"
              alt="checkmark"
            />
          }
          color="light_green_700_19"
        >
          <div className="font-semibold text-[10px] text-left">Approve</div>
        </Button>
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[84px] gap-1"
          leftIcon={
            <Img className="h-4" src="images/img_close.svg" alt="close" />
          }
          color="red_500_19"
        >
          <div className="font-semibold text-[10px] text-left">Reject</div>
        </Button>
      </div>
    ),
  },
];

const HomepagePage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout title="Home">
      <div className="flex flex-col gap-8 items-center justify-start w-full px-6">
        <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-col items-center justify-start p-[18px] rounded-[10px] w-full">
          <div className="grid grid-cols-2 w-full gap-6">
            <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start md:mt-0 w-full">
              <Text
                className="text-[22px] text-center text-gray-900 sm:text-lg md:text-xl"
                size="txtPlusJakartaSansRomanBold22"
              >
                Header Sections Content
              </Text>
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
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
                <div className="flex flex-col gap-4 items-start justify-start w-full">
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
            <div className="w-full">
              <Text
                className="text-gray-900 text-lg"
                size="txtPlusJakartaSansRomanBold18"
              >
                Video Preview
              </Text>
              <div className="h-[373px] relative w-full mt-5">
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
                onClick={() => setIsOpen(true)}
              >
                + Add Show
              </Button>
            </div>

            <CustomTable tableHeading={upcomingColumns} data={upcoming} />
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
            </div>

            <CustomTable tableHeading={previousColumns} data={previous} />
          </div>
        </div>

        <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-col items-end justify-start overflow-auto p-6 rounded-[10px] w-full">
          <div className="overflow-x-auto w-full">
            <div className="flex flex-col gap-[18px] items-start justify-start w-full mb-4">
              <div className="flex justify-between w-full">
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

              <div className="flex items-center gap-6 w-full overflow-auto">
                {advertisements.map((item, index) => (
                  <SliderItem key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-col gap-[21px] items-start justify-end p-5 rounded-[10px] w-full">
          <div className="flex flex-row md:gap-10 items-center justify-between w-full">
            <Text
              className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
              size="txtPlusJakartaSansRomanBold22"
            >
              Online Testimonies
            </Text>
          </div>

          <CustomTable tableHeading={onlineColumns} data={testimonies} />
        </div>

        <div className="bg-white-A700 border border-gray-900_19 border-solid md:h-[1285px] sm:h-[344px] h-[388px] p-5 relative rounded-[10px] w-full">
          <div className="flex flex-col gap-6 h-max items-start justify-start m-auto w-auto">
            <Text
              className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-auto"
              size="txtPlusJakartaSansRomanBold22"
            >
              Royal News
            </Text>

            <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-[1143px] w-full">
              <AddArticle />

              <section className="royal-news-items">
                <div className="bg-white-A700 flex md:flex-1 flex-col items-end justify-start overflow-auto rounded-lg w-full">
                  <List
                    className="sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 w-full"
                    orientation="horizontal"
                  >
                    <ArticleItem
                      banner="images/img_rectangle51.png"
                      title="News title will be here"
                      description="Lorem ipsum dolor sit amet consectetur. Donec egestas ut accumsan nisi"
                    />
                    <ArticleItem
                      banner="images/img_rectangle50.png"
                      title="News title will be here"
                      description="Lorem ipsum dolor sit amet consectetur. Donec egestas ut accumsan nisi"
                    />
                  </List>
                </div>
              </section>
            </div>
          </div>

          <Img
            className="absolute h-8 object-cover right-[2%] top-[5%] w-[72px]"
            src="images/img_frame42.png"
            alt="frameFortyTwo_One"
          />
        </div>
      </div>

      {isOpen && (
        <MyModal
          style="w-full max-w-5xl"
          isOpen={isOpen}
          closeModal={(val) => setIsOpen(false)}
        >
          <AddEditShow handleClose={() => setIsOpen(false)} />
        </MyModal>
      )}
    </Layout>
  );
};

export default HomepagePage;
