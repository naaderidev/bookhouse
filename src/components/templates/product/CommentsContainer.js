import React from "react";
import EmptyComments from "./EmptyComments";
import CommentCard from "@/components/modules/cards/CommentCard";

export default function CommentsContainer({ comments }) {
  const isAnyCommentToShow = comments?.some(
    (comment) => comment.isAccept === true
  );
  return (
    <div className="lg:col-span-7">
      {comments.length ? (
        isAnyCommentToShow ? (
          comments.map(
            (comment) =>
              comment.isAccept && <CommentCard key={comment._id} {...comment} />
          )
        ) : (
          <EmptyComments />
        )
      ) : (
        <EmptyComments />
      )}
    </div>
  );
}
