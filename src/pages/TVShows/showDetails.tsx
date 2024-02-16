import { useMemo, useState } from "react";
import {
  Button,
  Box,
  Paper,
  CircularProgress,
  Typography,
  Stack,
  IconButton,
  Skeleton,
} from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { Button as CustomBtn, Img, Text } from "components";
import { DeleteIcon, EditIcon } from "components/Icons/Icons";
import Layout from "components/Layout/Layout";
import MuiTable from "components/Shared/Table/MuiTable";
import MyModal from "components/Shared/Modal/Modal";
import AddEditShowEpisode from "components/AddEditShow/AddEditShowEpisode";
import { useReactQuery } from "hooks/useReactQuery";
import PaginationComp from "components/Shared/Pagination/Pagination";
import { TAlertMsgProp } from "types/shared.type";
import { useMutation } from "@tanstack/react-query";
import { DeleteShowAEpisodePIFn } from "api/shows";
import { AxiosError } from "axios";
import { queryClient } from "App";
import { useNavigate, useParams } from "react-router-dom";
import placeholder from "../../assets/images/placeholder.png";
import bannerPlaceholder from "/images/img_img60591.png";
import socialImg from "/images/img_frame899.svg";

interface Data {
  id: number;
  name: string;
  hosted_by: string;
  created_at: string;
  socials: string;
  actions: string;
}
interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}
interface ITVShowsData {
  episodes: any[];
  pagination: any;
}
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
interface tvShowProps {
  id: string;
  name: string;
  host: string;
  description: string;
  slug: string;
  airing_time: string;
  airing_date: string;
  logo: any;
  banner: any;
  created_at: Date;
  updated_at: Date;
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const headCells: readonly HeadCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Title",
  },
  {
    id: "hosted_by",
    numeric: false,
    disablePadding: false,
    label: "Hosted By",
  },
  {
    id: "created_at",
    numeric: false,
    disablePadding: false,
    label: "Date and Time",
  },
  {
    id: "socials",
    numeric: false,
    disablePadding: false,
    label: "Social Networks",
  },
  {
    id: "actions",
    numeric: false,
    disablePadding: false,
    label: "Actions",
  },
];

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className="w-full"
      {...other}
    >
      {value === index && children}
    </div>
  );
}

