import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";

const routes = [

  // {
  //   path: "/:slug",
  //   name: "Home",
  //   component: Home,
  //   props:true

  // },
  {
    path: "/",
    redirect:{name:'Description-planet', params:{slug:'earth',infoType:'overview'}},
    // name: "Home",
    // component: Home,
    // props:true

  },  
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/:slug/overview",
    name: "DetailsPlanet",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DetailsPlanet.vue"),

    children:[
      {
        path:"/:slug/:infoType",
        name:"Description-planet",
        props:true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/Description-planet.vue"
          ),
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
