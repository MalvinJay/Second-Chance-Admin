import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, List, Text } from "components";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const FMStationPage: React.FC = () => {
  const sideBarMenu: SideBarMenuType = [
    {
      label: "Home",
      href: "/",
      active: window.location.pathname === "/",
    },
    {
      label: "About Us",
      href: "/aboutus",
      active: window.location.pathname === "/aboutus",
    },
    { label: "VOG Live Services" },
    {
      label: "Tv Shows",
      href: "/tvshows",
      active: window.location.pathname === "/tvshows",
    },
    {
      label: "FM Station",
      href: "/fmstation",
      active: window.location.pathname === "/fmstation",
    },
    {
      label: "Royal News",
      href: "/royalnews",
      active: window.location.pathname === "/royalnews",
    },
    {
      label: "Contact Us",
      href: "/contactus",
      active: window.location.pathname === "/contactus",
    },
  ];

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-plusjakartasans items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar className="!sticky !w-[193px] bg-gray-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <Img
              className="h-[46px] md:h-auto ml-8 md:ml-[0] mr-[93px] mt-[23px] object-cover w-[36%]"
              src="images/img_img60591.png"
              alt="img60591"
            />
            <Menu
              menuItemStyles={{
                button: {
                  padding: "14px",
                  borderTopRightRadius: "6px",
                  borderBottomRightRadius: "6px",
                  flexDirection: "column",
                  color: "#ffffff87",
                  textAlign: "center",
                  fontWeight: 500,
                  fontSize: "14px",
                  [`&:hover, &.ps-active`]: {
                    color: "#ffffff",
                    fontWeight: "600 !important",
                  },
                },
              }}
              className="flex flex-col items-center justify-start mb-10 mt-12 pr-3.5 w-[93%]"
            >
              <div className="flex flex-col gap-4 items-center justify-start w-full">
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </div>
              <div className="flex flex-col items-center justify-start mt-[388px] w-full">
                <MenuItem>
                  <div className="flex items-start justify-end">
                    <Text className="md:ml-[0] ml-[11px] mt-1 w-auto">
                      Sign Out
                    </Text>
                  </div>
                </MenuItem>
              </div>
            </Menu>
          </Sidebar>
          <div className="flex flex-1 flex-col gap-8 items-center justify-start md:px-5 w-full">
            <div className="bg-white-A700 flex flex-row md:gap-10 items-center justify-between p-6 sm:px-5 w-full">
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtPlusJakartaSansRomanBold22"
              >
                FM Station
              </Text>
              <Img
                className="h-11 mr-2 w-[164px]"
                src="images/img_frame11.svg"
                alt="frameEleven"
              />
            </div>
            <div className="flex flex-col items-center justify-start w-[96%] md:w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                  size="txtPlusJakartaSansRomanSemiBold22Gray900"
                >
                  Channel List
                </Text>
                <div className="flex flex-col items-center justify-start">
                  <Button
                    className="cursor-pointer font-semibold min-w-[146px] text-center text-sm"
                    color="deep_purple_A200_19"
                  >
                    + Add Channel
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-col items-center justify-start mt-8 pt-6 sm:px-5 px-6 rounded-[10px] w-full">
                <div className="bg-gray-50 border border-gray-900_19 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start p-3 rounded-md w-full">
                  <div className="flex flex-row gap-4 items-start justify-start ml-2 md:ml-[0] w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_thumbsup.svg"
                      alt="thumbsup"
                    />
                    <Text
                      className="text-blue_gray-900_87 text-xs w-auto"
                      size="txtPlusJakartaSansRomanRegular12"
                    >
                      Channel Name
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[200px] text-blue_gray-900_87 text-xs"
                    size="txtPlusJakartaSansRomanRegular12"
                  >
                    Frequency
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[155px] text-blue_gray-900_87 text-xs"
                    size="txtPlusJakartaSansRomanRegular12"
                  >
                    Available Shows (Daily)
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[93px] text-blue_gray-900_87 text-xs"
                    size="txtPlusJakartaSansRomanRegular12"
                  >
                    Status
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[215px] text-blue_gray-900_87 text-xs"
                    size="txtPlusJakartaSansRomanRegular12"
                  >
                    Actions
                  </Text>
                </div>
                <List
                  className="flex flex-col items-start w-auto"
                  orientation="vertical"
                >
                  <div className="border-b border-black-900_19 border-solid flex md:flex-col flex-row md:gap-10 gap-[98px] items-center justify-start max-w-[1144px] my-0 pl-5 md:pr-10 pr-14 sm:pr-5 py-5 w-full">
                    <div className="flex md:flex-1 flex-col items-center justify-start w-auto md:w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-auto">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-auto sm:w-full">
                          <div className="flex flex-row gap-3 items-center justify-start w-auto">
                            <Img
                              className="h-6 w-6"
                              src="images/img_thumbsup.svg"
                              alt="thumbsup"
                            />
                            <Text
                              className="text-blue_gray-900 text-xs w-auto"
                              size="txtPlusJakartaSansRomanBold12"
                            >
                              Kumasi
                            </Text>
                          </div>
                          <Text
                            className="text-blue_gray-900 text-xs w-auto"
                            size="txtPlusJakartaSansRomanRegular12Bluegray900"
                          >
                            88.9 Mhz
                          </Text>
                        </div>
                        <Text
                          className="text-blue_gray-900 text-xs w-auto"
                          size="txtPlusJakartaSansRomanRegular12Bluegray900"
                        >
                          8
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-xs w-auto"
                          size="txtPlusJakartaSansRomanRegular12Bluegray900"
                        >
                          Active
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-6 w-[68px]"
                      src="images/img_grid.svg"
                      alt="grid"
                    />
                  </div>
                  <div className="border-b border-black-900_19 border-solid flex md:flex-col flex-row md:gap-10 gap-[98px] items-center justify-start max-w-[1144px] my-0 pl-5 md:pr-10 pr-14 sm:pr-5 py-5 w-full">
                    <div className="flex md:flex-1 flex-col items-center justify-start w-auto md:w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-auto">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-auto sm:w-full">
                          <div className="flex flex-row gap-3 items-center justify-start w-auto">
                            <Img
                              className="h-6 w-6"
                              src="images/img_thumbsup.svg"
                              alt="thumbsup"
                            />
                            <Text
                              className="text-blue_gray-900 text-xs w-auto"
                              size="txtPlusJakartaSansRomanBold12"
                            >
                              Kumasi
                            </Text>
                          </div>
                          <Text
                            className="text-blue_gray-900 text-xs w-auto"
                            size="txtPlusJakartaSansRomanRegular12Bluegray900"
                          >
                            88.9 Mhz
                          </Text>
                        </div>
                        <Text
                          className="text-blue_gray-900 text-xs w-auto"
                          size="txtPlusJakartaSansRomanRegular12Bluegray900"
                        >
                          9
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-xs w-auto"
                          size="txtPlusJakartaSansRomanRegular12Bluegray900"
                        >
                          Active
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-6 w-[68px]"
                      src="images/img_grid.svg"
                      alt="grid"
                    />
                  </div>
                  <div className="border-b border-black-900_19 border-solid flex md:flex-col flex-row md:gap-10 gap-[98px] items-center justify-start max-w-[1144px] my-0 pl-5 md:pr-10 pr-14 sm:pr-5 py-5 w-full">
                    <div className="flex md:flex-1 flex-col items-center justify-start w-auto md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-auto">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-auto sm:w-full">
                          <div className="flex flex-row gap-3 items-center justify-start w-auto">
                            <Img
                              className="h-6 w-6"
                              src="images/img_thumbsup.svg"
                              alt="thumbsup"
                            />
                            <Text
                              className="text-blue_gray-900 text-xs w-auto"
                              size="txtPlusJakartaSansRomanBold12"
                            >
                              Kumasi
                            </Text>
                          </div>
                          <Text
                            className="text-blue_gray-900 text-xs w-auto"
                            size="txtPlusJakartaSansRomanRegular12Bluegray900"
                          >
                            88.9 Mhz
                          </Text>
                        </div>
                        <Text
                          className="text-blue_gray-900 text-xs w-auto"
                          size="txtPlusJakartaSansRomanRegular12Bluegray900"
                        >
                          -
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-xs w-auto"
                          size="txtPlusJakartaSansRomanRegular12Bluegray900"
                        >
                          Deactivate
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-6 w-[68px]"
                      src="images/img_grid.svg"
                      alt="grid"
                    />
                  </div>
                  <div className="border-b border-black-900_19 border-solid flex md:flex-col flex-row md:gap-10 gap-[98px] items-center justify-start max-w-[1144px] my-0 pl-5 md:pr-10 pr-14 sm:pr-5 py-5 w-full">
                    <div className="flex md:flex-1 flex-col items-center justify-start w-auto md:w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-auto">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-auto sm:w-full">
                          <div className="flex flex-row gap-3 items-center justify-start w-auto">
                            <Img
                              className="h-6 w-6"
                              src="images/img_thumbsup.svg"
                              alt="thumbsup"
                            />
                            <Text
                              className="text-blue_gray-900 text-xs w-auto"
                              size="txtPlusJakartaSansRomanBold12"
                            >
                              Kumasi
                            </Text>
                          </div>
                          <Text
                            className="text-blue_gray-900 text-xs w-auto"
                            size="txtPlusJakartaSansRomanRegular12Bluegray900"
                          >
                            88.9 Mhz
                          </Text>
                        </div>
                        <Text
                          className="text-blue_gray-900 text-xs w-auto"
                          size="txtPlusJakartaSansRomanRegular12Bluegray900"
                        >
                          4
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-xs w-auto"
                          size="txtPlusJakartaSansRomanRegular12Bluegray900"
                        >
                          Active
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-6 w-[68px]"
                      src="images/img_grid.svg"
                      alt="grid"
                    />
                  </div>
                  <div className="border-b border-black-900_19 border-solid flex md:flex-col flex-row md:gap-10 gap-[98px] items-center justify-start max-w-[1144px] my-0 pl-5 md:pr-10 pr-14 sm:pr-5 py-5 w-full">
                    <div className="flex md:flex-1 flex-col items-center justify-start w-auto md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-auto">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-auto sm:w-full">
                          <div className="flex flex-row gap-3 items-center justify-start w-auto">
                            <Img
                              className="h-6 w-6"
                              src="images/img_thumbsup.svg"
                              alt="thumbsup"
                            />
                            <Text
                              className="text-blue_gray-900 text-xs w-auto"
                              size="txtPlusJakartaSansRomanBold12"
                            >
                              Kumasi
                            </Text>
                          </div>
                          <Text
                            className="text-blue_gray-900 text-xs w-auto"
                            size="txtPlusJakartaSansRomanRegular12Bluegray900"
                          >
                            88.9 Mhz
                          </Text>
                        </div>
                        <Text
                          className="text-blue_gray-900 text-xs w-auto"
                          size="txtPlusJakartaSansRomanRegular12Bluegray900"
                        >
                          -
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-xs w-auto"
                          size="txtPlusJakartaSansRomanRegular12Bluegray900"
                        >
                          Deactivate{" "}
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-6 w-[68px]"
                      src="images/img_grid.svg"
                      alt="grid"
                    />
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 gap-[98px] items-center justify-start max-w-[1144px] my-0 pl-5 md:pr-10 pr-14 sm:pr-5 py-5 w-full">
                    <div className="flex md:flex-1 flex-col items-center justify-start w-auto md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-auto">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-auto sm:w-full">
                          <div className="flex flex-row gap-3 items-center justify-start w-auto">
                            <Img
                              className="h-6 w-6"
                              src="images/img_thumbsup.svg"
                              alt="thumbsup"
                            />
                            <Text
                              className="text-blue_gray-900 text-xs w-auto"
                              size="txtPlusJakartaSansRomanBold12"
                            >
                              Kumasi
                            </Text>
                          </div>
                          <Text
                            className="text-blue_gray-900 text-xs w-auto"
                            size="txtPlusJakartaSansRomanRegular12Bluegray900"
                          >
                            88.9 Mhz
                          </Text>
                        </div>
                        <Text
                          className="text-blue_gray-900 text-xs w-auto"
                          size="txtPlusJakartaSansRomanRegular12Bluegray900"
                        >
                          -
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-xs w-auto"
                          size="txtPlusJakartaSansRomanRegular12Bluegray900"
                        >
                          Deactivate
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-6 w-[68px]"
                      src="images/img_grid.svg"
                      alt="grid"
                    />
                  </div>
                </List>
              </div>
              <div className="flex sm:flex-col flex-row gap-6 items-start justify-start mt-[308px] w-auto sm:w-full">
                <div className="flex flex-col h-8 md:h-auto items-center justify-start px-3 py-2 rounded-lg w-20">
                  <Text
                    className="text-deep_purple-A200 text-xs w-auto"
                    size="txtPlusJakartaSansRomanSemiBold12"
                  >
                    Previous
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-1 items-center justify-start w-auto sm:w-full">
                  <div className="flex flex-col h-8 md:h-auto items-center justify-start p-2 rounded-[50%] w-8">
                    <Text
                      className="text-center text-gray-500_01 text-xs w-auto"
                      size="txtPlusJakartaSansRomanRegular12Gray50001"
                    >
                      1
                    </Text>
                  </div>
                  <div className="flex flex-col h-8 md:h-auto items-center justify-start p-2 rounded-[50%] w-8">
                    <Text
                      className="text-center text-gray-500_01 text-xs w-auto"
                      size="txtPlusJakartaSansRomanRegular12Gray50001"
                    >
                      ...
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer h-8 rounded-lg text-center text-xs w-8"
                    color="gray_200"
                    size="sm"
                  >
                    10
                  </Button>
                  <div className="flex flex-col h-8 md:h-auto items-center justify-start p-2 rounded-lg w-8">
                    <Text
                      className="text-center text-gray-500_01 text-xs w-auto"
                      size="txtPlusJakartaSansRomanRegular12Gray50001"
                    >
                      11
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold h-8 rounded-lg text-center text-xs w-8"
                    color="deep_purple_A200"
                    size="sm"
                  >
                    12
                  </Button>
                  <div className="flex flex-col h-8 md:h-auto items-center justify-start p-2 rounded-lg w-8">
                    <Text
                      className="text-center text-gray-500_01 text-xs w-auto"
                      size="txtPlusJakartaSansRomanRegular12Gray50001"
                    >
                      13
                    </Text>
                  </div>
                  <div className="flex flex-col h-8 md:h-auto items-center justify-start p-2 rounded-lg w-8">
                    <Text
                      className="text-center text-gray-500_01 text-xs w-auto"
                      size="txtPlusJakartaSansRomanRegular12Gray50001"
                    >
                      14
                    </Text>
                  </div>
                  <div className="flex flex-col h-8 md:h-auto items-center justify-start p-2 rounded-lg w-8">
                    <Text
                      className="text-center text-gray-500_01 text-xs w-auto"
                      size="txtPlusJakartaSansRomanRegular12Gray50001"
                    >
                      15
                    </Text>
                  </div>
                  <div className="flex flex-col h-8 md:h-auto items-center justify-start p-2 rounded-lg w-8">
                    <Text
                      className="text-center text-gray-500_01 text-xs w-auto"
                      size="txtPlusJakartaSansRomanRegular12Gray50001"
                    >
                      16
                    </Text>
                  </div>
                  <div className="flex flex-col h-8 md:h-auto items-center justify-start p-2 rounded-lg w-8">
                    <Text
                      className="text-center text-gray-500_01 text-xs w-auto"
                      size="txtPlusJakartaSansRomanRegular12Gray50001"
                    >
                      ...
                    </Text>
                  </div>
                  <div className="flex flex-col h-8 md:h-auto items-center justify-start p-2 rounded-lg w-8">
                    <Text
                      className="text-center text-gray-500_01 text-xs"
                      size="txtPlusJakartaSansRomanRegular12Gray50001"
                    >
                      26
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start px-3 py-2 rounded-lg w-auto">
                  <Text
                    className="text-center text-deep_purple-A200 text-xs w-auto"
                    size="txtPlusJakartaSansRomanSemiBold12"
                  >
                    Next
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FMStationPage;
