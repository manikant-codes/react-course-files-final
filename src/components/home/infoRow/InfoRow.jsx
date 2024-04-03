import React, { useState } from "react";
import Image from "./Image";
import Info from "./Info";
import "../../../styles/home/infoRow.css";

function InfoRow({ contentFirst, image, title, desc }) {
  const [isContentFirst, setIsContentFirst] = useState(contentFirst);

  if (isContentFirst) {
    return (
      <div className="infoRowContainer">
        <Info
          title={title}
          desc={desc}
          setIsContentFirst={setIsContentFirst}
          isContentFirst={isContentFirst}
        />
        <Image image={image} />
      </div>
    );
  }
  return (
    <div className="infoRowContainer">
      <Image image={image} />
      <Info title={title} desc={desc} setIsContentFirst={setIsContentFirst} />
    </div>
  );
}

export default InfoRow;
