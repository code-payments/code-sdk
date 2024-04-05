import TipRequestModalMobile
from '../../components/sdk/modals/TipRequestModalMobile.vue';

const routes = [
    { 
      path: '/:id/p=:payload', 
      component: TipRequestModalMobile,
      meta: { bodyClass: ['bg-transparent', 'overflow-hidden'] },
      props: true,
    },
  ]
;

export {
    routes
}