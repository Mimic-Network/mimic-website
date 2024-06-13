import * as React from "react";
import Navbar from "./Navbar";

export interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = (props) => {
  return (
    <section>
      <Navbar />
      {props.children}
    </section>
  );
};
export default Layout;
