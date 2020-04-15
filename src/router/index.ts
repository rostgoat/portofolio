import VueRouter from "vue-router";

import routes from "@/router/routes/index";

export default class CustomRouter extends VueRouter {
  constructor() {
    super({
      mode: "history",
      routes
    });
  }

  /**
   * Initialize the router.
   * @returns {Object} this
   */
  initialize() {
    return this;
  }
}
