import Vue from "vue";
import App from "./App.vue";
import CustomRouter from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { Container, Main, Header, Card, Image } from "element-ui";

async function start() {
  const router = new CustomRouter().initialize();
  Vue.config.productionTip = false;

  library.add(faUserSecret);

  Vue.component("font-awesome-icon", FontAwesomeIcon);
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
