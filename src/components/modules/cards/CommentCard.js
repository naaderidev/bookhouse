import React from "react";
import { HiStar, HiOutlineStar } from "react-icons/hi2";

export default function CommentCard({ username, body, score, date }) {
  return (
    <div className="px-2  mb-4 rounded-2xl bg-brown-100 text-catalan-800 dark:bg-catalan-600 dark:text-brown-100 text-link">
      <div className="flex items-center gap-2">
        <img
          src="https://avatar.iran.liara.run/public"
          className="w-12 h-12 rounded-full"
          alt=""
        />
        <div>
          <h3 className="text-regular pt-4">{username}</h3>
          <h4 className="py-2">{new Date(date).toLocaleDateString("fa-IR")}</h4>
          <div className="flex">
            {new Array(score).fill(0).map((item, index) => (
              <HiStar key={index} />
            ))}
            {new Array(5 - score).fill(0).map((item, index) => (
              <HiOutlineStar key={index} />
            ))}
          </div>
        </div>
      </div>
      <p className="p-4 leading-8 indent-4">{body}</p>
    </div>
  );
}
