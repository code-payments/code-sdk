import { currencyCodeToRegion } from '@code-wallet/library';
import * as flags from './flags';

function flagForCurrency(currency: any) {
  const region = currencyCodeToRegion(currency);
  if (!region) {
    return;
  }
  // @ts-ignore
  const flag = flags[region.substring(0, 2).toLowerCase()];
  if (flag) {
    return flag;
  }
}

export {
 flagForCurrency,
}