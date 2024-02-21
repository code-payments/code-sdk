import { 
  LoginRequestButton,
} from '../components/pages';

const routes = [
    { 
      path: '/:id/p=:payload', 
      component: LoginRequestButton,
      meta: { bodyClass: [] },
      props: true,
    },
  ]
;

export {
    routes
}