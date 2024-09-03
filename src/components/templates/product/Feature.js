import React from "react";

export default function Feature({ title, value }) {
  return (
    <figure className="flex items-center gap-2">
      <img
        src="/images/icons/cat-story-2.png"
        alt=""
        className="icon p-2 rounded-ss-xl rounded-ee-xl bg-gray-100 border-y border-catalan-600 dark:border-brown-100"
      />
      <figcaption className="text-link md:text-regular">
        {title}: {value}
      </figcaption>
    </figure>
  );
}
