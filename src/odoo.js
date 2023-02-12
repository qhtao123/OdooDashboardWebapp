import React from "react";
import { render } from "react-dom";
import App from "./App";
odoo.define("dashboard.sale.content", function (require) {
  return (el, odoo) => {
    render(<App />, el);
  };
});
// odoo模块-js入口文件 : build时使用
