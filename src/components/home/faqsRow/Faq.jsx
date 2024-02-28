import React, { useState } from "react";

function Faq(props) {
  const { question, answer, number } = props;
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <div>
        <p>{number}</p>
        <p>{question}</p>
        {isVisible ? (
          <i onClick={handleClick} className="fa-solid fa-chevron-up"></i>
        ) : (
          <i onClick={handleClick} className="fa-solid fa-chevron-down"></i>
        )}
      </div>
      {isVisible && <p>{answer}</p>}
    </div>
  );
}

export default Faq;
