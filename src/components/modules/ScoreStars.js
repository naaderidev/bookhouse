import React from "react";
import { HiStar, HiOutlineStar } from "react-icons/hi2";

export default function ScoreStars({ score }) {
  return (
    <div className="badge bg-catalan-600 hidden md:flex-center">
      {new Array(score).fill(0).map((item, index) => (
        <HiStar key={index} />
      ))}
      {new Array(5 - score).fill(0).map((item, index) => (
        <HiOutlineStar key={index} />
      ))}
    </div>
  );
}
