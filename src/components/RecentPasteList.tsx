import { PasteItem } from "./App";
import { PasteView } from "./PasteView";

interface RecentPasteListProps {
    pasteList: PasteItem[];
}
export function RecentPasteList({
    pasteList,
}: RecentPasteListProps): JSX.Element {
    return (
        <div>
            {pasteList.map((pasteItem) => (
                <PasteView pasteItem={pasteItem} key={pasteItem.id} />
            ))}
        </div>
    );
}
