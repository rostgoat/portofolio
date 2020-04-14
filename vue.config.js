module.exports = {
  publicPath: "/",
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/assets/styles/_variables.scss";
          @import "~@/assets/styles/_base.scss";
          @import "~@/assets/styles/_normalize.scss";
          @import "~@/assets/styles/_typography.scss";
        `
      }
    }
  }
};
