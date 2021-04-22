import Vue from "vue";
import Router from "vue-router";

import Home from "./view/Home.vue";
import TeamDetail from "./view/TeamDetail.vue"
import Error from "./view/Error.vue";

Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/teams/:id",
      name: "Team detail",
      component: TeamDetail
    },
    {
      path: "*",
      name: "error",
      component: Error
    }
  ]
});
