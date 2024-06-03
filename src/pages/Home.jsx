import React, { memo, useEffect, useState } from "react";
import { getAllChapters } from "../services/apiService";
import { useNavigate } from "react-router-dom";

function Home() {
  const [chapters, setChapters] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getAllChapters()
      .then((data) => {
        setChapters(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function goToDetailsPage(chapter) {
    navigate(`/${chapter}/1`);
  }

  if (!chapters) return null;

  console.log("chapters", chapters);

  return (
    <div className="">
      <div className="grid grid-cols-1 gap-4">
        {chapters.map((chapter, index) => {
          return (
            <div
              key={index}
              className="p-4 bg-slate-200"
              onClick={() => {
                goToDetailsPage(chapter.chapter_number);
              }}
            >
              <div className="flex items-center gap-2">
                <p>{chapter.chapter_number}</p>
                <p>{chapter.name}</p>
                <p>({chapter.meaning.en})</p>
              </div>
              <p className="mt-2">{chapter.summary.en}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default memo(Home);
