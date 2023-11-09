import { BsCloudArrowDown, BsHeadphones } from "react-icons/bs";
import { HiOutlineBookOpen } from "react-icons/hi";

export const links = [
  {
    label: "Printed books",
    href: "/book/printed",
    Icon: () => <HiOutlineBookOpen />,
  },
  {
    label: "E-books",
    href: "/book/e-book",
    Icon: () => <BsCloudArrowDown />,
  },
  { label: "Audio books", href: "/book/audio", Icon: () => <BsHeadphones /> },
  { label: "Publishing houses", href: "/publisher/all" },
  { label: "Authors", href: "/author/all" },
];
