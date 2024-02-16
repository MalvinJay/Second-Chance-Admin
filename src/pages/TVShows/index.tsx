import { useEffect, useMemo, useState } from "react";
import {
  Button,
  Box,
  Tabs,
  Tab,
  Paper,
  CircularProgress,
  Typography,
  Stack,
} from "@mui/material";
import { Button as CustomBtn, Img, List, Text } from "components";
import { DeleteIcon, EditIcon } from "components/Icons/Icons";
import Layout from "components/Layout/Layout";
import MuiTable from "components/Shared/Table/MuiTable";
import MyModal from "components/Shared/Modal/Modal";
import AddEditShow from "components/AddEditShow/AddEditShow";
import { useReactQuery } from "hooks/useReactQuery";
import PaginationComp from "components/Shared/Pagination/Pagination";
import { TAlertMsgProp } from "types/shared.type";
import { useMutation } from "@tanstack/react-query";
import { DeleteShowAPIFn } from "api/shows";
import { AxiosError } from "axios";
import { queryClient } from "App";
import { useNavigate } from "react-router-dom";

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
  services: any[];
  pagination: any;
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
    label: "Show Name",
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

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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

const TVShowsPage: React.FC = () => {
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

  const { isLoading, data: tvShows }: { isLoading: boolean; data: any } =
    useReactQuery(["tvShows"], "/tv-shows");

  const { mutateAsync: deleteTVShowMutate, isLoading: isDeletingTVShow } =
    useMutation({
      mutationFn: DeleteShowAPIFn,
      onError: (error: AxiosError) => error?.response?.data,
    });

  const filteredTvShows = useMemo(() => {
    if (tvShows && "shows" in tvShows && Array.isArray(tvShows.shows)) {
      return tvShows?.shows?.map((el: any) => {
        return {
          id: el.slug,
          name: (
            <div className="flex gap-4 items-center">
              <Img
                className="h-[37px] md:h-auto object-cover rounded-md w-[43px]"
                src={el.logo?.img_url}
                alt={el.logo?.name}
                placeholder="images/img_img60591.png"
              />
              <span>{el.name}</span>
            </div>
          ),
          hostedBy: el.host,
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
      return filteredTvShows.filter(
        (show) => new Date() <= new Date(show.date_time.split(" | ")[0])
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

  const handleDelete = (item: any) => {
    setInitialValues(item);
    setConfirm(true);
  };

  const removeTVShow = async () => {
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
        queryClient.invalidateQueries(["tvShows"]);
      })
      .catch(() => {
        setAlertMsg({
          status: "error",
          msg: "Error removing TV Show",
        });
        setShowAlert(true);
      });
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleClose = () => {
    setAlertMsg({
      msg: "",
      status: "success",
    });
    setShowAlert(false);
  };

  const handleRowSelected = (selectedList: any[], row: any) => {
    setSelected(selectedList);

    if (row.id) navigate(`/tv-shows/${row.id}`);
  };

  return (
    <Layout
      title="Tv Shows"
      showAlert={showAlert}
      alertMsg={alertMsg}
      handleClose={handleClose}
    >
      <div className="flex flex-col items-center justify-start w-[96%] md:w-full">
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={4}
        >
          <Tabs value={value} onChange={handleChange} aria-label="tv-shows">
            <Tab
              value={0}
              label="Upcoming Shows"
              className="font-semibold min-w-[203px] text-[22px] text-center sm:text-lg md:text-xl"
              {...a11yProps(0)}
            />
            <Tab value={1} label="Previous Shows" {...a11yProps(1)} />
          </Tabs>

          {value === 0 && (
            <CustomBtn
              className="cursor-pointer font-semibold text-center text-sm"
              color="deep_purple_A200_19"
              onClick={() => setIsOpen(true)}
            >
              + Add Show
            </CustomBtn>
          )}
        </Box>

        <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-col items-center justify-end p-5 rounded-[10px] w-full">
          <CustomTabPanel value={value} index={0}>
            <MuiTable
              tableHeading={headCells}
              data={filteredUpcomingShows ?? []}
              selected={selected}
              setSelected={handleRowSelected}
              handleBulkAction={() => console.log("Bulk action:", selected)}
            />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <MuiTable
              tableHeading={headCells}
              data={filteredPreviousShows ?? []}
              selected={selected}
              setSelected={handleRowSelected}
              handleBulkAction={() => console.log("Bulk action:", selected)}
            />
          </CustomTabPanel>

          {(filteredUpcomingShows?.length <= 0 ||
            filteredPreviousShows?.length <= 0 ||
            isLoading) && (
            <Paper
              elevation={0}
              className="w-1/2 text-center p-4 h-24 flex items-center justify-center"
            >
              {isLoading ? (
                <CircularProgress color="inherit" size={32} />
              ) : (
                <>
                  {value === 0 && filteredUpcomingShows?.length <= 0 && (
                    <Typography>No Data</Typography>
                  )}
                  {value === 1 && filteredPreviousShows?.length <= 0 && (
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
              filteredTvShows
                ? Math.ceil(
                    tvShows?.pagination?.total / tvShows?.pagination.per_page
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
          <AddEditShow
            editMode={editMode}
            title={editMode ? "Edit TV Show" : "Add TV Show"}
            showExtras
            setShowAlert={setShowAlert}
            setAlertMsg={setAlertMsg}
            handleClose={() => {
              setIsOpen(false);
              setEditMode(false);
            }}
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
                onClick={removeTVShow}
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

export default TVShowsPage;
