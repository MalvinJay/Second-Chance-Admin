import React from "react";

interface ICheckbox
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
}

const Checkbox = (props: ICheckbox) => {
  const { className, ...rest } = props;
  return (
    <input
      className={`${className} shared-checkbox w-6 h-6 rounded-sm`}
      type="checkbox"
      {...rest}
    />
  );
};

export default Checkbox;
