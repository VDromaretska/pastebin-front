/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useState } from "react";
import { PasteItem } from "./App";
import "./pasteView.css";

interface PasteViewProps {
    pasteItem: PasteItem;
}

export function PasteView({ pasteItem }: PasteViewProps): JSX.Element {
    const [isDescriptionClicked, setIsDescriptionClicked] =
        useState<boolean>(false);

    function handleDescriptionClick() {
        setIsDescriptionClicked((prev) => (prev === true ? false : true));
    }
    return (
        <div>
            <h2>{pasteItem.title}</h2>
            <div className="summary-container">
                {!isDescriptionClicked && (
                    <p onClick={handleDescriptionClick}>
                        {pasteItem.description}
                    </p>
                )}
            </div>
            {isDescriptionClicked && (
                <p onClick={handleDescriptionClick}>{pasteItem.description}</p>
            )}
        </div>
    );
}
