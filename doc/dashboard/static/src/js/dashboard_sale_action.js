odoo.define("dashboard.sale.action", function (require) {
  "use strict";
  var core = require("web.core");
  var AbstractAction = require("web.AbstractAction");

  var dashboardSaleContent = require("dashboard.sale.content");

  var AbstractActionPage = AbstractAction.extend({
    start: function () {
      dashboardSaleContent(this.$el.find(".o_content")[0], {});
    },
  });

  core.action_registry.add(
    "dashboard.dashboard_sale_action",
    AbstractActionPage
  );
});
