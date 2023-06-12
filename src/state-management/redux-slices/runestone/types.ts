export type EBookConfig = {
    useRunestoneServices: boolean;
    host: string;
    app: string;
    course: string;
    basecourse: string;
    isLoggedIn: boolean;
    email: string;
    isInstructor: boolean;
    logLevel: number;
    ajaxURL: string;
    username: string;
    readings: unknown[] | null;
    activities: Record<string, number> | null;
    downloadsEnabled: boolean;
    allow_pairs: boolean;
    enableScratchAC: boolean;
    acDefaultLanguage: string;
    new_server_prefix: string;
    runestone_version: string;
    scratchDiv: string;
};

export interface ACFactory {
    createActiveCode: (orig: any, lang: string, addopts?: any) => any;
    // used by web2py controller(s)
    addActiveCodeToDiv: (
        outerdivid: any,
        acdivid: any,
        sid: unknown,
        initialcode: string,
        language: string
    ) => {};
    createActiveCodeFromOpts: (opts: any) => {};
    createScratchActivecode: () => {};
    toggleScratchActivecode: () => {};
}

// Name list taken from https://github.com/RunestoneInteractive/rs/blob/67775377fa134e5124070f99bdb5550aca20f91a/bases/rsptx/interactives/webpack.index.js#L58
type RunestoneImport =
    | "activecode"
    | "ble"
    | "clickablearea"
    | "codelens"
    | "datafile"
    | "dragndrop"
    | "fillintheblank"
    | "groupsub"
    | "khanex"
    | "lp_build"
    | "multiplechoice"
    | "hparsons"
    | "parsons"
    | "poll"
    | "quizly"
    | "reveal"
    | "selectquestion"
    | "shortanswer"
    | "showeval"
    | "simple_sensor"
    | "spreadsheet"
    | "tabbedStuff"
    | "timedAssessment"
    | "wavedrom"
    | "webwork"
    | "youtube";
export interface RunestoneComponentsGlobal {
    renderOneComponent: (node: HTMLElement) => void;
    runestone_import: (component_name: RunestoneImport) => Promise<void>;
}
