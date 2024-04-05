import PaymentRequestModalDesktop
from '../../components/sdk/modals/PaymentRequestModalDesktop.vue';

const routes = [
    { 
      path: '/:id/p=:payload', 
      component: PaymentRequestModalDesktop,
      meta: { bodyClass: ['bg-transparent', 'overflow-hidden'] },
      props: true,
    },
  ]
;

export {
    routes
}