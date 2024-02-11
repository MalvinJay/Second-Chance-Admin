import { Button } from "components/Button";
import { DeleteIcon, EditIcon } from "components/Icons/Icons";
import { Img } from "components/Img";
import { Text } from "components/Text";

interface IArticleItemProps {
  banner: string;
  title: string;
  description: string;
}

const ArticleItem = (props: IArticleItemProps) => {
  const { banner, title, description } = props;
  return (
    <div className="relative group flex flex-col items-center justify-start w-full">
      <div className="h-[162px] relative w-full">
        <Img
          className="h-[162px] m-auto object-cover rounded-t-lg w-full"
          src={banner}
          alt="banner"
        />
      </div>

      <div className="px-4 py-5 border border-gray-900_19 !border-t-0 rounded-b-lg flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
        <Text
          className="text-gray-900 text-xl w-auto"
          size="txtPlusJakartaSansRomanBold20"
        >
          {title}
        </Text>
        <Text
          className="!leading-loose max-w-[386px] md:max-w-full text-gray-900_7f text-sm"
          size="txtPlusJakartaSansRomanRegular14"
        >
          {description}
        </Text>
      </div>

      {/* Actions */}
      <div className="hidden group-hover:flex absolute right-4 top-5 items-center gap-4 transition duration-300">
        <Button className="w-[44px] h-[44px] bg-purple-A200 rounded-full flex justify-center items-center">
          <EditIcon />
        </Button>

        <Button className="w-[44px] h-[44px] bg-purple-A200 rounded-full flex justify-center items-center">
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
};

export default ArticleItem;
