import TipRequestModalDesktop
from '../../components/sdk/modals/TipRequestModalDesktop.vue';

const routes = [
    { 
      path: '/:id/p=:payload', 
      component: TipRequestModalDesktop,
      meta: { bodyClass: ['bg-transparent', 'overflow-hidden'] },
      props: true,
    },
  ]
;

export {
    routes
}