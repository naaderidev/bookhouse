import {
  HiOutlineHome,
  HiOutlinePhone,
  HiOutlineBuildingStorefront,
} from "react-icons/hi2";

export const marketNavbar = [
  {
    id: 1,
    title: "خانه",
    href: "/",
    icon: <HiOutlineHome className="icon-md" />,
  },
  {
    id: 2,
    title: "کتابفروشی",
    href: "/store",
    icon: <HiOutlineBuildingStorefront className="icon-md" />,
  },
  {
    id: 3,
    title: "ارتباط با ما",
    href: "/contact",
    icon: <HiOutlinePhone className="icon-md" />,
  },
  // {
  //   id: 4,
  //   title: "درباره سایت",
  //   href: "/about",
  //   icon: <HiOutlineBuildingStorefront className="icon-md" />,
  // },
];
