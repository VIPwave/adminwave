export function getDeviceType(): string {
  const userAgent = navigator.userAgent.toLowerCase();

  if (/android/.test(userAgent)) {
    return 'Android';
  }
  if (/iphone|ipod/.test(userAgent)) {
    return 'iOS';
  }
  if (
    /ipad/.test(userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  ) {
    return 'iPad';
  }
  if (/macintosh|mac os x/.test(userAgent)) {
    return 'Mac';
  }
  if (/windows nt/.test(userAgent)) {
    return 'Windows';
  }
  return 'Unknown';
}
