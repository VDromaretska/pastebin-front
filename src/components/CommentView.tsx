import axios from "axios";
import { CommentObj } from "./PasteView";
import { baseUrl } from "./App";

interface CommentViewProps {
    commentItem: CommentObj;
    fetchAndStoreComments: () => Promise<void>;
}

export function CommentView({
    commentItem,
    fetchAndStoreComments,
}: CommentViewProps) {
    const pasteId = commentItem.paste_id;
    const commentId = commentItem.id;

    async function handleDeleteComment() {
        await axios.delete(
            baseUrl + `/pastes/${pasteId}/comments/${commentId}`
        );
        fetchAndStoreComments();
    }

    return (
        <>
            <p>{commentItem.comment}</p>
            <button onClick={handleDeleteComment}>Delete</button>
        </>
    );
}
