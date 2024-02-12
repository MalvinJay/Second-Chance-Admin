import { useMemo, useState } from "react";
import { Button as CustomBtn, Img, List, Text } from "components";
import { DeleteIcon, EditIcon } from "components/Icons/Icons";
import Layout from "components/Layout/Layout";
import MuiTable from "components/Shared/Table/MuiTable";
import MyModal from "components/Shared/Modal/Modal";
import AddEditFMStation from "components/AddEditFMStation/AddEditFMStation";
import EmptyList from "components/Shared/EmptyList/EmptyList";
import { useReactQuery } from "hooks/useReactQuery";
import { TAlertMsgProp } from "types/shared.type";
import {
  Button,
  CircularProgress,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { DeleteFMStationAPIFn } from "api/fmStation";
import { AxiosError } from "axios";
import { queryClient } from "App";
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

const fmStations = [];

const headCells: readonly HeadCell[] = [
  {
    id: "channel_name",
    numeric: false,
    disablePadding: true,
    label: "Channel Name",
  },
  {
    id: "frequency",
    numeric: false,
    disablePadding: false,
    label: "Frequency",
  },
  {
    id: "available_show",
    numeric: false,
    disablePadding: false,
    label: "Available Shows (Daily)",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "actions",
    numeric: false,
    disablePadding: false,
    label: "Actions",
  },
];

const FMStationPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [initialValues, setInitialValues] = useState(null);
  const [alertMsg, setAlertMsg] = useState<TAlertMsgProp>({
    msg: "",
    status: "success",
  });
  const [selected, setSelected] = useState<readonly number[]>([]);

  const {
    isLoading: isLoadingStations,
    data: stationsData,
  }: { isLoading: boolean; data: any } = useReactQuery(
    ["fm-stations"],
    "/stations"
  );

  const filteredStations = useMemo(() => {
    if (stationsData && "stations" in stationsData) {
      return stationsData?.stations?.map((el: any) => {
        return {
          id: el.id,
          name: el.name ?? "-",
          frequency: el?.frequency ?? "-",
          available_shows: el?.available_shows ?? "-",
          status: el.status ?? "-",
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
  }, [stationsData]);

  const { mutateAsync: removeFmStationMutate, isLoading: isDeletingVOG } =
    useMutation({
      mutationFn: DeleteFMStationAPIFn,
      onError: (error: AxiosError) => error?.response?.data,
    });

  const handleClose = () => {
    setIsOpen(false);
    setEditMode(false);
    setShowAlert(false);
    setAlertMsg({
      msg: "",
      status: "success",
    });
  };

  const handleEdit = (item: any) => {
    setEditMode(true);
    setInitialValues(item);
    setIsOpen(true);
    setSelected([]);
  };

  const handleDelete = (item: any) => {
    setInitialValues(item);
    setConfirm(true);
  };

  const RemoveFMItem = async () => {
    console.log("Item to be removed:", initialValues);
    setSelected([]);

    removeFmStationMutate(initialValues?.id)
      .then((res) => {
        console.log("res:", res);

        setConfirm(false);
        setInitialValues(null);
        setAlertMsg({
          status: "success",
          msg: `FM Station service removed`,
        });
        setShowAlert(true);
        queryClient.invalidateQueries(["fm-stations"]);
      })
      .catch(() => {
        setAlertMsg({
          status: "error",
          msg: "Error updating FM Station",
        });
        setShowAlert(true);
      });
  };

  return (
    <Layout title="FM Stations">
      <div className="flex flex-col items-center justify-start w-[96%] md:w-full">
        <div className="flex flex-row md:gap-10 items-center justify-between w-full">
          <Text
            className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
            size="txtPlusJakartaSansRomanSemiBold22Gray900"
          >
            Channel List
          </Text>
          <div className="flex flex-col items-center justify-start">
            <CustomBtn
              className="cursor-pointer font-semibold min-w-[146px] text-center text-sm"
              color="deep_purple_A200_19"
              onClick={() => setIsOpen(true)}
            >
              + Add Channel
            </CustomBtn>
          </div>
        </div>

        <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-col items-center justify-start my-8 pt-6 sm:px-5 px-6 rounded-[10px] w-full">
          <MuiTable
            tableHeading={headCells}
            data={filteredStations ?? []}
            selected={selected}
            setSelected={setSelected}
          />
          <EmptyList list={filteredStations} isLoading={isLoadingStations} />
        </div>

        <Pagination
          count={fmStations ? Math.ceil(fmStations.length / 20) : 0}
        />
      </div>

      {isOpen && (
        <MyModal
          style="w-full max-w-xl"
          isOpen={isOpen}
          closeModal={(val) => setIsOpen(false)}
        >
          <AddEditFMStation
            editMode={editMode}
            title={`${!editMode ? "Add FM Station" : "Update FM Station"} `}
            setShowAlert={setShowAlert}
            setAlertMsg={setAlertMsg}
            handleClose={handleClose}
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
              Do you want to remove this FM Station?
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
                onClick={RemoveFMItem}
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

export default FMStationPage;
