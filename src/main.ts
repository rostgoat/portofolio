import Vue from "vue";
import App from "./App.vue";
import CustomRouter from "./router";
import { Container, Main, Header, Card, Image } from "element-ui";

async function start() {
  const router = new CustomRouter().initialize();
  Vue.config.productionTip = false;

  Vue.use(CustomRouter);
  Vue.use(Container);
  Vue.use(Main);
  Vue.use(Header);
  Vue.use(Card);
  Vue.use(Image);

  new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");
}
start();
