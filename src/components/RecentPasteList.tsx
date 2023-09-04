import { PasteItem } from "./App";
import { PasteView } from "./PasteView";

interface RecentPasteListProps {
    pasteList: PasteItem[];
}
export function RecentPasteList({
    pasteList,
}: RecentPasteListProps): JSX.Element {
    const lastTenPastes = pasteList.slice(-10).reverse();
    return (
        <div>
            {lastTenPastes.map((pasteItem) => (
                <PasteView pasteItem={pasteItem} key={pasteItem.id} />
            ))}
        </div>
    );
}
