/**
 * Normalize a URL removing any query strings or hash information. For example,
 * `foo.html` and `foo.html#bar` are both normalized to `/foo.html`.
 */
export function normalizeUrl(url: string): string {
    return new URL(url, window.location.href).pathname;
}
/**
 * Like `normalizeUrl`, but includes the hash
 */
export function normalizeUrlWithHash(url: string): string {
    const urlObj = new URL(url, window.location.href);
    return urlObj.pathname + urlObj.hash;
}
