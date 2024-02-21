import { 
  PaymentRequestModalMobile,
} from '../components/pages';

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