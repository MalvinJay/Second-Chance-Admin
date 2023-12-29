import React, { useEffect } from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "./Layout.css";
import Cookies from "js-cookie";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";
import { sideBarMenu } from "contants";
import AXIOS_INSTANCE from "api/axios";
import { setUser } from "store/UserSlicer/userSlice";
import { useAppDispatch } from "store/hooks";
import { Alert, Button, Snackbar, Stack } from "@mui/material";
import { TAlertMsgProp } from "types/shared.type";
import { NotificationIcon } from "components/Icons/Icons";

import MuiMenu from "@mui/material/Menu";
import MuiMenuItem from "@mui/material/MenuItem";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Layout = ({
  children,
  title,
  alertMsg,
  showAlert,
  handleClose,
}: {
  children: React.ReactNode;
  title: string;
  alertMsg?: TAlertMsgProp;
  showAlert?: boolean;
  handleClose?: () => void;
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = Cookies.get("token");

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseFn = (type: string) => {
    setAnchorEl(null);

    switch (type) {
      case "profile":
        break;
      case "account":
        break;
      case "logout":
        handleSignOut();
        break;

      default:
        break;
    }
  };

  const menuOptions = [
    {
      name: "Notification",
      icon: <NotificationIcon />,
    },
    {
      name: "Settings",
      icon: <SettingsOutlinedIcon />,
    },
    {
      name: "user",
      icon: (
        <>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            variant="text"
            size="small"
            sx={{
              padding: 0,
              margin: 0,
              width: 0,
              height: 0,
              color: "black",
            }}
          >
            <AccountCircleOutlinedIcon color="inherit" />
          </Button>

          <MuiMenu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            className="mt-6"
          >
            <MuiMenuItem onClick={() => handleCloseFn("profile")}>
              Profile
            </MuiMenuItem>
            <MuiMenuItem onClick={() => handleCloseFn("account")}>
              My account
            </MuiMenuItem>
            <MuiMenuItem onClick={() => handleCloseFn("logout")}>
              Logout
            </MuiMenuItem>
          </MuiMenu>
        </>
      ),
    },
  ];

  const clearUserData = () => {
    dispatch(setUser(null));
    Cookies.remove("token");
    navigate("/sign-in");
  };

  const handleSignOut = () => {
    console.log("Handle sign out");

    AXIOS_INSTANCE.post("/users/logout").then((res) => {
      console.log("login response:", res);
      const data = res.data;
      switch (res.status) {
        case 200:
          if (data) clearUserData();
          break;

        default:
          break;
      }
    });
  };

  useEffect(() => {
    if (!token) clearUserData();
  }, [token]);

  return (
    <div className="bg-gray-50 flex flex-col font-plusjakartasans items-center justify-start mx-auto w-full">
      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
        <Sidebar className="side-bar !sticky bg-gray-900 h-screen sm:hidden flex overflow-hidden justify-start md:px-5 top-[0]">
          <Img
            className="h-[46px] md:h-auto ml-8 md:ml-[0] mr-[93px] mt-[23px] object-cover w-[36%]"
            src="images/img_img60591.png"
            alt="img60591"
          />
          <Menu
            menuItemStyles={{
              button: {
                padding: "14px",
                flexDirection: "column",
                borderTopRightRadius: "6px",
                borderBottomRightRadius: "6px",
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
            className="flex flex-col items-center justify-start mt-[63px] pr-3.5 w-[93%]"
          >
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              {sideBarMenu?.map((menu, i) => (
                <MenuItem
                  key={`sideBarMenuItem${i}`}
                  {...menu}
                  component={<Link to={menu.href} />}
                  className={`w-ful 
                    ${
                      menu.href === window.location.pathname
                        ? "active-menu"
                        : ""
                    }
                  `}
                >
                  {menu.label}
                  {menu.href === window.location.pathname && (
                    <div className="active-pipe" />
                  )}
                </MenuItem>
              ))}
            </div>
            <div className="flex flex-col items-center justify-start mt-[204px] w-full">
              <MenuItem onClick={handleSignOut}>
                <div className="flex items-start justify-end">
                  <Text className="md:ml-[0] ml-[11px] mt-1 w-auto">
                    Sign Out
                  </Text>
                </div>
              </MenuItem>
            </div>
          </Menu>
        </Sidebar>

        <div className="flex flex-1 flex-col gap-6 items-center justify-start md:px-5 w-0 pb-20">
          <div className="bg-white-A700 flex flex-row md:gap-10 items-center justify-between p-6 sm:px-5 w-full">
            <Text
              className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
              size="txtPlusJakartaSansRomanBold22"
            >
              {title}
            </Text>
            {/* <Img
              className="h-11 mr-2 w-[164px]"
              src="images/img_frame11.svg"
              alt="frameEleven"
            /> */}
            <Stack direction={"row"} gap={2}>
              {menuOptions.map((item) => (
                <div className="userdropdown rounded-full border border-gray-300 bg-slate-50">
                  {item.icon}
                </div>
              ))}
            </Stack>
          </div>
          {children}
        </div>
      </div>

      {/* Snackbar */}
      <Snackbar
        open={showAlert}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert
          onClose={handleClose}
          severity={alertMsg?.status}
          sx={{ width: "100%" }}
        >
          {alertMsg?.msg}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Layout;
