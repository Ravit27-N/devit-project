import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a1e87ae8 = () => interopDefault(import('..\\pages\\adminpage.vue' /* webpackChunkName: "pages/adminpage" */))
const _1d56e1b5 = () => interopDefault(import('..\\pages\\cv.vue' /* webpackChunkName: "pages/cv" */))
const _4b8e7230 = () => interopDefault(import('..\\pages\\cv_homepage.vue' /* webpackChunkName: "pages/cv_homepage" */))
const _c1ad8568 = () => interopDefault(import('..\\pages\\edit.vue' /* webpackChunkName: "pages/edit" */))
const _2ed71d8c = () => interopDefault(import('..\\pages\\filter.vue' /* webpackChunkName: "pages/filter" */))
const _39db2830 = () => interopDefault(import('..\\pages\\homepage.vue' /* webpackChunkName: "pages/homepage" */))
const _515dc917 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _4816451d = () => interopDefault(import('..\\pages\\manu.vue' /* webpackChunkName: "pages/manu" */))
const _6f3d2465 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _7ee32ab6 = () => interopDefault(import('..\\pages\\template1.vue' /* webpackChunkName: "pages/template1" */))
const _7ec6fbb4 = () => interopDefault(import('..\\pages\\template2.vue' /* webpackChunkName: "pages/template2" */))
const _7eaaccb2 = () => interopDefault(import('..\\pages\\template3.vue' /* webpackChunkName: "pages/template3" */))
const _7e8e9db0 = () => interopDefault(import('..\\pages\\template4.vue' /* webpackChunkName: "pages/template4" */))
const _7e726eae = () => interopDefault(import('..\\pages\\template5.vue' /* webpackChunkName: "pages/template5" */))
const _7e563fac = () => interopDefault(import('..\\pages\\template6.vue' /* webpackChunkName: "pages/template6" */))
const _095ce058 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _2fc9f28d = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
const _6d34b8c6 = () => interopDefault(import('..\\pages\\documents\\cvform.vue' /* webpackChunkName: "pages/documents/cvform" */))
const _626fb14e = () => interopDefault(import('..\\pages\\documents\\name_card.vue' /* webpackChunkName: "pages/documents/name_card" */))
const _0f3c05ba = () => interopDefault(import('..\\pages\\documents\\taxes.vue' /* webpackChunkName: "pages/documents/taxes" */))
const _05dd1180 = () => interopDefault(import('..\\pages\\documents\\travel.vue' /* webpackChunkName: "pages/documents/travel" */))
const _142b7a4f = () => interopDefault(import('..\\pages\\events\\networking.vue' /* webpackChunkName: "pages/events/networking" */))
const _d4dcef8c = () => interopDefault(import('..\\pages\\events\\weddings.vue' /* webpackChunkName: "pages/events/weddings" */))
const _34aa5611 = () => interopDefault(import('..\\pages\\guides\\documentation.vue' /* webpackChunkName: "pages/guides/documentation" */))
const _d2467d20 = () => interopDefault(import('..\\pages\\messages\\archived.vue' /* webpackChunkName: "pages/messages/archived" */))
const _766ab1f4 = () => interopDefault(import('..\\pages\\messages\\unbox.vue' /* webpackChunkName: "pages/messages/unbox" */))
const _c0ce5786 = () => interopDefault(import('..\\pages\\messages\\unread.vue' /* webpackChunkName: "pages/messages/unread" */))
const _ea2738ae = () => interopDefault(import('..\\pages\\pictures\\anniversary.vue' /* webpackChunkName: "pages/pictures/anniversary" */))
const _4cba6885 = () => interopDefault(import('..\\pages\\pictures\\university.vue' /* webpackChunkName: "pages/pictures/university" */))
const _7d3b568f = () => interopDefault(import('..\\pages\\pictures\\vacations.vue' /* webpackChunkName: "pages/pictures/vacations" */))
const _a25b3e56 = () => interopDefault(import('..\\pages\\statistics\\call-stats.vue' /* webpackChunkName: "pages/statistics/call-stats" */))
const _5372aa04 = () => interopDefault(import('..\\pages\\statistics\\finances.vue' /* webpackChunkName: "pages/statistics/finances" */))
const _a6ef9bfc = () => interopDefault(import('..\\pages\\statistics\\trip-logs.vue' /* webpackChunkName: "pages/statistics/trip-logs" */))
const _f093b400 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/adminpage",
    component: _a1e87ae8,
    name: "adminpage"
  }, {
    path: "/cv",
    component: _1d56e1b5,
    name: "cv"
  }, {
    path: "/cv_homepage",
    component: _4b8e7230,
    name: "cv_homepage"
  }, {
    path: "/edit",
    component: _c1ad8568,
    name: "edit"
  }, {
    path: "/filter",
    component: _2ed71d8c,
    name: "filter"
  }, {
    path: "/homepage",
    component: _39db2830,
    name: "homepage"
  }, {
    path: "/login",
    component: _515dc917,
    name: "login"
  }, {
    path: "/manu",
    component: _4816451d,
    name: "manu"
  }, {
    path: "/register",
    component: _6f3d2465,
    name: "register"
  }, {
    path: "/template1",
    component: _7ee32ab6,
    name: "template1"
  }, {
    path: "/template2",
    component: _7ec6fbb4,
    name: "template2"
  }, {
    path: "/template3",
    component: _7eaaccb2,
    name: "template3"
  }, {
    path: "/template4",
    component: _7e8e9db0,
    name: "template4"
  }, {
    path: "/template5",
    component: _7e726eae,
    name: "template5"
  }, {
    path: "/template6",
    component: _7e563fac,
    name: "template6"
  }, {
    path: "/test",
    component: _095ce058,
    name: "test"
  }, {
    path: "/user",
    component: _2fc9f28d,
    name: "user"
  }, {
    path: "/documents/cvform",
    component: _6d34b8c6,
    name: "documents-cvform"
  }, {
    path: "/documents/name_card",
    component: _626fb14e,
    name: "documents-name_card"
  }, {
    path: "/documents/taxes",
    component: _0f3c05ba,
    name: "documents-taxes"
  }, {
    path: "/documents/travel",
    component: _05dd1180,
    name: "documents-travel"
  }, {
    path: "/events/networking",
    component: _142b7a4f,
    name: "events-networking"
  }, {
    path: "/events/weddings",
    component: _d4dcef8c,
    name: "events-weddings"
  }, {
    path: "/guides/documentation",
    component: _34aa5611,
    name: "guides-documentation"
  }, {
    path: "/messages/archived",
    component: _d2467d20,
    name: "messages-archived"
  }, {
    path: "/messages/unbox",
    component: _766ab1f4,
    name: "messages-unbox"
  }, {
    path: "/messages/unread",
    component: _c0ce5786,
    name: "messages-unread"
  }, {
    path: "/pictures/anniversary",
    component: _ea2738ae,
    name: "pictures-anniversary"
  }, {
    path: "/pictures/university",
    component: _4cba6885,
    name: "pictures-university"
  }, {
    path: "/pictures/vacations",
    component: _7d3b568f,
    name: "pictures-vacations"
  }, {
    path: "/statistics/call-stats",
    component: _a25b3e56,
    name: "statistics-call-stats"
  }, {
    path: "/statistics/finances",
    component: _5372aa04,
    name: "statistics-finances"
  }, {
    path: "/statistics/trip-logs",
    component: _a6ef9bfc,
    name: "statistics-trip-logs"
  }, {
    path: "/",
    component: _f093b400,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
