import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, SelectBox, Text } from "components";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const optionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ContactUsPage: React.FC = () => {
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
              <div className="flex flex-col items-center justify-start mt-[402px] w-full">
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
              <a
                href="javascript:"
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
              >
                <Text size="txtPlusJakartaSansRomanBold22">Contact Us</Text>
              </a>
              <Img
                className="h-11 mr-2 w-[164px]"
                src="images/img_frame11.svg"
                alt="frameEleven"
              />
            </div>
            <div className="flex flex-col items-start justify-start w-[96%] md:w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                  size="txtPlusJakartaSansRomanSemiBold22Gray900"
                >
                  Your informations
                </Text>
                <div className="flex flex-col items-center justify-start">
                  <Button
                    className="cursor-pointer font-semibold min-w-[128px] text-center text-sm"
                    color="deep_purple_A200_19"
                  >
                    Update Info
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-8 items-center justify-start mt-[47px] w-[85%] md:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtPlusJakartaSansRomanSemiBold20"
                  >
                    Email
                  </Text>
                  <Input
                    name="frame1091"
                    placeholder="Enter your email here"
                    className="md:h-auto p-0 placeholder:text-blue_gray-900_99 sm:h-auto text-left text-sm w-full"
                    wrapClassName="border border-gray-900_26 border-solid w-full"
                    type="email"
                    size="2xl"
                  ></Input>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtPlusJakartaSansRomanSemiBold20"
                  >
                    Contact Number
                  </Text>
                  <div className="bg-white-A700 border border-gray-900_26 border-solid flex flex-row gap-6 items-center justify-start p-4 rounded-md w-[487px] sm:w-full">
                    <div className="bg-white-A700 border border-gray-900_19 border-solid md:h-5 h-9 px-2 py-1 relative rounded-[3px] w-[89px]">
                      <Img
                        className="absolute h-5 inset-[0] justify-center m-auto object-cover rounded-[3px] w-[35px]"
                        src="images/img_rectangle2179.png"
                        alt="rectangle2179"
                      />
                      <SelectBox
                        className="absolute bottom-[11%] inset-x-[0] mx-auto text-blue_gray-900_99 text-left text-sm w-[83%] sm:w-full"
                        placeholderClassName="text-blue_gray-900_99"
                        indicator={
                          <Img
                            className="h-4 mr-[0] w-4 right-[9%] absolute"
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="groupThirtyFive"
                        options={optionsList}
                        isSearchable={false}
                        placeholder="+1"
                      />
                    </div>
                    <Text
                      className="text-blue_gray-900_99 text-sm w-auto"
                      size="txtPlusJakartaSansRomanRegular14Bluegray90099"
                    >
                      +12457849649
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start mt-6 w-auto md:w-full">
                <Text
                  className="text-blue_gray-900 text-xl w-auto"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Location
                </Text>
                <Input
                  name="frame1091_One"
                  placeholder="Enter your location here"
                  className="p-0 placeholder:text-blue_gray-900_99 text-left text-sm w-full"
                  wrapClassName="border border-gray-900_26 border-solid flex md:h-auto max-w-[1004px] w-full"
                  suffix={
                    <Img
                      className="h-6 ml-3"
                      src="images/img_settings_gray_900.svg"
                      alt="settings"
                    />
                  }
                  size="lg"
                ></Input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
