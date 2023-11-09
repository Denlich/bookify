"use client";

import { useGetWindowWidth } from "@/hooks/useGetWindowWidth";
import dynamic from "next/dynamic";

const DesktopHeader = dynamic(() => import("./desktop-header"));
const MobileHeader = dynamic(() => import("./mobile-header"));

const CurrentHeader = () => {
  const windowWidth = useGetWindowWidth();

  return windowWidth >= 768 ? <DesktopHeader /> : <MobileHeader />;
};

export default CurrentHeader;
