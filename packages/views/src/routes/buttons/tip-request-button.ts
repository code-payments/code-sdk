import TipRequestButton 
from '../../components/sdk/buttons/TipRequestButton.vue';

const routes = [
    { 
      path: '/:id/p=:payload', 
      component: TipRequestButton,
      meta: { bodyClass: [] },
      props: true,
    },
  ]
;

export {
    routes
}