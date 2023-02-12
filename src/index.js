import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Auth } from "odoo-webkit";
import faker from "@faker-js/faker";

faker.setLocale("zh_CN");
render(<App />, document.getElementById("root"));

// 連接到測試服務器，請使用以下代碼

//const auth = new Auth();
// auth.login("admin_yap", "", "DBREC").then(function () {
//   render(<App />, document.getElementById("root"));
// });
