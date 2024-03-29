import { Button } from "components/Button";
import { Text } from "components/Text";

const AddArticle = ({
  logo,
  title = "",
  description = "",
  setShow = (e: boolean) => {},
}) => {
  return (
    <div className="bg-gray-50 border border-purple-A400 border-solid flex md:flex-1 flex-col items-center justify-start p-8 sm:px-5 rounded-lg w-[38%] md:w-full">
      <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
        <div className="flex flex-col gap-4 items-center justify-start w-auto">
          <div className="bg-white-A700 border border-purple-A400 border-solid flex flex-col h-[82px] items-center justify-start p-[29px] sm:px-5 rounded-[50%] w-[82px]">
            {logo}
          </div>
          <div className="flex flex-col gap-2 items-center justify-start w-auto">
            <Text
              className="text-base text-blue_gray-900 w-auto"
              size="txtPlusJakartaSansRomanBold16"
            >
              {title}
            </Text>
            <Text
              className="leading-[24.00px] max-w-[324px] md:max-w-full text-blue_gray-900_87 text-center text-xs"
              size="txtPlusJakartaSansRomanRegular12"
            >
              {description}
            </Text>
          </div>
        </div>

        <Button
          className="!text-purple-A200 cursor-pointer font-semibold text-center text-xs w-[324px]"
          variant="gradient"
          color="purple_A200_19_purple_500_19"
          onClick={() => setShow(true)}
        >
          + Add new
        </Button>
      </div>
    </div>
  );
};

export default AddArticle;
