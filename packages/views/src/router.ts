import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';

function initRouter(routes: readonly RouteRecordRaw[]) {
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

  // Manage body classes
  router.beforeEach((to, from, next) => {
    // Remove the previous route's bodyClass, if it exists
    if (from.meta.bodyClass) {
      // @ts-ignore
      from.meta.bodyClass.forEach((className: string) => {
      document.body.classList.remove(className); });
    }

    // Add the new route's bodyClass, if it exists
    if (to.meta.bodyClass) {
      // @ts-ignore
      to.meta.bodyClass.forEach((className: string) => {
      document.body.classList.add(className); });
    }

    next();
  });

  return router;
}

export {
    initRouter,
}