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
export interface RunestoneComponentsGlobal {
    renderOneComponent: (node: HTMLElement) => void;
    runestone_import: (component_name: string) => Promise<void>;
}
