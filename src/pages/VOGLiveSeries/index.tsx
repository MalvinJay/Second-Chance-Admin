"use client";

import { useState } from "react";
import { Button, Img, Input, Line, Text } from "components";
import { DeleteIcon, EditIcon } from "components/Icons/Icons";
import Layout from "components/Layout/Layout";
import { Checkbox } from "components/Shared/Checkbox";
import CustomTable from "components/Shared/Table/CustomTable";
import MyModal from "components/Shared/Modal/Modal";
import AddEditShow from "components/AddEditShow/AddEditShow";
import MuiTable from "components/Shared/Table/MuiTable";

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

const vogliveservices = Array(20).fill({
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

const VOGLiveSeriesPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <Layout title="VOG Live Services">
      <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-col items-center justify-end p-5 rounded-[10px] w-[96%] md:w-full">
        <div className="flex flex-col items-center justify-start w-full">
          {/* <CustomTable
            tableHeading={vogLiveServiceColumns}
            data={vogliveservices}
          /> */}

          <MuiTable
            tableHeading={headCells}
            data={vogliveservices}
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
        </div>
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

      {isOpen && (
        <MyModal
          style="w-full max-w-5xl"
          isOpen={isOpen}
          closeModal={(val) => setIsOpen(false)}
        >
          <AddEditShow
            title="Add VOG Live Series"
            type="vog"
            handleClose={() => setIsOpen(false)}
          />
        </MyModal>
      )}
    </Layout>
  );
};

export default VOGLiveSeriesPage;
