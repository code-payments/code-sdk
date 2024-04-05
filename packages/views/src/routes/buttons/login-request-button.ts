import LoginRequestButton
from '../../components/sdk/buttons/LoginRequestButton.vue';

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