"use client";

import { useMemo, useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { TAlertMsgProp } from "types/shared.type";

import { Button, Img, Text } from "components";
import { useReactQuery } from "hooks/useReactQuery";
import Layout from "components/Layout/Layout";
import CustomTable from "components/Shared/Table/CustomTable";
import PageHeader from "components/PageHeader/PageHeader";
import { Checkbox } from "components/Shared/Checkbox";
import SliderItem from "components/Shared/Slider/SliderItem";
import AddItem from "components/RoyalNews/AddArticle";
import ArticleItem from "components/RoyalNews/ArticleItem";
import AddEditShow from "components/AddEditShow/AddEditShow";
import MyModal from "components/Shared/Modal/Modal";
import AddEditArticle from "components/RoyalNews/AddEditArticle/AddEditArticle";
import { EditIcon, DeleteIcon } from "components/Icons/Icons";
import EmptyList from "components/Shared/EmptyList/EmptyList";
import { Slider } from "components/Carousel";
import TestimonyItem from "components/Testimonies/TestimonyItem";
import AddEditTestimony from "components/Testimonies/AddTestimoty";

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

// Previous shows
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

// Advertisements
const advertisements = [
  // {
  //   title: "This space is for an advertisement",
  //   banner: "images/img_rectangle42.png",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur. Donec egestas ut accumsan nisi",
  //   cta: "Explore Now",
  //   className: "sm:w-1/2 w-[427px]",
  // },
  // {
  //   title: "This space is for an advertisement",
  //   banner: "images/img_rectangle42_292x427.png",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur. Donec egestas ut accumsan nisi",
  //   cta: "Explore Now",
  //   className: "sm:w-1/2 w-[427px]",
  // },
  // {
  //   title: "This space is for an advertisement",
  //   banner: "images/img_rectangle42_294x426.png",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur. Donec egestas ut accumsan nisi",
  //   cta: "Explore Now",
  //   className: "sm:w-1/2 w-[427px]",
  // },
];

// Online Testimonies show
const testimonies = [
  // {
  //   name: "Henry Ayensu",
  //   testimony:
  //     "Lorem ipsum dolor sit amet consectetur. Turpis mi ut bibendum vitae integer a neque non. Turpis ut tempus sed diam id faucibus neque in quam. Tincidunt bibendum metus eros pretium lectus quis in",
  //   photo: "images/img_rectangle2161_37x43.png",
  //   position: "CEO, Creative House Agency",
  //   isActive: false,
  // },
  // {
  //   name: "Henry Ayensu",
  //   testimony:
  //     "Lorem ipsum dolor sit amet consectetur. Turpis mi ut bibendum vitae integer a neque non. Turpis ut tempus sed diam id faucibus neque in quam. Tincidunt bibendum metus eros pretium lectus quis in",
  //   photo: "images/img_rectangle2161_37x43.png",
  //   position: "CEO, Creative House Agency",
  //   isActive: false,
  // },
  // {
  //   name: "Henry Ayensu",
  //   testimony:
  //     "Lorem ipsum dolor sit amet consectetur. Turpis mi ut bibendum vitae integer a neque non. Turpis ut tempus sed diam id faucibus neque in quam. Tincidunt bibendum metus eros pretium lectus quis in",
  //   photo: "images/img_rectangle2161_37x43.png",
  //   position: "CEO, Creative House Agency",
  //   isActive: false,
  // },
];

const HomepagePage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [showTest, setshowTest] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [alertMsg, setAlertMsg] = useState<TAlertMsgProp>({
    msg: "",
    status: "success",
  });
  const [initialValues, setInitialValues] = useState(null);
  const [filters, setfilters] = useState({});
  const sliderRef = useRef<AliceCarousel>(null);
  const testimoniesRef = useRef<AliceCarousel>(null);

  // TV Shows
  const { isLoading, data: tvShows }: { isLoading: boolean; data: any } =
    useReactQuery(["tvShows"], "/tv-shows");

  const filteredTvShows = useMemo(() => {
    if (tvShows && "shows" in tvShows && Array.isArray(tvShows.shows)) {
      return tvShows?.shows?.map((el: any) => {
        return {
          // id: el.id,
          name: (
            <div className="flex gap-4 items-center">
              <Img
                className="h-[37px] md:h-auto object-cover rounded-md w-[43px]"
                src={el.banner?.img_url}
                alt={el.banner?.file_name}
                placeholder="images/img_img60591.png"
              />
              <span>{el.name}</span>
            </div>
          ),
          hostedBy: "Stephen Adom",
          date_time: `${new Date(el.airing_date)?.toDateString().slice(4)} | ${
            el.airing_time
          }`,
          social: (
            <div className="flex items-center gap-2">
              <img src="images/img_frame899.svg" />
            </div>
          ),
          actions: (
            <div className="flex gap-2 items-center">
              <Button className="cursor-pointer flex items-center justify-center gap-1">
                <EditIcon color="#949698" />
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center gap-1"
                onClick={() => handleDelete(el)}
              >
                <DeleteIcon color="#949698" />
              </Button>
            </div>
          ),
        };
      });
    } else [];
  }, [tvShows, showAlert, isLoading]) as any[];

  const filteredUpcomingShows = useMemo(() => {
    if (filteredTvShows)
      return filteredTvShows?.filter(
        (show) => new Date() <= new Date(show.date_time?.split(" | ")[0])
      );
    else [];
  }, [tvShows, filteredTvShows]) as any[];

  const filteredPreviousShows = useMemo(() => {
    if (filteredTvShows)
      return filteredTvShows.filter(
        (show) => new Date() > new Date(show.date_time.split(" | ")[0])
      );
    else [];
  }, [tvShows, filteredTvShows]) as any[];

  // Online Testimonies
  const {
    isLoading: isLoadingTestimonies,
    data: onlineTestimonies,
  }: { isLoading: boolean; data: any } = useReactQuery(
    ["onlineTestimonies"],
    "/online-testimonies"
  );

  // Royal News
  const {
    isLoading: isLoadingNews,
    data: royalNews,
  }: { isLoading: boolean; data: any } = useReactQuery(
    ["royal-news"],
    "/posts",
    filters
  );

  const filteredRoyalNews = useMemo(() => {
    // if (
    //   royalNews &&
    //   "articles" in royalNews &&
    //   Array.isArray(royalNews.articles)
    // ) {
    //   return royalNews.articles;
    // }

    return [
      // {
      //   banner: "images/img_rectangle51.png",
      //   title: "News title will be here",
      //   description:
      //     "Lorem ipsum dolor sit amet consectetur. Donec egestas ut accumsan nisi",
      // },
      // {
      //   banner: "images/img_rectangle50.png",
      //   title: "News title will be here",
      //   description:
      //     "Lorem ipsum dolor sit amet consectetur. Donec egestas ut accumsan nisi",
      // },
    ];
  }, [royalNews, isLoading]) as any[];

  const {
    isLoading: isFetchingCat,
    data: categoriesData,
  }: { isLoading: boolean; data: any } = useReactQuery(
    ["royal-news-categories"],
    "/categories"
  );

  const categories = useMemo(() => {
    if (categoriesData && "categories" in categoriesData)
      return categoriesData?.categories;
    return [];
  }, [categoriesData]);

  const handleClose = () => {
    setShow(false);
    setshowTest(false);
    setShowAlert(false);
    setAlertMsg({
      msg: "",
      status: "success",
    });
  };

  const handleDelete = (item: any) => {
    setInitialValues(item);
    // setConfirm(true);
  };

  return (
    <Layout
      title="Home"
      alertMsg={alertMsg}
      showAlert={showAlert}
      handleClose={handleClose}
    >
      <div className="flex flex-col gap-8 items-center justify-start w-full px-6">
        <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-col items-center justify-start p-[18px] rounded-[10px] w-full">
          <PageHeader setAlertMsg={setAlertMsg} setShowAlert={setShowAlert} />
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

            <CustomTable
              tableHeading={upcomingColumns}
              data={filteredUpcomingShows ?? []}
            />

            <EmptyList list={filteredUpcomingShows} isLoading={isLoading} />
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

            <CustomTable
              tableHeading={previousColumns}
              data={filteredPreviousShows ?? []}
            />

            <EmptyList list={filteredPreviousShows} isLoading={isLoading} />
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

              <EmptyList list={advertisements} isLoading={isLoading} />
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

          {/* <CustomTable tableHeading={onlineColumns} data={testimonies ?? []} /> */}

          <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-[1143px] w-full">
            <AddItem
              logo={
                <Img
                  className="h-6 md:h-auto object-cover w-6"
                  src="images/img_documenttext.png"
                  alt="documenttext"
                />
              }
              title="Add new Testimonies"
              description="Lorem ipsum dolor sit amet consectetur. Turpis mi ut bibendum vitae intege"
              setShow={() => setshowTest(true)}
            />

            <section className="royal-news-items">
              <div className="bg-white-A700 flex md:flex-1 flex-col items-end justify-start overflow-auto rounded-lg w-full">
                <Slider
                  ref={testimoniesRef}
                  autoPlay
                  autoPlayInterval={4000}
                  // activeIndex={sliderState}
                  responsive={{
                    0: { items: 1 },
                    550: { items: 2 },
                    1050: { items: 2 },
                  }}
                  onSlideChanged={(e) => {
                    // setsliderState(e?.item);
                  }}
                  className="max-w-7xl md:mt-0 mx-auto md:px-5 w-full testimonies"
                  items={testimonies?.map((item, index) => (
                    <TestimonyItem key={index} item={item} />
                  ))}
                />
              </div>

              <EmptyList list={testimonies} isLoading={isLoadingTestimonies} />
            </section>
          </div>
        </div>

        <div className="bg-white-A700 border border-gray-900_19 border-solid md:h-[1285px] sm:h-[344px] h-[388px] p-5 relative rounded-[10px] w-full">
          <div className="flex flex-col gap-6 h-max items-start justify-start m-auto w-auto">
            <div className="flex justify-between items-center">
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-auto"
                size="txtPlusJakartaSansRomanBold22"
              >
                Royal News
              </Text>

              <div className="flex items-center gap-4"></div>
            </div>

            <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-[1143px] w-full">
              <AddItem
                logo={
                  <Img
                    className="h-6 md:h-auto object-cover w-6"
                    src="images/img_documenttext.png"
                    alt="documenttext"
                  />
                }
                title="Add new Royal News"
                description="Lorem ipsum dolor sit amet consectetur. Turpis mi ut bibendum vitae intege"
                setShow={setShow}
              />

              <section className="royal-news-items">
                <div className="bg-white-A700 flex md:flex-1 flex-col items-end justify-start overflow-auto rounded-lg w-full">
                  <Slider
                    ref={sliderRef}
                    autoPlay
                    autoPlayInterval={4000}
                    // activeIndex={sliderState}
                    responsive={{
                      0: { items: 1 },
                      550: { items: 2 },
                      1050: { items: 2 },
                    }}
                    onSlideChanged={(e) => {
                      // setsliderState(e?.item);
                    }}
                    className="max-w-7xl md:mt-0 mx-auto md:px-5 w-full coming-up-show"
                    items={filteredRoyalNews.map((news, index) => (
                      <ArticleItem key={index} {...news} />
                    ))}
                  />
                </div>
                <EmptyList list={filteredRoyalNews} isLoading={isLoadingNews} />
              </section>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <MyModal
          style="w-full max-w-4xl"
          isOpen={isOpen}
          closeModal={(val) => setIsOpen(false)}
        >
          <AddEditShow
            editMode={editMode}
            title={`${!editMode ? "Add Tv Show" : "Update Tv Show"} `}
            setShowAlert={setShowAlert}
            setAlertMsg={setAlertMsg}
            handleClose={() => {
              setIsOpen(false);
              setEditMode(false);
            }}
            initialValues={initialValues}
          />
        </MyModal>
      )}

      {show && (
        <MyModal
          style="w-full max-w-3xl"
          isOpen={show}
          closeModal={() => setShow(false)}
        >
          <AddEditArticle
            editMode={editMode}
            title={`${!editMode ? "Add News" : "Update News"}`}
            handleClose={handleClose}
            initialValues={initialValues}
            setShowAlert={setShowAlert}
            setAlertMsg={setAlertMsg}
            categories={categories}
          />
        </MyModal>
      )}

      {showTest && (
        <MyModal
          style="w-full max-w-3xl"
          isOpen={showTest}
          closeModal={() => setshowTest(false)}
        >
          <AddEditTestimony
            editMode={editMode}
            title={`${!editMode ? "Add Testimony" : "Update Testimony"}`}
            handleClose={handleClose}
            initialValues={initialValues}
            setShowAlert={setShowAlert}
            setAlertMsg={setAlertMsg}
          />
        </MyModal>
      )}
    </Layout>
  );
};

export default HomepagePage;
