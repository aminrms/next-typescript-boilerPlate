import { PropsWithChildren, ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import SkeletonLoading from "@/core/Templates/SkeletonLoading";
import { Navbar } from "./Navbar";
import { useAppSelector } from "@/redux/setup/hooks";

const Layout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const { mode } = useAppSelector((state) => state.setting);
  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", mode as string);
  }, [mode]);
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
