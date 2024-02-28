import React from "react";
import { faqs } from "../../../data/homePageData";
import Faq from "./Faq";

function FaqsRow() {
  return (
    <div>
      {faqs.map(function (faq, index) {
        return <Faq key={index} question={faq.question} answer={faq.answer} />;
      })}
    </div>
  );
}

export default FaqsRow;
