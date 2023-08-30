import axios from "axios";
import { useState } from "react";
import { baseUrl } from "./App";
export interface NewPaste {
    title?: string;
    description: string;
}
interface NewPasteViewProps {
    fetchAndStorePastes: () => Promise<void>;
}
export function NewPasteView({
    fetchAndStorePastes,
}: NewPasteViewProps): JSX.Element {
    const [newPaste, setNewPaste] = useState<NewPaste>({
        title: "",
        description: "",
    });

    async function handleSubmit() {
        try {
            await axios.post(baseUrl + "/pastes", newPaste);
            setNewPaste({
                title: "",
                description: "",
            });
            fetchAndStorePastes();
        } catch (error) {
            console.log("Post error", error);
        }
    }
    return (
        <div>
            <input
                placeholder="Title input.."
                onChange={(e) => {
                    setNewPaste((prev) => ({ ...prev, title: e.target.value }));
                }}
                value={newPaste.title}
            />
            <input
                placeholder="Body"
                onChange={(e) => {
                    setNewPaste((prev) => ({
                        ...prev,
                        description: e.target.value,
                    }));
                }}
                value={newPaste.description}
            />
            {newPaste.description !== "" && (
                <button onClick={handleSubmit}>Submit</button>
            )}
        </div>
    );
}
