import { DropdownItemProp } from "@promaidev00/common-libraries";
import { LoginMockProps } from "./auth.types";

export interface IUserAPI {
  name: string;
  lastName: string | null;
  id: string;
  email: string;
  userName: string;
  company: string | null;
  phone: string | null;
  permission: string;
  isBlock: string | null;
  createdAt: string;
  updatedAt: string;
  role: string;
  tempPermissionLevel: string;
  tempExpireAt: string;
  isDisclaimer: boolean;
  state: string;
}

export interface UserSliceProp {
  user: LoginMockProps | null;
  token?: string;
}

export interface IHeaderDropdown {
  id: string;
  name: string;
  icon?: string;
  haschildren: string;
  childList: string;
}

export interface HeaderLink {
  routeIcon: React.ReactNode;
  route: string;
}
export interface HeaderProps {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  leftLogo?: React.ReactNode;
  rightLogo?: React.ReactNode;
  promAiLogo?: React.ReactNode;
  isAuthenticated: boolean;
  showDateTime?: boolean;
  showNotification?: boolean;
  listHead?: string;
  name?: string;
  role?: string;
  menuList?: DropdownItemProp[];
  moreNavLinks?: HeaderLink[];
  handleSelected?: (item: DropdownItemProp) => void;
}

export interface IUserInfoProps {
  name?: string;
  role?: string;
}
