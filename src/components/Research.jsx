import React from "react";
import Img from "../assets/Img/back7.jfif";
import Navigation from "./Navigation";

export default function Research() {
  return (
    <div>
      <Navigation />
      <div
        className="border h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${Img})` }}
      >
        <h1 className="font-extrabold text-red-950 mt-6 text-6xl flex flex-col items-center">
          RESEARCH
        </h1>
        <p className="mx-10 my-10 font-serif text-lg">
          Research in medicine plays a vital role in advancing healthcare and
          improving patient outcomes. It encompasses a wide range of activities,
          from clinical trials that test new treatments and drugs to
          observational studies that analyze health trends and patient
          behaviors. Recent innovations, such as personalized medicine and
          telehealth, have emerged from rigorous research efforts, enhancing the
          precision of treatments and accessibility to care. Additionally,
          studies on public health challenges, like infectious diseases and
          chronic conditions, help inform policy decisions and preventative
          strategies. Overall, ongoing medical research is essential for
          addressing current health issues and preparing for future challenges
          in medicine.
        </p>
      </div>
    </div>
  );
}
