import { Button } from "components/Button";
import { DeleteIcon, EditIcon } from "components/Icons/Icons";
import { Img } from "components/Img";
import { Text } from "components/Text";

interface IRoyalNewsItemProps {
  banner: string;
  title: string;
  description: string;
  comments: string;
  views: string;
}

const RoyalNewsItem = (props: IRoyalNewsItemProps) => {
  const { banner, title, description, comments, views } = props;
  return (
    <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-1 flex-col gap-3.5 items-center justify-start p-4 rounded-md w-full">
      <div className="h-[155px] relative w-full group">
        <Img
          className="h-[155px] m-auto object-cover rounded-[3px] w-full"
          src={banner}
          alt="rectangleFifty"
        />

        <div className="hidden group-hover:flex absolute right-4 top-5 items-center gap-4 transition duration-300">
          <Button className="w-[44px] h-[44px] bg-purple-A200 rounded-full flex justify-center items-center">
            <EditIcon />
          </Button>

          <Button className="w-[44px] h-[44px] bg-purple-A200 rounded-full flex justify-center items-center">
            <DeleteIcon />
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start justify-start w-auto">
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
          <Text
            className="text-base text-gray-900 w-auto"
            size="txtPlusJakartaSansRomanBold16Gray900"
          >
            {title}
          </Text>
          <Text
            className="leading-[22.00px] max-w-[349px] md:max-w-full text-gray-900_7f text-xs"
            size="txtPlusJakartaSansRomanRegular12Gray9007f"
          >
            {description}
          </Text>
        </div>
        <div className="flex flex-row gap-6 items-start justify-start w-auto">
          <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Img
                className="h-4 w-4"
                src="images/img_group2.svg"
                alt="groupTwo"
              />
              <Text
                className="text-gray-900_7f text-xs w-auto"
                size="txtPlusJakartaSansRomanRegular12Gray9007f"
              >
                Comments
              </Text>
            </div>
            <Text
              className="text-gray-900 text-sm w-auto"
              size="txtPlusJakartaSansRomanMedium14Gray900"
            >
              ({comments})
            </Text>
          </div>
          <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Img className="h-4 w-4" src="images/img_eye.svg" alt="eye" />
              <Text
                className="text-gray-900_7f text-xs w-auto"
                size="txtPlusJakartaSansRomanRegular12Gray9007f"
              >
                View
              </Text>
            </div>
            <Text
              className="text-gray-900 text-sm w-auto"
              size="txtPlusJakartaSansRomanMedium14Gray900"
            >
              ({views})
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoyalNewsItem;
