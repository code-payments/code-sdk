import PaymentRequestButton 
from '../../components/sdk/buttons/PaymentRequestButton.vue';

const routes = [
    { 
      path: '/:id/p=:payload', 
      component: PaymentRequestButton,
      meta: { bodyClass: [] },
      props: true,
    },
  ]
;

export {
    routes
}