import React from "react";

const sizeClasses = {
  txtPlusJakartaSansRomanBold24: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanMedium16: "font-medium font-plusjakartasans",
  txtPlusJakartaSansRomanRegular12Bluegray900:
    "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanSemiBold16: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansRomanBold12: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanSemiBold14: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansRomanBold16: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanMedium14: "font-medium font-plusjakartasans",
  txtPlusJakartaSansRomanBold18: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanSemiBold20: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansRomanBold20: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanSemiBold12: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansRomanBold22: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanSemiBold22: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansRomanRegular12Gray9007f: "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanMedium14Gray900: "font-medium font-plusjakartasans",
  txtPlusJakartaSansRomanRegular12: "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanSemiBold22Gray900:
    "font-plusjakartasans font-semibold",
  txtPlusJakartaSansRomanRegular12Gray900: "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanRegular14Bluegray90099:
    "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanRegular14: "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanBold16Gray900: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanRegular12Gray50001: "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanRegular14Bluegray900:
    "font-normal font-plusjakartasans",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
