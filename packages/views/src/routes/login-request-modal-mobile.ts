import { 
  LoginRequestModalMobile,
} from '../components/pages';

const routes = [
    { 
      path: '/:id/p=:payload', 
      component: LoginRequestModalMobile,
      meta: { bodyClass: ['bg-transparent', 'overflow-hidden'] },
      props: true,
    },
  ]
;

export {
    routes
}