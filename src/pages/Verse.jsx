import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getChapterDetails, getVerse } from "../services/apiService";
import { Button } from "flowbite-react";

function Verse() {
  const [chapterDetails, setChapterDetails] = useState(null);
  const [verse, setVerse] = useState(null);
  const [verseCount, setVerseCount] = useState(1);

  const params = useParams();

  useEffect(() => {
    getChapterDetails(params.chapter).then((data) => {
      setChapterDetails(data);
    });
    getVerse(params.chapter, verseCount).then((data) => {
      setVerse(data);
    });
  }, [params, verseCount]);

  function next() {
    if (verseCount < chapterDetails.verses_count) {
      setVerseCount(verseCount + 1);
    }
  }
  function prev() {
    if (verseCount > 1) {
      setVerseCount(verseCount - 1);
    }
  }

  if (!chapterDetails || !verse) return null;

  return (
    <div>
      <p>{verse.chinmay.author}</p>
      <p>{verse.chinmay.hc}</p>
      <Button onClick={prev}>Prev</Button>
      <Button onClick={next}>Next</Button>
    </div>
  );
}

export default Verse;
