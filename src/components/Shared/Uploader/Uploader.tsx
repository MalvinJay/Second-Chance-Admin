import { Img } from "components/Img";
import { Text } from "components/Text";

interface IUploaderProps {
  title: string;
  uploadIcon: string;
  ctaTitle: string;
  ctaTypes: string;
}

const Uploader = (props: IUploaderProps) => {
  const {
    title,
    ctaTitle,
    uploadIcon = "images/img_television.svg",
    ctaTypes = "JPEG, PNG, JPG",
  } = props;

  return (
    <div className="flex flex-col gap-5 items-start justify-start mt-8 w-auto md:w-full">
      <Text
        className="text-blue_gray-900 text-xl w-auto"
        size="txtPlusJakartaSansRomanSemiBold20"
      >
        {title}
      </Text>
      <div
        className="bg-cover bg-no-repeat flex flex-col h-[132px] items-center justify-start p-6 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_group10120.svg')" }}
      >
        <div className="flex flex-col gap-2.5 items-center justify-start w-auto sm:w-full">
          <Img className="h-6 w-6" src={uploadIcon} alt="television" />
          <div className="flex flex-col gap-2 items-center justify-start w-auto sm:w-full">
            <Text
              className="text-base text-blue_gray-900 w-auto"
              size="txtPlusJakartaSansRomanBold16"
            >
              {ctaTitle}
            </Text>
            <Text
              className="text-blue_gray-900_87 text-center text-xs w-auto"
              size="txtPlusJakartaSansRomanRegular12"
            >
              Drag and drop or click here to browse files (File format:{" "}
              {ctaTypes})
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uploader;
