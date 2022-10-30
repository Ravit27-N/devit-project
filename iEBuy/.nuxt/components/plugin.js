import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Content: () => import('../..\\components\\Content.vue' /* webpackChunkName: "components/content" */).then(c => wrapFunctional(c.default || c)),
  Scholarship: () => import('../..\\components\\Scholarship.vue' /* webpackChunkName: "components/scholarship" */).then(c => wrapFunctional(c.default || c)),
  DashboardLayout: () => import('../..\\components\\dashboard\\Layout.vue' /* webpackChunkName: "components/dashboard-layout" */).then(c => wrapFunctional(c.default || c)),
  DocsDoc: () => import('../..\\components\\docs\\Doc.vue' /* webpackChunkName: "components/docs-doc" */).then(c => wrapFunctional(c.default || c)),
  DocsSnippet: () => import('../..\\components\\docs\\Snippet.vue' /* webpackChunkName: "components/docs-snippet" */).then(c => wrapFunctional(c.default || c)),
  DashboardProviderOverlay: () => import('../..\\components\\dashboard\\provider\\Overlay.vue' /* webpackChunkName: "components/dashboard-provider-overlay" */).then(c => wrapFunctional(c.default || c)),
  DashboardProvider: () => import('../..\\components\\dashboard\\provider\\Provider.vue' /* webpackChunkName: "components/dashboard-provider" */).then(c => wrapFunctional(c.default || c)),
  DashboardSidenavigationHeader: () => import('../..\\components\\dashboard\\sidenavigation\\Header.vue' /* webpackChunkName: "components/dashboard-sidenavigation-header" */).then(c => wrapFunctional(c.default || c)),
  DashboardSidenavigation: () => import('../..\\components\\dashboard\\sidenavigation\\Index.vue' /* webpackChunkName: "components/dashboard-sidenavigation" */).then(c => wrapFunctional(c.default || c)),
  DashboardSidenavigationItem: () => import('../..\\components\\dashboard\\sidenavigation\\Item.vue' /* webpackChunkName: "components/dashboard-sidenavigation-item" */).then(c => wrapFunctional(c.default || c)),
  DashboardSidenavigationItems: () => import('../..\\components\\dashboard\\sidenavigation\\Items.vue' /* webpackChunkName: "components/dashboard-sidenavigation-items" */).then(c => wrapFunctional(c.default || c)),
  DashboardTopnavigation: () => import('../..\\components\\dashboard\\topnavigation\\Index.vue' /* webpackChunkName: "components/dashboard-topnavigation" */).then(c => wrapFunctional(c.default || c)),
  DocsIconsFileIcon: () => import('../..\\components\\docs\\icons\\FileIcon.vue' /* webpackChunkName: "components/docs-icons-file-icon" */).then(c => wrapFunctional(c.default || c)),
  DocsIconsFolderIcon: () => import('../..\\components\\docs\\icons\\FolderIcon.vue' /* webpackChunkName: "components/docs-icons-folder-icon" */).then(c => wrapFunctional(c.default || c)),
  DocsIconsVueIcon: () => import('../..\\components\\docs\\icons\\VueIcon.vue' /* webpackChunkName: "components/docs-icons-vue-icon" */).then(c => wrapFunctional(c.default || c)),
  DashboardSidenavigationAccordion: () => import('../..\\components\\dashboard\\sidenavigation\\accordion\\Accordion.vue' /* webpackChunkName: "components/dashboard-sidenavigation-accordion" */).then(c => wrapFunctional(c.default || c)),
  DashboardSidenavigationAccordionAngleDownIcon: () => import('../..\\components\\dashboard\\sidenavigation\\accordion\\AngleDownIcon.vue' /* webpackChunkName: "components/dashboard-sidenavigation-accordion-angle-down-icon" */).then(c => wrapFunctional(c.default || c)),
  DashboardSidenavigationAccordionAngleRightIcon: () => import('../..\\components\\dashboard\\sidenavigation\\accordion\\AngleRightIcon.vue' /* webpackChunkName: "components/dashboard-sidenavigation-accordion-angle-right-icon" */).then(c => wrapFunctional(c.default || c)),
  DashboardSidenavigationIconsDocuments: () => import('../..\\components\\dashboard\\sidenavigation\\icons\\Documents.vue' /* webpackChunkName: "components/dashboard-sidenavigation-icons-documents" */).then(c => wrapFunctional(c.default || c)),
  DashboardSidenavigationIconsEvents: () => import('../..\\components\\dashboard\\sidenavigation\\icons\\Events.vue' /* webpackChunkName: "components/dashboard-sidenavigation-icons-events" */).then(c => wrapFunctional(c.default || c)),
  DashboardSidenavigationIconsGuides: () => import('../..\\components\\dashboard\\sidenavigation\\icons\\Guides.vue' /* webpackChunkName: "components/dashboard-sidenavigation-icons-guides" */).then(c => wrapFunctional(c.default || c)),
  DashboardSidenavigationIconsMessages: () => import('../..\\components\\dashboard\\sidenavigation\\icons\\Messages.vue' /* webpackChunkName: "components/dashboard-sidenavigation-icons-messages" */).then(c => wrapFunctional(c.default || c)),
  DashboardSidenavigationIconsPictures: () => import('../..\\components\\dashboard\\sidenavigation\\icons\\Pictures.vue' /* webpackChunkName: "components/dashboard-sidenavigation-icons-pictures" */).then(c => wrapFunctional(c.default || c)),
  DashboardSidenavigationIconsStatistics: () => import('../..\\components\\dashboard\\sidenavigation\\icons\\Statistics.vue' /* webpackChunkName: "components/dashboard-sidenavigation-icons-statistics" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
