import React from "react";
import { useLocation } from "react-router-dom";

function NewsDetails() {
  const { state } = useLocation();

  return (
    <div>
      <div className="h-[60vh] w-full overflow-hidden">
        <img
          src={state.urlToImage}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-4xl font-bold">{state.title}</h2>
        <p className="mt-2">
          Published: {new Date(state.publishedAt).toLocaleDateString("en-in")}
        </p>
        <p className="mt-6">{state.content.split(" [+")[0]}</p>
        <a href={state.url} className="block mt-2 font-bold">
          Read more
        </a>
        <p className="mt-6">Author: {state.author || "N/A"}</p>
      </div>
    </div>
  );
}

export default NewsDetails;
