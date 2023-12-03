import { Img } from "components/Img";
import { List } from "components/List";
import React, { Fragment } from "react";

interface IDivTable {
  itemList: any[];
}

const DivTable = (props: IDivTable) => {
  const { itemList } = props;

  return (
    <div className="flex flex-col items-start justify-start w-auto md:w-full">
      <div className="bg-gray-50 border border-gray-900_19 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start p-3 rounded-md w-full"></div>

      <List className="flex flex-col items-start w-full" orientation="vertical">
        <div className="border-b border-black-900_19 border-solid w-full">
          <div className="flex gap-[18px] items-center justify-start w-full">
            {itemList.map((item: any, index: number) => (
              <Fragment key={index}>
                {Object.keys(item).map((el) => item[el])}
              </Fragment>
            ))}
          </div>
        </div>
      </List>
    </div>
  );
};

export default DivTable;
