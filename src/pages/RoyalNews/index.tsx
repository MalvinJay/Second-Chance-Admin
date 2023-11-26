import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "components";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const RoyalNewsPage: React.FC = () => {
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
                Royal News
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
                  News List
                </Text>
                <div className="flex flex-col items-center justify-start">
                  <Button
                    className="cursor-pointer font-semibold min-w-[129px] text-center text-sm"
                    color="deep_purple_A200_19"
                  >
                    + Add News
                  </Button>
                </div>
              </div>
              <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] mt-6 w-full">
                <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-1 flex-col gap-3.5 items-center justify-start p-4 rounded-md w-full">
                  <div className="h-[155px] relative w-full">
                    <Img
                      className="h-[155px] m-auto object-cover rounded-[3px] w-full"
                      src="images/img_rectangle50_155x349.png"
                      alt="rectangleFifty"
                    />
                    <Img
                      className="absolute h-11 object-cover right-[3%] top-[8%] w-[104px]"
                      src="images/img_frame43.png"
                      alt="frameFortyTwo"
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="text-base text-gray-900 w-auto"
                        size="txtPlusJakartaSansRomanBold16Gray900"
                      >
                        News Heading will be here
                      </Text>
                      <Text
                        className="leading-[22.00px] max-w-[349px] md:max-w-full text-gray-900_7f text-xs"
                        size="txtPlusJakartaSansRomanRegular12Gray9007f"
                      >
                        Lorem ipsum dolor sit amet consectetur. Donec egestas ut
                        accumsan nisi..
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
                          (70)
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                        <div className="flex flex-row gap-2 items-center justify-start w-auto">
                          <Img
                            className="h-4 w-4"
                            src="images/img_eye.svg"
                            alt="eye"
                          />
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
                          (19570)
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-1 flex-col gap-3.5 items-center justify-start p-4 rounded-md w-full">
                  <Img
                    className="h-[155px] sm:h-auto object-cover rounded-[3px] w-full"
                    src="images/img_rectangle50_155x349.png"
                    alt="rectangle2171"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="text-base text-gray-900 w-auto"
                        size="txtPlusJakartaSansRomanBold16Gray900"
                      >
                        News Heading will be here
                      </Text>
                      <Text
                        className="leading-[22.00px] max-w-[349px] md:max-w-full text-gray-900_7f text-xs"
                        size="txtPlusJakartaSansRomanRegular12Gray9007f"
                      >
                        Lorem ipsum dolor sit amet consectetur. Donec egestas ut
                        accumsan nisi..
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
                          (70)
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                        <div className="flex flex-row gap-2 items-center justify-start w-auto">
                          <Img
                            className="h-4 w-4"
                            src="images/img_eye.svg"
                            alt="eye"
                          />
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
                          (19570)
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-1 flex-col gap-3.5 items-center justify-start p-4 rounded-md w-full">
                  <Img
                    className="h-[155px] sm:h-auto object-cover rounded-[3px] w-full"
                    src="images/img_rectangle50_155x349.png"
                    alt="rectangle2172"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="text-base text-gray-900 w-auto"
                        size="txtPlusJakartaSansRomanBold16Gray900"
                      >
                        News Heading will be here
                      </Text>
                      <Text
                        className="leading-[22.00px] max-w-[349px] md:max-w-full text-gray-900_7f text-xs"
                        size="txtPlusJakartaSansRomanRegular12Gray9007f"
                      >
                        Lorem ipsum dolor sit amet consectetur. Donec egestas ut
                        accumsan nisi..
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
                          (70)
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                        <div className="flex flex-row gap-2 items-center justify-start w-auto">
                          <Img
                            className="h-4 w-4"
                            src="images/img_eye.svg"
                            alt="eye"
                          />
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
                          (19570)
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-1 flex-col gap-3.5 items-center justify-start p-4 rounded-md w-full">
                  <Img
                    className="h-[155px] sm:h-auto object-cover rounded-[3px] w-full"
                    src="images/img_rectangle50_155x349.png"
                    alt="rectangle2176"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="text-base text-gray-900 w-auto"
                        size="txtPlusJakartaSansRomanBold16Gray900"
                      >
                        News Heading will be here
                      </Text>
                      <Text
                        className="leading-[22.00px] max-w-[349px] md:max-w-full text-gray-900_7f text-xs"
                        size="txtPlusJakartaSansRomanRegular12Gray9007f"
                      >
                        Lorem ipsum dolor sit amet consectetur. Donec egestas ut
                        accumsan nisi..
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
                          (70)
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                        <div className="flex flex-row gap-2 items-center justify-start w-auto">
                          <Img
                            className="h-4 w-4"
                            src="images/img_eye.svg"
                            alt="eye"
                          />
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
                          (19570)
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-1 flex-col gap-3.5 items-center justify-start p-4 rounded-md w-full">
                  <Img
                    className="h-[155px] sm:h-auto object-cover rounded-[3px] w-full"
                    src="images/img_rectangle50_155x349.png"
                    alt="rectangle2177"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="text-base text-gray-900 w-auto"
                        size="txtPlusJakartaSansRomanBold16Gray900"
                      >
                        News Heading will be here
                      </Text>
                      <Text
                        className="leading-[22.00px] max-w-[349px] md:max-w-full text-gray-900_7f text-xs"
                        size="txtPlusJakartaSansRomanRegular12Gray9007f"
                      >
                        Lorem ipsum dolor sit amet consectetur. Donec egestas ut
                        accumsan nisi..
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
                          (70)
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                        <div className="flex flex-row gap-2 items-center justify-start w-auto">
                          <Img
                            className="h-4 w-4"
                            src="images/img_eye.svg"
                            alt="eye"
                          />
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
                          (19570)
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-1 flex-col gap-3.5 items-center justify-start p-4 rounded-md w-full">
                  <Img
                    className="h-[155px] sm:h-auto object-cover rounded-[3px] w-full"
                    src="images/img_rectangle50_155x349.png"
                    alt="rectangle2178"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="text-base text-gray-900 w-auto"
                        size="txtPlusJakartaSansRomanBold16Gray900"
                      >
                        News Heading will be here
                      </Text>
                      <Text
                        className="leading-[22.00px] max-w-[349px] md:max-w-full text-gray-900_7f text-xs"
                        size="txtPlusJakartaSansRomanRegular12Gray9007f"
                      >
                        Lorem ipsum dolor sit amet consectetur. Donec egestas ut
                        accumsan nisi..
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
                          (70)
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                        <div className="flex flex-row gap-2 items-center justify-start w-auto">
                          <Img
                            className="h-4 w-4"
                            src="images/img_eye.svg"
                            alt="eye"
                          />
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
                          (19570)
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-6 items-start justify-start mt-[138px] w-auto sm:w-full">
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

export default RoyalNewsPage;
