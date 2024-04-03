import { 
  TipRequestButton,
} from '../components/pages';

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