import PaymentRequestModalMobile
from '../../components/sdk/modals/PaymentRequestModalMobile.vue';

const routes = [
    { 
      path: '/:id/p=:payload', 
      component: PaymentRequestModalMobile,
      meta: { bodyClass: ['bg-transparent', 'overflow-hidden'] },
      props: true,
    },
  ]
;

export {
    routes
}