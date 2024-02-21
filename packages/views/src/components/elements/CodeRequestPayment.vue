<script setup lang="ts">
import { Ref, ref, watchEffect } from "vue";
import { KikCode, KikCodeDescription } from "@code-wallet/kikcode";
import { flagForCurrency } from "@code-wallet/flags";
import { formatCurrency } from "../../utils";
import CodeRequestBg from "./CodeRequestBg.vue";

const props = defineProps<{
  payload?: Uint8Array,
  scanned?: boolean,
  amount?: number,
  currency?: string,
}>();

const flag = ref<string | undefined>();
const size = { width: 200, height: 200 };
const scale = 30;
const logo = {
  minX: 0,
  maxX: 93.51064,
  minY: 0,
  maxY: 94.21016,
  scaleFactor: 0.5,
};

const kikcode : Ref<KikCodeDescription | undefined> = ref();

watchEffect(async () => {
  if (!props.payload) return;
  kikcode.value = KikCode.generateDescription(size, props.payload);

  if (props.currency) {
    flag.value = await flagForCurrency(props.currency);
  }
});
</script>

<template>
  <div class="code-bill relative group">
    <div class="relative overflow-hidden" :class="{ 'swipe': scanned }">

      <div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform
      -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-50"
      :class="{ 'shine': scanned }" />

      <div class="relative m-auto" 
        :style="{
          width: `${ scale * 1 }vh`,
          height: `${ scale * 1.53 }vh`,
        }">

        <div v-if="amount && currency"
          class="font-roboto-mono-medium absolute text-center w-full" 
          :style="{
            top: `${ scale * 1.17 }vh`,
            fontSize: `${ scale * 0.06 }vh`,
          }">
          <img v-if="flag" :src="flag"
          class="rounded-full inline-block -mt-1" 
          :style="{
            width: `${ scale * 0.06 }vh`,
            height: `${ scale * 0.06 }vh`,
          }" />
          {{ formatCurrency(amount, currency) }} of Kin
        </div>

        <CodeRequestBg class="w-full" />

        <svg v-if="kikcode" class="absolute" 
        viewBox="0 0 220 220"
        :style="{
          width: `${ (kikcode.size.width/320)*scale }vh`,
          height: `${ (kikcode.size.height/320)*scale }vh`,
          top: `${ scale * 0.19 }vh`,
          left: `${ scale * 0.19 }vh`,
        }">
          <circle cx="110" cy="110" r="110" fill="#45464E" />         

          <mask id="circle-mask">
            <rect width="100%" height="100%" fill="white" />
            <g :transform="'translate(' +
              ((kikcode.size.width - logo.maxX * logo.scaleFactor + logo.minX * logo.scaleFactor) / 2) + ', ' +
              ((kikcode.size.height - logo.maxY * logo.scaleFactor + logo.minY * logo.scaleFactor) / 2) + ')' +
              ' scale(' + logo.scaleFactor + ') scale(0.9) translate(5, 5)'">
              <circle cx="24.6985" cy="25.0039" r="10.3001" fill="black" />
              <circle cx="69.0534" cy="25.0039" r="10.3001" fill="black" />
              <circle cx="69.0534" cy="69.3591" r="10.3001" fill="black" />
              <circle cx="24.6985" cy="69.3591" r="10.3001" fill="black" />
              <circle cx="24.9531" cy="47.2068" r="10.3001" fill="black" />
              <circle cx="46.9016" cy="25.1057" r="10.3001" fill="black" />
              <circle cx="46.9016" cy="69.3591" r="10.3001" fill="black" />
              <circle cx="46.901" cy="87.2844" r="6.92572" fill="black" />
              <circle cx="46.901" cy="6.92572" r="6.92572" fill="black" />
              <circle cx="6.92572" cy="47.2069" r="6.92572" fill="black" />
              <circle cx="86.58492" cy="47.2069" r="6.92572" fill="black" />
            </g>
          </mask>

          <g transform="translate(10, 10)">
            <g mask="url(#circle-mask)">
              <path :d="kikcode.center" fill="white" />
            </g>
            <g mask="url(#circle-mask)">
              <path v-for="(arc, index) in kikcode.arcs" :key="'arc-' + index" :d="arc" stroke="white"
                stroke-linecap="round" stroke-width="6.8" />
            </g>
            <g mask="url(#circle-mask)">
              <path v-for="(dot, index) in kikcode.dots" :key="'dot-' + index" :d="dot" fill="white" />
            </g>
          </g>

        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.code-bill {
  transform-style: preserve-3d;
  perspective: 2000px;
}

.mint {
  line-height: 0;
}

.shine {
  animation: shine 0.1s;
}

@keyframes shine {
  100% {
    left: 125%;
  }
}

.swipe {
  animation: pop 0.4s forwards ease-out, fade 0.3s forwards ease-out, shadow 0.4s forwards ease-in;
  animation-delay: 0.1s;
}

@keyframes pop {
  100% {
    transform: scale(1.1);
  }
}

@keyframes fade {
  80% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes shadow {
  0% {
    filter: drop-shadow(1px 1px 3px rgb(0 0 0 / 0.2));
  }

  100% {
    filter: drop-shadow(4px 4px 20px rgb(0 0 0 / 0.2));
  }
}</style>