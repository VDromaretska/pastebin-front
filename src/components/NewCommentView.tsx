import axios from "axios";
import { useState } from "react";
import { baseUrl } from "./App";

interface NewCommentViewProps {
    pasteId: number;
    fetchAndStoreComments: () => Promise<void>;
}

export function NewCommentView({
    pasteId,
    fetchAndStoreComments,
}: NewCommentViewProps) {
    const [newComment, setNewComment] = useState<string>("");

    async function handleSubmitComment() {
        await axios.post(baseUrl + `/pastes/${pasteId}/comments`, {
            comment: newComment,
        });
        await fetchAndStoreComments();
        setNewComment("");
    }

    return (
        <div>
            <input
                placeholder="Enter your comment"
                onChange={(e) => {
                    setNewComment(e.target.value);
                }}
                value={newComment}
            />

            {newComment !== "" && (
                <button onClick={handleSubmitComment}>Submit</button>
            )}
        </div>
    );
}
