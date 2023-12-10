import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { Button, Img, List, Text } from "components";
import { DeleteIcon, EditIcon } from "components/Icons/Icons";
import Layout from "components/Layout/Layout";
import MuiTable from "components/Shared/Table/MuiTable";
import MyModal from "components/Shared/Modal/Modal";
import AddEditShow from "components/AddEditShow/AddEditShow";

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

  const tvShows = Array(20).fill({
    id: Math.floor(Math.random() * 10 + 1),
    name: (
      <div className="flex gap-4 items-center">
        <Img
          className="h-[37px] md:h-auto object-cover rounded-md w-[43px]"
          src="images/img_rectangle2161_40x48.png"
          alt="rectangle2161"
        />
        <span>Christopher Nolan</span>
      </div>
    ),
    hostedBy: "Stephen Adom",
    date_time: "27 June, 2023 | 5:30 pm",
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
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log("newValue:", newValue);
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
            <MuiTable tableHeading={headCells} data={tvShows} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <MuiTable tableHeading={headCells} data={tvShows} />
          </CustomTabPanel>
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
      </div>

      {isOpen && (
        <MyModal
          style="w-full max-w-5xl"
          isOpen={isOpen}
          closeModal={(val) => setIsOpen(false)}
        >
          <AddEditShow
            title="Add TV Shows"
            type="vog"
            handleClose={() => setIsOpen(false)}
            showExtras
          />
        </MyModal>
      )}
    </Layout>
  );
};

export default TVShowsPage;
