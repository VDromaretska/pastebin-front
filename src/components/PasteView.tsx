/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useState } from "react";
import { PasteItem, baseUrl } from "./App";
import "./pasteView.css";
import axios from "axios";
import { CommentView } from "./CommentView";
import { NewCommentView } from "./NewCommentView";

interface PasteViewProps {
    pasteItem: PasteItem;
}

export interface CommentObj {
    id: number;
    paste_id: number;
    comment: string;
}

export function PasteView({ pasteItem }: PasteViewProps): JSX.Element {
    const [isDescriptionClicked, setIsDescriptionClicked] =
        useState<boolean>(false);
    const [allComments, setAllComments] = useState<CommentObj[]>([]);

    const pasteId = pasteItem.id;

    async function fetchAndStoreComments() {
        const response = await axios.get(
            baseUrl + `/pastes/${pasteId}/comments`
        );
        setAllComments(response.data);
    }

    function handleDescriptionClick() {
        setIsDescriptionClicked((prev) => (prev === true ? false : true));
        fetchAndStoreComments();
    }

    return (
        <div className="paste-view">
            <h2 className="paste-title">{pasteItem.title}</h2>
            <div className="paste-description-container">
                <div className="short-description">
                    {!isDescriptionClicked && (
                        <p onClick={handleDescriptionClick}>
                            {pasteItem.description}
                        </p>
                    )}
                </div>
                {isDescriptionClicked && (
                    <div className="full-description">
                        <p onClick={handleDescriptionClick}>
                            {pasteItem.description}
                        </p>
                        {allComments.map((comment) => (
                            <CommentView
                                key={comment.id}
                                commentItem={comment}
                                fetchAndStoreComments={fetchAndStoreComments}
                            />
                        ))}
                        <NewCommentView
                            pasteId={pasteId}
                            fetchAndStoreComments={fetchAndStoreComments}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
