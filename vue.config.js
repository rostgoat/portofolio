module.exports = {
  publicPath: "/",
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/styles/_base.scss";
          @import "~@/styles/_header.scss";
          @import "~@/styles/variables.scss";
        `
      }
    }
  }
};
