import LoginRequestModalDesktop
from '../../components/sdk/modals/LoginRequestModalDesktop.vue';

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