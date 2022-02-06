import React from "react";
import { useAppDispatch } from "../app/hooks";
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
        <a
            href={href}
            onClick={(e) => {
                // We take over navigation with cached async loading,
                // so prevent a normal click from going through.
                e.preventDefault();
                dispatch(navActions.setScrollIntoViewOnTransition(true));
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
        </a>
    );
}
