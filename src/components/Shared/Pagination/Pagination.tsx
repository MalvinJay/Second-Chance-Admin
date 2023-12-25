import { Stack } from "@mui/material";
import { Button } from "components/Button";
import { Text } from "components/Text";
import Pagination from "@mui/material/Pagination";

interface IPaginationProps {
  count: number;
}

const PaginationComp = (props: IPaginationProps) => {
  const { count } = props;
  return (
    // <div className="flex sm:flex-col flex-row gap-6 items-start justify-start mt-[76px] w-auto sm:w-full">
    //   <div className="flex flex-col h-8 md:h-auto items-center justify-start px-3 py-2 rounded-lg w-20">
    //     <Text
    //       className="text-deep_purple-A200 text-xs w-auto"
    //       size="txtPlusJakartaSansRomanSemiBold12"
    //     >
    //       Previous
    //     </Text>
    //   </div>

    //   <div className="flex sm:flex-col flex-row gap-1 items-center justify-start w-auto sm:w-full">
    //     <div className="flex flex-col h-8 md:h-auto items-center justify-start p-2 rounded-[50%] w-8">
    //       <Text
    //         className="text-center text-gray-500_01 text-xs w-auto"
    //         size="txtPlusJakartaSansRomanRegular12Gray50001"
    //       >
    //         1
    //       </Text>
    //     </div>
    //     <div className="flex flex-col h-8 md:h-auto items-center justify-start p-2 rounded-[50%] w-8">
    //       <Text
    //         className="text-center text-gray-500_01 text-xs w-auto"
    //         size="txtPlusJakartaSansRomanRegular12Gray50001"
    //       >
    //         ...
    //       </Text>
    //     </div>
    //     <Button
    //       className="cursor-pointer h-8 rounded-lg text-center text-xs w-8"
    //       color="gray_200"
    //       size="sm"
    //     >
    //       10
    //     </Button>
    //     <div className="flex flex-col h-8 md:h-auto items-center justify-start p-2 rounded-lg w-8">
    //       <Text
    //         className="text-center text-gray-500_01 text-xs w-auto"
    //         size="txtPlusJakartaSansRomanRegular12Gray50001"
    //       >
    //         11
    //       </Text>
    //     </div>
    //     <Button
    //       className="cursor-pointer font-semibold h-8 rounded-lg text-center text-xs w-8"
    //       color="deep_purple_A200"
    //       size="sm"
    //     >
    //       12
    //     </Button>
    //     <div className="flex flex-col h-8 md:h-auto items-center justify-start p-2 rounded-lg w-8">
    //       <Text
    //         className="text-center text-gray-500_01 text-xs w-auto"
    //         size="txtPlusJakartaSansRomanRegular12Gray50001"
    //       >
    //         13
    //       </Text>
    //     </div>
    //     <div className="flex flex-col h-8 md:h-auto items-center justify-start p-2 rounded-lg w-8">
    //       <Text
    //         className="text-center text-gray-500_01 text-xs w-auto"
    //         size="txtPlusJakartaSansRomanRegular12Gray50001"
    //       >
    //         14
    //       </Text>
    //     </div>
    //     <div className="flex flex-col h-8 md:h-auto items-center justify-start p-2 rounded-lg w-8">
    //       <Text
    //         className="text-center text-gray-500_01 text-xs w-auto"
    //         size="txtPlusJakartaSansRomanRegular12Gray50001"
    //       >
    //         15
    //       </Text>
    //     </div>
    //     <div className="flex flex-col h-8 md:h-auto items-center justify-start p-2 rounded-lg w-8">
    //       <Text
    //         className="text-center text-gray-500_01 text-xs w-auto"
    //         size="txtPlusJakartaSansRomanRegular12Gray50001"
    //       >
    //         16
    //       </Text>
    //     </div>
    //     <div className="flex flex-col h-8 md:h-auto items-center justify-start p-2 rounded-lg w-8">
    //       <Text
    //         className="text-center text-gray-500_01 text-xs w-auto"
    //         size="txtPlusJakartaSansRomanRegular12Gray50001"
    //       >
    //         ...
    //       </Text>
    //     </div>
    //     <div className="flex flex-col h-8 md:h-auto items-center justify-start p-2 rounded-lg w-8">
    //       <Text
    //         className="text-center text-gray-500_01 text-xs"
    //         size="txtPlusJakartaSansRomanRegular12Gray50001"
    //       >
    //         26
    //       </Text>
    //     </div>
    //   </div>

    //   <div className="flex flex-col items-center justify-start px-3 py-2 rounded-lg w-auto">
    //     <Text
    //       className="text-center text-deep_purple-A200 text-xs w-auto"
    //       size="txtPlusJakartaSansRomanSemiBold12"
    //     >
    //       Next
    //     </Text>
    //   </div>
    // </div>

    count > 0 && (
      <Stack spacing={2}>
        <Pagination count={count} variant="outlined" shape="rounded" />
      </Stack>
    )
  );
};

export default PaginationComp;
