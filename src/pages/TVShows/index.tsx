import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Paper,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Button, Img, List, Text } from "components";
import { DeleteIcon, EditIcon } from "components/Icons/Icons";
import Layout from "components/Layout/Layout";
import MuiTable from "components/Shared/Table/MuiTable";
import MyModal from "components/Shared/Modal/Modal";
import AddEditShow from "components/AddEditShow/AddEditShow";
import { useReactQuery } from "hooks/useReactQuery";
import PaginationComp from "components/Shared/Pagination/Pagination";
import { TAlertMsgProp } from "types/shared.type";

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
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState<readonly number[]>([]);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState<TAlertMsgProp>({
    msg: "",
    status: "success",
  });

  const { isLoading, data: tvShows }: { isLoading: boolean; data: any } =
    useReactQuery(["tvShows"], "/tv-shows");

  const filteredTvShows = useMemo(() => {
    if (tvShows && "shows" in tvShows && Array.isArray(tvShows.shows)) {
      return tvShows?.shows?.map((el: any) => {
        return {
          id: el.id,
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
              <Button className="cursor-pointer flex items-center justify-center gap-1">
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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Layout title="Tv Shows">
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
            <Button
              className="cursor-pointer font-semibold text-center text-sm"
              color="deep_purple_A200_19"
              onClick={() => setIsOpen(true)}
            >
              + Add Show
            </Button>
          )}
        </Box>

        <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-col items-center justify-end p-5 rounded-[10px] w-full">
          <CustomTabPanel value={value} index={0}>
            <MuiTable
              tableHeading={headCells}
              data={filteredUpcomingShows ?? []}
              selected={selected}
              setSelected={setSelected}
            />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <MuiTable
              tableHeading={headCells}
              data={filteredPreviousShows ?? []}
              selected={selected}
              setSelected={setSelected}
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
            title="Add TV Shows"
            handleClose={() => setIsOpen(false)}
            showExtras
          />
        </MyModal>
      )}
    </Layout>
  );
};

export default TVShowsPage;
