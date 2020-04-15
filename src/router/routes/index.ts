import Home from "../../views/Home.vue";
import Work from "../../views/Work.vue";
import About from "../../views/About.vue";

export default [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/work",
    name: "work",
    component: Work
  },
  {
    path: "/about",
    name: "about",
    component: About
  }
];
