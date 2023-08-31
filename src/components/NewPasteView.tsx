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
                placeholder="Enter a title"
                onChange={(e) => {
                    setNewPaste((prev) => ({ ...prev, title: e.target.value }));
                }}
                value={newPaste.title}
            />
            <br />
            <textarea
                value={newPaste.description}
                placeholder="Enter a description"
                onChange={(e) => {
                    setNewPaste((prev) => ({
                        ...prev,
                        description: e.target.value,
                    }));
                }}
                rows={15}
                cols={80}
            />

            {newPaste.description !== "" && (
                <button onClick={handleSubmit}>Submit</button>
            )}
        </div>
    );
}
