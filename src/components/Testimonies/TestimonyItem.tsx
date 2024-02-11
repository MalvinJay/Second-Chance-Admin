import React from "react";
import { Img } from "../Img";
import { Text } from "../Text";

interface TestimonyItemProps {
  name: string;
  testimony: string;
  photo: string;
  position: string;
  isActive: boolean;
}

const TestimonyItem = ({ item }: { item: TestimonyItemProps }) => {
  const { photo, testimony, name, position, isActive = false } = item;

  return (
    <div
      className={`${
        isActive
          ? "border-2 border-[#FD1FF6] justify-start p-8 rounded-md"
          : "border border-gray-900_19 justify-center p-[26px] rounded-md shadow-bs2"
      } bg-white-A700 flex flex-col items-start md:mt-0 sm:px-5 w-full max-h-[292px]`}
    >
      <Img
        className={isActive ? "h-[38px] md:h-auto object-cover" : "h-8"}
        src="images/img_signal.svg"
        alt="signal"
      />
      <Text
        className={`${
          isActive
            ? "!leading-snug mt-2 text-sm"
            : "!leading-snug mt-1.5 text-sm"
        }  text-blue_gray-900_cc w-full`}
        size={
          isActive
            ? "txtPlusJakartaSansRomanRegular20"
            : "txtPlusJakartaSansRomanRegular16Bluegray900cc"
        }
      >
        {testimony}
      </Text>
      <div
        className={`${
          isActive
            ? "gap-5 justify-start mb-6 mt-10 w-auto"
            : "gap-4 h-[70px] md:h-auto my-[23px]  w-[294px]"
        } flex flex-row items-center justify-start`}
      >
        <Img
          className={`${
            isActive ? "h-[84px] w-[84px]" : "h-[70px] w-[70px]"
          } md:h-auto rounded-[50%] w-[70px] object-contain`}
          src={photo}
          alt={name}
        />
        <div
          className={`${
            isActive ? "gap-2" : "gap-[6.66px] h-[65px] md:h-auto"
          } flex flex-col items-start justify-start w-auto`}
        >
          <Text
            className={`${
              isActive ? "sm:text-2xl md:text-[26px] text-[28px]" : "text-lg"
            } font-bold text-blue_gray-900 w-auto`}
            size={
              isActive
                ? "txtPlusJakartaSansRomanSemiBold28"
                : "txtPlusJakartaSansRomanSemiBold24"
            }
          >
            {name}
          </Text>
          <Text
            className={`text-sm text-blue_gray-900_7f w-auto`}
            size="txtPlusJakartaSansRomanRegular14Bluegray9007f"
          >
            {position}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default TestimonyItem;
