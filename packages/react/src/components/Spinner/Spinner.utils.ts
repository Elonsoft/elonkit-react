export const isSafari = () =>
  navigator.vendor &&
  navigator.vendor.indexOf('Apple') > -1 &&
  navigator.userAgent &&
  navigator.userAgent.indexOf('CriOS') === -1 &&
  navigator.userAgent.indexOf('FxiOS') === -1;

export const setGradient = (mode: 'light' | 'dark', safariOpacity: number) =>
  isSafari() ? (mode === 'dark' ? 0 : safariOpacity) : 0;
