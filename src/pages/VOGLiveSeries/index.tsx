"use client";

import { useMemo, useState } from "react";
import { Button, Img, Input, Line, Text } from "components";
import { DeleteIcon, EditIcon } from "components/Icons/Icons";
import Layout from "components/Layout/Layout";
import { Checkbox } from "components/Shared/Checkbox";
import CustomTable from "components/Shared/Table/CustomTable";
import MyModal from "components/Shared/Modal/Modal";
import AddEditShow from "components/AddEditShow/AddEditShow";
import MuiTable from "components/Shared/Table/MuiTable";
import Pagination from "components/Shared/Pagination/Pagination";
import { CircularProgress, Paper, Typography } from "@mui/material";
import { getVOGLiveServicesAPI } from "api/shows";
import { useReactQuery } from "hooks/useReactQuery";
import { TAlertMsgProp } from "types/shared.type";

interface IvogLiveServices {
  pagination: any;
  services: any;
}

// Previous show
const vogLiveServiceColumns = [
  {
    label: "Show Name",
    renderCell: (item) => item.name,
    select: {
      renderHeaderCellSelect: () => <Checkbox />,
      renderCellSelect: (item) => <Checkbox />,
    },
  },
  { label: "Hosted By", renderCell: (item) => item.hosted_by },
  { label: "Date and Time", renderCell: (item) => item.created_at },
  { label: "Social Networks", renderCell: (item) => item.socials },
  { label: "Actions", renderCell: (item) => item.actions },
];

// Array(20).fill({
//   id: Math.floor(Math.random() * 10 + 1),
//   name: (
//     <div className="flex gap-4 items-center">
//       <Img
//         className="h-[37px] md:h-auto object-cover rounded-md w-[43px]"
//         src="images/img_rectangle2161_40x48.png"
//         alt="rectangle2161"
//       />
//       <span>Christopher Nolan</span>
//     </div>
//   ),
//   hostedBy: "Stephen Adom",
//   date_time: "27 June, 2023 | 5:30 pm",
//   social: (
//     <div className="flex items-center gap-2">
//       <img src="images/img_frame899.svg" />
//     </div>
//   ),
//   actions: (
//     <div className="flex gap-2 items-center">
//       <Button className="cursor-pointer flex items-center justify-center gap-1">
//         <EditIcon color="#949698" />
//       </Button>
//       <Button className="cursor-pointer flex items-center justify-center gap-1">
//         <DeleteIcon color="#949698" />
//       </Button>
//     </div>
//   ),
// });

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

interface IVogLiveServicesData {
  services: any[];
  pagination: any;
}

const VOGLiveSeriesPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState<TAlertMsgProp>({
    msg: "",
    status: "success",
  });

  const handleClose = () => {
    setShowAlert(false);
    setAlertMsg({
      msg: "",
      status: "success",
    });
  };

  const headCells: readonly HeadCell[] = [
    {
      id: "name",
      numeric: false,
      disablePadding: true,
      label: "Show Name",
    },
    // {
    //   id: "hosted_by",
    //   numeric: false,
    //   disablePadding: false,
    //   label: "Hosted By",
    // },
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

  const {
    isLoading,
    data: vogLiveServices,
  }: { isLoading: boolean; data: any } = useReactQuery(
    ["vogLiveServices"],
    "/live-services"
  );

  const filteredVogServices = useMemo(() => {
    if (
      vogLiveServices &&
      "services" in vogLiveServices &&
      Array.isArray(vogLiveServices.services)
    ) {
      return vogLiveServices?.services.map((el: any) => {
        return {
          id: el.id,
          name: (
            <div className="flex gap-4 items-center">
              <Img
                className="h-[37px] md:h-auto object-cover rounded-md w-[43px]"
                src={el.thumbnail?.img_url}
                alt={el.thumbnail?.file_name}
              />
              <span>{el.title}</span>
            </div>
          ),
          // hostedBy: "Stephen Adom",
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
    }
  }, [vogLiveServices, showAlert, isLoading]) as any[];

  console.log("filteredVogServices:", filteredVogServices);

  return (
    <Layout
      title="VOG Live Services"
      alertMsg={alertMsg}
      showAlert={showAlert}
      handleClose={handleClose}
    >
      <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-col items-center justify-end p-5 rounded-[10px] w-[96%] md:w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <MuiTable
            tableHeading={headCells}
            data={filteredVogServices ?? []}
            toolbarTitle="Live Services Listings"
            toolbarActions={
              <Button
                className="cursor-pointer font-semibold text-center text-sm"
                color="deep_purple_A200_19"
                onClick={() => setIsOpen(true)}
              >
                + Add New
              </Button>
            }
          />
          {filteredVogServices?.length <= 0 && (
            <Paper
              elevation={0}
              className="w-1/2 text-center p-4 h-24 flex items-center justify-center"
            >
              {isLoading ? (
                <CircularProgress color="inherit" size={32} />
              ) : (
                <Typography>No Data</Typography>
              )}
            </Paper>
          )}
        </div>
      </div>

      <Pagination
        count={
          vogLiveServices
            ? Math.ceil(
                vogLiveServices.pagination?.total /
                  vogLiveServices.pagination.per_page
              )
            : 0
        }
      />

      {isOpen && (
        <MyModal
          style="w-full max-w-5xl"
          isOpen={isOpen}
          closeModal={(val) => setIsOpen(false)}
        >
          <AddEditShow
            title="Add VOG Live Series"
            type="vog"
            setShowAlert={setShowAlert}
            setAlertMsg={setAlertMsg}
            handleClose={() => setIsOpen(false)}
          />
        </MyModal>
      )}
    </Layout>
  );
};

export default VOGLiveSeriesPage;
