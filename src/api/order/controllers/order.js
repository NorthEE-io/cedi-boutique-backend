"use strict";

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async getOrderItems(ctx) {
    const orderIdentifier = ctx.params.identifier;

    const order = await strapi.db.query("api::order.order").findOne({
      where: { identifier: orderIdentifier },
      populate: { orderItems: true },
    });

    if (!order) {
      return ctx.notFound("order indentifier doesnt exist", {
        identifier: orderIdentifier,
      });
    }

    const sanitizedResults = await this.sanitizeOutput(order.orderItems, ctx);

    return this.transformResponse(sanitizedResults);
  },
}));
