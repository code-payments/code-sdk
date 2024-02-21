import { 
  PaymentRequestButton,
} from '../components/pages';

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