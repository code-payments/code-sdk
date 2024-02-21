const iOS = () => {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

const Safari = () => {
  return iOS()
  // includes Safari desktop
  || (/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
}

const Android = () => {
    return /Android/i.test(navigator.userAgent);
}

const isMobileDevice = () => {
    return iOS() || Android();
}

export { isMobileDevice, iOS, Android, Safari };