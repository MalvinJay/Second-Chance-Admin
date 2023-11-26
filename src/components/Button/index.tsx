import React from "react";

const shapes = {
  square: "rounded-none",
  circle: "rounded-[50%]",
  round: "rounded-md",
} as const;
const variants = {
  gradient: {
    purple_A200_19_purple_500_19: "bg-gradient ",
    purple_A200_purple_500: "bg-gradient1  text-white-A700",
  },
  fill: {
    blue_gray_900_19: "bg-blue_gray-900_19 text-blue_gray-900",
    gray_50: "bg-gray-50 text-deep_purple-A200",
    blue_A200: "bg-blue-A200 text-white-A700",
    red_300: "bg-red-300 text-white-A700",
    blue_400: "bg-blue-400 text-white-A700",
    gray_900: "bg-gray-900 text-white-A700",
    light_green_700_19: "bg-light_green-700_19 text-light_green-700",
    red_500_19: "bg-red-500_19 text-red-500",
    gray_200: "bg-gray-200 text-gray-500_01",
    deep_purple_A200: "bg-deep_purple-A200 text-white-A700",
    gray_50_01: "bg-gray-50_01",
    deep_purple_A200_19: "bg-deep_purple-A200_19 text-deep_purple-A200",
  },
} as const;
const sizes = {
  xs: "p-1",
  sm: "p-2",
  md: "p-[11px]",
  lg: "px-2 py-3.5",
  xl: "p-[15px]",
  "2xl": "p-[18px]",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  size = "md",
  variant = "fill",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
