import React from "react";

export type ImgProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> &
  Partial<{
    className: string;
    src: string;
    alt: string;
  }>;

const Img: React.FC<React.PropsWithChildren<ImgProps>> = ({
  className,
  src = "defaultNoData.png",
  alt = "testImg",
  ...restProps
}) => {
  const onError = ({ target }) => {
    return (target.src = restProps.placeholder);
  };

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      {...restProps}
      loading={"lazy"}
      onError={onError}
    />
  );
};
export { Img };
