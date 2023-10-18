/**
 * Utility functions for device and browser detection.
 * These functions aim to identify specific devices and browsers based on `navigator` properties.
 * Note: These functions are a lightweight alternative to heavier device detection libraries.
 */

/**
 * Determines if the current device is an iPhone.
 * 
 * @returns A boolean indicating whether the device is an iPhone.
 */
function iPhone(): boolean {
  return [
    'iPhone Simulator',
    'iPhone'
  ].includes(navigator.platform);
}

/**
 * Determines if the current device runs iOS.
 * This includes iPhones, iPads, and iPods.
 * Note: Also includes a check for iPads running iOS 13.
 * 
 * @returns A boolean indicating whether the device runs iOS.
 */
function iOS(): boolean {
  return iPhone() || 
  [
    'iPad Simulator',
    'iPod Simulator',
    'iPad',
    'iPod'
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document);
}

/**
 * Determines if the current browser is Safari.
 * This check includes both mobile Safari (on iOS) and desktop Safari.
 * 
 * @returns A boolean indicating whether the browser is Safari.
 */
function Safari(): boolean {
  return iOS()
  // includes Safari desktop
  || (/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
}

/**
 * Determines if the current device runs Android.
 * 
 * @returns A boolean indicating whether the device runs Android.
 */
function Android(): boolean { 
    return /Android/i.test(navigator.userAgent);
}

/**
 * Determines if the current device is a mobile device.
 * This check includes iPhones and Android devices.
 * 
 * @returns A boolean indicating whether the device is a mobile device.
 */
function isMobileDevice(): boolean {
    return iPhone() || Android();
}

export {
    isMobileDevice,
    iOS,
    iPhone,
    Android,
    Safari
};