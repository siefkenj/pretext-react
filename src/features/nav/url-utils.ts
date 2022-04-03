/**
 * Determines whether the two URLs are for the same page/hash.
 */
export function compareUrls(url1: string | null, url2: string | null) {
    if (!url1 || !url2) {
        return { samePage: false, sameHash: false };
    }
    const urlObj1 = new URL(url1, window.location.href);
    const urlObj2 = new URL(url2, window.location.href);

    if (urlObj1.href === urlObj2.href) {
        return { samePage: true, sameHash: true };
    }
    if (urlObj1.pathname === urlObj2.pathname) {
        return { samePage: true, sameHash: false };
    }
    return { samePage: false, sameHash: false };
}
