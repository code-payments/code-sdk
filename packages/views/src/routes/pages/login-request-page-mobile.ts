import { defineComponent, h } from 'vue';
import LoginRequestModalMobile from '../../components/sdk/modals/LoginRequestModalMobile.vue';

const routes = [
  { 
    path: '/:id/p=:payload', 
    component: defineComponent({
    props: {
      id: { type: String, required: true, },
      payload: { type: String, required: true, },
    },
    setup(props, { slots }) {
        return () => h(LoginRequestModalMobile,
          { ...props, asPage: true, }, slots.default)
      },
    }),
    meta: { bodyClass: ['bg-transparent', 'overflow-hidden'] },
    props: true,
  },
];

export { routes };