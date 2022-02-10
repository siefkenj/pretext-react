import React from "react";
import { initInfo } from "../page-init";
import { htmlToComponent } from "./content-page/process-content";

export function Banner() {
    const [content, setContent] = React.useState(
        <React.Fragment>Loading</React.Fragment>
    );
    React.useEffect(() => {
        if (!initInfo.bannerContent) {
            throw new Error("Missing banner content");
        }
        setContent(htmlToComponent(initInfo.bannerContent).component);
    }, []);

    return content;
}
