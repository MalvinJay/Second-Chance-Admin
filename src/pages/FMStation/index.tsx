import { useState } from "react";
import { Button, Img, List, Text } from "components";
import { DeleteIcon, EditIcon } from "components/Icons/Icons";
import Layout from "components/Layout/Layout";
import MuiTable from "components/Shared/Table/MuiTable";
import MyModal from "components/Shared/Modal/Modal";
import AddEditFMStation from "components/AddEditFMStation/AddEditFMStation";
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

// const fmStations = Array(20).fill({
//   id: Math.floor(Math.random() * 10 + 1),
//   channel_name: "Kumasi",
//   frequency: "88.9 Mhz",
//   available_show: "8",
//   status: "Active",
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
  const [selected, setSelected] = useState<readonly number[]>([]);

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
            <Button
              className="cursor-pointer font-semibold min-w-[146px] text-center text-sm"
              color="deep_purple_A200_19"
              onClick={() => setIsOpen(true)}
            >
              + Add Channel
            </Button>
          </div>
        </div>

        <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-col items-center justify-start mt-8 pt-6 sm:px-5 px-6 rounded-[10px] w-full">
          <MuiTable
            tableHeading={headCells}
            data={fmStations ?? []}
            selected={selected}
            setSelected={setSelected}
          />
        </div>

        <div className="flex sm:flex-col flex-row gap-6 items-start justify-start mt-[308px] w-auto sm:w-full">
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
          style="w-full max-w-xl"
          isOpen={isOpen}
          closeModal={(val) => setIsOpen(false)}
        >
          <AddEditFMStation handleClose={() => setIsOpen(false)} />
        </MyModal>
      )}
    </Layout>
  );
};

export default FMStationPage;
