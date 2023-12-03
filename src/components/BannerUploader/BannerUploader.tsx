import { Img } from "components/Img";
import { Text } from "components/Text";

interface IBannerProps {
  icon?: string;
  title: string;
  uploadText?: string;
}

const BannerUploader = (props: IBannerProps) => {
  const { icon, title, uploadText } = props;
  return (
    <div className="bg-gray-900_20 border border-gray-900_26 rounded-[10px] flex flex-col h-[132px] items-center justify-start p-6 sm:px-5 w-full">
      <div className="flex flex-col gap-2.5 items-center justify-start w-full">
        <Img className="h-6 w-6" src={icon} alt="television" />
        <div className="flex flex-col gap-2 items-center justify-start w-full">
          <Text
            className="text-base text-blue_gray-900 w-auto"
            size="txtPlusJakartaSansRomanBold16"
          >
            {title}
          </Text>
          <Text
            className="text-blue_gray-900_87 text-center text-xs w-auto"
            size="txtPlusJakartaSansRomanRegular12"
          >
            {uploadText}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default BannerUploader;
