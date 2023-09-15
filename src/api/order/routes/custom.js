module.exports = {
  routes: [
    {
      method: "GET",
      path: "/orders/:identifier/order-items",
      handler: "order.getOrderItems",
    },
  ],
};
