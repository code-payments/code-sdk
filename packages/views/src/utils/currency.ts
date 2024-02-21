function formatCurrency(value: number | bigint, currency: any = 'usd', locale: string | string[] = 'en-US') {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency.toUpperCase(),
  });

  return formatter.format(value).replace(/^[A-z]+\s*/g, '');
}

export {
 formatCurrency,
}