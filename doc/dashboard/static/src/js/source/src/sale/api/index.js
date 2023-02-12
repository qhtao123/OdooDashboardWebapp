import odoo from "../odoo";

export const fetchSalesAmountData = () => {
  const ajax = odoo.getAjax();
  const rpc = odoo.getRpc();
  const userContext = odoo.getUserContext();
  // ajax
  //   .rpc("/api/movies")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  rpc
    .query({
      model: "res.users",
      method: "get_user_group",
      context: userContext,
      params: {
        context: userContext,
        arg1: "value1",
      },
      args: [
        {
          arg1: "value1",
        },
      ],
      kwargs: {
        code: "aasa",
      },
    })
    .then(function (result) {
      console.log("data", result);
    })
    .catch(function (error) {
      const title = error.message.message;
      const message = error.message.data.message;
      console.error(title + "RPC:", message);
    });
};
