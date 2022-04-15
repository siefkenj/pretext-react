import React from "react";
import { Button } from "reakit";
import { useAppDispatch } from "../app/hooks";
import { globalActions } from "../features/global/globalSlice";
import { navActions } from "../features/nav/navSlice";

/**
 * An anchor element for internal links. Instead of redirecting to a new page,
 * the click directs a page to be loaded from the cache.
 */
export function InternalAnchor({
    href,
    pageId,
    children,
    className,
    onClick,
    ...rest
}: {
    href: string;
    pageId?: string;
} & React.ComponentProps<"a">) {
    const dispatch = useAppDispatch();

    return (
        <Button
            as="a"
            href={href}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                // We take over navigation with cached async loading,
                // so prevent a normal click from going through.
                e.preventDefault();
                if (pageId) {
                    dispatch(navActions.setCurrentPage(pageId));
                } else {
                    dispatch(navActions.setCurrentPageByUrl(href));
                }
                if (onClick) {
                    onClick(e);
                }
            }}
            className={className ? `${className} internal` : "internal"}
            {...rest}
        >
            {children}
        </Button>
    );
}

/**
 * An anchor element that when clicked copies a permalink URL to the clipboard.
 */
export function PermalinkAnchor({
    href,
    pageId,
    children,
    className,
    onClick,
    title,
    ...rest
}: {
    href: string;
    pageId?: string;
} & React.ComponentProps<"a">) {
    const dispatch = useAppDispatch();

    const url = "" + new URL(href, window.location.href);

    return (
        <Button
            as="a"
            href={url}
            title={`Copy permalink to clipboard for ${title}`}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                // We take over navigation with cached async loading,
                // so prevent a normal click from going through.
                e.preventDefault();
                dispatch(globalActions.copyToClipboard(url));
            }}
            className={className}
            {...rest}
        >
            {children}
        </Button>
    );
}
