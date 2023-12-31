"use client";

import { useMemo, useState } from "react";
import { Button as CustomBtn, Img } from "components";
import { DeleteIcon, EditIcon } from "components/Icons/Icons";
import Layout from "components/Layout/Layout";
import { Checkbox } from "components/Shared/Checkbox";
import MyModal from "components/Shared/Modal/Modal";
import AddEditShow from "components/AddEditShow/AddEditShow";
import MuiTable from "components/Shared/Table/MuiTable";
import Pagination from "components/Shared/Pagination/Pagination";
import {
  Button,
  CircularProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useReactQuery } from "hooks/useReactQuery";
import { TAlertMsgProp } from "types/shared.type";
import { useMutation } from "@tanstack/react-query";
import { DeleteLiveServicesAPIFn, PatchLiveServiceAPIFn } from "api/shows";
import { AxiosError } from "axios";
import { queryClient } from "App";

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
  const [confirm, setConfirm] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [alertMsg, setAlertMsg] = useState<TAlertMsgProp>({
    msg: "",
    status: "success",
  });
  const [initialValues, setInitialValues] = useState(null);
  const [selected, setSelected] = useState<readonly number[]>([]);

  const { mutateAsync: deleteVOGMutate, isLoading: isDeletingVOG } =
    useMutation({
      mutationFn: DeleteLiveServicesAPIFn,
      onError: (error: AxiosError) => error?.response?.data,
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

  const handleDelete = (item: any) => {
    setInitialValues(item);
    setConfirm(true);
  };

  const handleEdit = (item: any) => {
    setEditMode(true);
    setInitialValues({
      ...item,
      video_url: item?.video?.video_url,
      img_url: item.thumbnail.img_url,
    });
    setIsOpen(true);
    setSelected([]);
  };

  const RemoveVOGItem = async () => {
    console.log("Item to be removed:", initialValues);
    setSelected([]);

    deleteVOGMutate(initialValues?.id)
      .then(() => {
        setConfirm(false);
        setInitialValues(null);
        setAlertMsg({
          status: "success",
          msg: `VOG service removed`,
        });
        setShowAlert(true);
        queryClient.invalidateQueries(["vogLiveServices"]);
      })
      .catch(() => {
        setAlertMsg({
          status: "error",
          msg: "Error updating VOG service",
        });
        setShowAlert(true);
      });
  };

  const handleBulkAction = () => {
    console.log("Bulk action:", selected);
  };

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
                className="h-[37px] md:h-auto object-cover rounded-md w-[43px] bg-slate-50"
                src={el.thumbnail?.img_url}
                alt={el.thumbnail?.file_name}
                placeholder="images/img_img60591.png"
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
  }, [vogLiveServices, showAlert, isLoading]) as any[];

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
              <CustomBtn
                className="cursor-pointer font-semibold text-center text-sm"
                color="deep_purple_A200_19"
                onClick={() => setIsOpen(true)}
              >
                + Add New
              </CustomBtn>
            }
            selected={selected}
            setSelected={setSelected}
            handleBulkAction={handleBulkAction}
          />
          {(isLoading || filteredVogServices?.length <= 0) && (
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
          style="w-full max-w-4xl"
          isOpen={isOpen}
          closeModal={() => {
            setIsOpen(false);
            setEditMode(false);
          }}
        >
          <AddEditShow
            editMode={editMode}
            title={`${
              !editMode ? "Add VOG Live Series" : "Update Live Service"
            } `}
            type="vog"
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
                onClick={RemoveVOGItem}
                className="gap-1"
              >
                {isDeletingVOG && (
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

export default VOGLiveSeriesPage;