const TVShowDetailsPage: React.FC = () => {
  const { id: showSlug } = useParams();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState<readonly number[]>([]);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState<TAlertMsgProp>({
    msg: "",
    status: "success",
  });
  const [editMode, setEditMode] = useState(false);
  const [initialValues, setInitialValues] = useState(null);

  const {
    isLoading: isDetailsLoading,
    data,
  }: { isLoading: boolean; data: any } = useReactQuery(
    ["tvShowsDetails", showSlug],
    `/tv-shows/${showSlug}`
  );

  const tvShowDetails = useMemo(() => {
    if (data && "show" in data) {
      return data.show;
    }

    return null;
  }, [data]) as tvShowProps;

  const { isLoading, data: tvShowEpisodes }: { isLoading: boolean; data: any } =
    useReactQuery(
      ["tvShowEpisodes", showSlug],
      `/episodes?filter[slug]=${showSlug}`
    );

  const { mutateAsync: deleteTVShowMutate, isLoading: isDeletingTVShow } =
    useMutation({
      mutationFn: DeleteShowAEpisodePIFn,
      onError: (error: AxiosError) => error?.response?.data,
    });

  const filteredTvShowEpisodes = useMemo(() => {
    if (
      tvShowEpisodes &&
      "episodes" in tvShowEpisodes &&
      Array.isArray(tvShowEpisodes.episodes)
    ) {
      return tvShowEpisodes?.episodes?.map((el: any) => {
        return {
          id: el.id,
          name: (
            <div className="flex gap-4 items-center">
              <Img
                className="h-[37px] md:h-auto object-cover rounded-md w-[43px]"
                src={el.banner?.img_url}
                alt={el?.title}
                placeholder={bannerPlaceholder}
              />
              <span>{el.title}</span>
            </div>
          ),
          hostedBy: el?.show?.host,
          date_time: `${new Date(el?.show?.airing_date)
            ?.toDateString()
            .slice(4)} | ${el?.show?.airing_time}`,
          social: (
            <div className="flex items-center gap-2">
              <img src={socialImg} />
            </div>
          ),
          actions: (
            <div className="flex gap-2 items-center">
              <Button
                className="cursor-pointer flex items-center justify-center gap-1"
                onClick={() => handleEdit(el)}
              >
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
    }
    return [];
  }, [tvShowEpisodes, showAlert, isLoading]) as any[];

  const handleDelete = (item: any) => {
    setInitialValues(item);
    setConfirm(true);
  };

  const handleEdit = (item: any) => {
    console.log("Item:", item);
    setEditMode(true);
    setInitialValues({
      ...item,
      video_url: item?.video?.video_url,
      img_url: item?.banner?.img_url,
    });
    setIsOpen(true);
    setSelected([]);
  };

  const removeTVShowEpisode = async () => {
    console.log("Item to be removed:", initialValues);
    setSelected([]);

    deleteTVShowMutate(initialValues?.id)
      .then(() => {
        setConfirm(false);
        setInitialValues(null);
        setAlertMsg({
          status: "success",
          msg: `TV Show removed`,
        });
        setShowAlert(true);
        queryClient.invalidateQueries(["tvShowEpisodes", showSlug]);
      })
      .catch(() => {
        setAlertMsg({
          status: "error",
          msg: "Error removing TV Show episodes",
        });
        setShowAlert(true);
      });
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleClose = () => {
    setIsOpen(false);
    setEditMode(false);
    setAlertMsg({
      msg: "",
      status: "success",
    });
    setShowAlert(false);
  };

  const handleBulkAction = () => {
    console.log("Bulk action:", selected);
  };

  const handleBack = () => {
    navigate("/tv-shows");
  };

  const handleRowSelected = (selectedList: any[], row: any) => {
    setSelected(selectedList);

    // if (row.id) navigate(`/tv-shows/${row.id}`);
  };

  return (
    <Layout
      title={
        <div className="flex items-center gap-4">
          <IconButton onClick={handleBack}>
            <ArrowBackRoundedIcon />
          </IconButton>

          {tvShowDetails?.name}
        </div>
      }
      showAlert={showAlert}
      alertMsg={alertMsg}
      handleClose={handleClose}
    >
      <div className="flex flex-col items-center justify-start w-[96%] md:w-full">
        <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-col items-center justify-end p-5 rounded-[10px] w-full">
          <div className="flex md:flex-col flex-row mx-auto border-b border-gray-900_19 relative w-full pb-5 mb-5 min-h-[450px]">
            <div className="flex flex-col items-start justify-end gap-5 w-4/5 md:w-full h-full">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                  size="txtPlusJakartaSansRomanSemiBold22"
                >
                  Host
                </Text>

                <Text
                  className="leading-[30.00px] max-w-[613px] md:max-w-full text-gray-900 text-lg"
                  size="txtPlusJakartaSansRomanRegular18Gray900"
                >
                  {tvShowDetails?.host ? (
                    tvShowDetails?.host
                  ) : (
                    <>
                      <Skeleton
                        animation="wave"
                        variant="text"
                        width={210}
                        sx={{ fontSize: "1rem" }}
                      />
                    </>
                  )}
                </Text>
              </div>

              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                  size="txtPlusJakartaSansRomanSemiBold22"
                >
                  About Show
                </Text>

                <Text
                  className="leading-[30.00px] max-w-[613px] md:max-w-full text-gray-900 text-lg"
                  size="txtPlusJakartaSansRomanRegular18Gray900"
                >
                  {tvShowDetails?.description ? (
                    tvShowDetails?.description
                  ) : (
                    <>
                      <Skeleton animation="wave" width={400} height={40} />
                      <Skeleton animation="wave" width={400} height={40} />
                      <Skeleton animation="wave" width={300} height={40} />
                    </>
                  )}
                </Text>
              </div>
            </div>

            {tvShowDetails?.banner?.img_url ? (
              <Img
                className="absolute md:relative inset-y-[0] mt-0 right-[0] rounded-[50%] h-[400px] md:h-[300px] w-[400px] md:w-[300px] md:mx-auto"
                src={tvShowDetails?.banner?.img_url}
                placeholder={placeholder}
                alt="showDetails"
              />
            ) : (
              <Skeleton
                variant="circular"
                animation="wave"
                width={500}
                height={400}
              />
            )}
          </div>

          <MuiTable
            tableHeading={headCells}
            data={filteredTvShowEpisodes ?? []}
            toolbarTitle="Episodes"
            toolbarActions={
              <CustomBtn
                className="cursor-pointer font-semibold text-center text-sm"
                color="deep_purple_A200_19"
                onClick={() => {
                  setInitialValues(tvShowDetails);
                  setIsOpen(true);
                }}
              >
                + Add Episode
              </CustomBtn>
            }
            selected={selected}
            setSelected={handleRowSelected}
            handleBulkAction={handleBulkAction}
          />

          {(filteredTvShowEpisodes?.length <= 0 || isLoading) && (
            <Paper
              elevation={0}
              className="w-1/2 text-center p-4 h-24 flex items-center justify-center"
            >
              {isLoading ? (
                <CircularProgress color="inherit" size={32} />
              ) : (
                <>
                  {value === 0 && filteredTvShowEpisodes?.length <= 0 && (
                    <Typography>No Data</Typography>
                  )}
                </>
              )}
            </Paper>
          )}
        </div>

        <div className="mt-10">
          <PaginationComp
            count={
              filteredTvShowEpisodes
                ? Math.ceil(
                    tvShowEpisodes?.pagination?.total /
                      tvShowEpisodes?.pagination.per_page
                  )
                : 0
            }
          />
        </div>
      </div>

      {isOpen && (
        <MyModal
          style="w-full max-w-4xl"
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
        >
          <AddEditShowEpisode
            editMode={editMode}
            title={editMode ? "Update Episode" : "Add Episode"}
            setShowAlert={setShowAlert}
            setAlertMsg={setAlertMsg}
            initialValues={initialValues}
            handleClose={handleClose}
          />
        </MyModal>
      )}

      {confirm && (
        <MyModal
          style="w-full max-w-lg"
          isOpen={confirm}
          closeModal={() => setConfirm(false)}
        >
          <div className="bg-white-A700 flex flex-col items-center justify-end p-6 md:px-5 rounded-[10px] shadow-bs w-full">
            <Typography variant="h5" align="left">
              Confirm Delete
            </Typography>
            <br />
            <Typography variant="body1">
              Do you want to delete this item?
            </Typography>
            <br />

            <Stack
              direction={"row"}
              justifyContent={"flex-end"}
              gap={2}
              className="text-blue_gray-900"
            >
              <Button
                color="primary"
                variant="outlined"
                onClick={() => setConfirm(false)}
              >
                Cancel
              </Button>
              <Button
                color="error"
                variant="contained"
                onClick={removeTVShowEpisode}
                className="gap-1"
              >
                {isDeletingTVShow && (
                  <CircularProgress color="inherit" size={24} />
                )}
                Confirm
              </Button>
            </Stack>
          </div>
        </MyModal>
      )}
    </Layout>
  );
};

export default TVShowDetailsPage;
