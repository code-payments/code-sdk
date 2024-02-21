import { 
  PaymentRequestModalDesktop,
} from '../components/pages';

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