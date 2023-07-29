import { HastDom } from "./hast-dom";

// Needed to declare the type of the data attribute for a `VFile`. This
// declaration is global!
// Instructions take from https://github.com/vfile/vfile/blob/c9ba3e13862251870b24442cc7792f0d48a546a1/index.d.ts#L27

declare module "vfile" {
    interface DataMap {
        hastDom: HastDom;
        existingIds: Set<string>;
        currentPageId: string;
        latexPreamble?: string | null;
    }
}
