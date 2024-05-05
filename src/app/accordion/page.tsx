"use client";
import questions from "./data";
import Accordion from "./Accordion";

export default function page() {
  return (
    <>
      {questions.map((question, idx) => {
        return <Accordion {...question} key={idx} />;
      })}
    </>
  );
}
