import { defineComponent, h } from 'vue';
import TipRequestModalMobile from '../../components/sdk/modals/TipRequestModalMobile.vue';

const routes = [
  { 
    path: '/:id/p=:payload', 
    component: defineComponent({
    props: {
      id: { type: String, required: true, },
      payload: { type: String, required: true, },
    },
    setup(props, { slots }) {
        return () => h(TipRequestModalMobile,
          { ...props, asPage: true, }, slots.default)
      },
    }),
    meta: { bodyClass: ['bg-transparent', 'overflow-hidden'] },
    props: true,
  },
];

export { routes };