import { 
  LoginRequestModalDesktop,
} from '../components/pages';

const routes = [
    { 
      path: '/:id/p=:payload', 
      component: LoginRequestModalDesktop,
      meta: { bodyClass: ['bg-transparent', 'overflow-hidden'] },
      props: true,
    },
  ]
;

export {
    routes
}