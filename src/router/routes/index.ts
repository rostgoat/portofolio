import Home from "../../views/Home.vue";
import Work from "../../views/Work.vue";
import Skills from "../../views/Skills.vue";

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
    path: "/skills",
    name: "skills",
    component: Skills
  }
];
