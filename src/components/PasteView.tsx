import { PasteItem } from "./App";

interface PasteViewProps {
    pasteItem: PasteItem;
}

export function PasteView({ pasteItem }: PasteViewProps): JSX.Element {
    return (
        <div>
            <h2>{pasteItem.title}</h2>
            <p>{pasteItem.description}</p>
        </div>
    );
}
