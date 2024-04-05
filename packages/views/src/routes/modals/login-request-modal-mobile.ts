import
  LoginRequestModalMobile
from '../../components/sdk/modals/LoginRequestModalMobile.vue';

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