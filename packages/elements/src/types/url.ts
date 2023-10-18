/**
 * Represents a dictionary of URL variables, where each key is a variable name and each value is its corresponding replacement.
 */
type UrlVariables = Record<string, string>;

/**
 * Represents an object that may have an optional URL parameter.
 */
type UrlParam = { url?: string };

/**
 * Checks if the provided string is a valid URL format.
 * 
 * @param url - The string to check for URL validity.
 * @returns A boolean indicating whether the string is a valid URL.
 */
function isValidURL(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
}

/**
 * Constructs a Fully Qualified Domain Name (FQDN) from a relative URL and a base URL.
 * 
 * @param url - The relative URL.
 * @param base - The base URL.
 * @returns A string containing the FQDN.
 */
function makeFQDN(url: string, base: string): string {
  try {
    return new URL(url, base).toString();
  } catch (_) {
    return "";
  }
}

/**
 * Replaces placeholder variables within a URL with actual values provided in the `vars` object.
 * 
 * @param url - The URL containing placeholders.
 * @param vars - An object mapping placeholder names to their respective values.
 * @returns A string with the URL where placeholders have been replaced by actual values.
 */
function replaceURLVariables(url: string, vars: UrlVariables): string {
  let decodedURL = decodeURIComponent(url);
  
  for (const [key, value] of Object.entries(vars)) {
    decodedURL = decodedURL.replace(`{{${key}}}`, value);
  }
  
  // Re-encode the URL components
  return encodeURI(decodedURL);
}

/**
 * Retrieves a URL from the provided `param` object or falls back to the `fallback` URL if not provided or invalid.
 * Additionally, any placeholder variables within the URL can be replaced using the `vars` object.
 * 
 * @param param - An object that may contain an optional URL.
 * @param fallback - A fallback URL string.
 * @param vars - An object mapping placeholder names to their respective values.
 * @returns An object containing the resolved URL or undefined if no valid URL can be resolved.
 */
function getURLParam(param?: UrlParam, fallback?: string, vars?: UrlVariables): { url: string } | undefined {
  let url = param?.url ?? fallback;
  
  if (url) {
    // If it's not a valid URL but a fallback exists and is valid, make it fully qualified
    if (!isValidURL(url) && fallback && isValidURL(fallback)) {
      url = makeFQDN(url, new URL(fallback).origin);
    }

    // Check again after attempting to make the URL fully qualified
    if (isValidURL(url)) {
      if (vars) {
        url = replaceURLVariables(url, vars);
      }
      return { url };
    }
  }
  
  return undefined;
}

export {
    isValidURL,
    makeFQDN,
    replaceURLVariables,
    getURLParam,
}