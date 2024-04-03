import { 
  TipRequestModalMobile,
} from '../components/pages';

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