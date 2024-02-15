import { useMemo, useState } from "react";
import { Button, Img, Text } from "components";
import Layout from "components/Layout/Layout";
import RoyalNewsItem from "components/RoyalNews/RoyalNewsItem";
import MyModal from "components/Shared/Modal/Modal";
import AddEditArticle from "components/RoyalNews/AddEditArticle/AddEditArticle";
import { useReactQuery } from "hooks/useReactQuery";
import { CircularProgress, Pagination, Paper, Typography } from "@mui/material";
import AddCategory from "components/RoyalNews/AddCategory";
import { TAlertMsgProp } from "types/shared.type";

import placeholder from "../../assets/images/placeholder.png";

const RoyalNewsPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [alertMsg, setAlertMsg] = useState<TAlertMsgProp>({
    msg: "",
    status: "success",
  });
  const [initialValues, setInitialValues] = useState(null);
  const [filters, setfilters] = useState({
    per_page: 50,
    page: 1,
  });

  const { isLoading, data: royalNews }: { isLoading: boolean; data: any } =
    useReactQuery(["royal-news"], "/posts", filters);

  const {
    isLoading: isFetchingCat,
    data: categoriesData,
  }: { isLoading: boolean; data: any } = useReactQuery(
    ["royal-news-categories"],
    "/categories"
    // {
    //   include: "publishedPosts",
    //   filter: {
    //     slug: "",
    //   },
    // }
  );

  const filteredRoyalNews = useMemo(() => {
    if (
      royalNews &&
      "articles" in royalNews &&
      Array.isArray(royalNews.articles)
    ) {
      return royalNews.articles.map((el) => {
        return {
          banner: el?.feature_img?.img_url,
          placeholder: placeholder,
          title: el.headline,
          description: el?.content,
          comments: el.id ?? 0,
          views: el?.id,
        };
      });
    }
    return [];
  }, [royalNews, isLoading]);

  const categories = useMemo(() => {
    if (categoriesData && "categories" in categoriesData)
      return categoriesData?.categories;
    return [];
  }, [categoriesData]);

  const handleClose = () => {
    setIsShow(false);
    setIsOpen(false);
    setShowAlert(false);
    setAlertMsg({
      msg: "",
      status: "success",
    });
  };

  return (
    <Layout
      title="Royal News"
      alertMsg={alertMsg}
      showAlert={showAlert}
      handleClose={handleClose}
    >
      <div className="flex flex-col items-center justify-start w-[96%] md:w-full">
        <div className="flex flex-row md:gap-10 items-center justify-between w-full">
          <Text
            className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
            size="txtPlusJakartaSansRomanSemiBold22Gray900"
          >
            News List
          </Text>
          <div className="flex flex items-center justify-start gap-2">
            <Button
              className="cursor-pointer font-semibold min-w-[129px] text-center text-sm"
              color="deep_purple_A200_19"
              onClick={() => setIsOpen(true)}
            >
              + Add News
            </Button>
            <Button
              className="cursor-pointer font-semibold min-w-[129px] text-center text-sm"
              color="deep_purple_A200_19"
              onClick={() => setIsShow(true)}
            >
              Add Category
            </Button>
          </div>
        </div>

        <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] mt-6 w-full">
          {filteredRoyalNews?.map((item, index) => (
            <RoyalNewsItem key={index} {...item} />
          ))}
        </div>

        {(isLoading || filteredRoyalNews?.length <= 0) && (
          <Paper
            elevation={0}
            className="w-full text-center p-4 h-24 flex items-center justify-center"
          >
            {isLoading ? (
              <CircularProgress color="inherit" size={32} />
            ) : (
              <Typography>No Data</Typography>
            )}
          </Paper>
        )}

        <Pagination
          className="mt-10"
          count={
            royalNews
              ? Math.ceil(
                  royalNews?.pagination?.total / royalNews?.pagination.per_page
                )
              : 0
          }
        />
      </div>

      {isOpen && (
        <MyModal
          style="w-full max-w-3xl"
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
        >
          <AddEditArticle
            editMode={editMode}
            title="Add Royal News"
            handleClose={handleClose}
            initialValues={initialValues}
            setShowAlert={setShowAlert}
            setAlertMsg={setAlertMsg}
            categories={categories}
          />
        </MyModal>
      )}

      {isShow && (
        <MyModal
          style="w-full max-w-xl"
          isOpen={isShow}
          closeModal={() => setIsShow(false)}
        >
          <AddCategory
            editMode={editMode}
            title="Add Category"
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

export default RoyalNewsPage;
