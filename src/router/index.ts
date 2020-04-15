import VueRouter from "vue-router";

import routes from "./routes/index";

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

  /**
   * Override to hide duplicate-navigation errors on production.
   * @override
   * @param {Object} location
   */
  push(location: string) {
    try {
      return super.push(location);
    } catch (e) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(e);
      }
      throw e;
    }
  }
}
