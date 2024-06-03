export function getAllChapters() {
  return fetch(`https://bhagavadgitaapi.in/chapters`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
}

export function getChapterDetails(chapterNumber) {
  return fetch(`https://bhagavadgitaapi.in/chapter/${chapterNumber}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
}

export function getVerse(chapterNumber, verserNumber) {
  return fetch(
    `https://bhagavadgitaapi.in/slok/${chapterNumber}/${verserNumber}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
}
