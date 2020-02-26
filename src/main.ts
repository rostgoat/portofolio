import Vue from "vue";
import App from "./App.vue";
import { Container, Main, Header, Card, Image } from "element-ui";

Vue.config.productionTip = false;

Vue.use(Container);
Vue.use(Main);
Vue.use(Header);
Vue.use(Card);
Vue.use(Image);

new Vue({
  render: h => h(App)
}).$mount("#app");
