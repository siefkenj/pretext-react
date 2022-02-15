import React from "react";
import { useAppSelector } from "../../app/hooks";
import { visibleKnowlsSelector } from "../../features/knowl/knowlSlice";
import { Accordion } from "../accordion";
import { KnowlContent } from "./knowls";

/**
 * A container element for the content of several knowls. This container listens
 * for requests to display the knowl's content and then displays it with newly-opened
 * content before previously-opened content.
 */
export function KnowlContainer({
    knowlData,
}: {
    knowlData: { id: string; forKnowlUrl: string }[];
}) {
    const visibleKnowls = useAppSelector(visibleKnowlsSelector);
    const displayOrderRef = React.useRef<string[]>([]);
    const [displayOrder, setDisplayOrder] = React.useState<string[]>([]);

    const displayed = React.useMemo(
        () =>
            displayOrder.map(
                (id) => knowlData.find((item) => item.id === id) || knowlData[0]
            ),
        [knowlData, displayOrder]
    );

    // Display order
    React.useEffect(() => {
        const numPreviouslyOrdered = displayOrderRef.current.length;
        for (const info of knowlData) {
            if (
                visibleKnowls[info.id] &&
                !displayOrderRef.current.includes(info.id)
            ) {
                // Any newly-opened knowl should display its contents *before*
                // any the other knowls. But, once it's been opened, it's position
                // stays fixed.
                displayOrderRef.current.unshift(info.id);
            }
        }
        if (displayOrderRef.current.length !== numPreviouslyOrdered) {
            // The display order list can only grow! A new knowl was just displayed,
            // so we need to update the display order.
            setDisplayOrder([...displayOrderRef.current]);
        }
    }, [visibleKnowls, knowlData]);

    return (
        <div className="knowl-group-container">
            {displayed.map((dat) => (
                <div
                    id={dat.id}
                    data-for-knowl-url={dat.forKnowlUrl}
                    key={dat.id}
                >
                    <Accordion open={visibleKnowls[dat.id]}>
                        <KnowlContent
                            show={visibleKnowls[dat.id]}
                            url={dat.forKnowlUrl}
                        />
                    </Accordion>
                </div>
            ))}
        </div>
    );
}
