import React from "react";
import Header from "./header";
import Footer from "./footer";

import "../styles/index.scss";
import cls from "./layout.module.scss";

const Layout = ({ children }) => {
      return (
            <div className={cls.container}>
                  <div className={cls.content}>
                        <Header />
                        {children}
                  </div>
                  <Footer />
            </div>
      );
};

export default Layout;
