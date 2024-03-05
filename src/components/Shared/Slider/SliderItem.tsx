import { Button } from "components/Button";
import { DeleteIcon, EditIcon } from "components/Icons/Icons";
import { Img } from "components/Img";
import { Text } from "components/Text";
import placeholder from "/images/placeholder.png";

interface ISliderItemProps {
  className?: string;
  title: string;
  banner: string;
  description: string;
  cta: string;
  cta_link: string;
}

const SliderItem = (props: ISliderItemProps) => {
  const { title, banner, description, cta, cta_link, className } = props;
  return (
    <div className={`group h-[292px] relative ${className}`}>
      <Img
        className="h-[292px] m-auto object-cover rounded-lg w-full"
        src={banner}
        placeholder={placeholder}
        alt="ads"
      />
      <div className="absolute flex flex-col gap-6 h-max inset-y-[0] items-start justify-start left-[7%] my-auto w-auto">
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
          <Text
            className="leading-[28.00px] max-w-[236px] md:max-w-full text-gray-900 text-lg"
            size="txtPlusJakartaSansRomanBold18"
          >
            {title}
          </Text>
          <Text
            className="leading-[22.00px] max-w-[236px] md:max-w-full text-gray-900 text-xs"
            size="txtPlusJakartaSansRomanRegular12Gray900"
          >
            {description}
          </Text>
        </div>

        <a href={cta_link} target="_blank">
          <Button
            className="cursor-pointer font-semibold leading-[normal] min-w-[93px] text-[10px] text-center"
            color="gray_900"
          >
            {cta}
          </Button>
        </a>
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

export default SliderItem;
