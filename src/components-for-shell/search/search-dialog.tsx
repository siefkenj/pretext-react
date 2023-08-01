import React from "react";
import MiniSearch from "minisearch";
import {
    Dialog,
    DialogDismiss,
    DialogHeading,
    Form,
    FormInput,
    useDialogStore,
    useFormStore,
} from "@ariakit/react";
import { useAppDispatch, useAppSelector } from "../../state-management/hooks";
import {
    PretextSearchResult,
    searchActions,
    searchDialogVisibleSelector,
    searchIsIndexingSelector,
    searchStringSelector,
} from "../../state-management/redux-slices/search/search-slice";
import { searchResultsSelector } from "../../state-management/redux-slices/search/search-results-selector";
import { Highlighter } from "./highlighter";

import "../../styles/search.css";
import { InternalAnchor } from "../../components-for-page/links";
import { useMathJaxDebounce } from "../utils/use-mathjax-debounce";

export function SearchDialog() {
    const form = useFormStore({});
    const dialogOpen = useAppSelector(searchDialogVisibleSelector);
    const [hasInitialized, setHasInitialized] = React.useState(false);
    const dispatch = useAppDispatch();
    const dialog = useDialogStore({
        open: dialogOpen,
    });
    const searchString = useAppSelector(searchStringSelector);
    const searchResults = useMathJaxDebounce(
        useAppSelector(searchResultsSelector),
        250
    );
    const isIndexing = useAppSelector(searchIsIndexingSelector);

    const closeDialog = React.useCallback(() => {
        dispatch(searchActions.setSearchDialogVisible(false));
    }, []);

    React.useEffect(() => {
        if (dialogOpen && !hasInitialized) {
            dispatch(searchActions.initSearch());
            setHasInitialized(true);
        }
    }, [dialogOpen, hasInitialized]);

    return (
        <Dialog
            store={dialog}
            className="dialog"
            backdrop={<div onClick={closeDialog}></div>}
        >
            <DialogDismiss onClick={closeDialog} />
            <DialogHeading>Search</DialogHeading>
            <Form store={form}>
                <FormInput
                    autoFocus
                    className="search-input"
                    value={searchString}
                    name="search-text"
                    onChange={(e) => {
                        const value = e.currentTarget.value;
                        dispatch(searchActions.search(value));
                    }}
                    onKeyUp={(e) => {
                        // Close the dialog if the user presses escape
                        if (e.key === "Escape") {
                            closeDialog();
                        }
                    }}
                />
            </Form>
            <SearchResultsDisplay
                results={searchResults}
                onClick={closeDialog}
            />
            {isIndexing && "Indexing..."}
        </Dialog>
    );
}
function SearchResultsDisplay({
    results,
    onClick,
}: {
    results: PretextSearchResult[];
    onClick: () => void;
}) {
    return (
        <ul className="search-results">
            {results.map((result, i) => (
                <React.Fragment key={result.href || result.parentDivisionHref}>
                    {!!result.parentDivisionHtml && (
                        <li>
                            <InternalAnchor
                                href={result.parentDivisionHref}
                                onClick={onClick}
                            >
                                <Highlighter
                                    htmlString={result.parentDivisionHtml}
                                    search={result.terms}
                                />
                            </InternalAnchor>
                        </li>
                    )}
                    {!!result.html && (
                        <li>
                            <div className="body-search-results">
                                <InternalAnchor
                                    href={result.href}
                                    onClick={onClick}
                                >
                                    <Highlighter
                                        htmlString={result.html}
                                        search={result.terms}
                                    />
                                </InternalAnchor>
                            </div>
                        </li>
                    )}
                </React.Fragment>
            ))}
        </ul>
    );
}
