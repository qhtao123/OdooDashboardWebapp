import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Odoo from "./odoo";
import "./data";
odoo.define("dashboard.sale.content", function (require) {
  return (el, o) => {
    console.log(o);
    const _odoo = new Odoo(o);
    ReactDOM.render(<App />, el);
  };
});
