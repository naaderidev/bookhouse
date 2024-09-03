import {
  HiOutlineUser,
  HiOutlineChatBubbleLeftRight,
  HiOutlineChartBar,
  HiOutlineTicket,
  HiOutlineHeart,
  HiOutlineClipboardDocumentList,
} from "react-icons/hi2";

export const userSidebarItems = [
  {
    id: 1,
    title: "پیشخوان",
    href: "/user-panel",
    icon: <HiOutlineChartBar className="icon-md" />,
  },
  {
    id: 2,
    title: "سفارش ها",
    href: "/user-panel/orders",
    icon: <HiOutlineClipboardDocumentList className="icon-md" />,
  },
  {
    id: 3,
    title: "تیکت ها",
    href: "/user-panel/tickets",
    icon: <HiOutlineTicket className="icon-md" />,
  },
  {
    id: 4,
    title: "دیدگاه ها",
    href: "/user-panel/comments",
    icon: <HiOutlineChatBubbleLeftRight className="icon-md" />,
  },
  {
    id: 5,
    title: "علاقه مندی ها",
    href: "/user-panel/wishlist",
    icon: <HiOutlineHeart className="icon-md" />,
  },
  {
    id: 6,
    title: "حساب کاربری",
    href: "/user-panel/account",
    icon: <HiOutlineUser className="icon-md" />,
  },
];
