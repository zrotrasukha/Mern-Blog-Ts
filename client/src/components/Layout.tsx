import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const Layout = () => {
  return (
    <div className="m-auto p-3 max-w-[850px] box-border text-white">
      <Header />
      <Outlet />
    </div>
  );
};
