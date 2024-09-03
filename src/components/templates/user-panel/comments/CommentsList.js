"use client";
import React, { useState } from "react";
import CommentCard from "./CommentCard";
import Pagination from "@/components/modules/Pagination";
import EmptyContainer from "@/components/modules/user-panel/EmptyContainer";

export default function CommentsList({ comments }) {
  const [shownComments, setShownComments] = useState(comments);
  return (
    <div className="container mx-8">
      {comments.length === 0 ? (
        <EmptyContainer message="هنوز دیدگاهی برای محصولات ثبت نکردی" />
      ) : (
        <>
          {shownComments.map((comment) => (
            <CommentCard key={comment._id} {...comment} />
          ))}
          <Pagination
            items={comments}
            setShownItems={setShownComments}
            count={6}
            type="cms"
          />
        </>
      )}
    </div>
  );
}
