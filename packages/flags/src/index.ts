import { currencyCodeToRegion } from '@code-wallet/library';

async function flagForCurrency(currency: any) {
  const region = currencyCodeToRegion(currency);
  if (!region) {
    return;
  }
  
  // dynamic import based on region
  const flag = (await import(`./wrappers/${region}.ts`)).default;
  if (flag) {
    return flag;
  }
}

export {
 flagForCurrency,
}