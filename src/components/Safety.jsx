import React from "react";
import Img from "../assets/Img/back9.jpg";
import Navigation from "./Navigation";

export default function Safety() {
  return (
    <div>
      <Navigation />
      <div
        className="border h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${Img})` }}
      >
        <h1 className="font-extrabold text-red-950 mt-6 text-6xl flex flex-col items-center">
          SAFETY
        </h1>
        <p className="mx-10 my-10 font-serif text-lg">
          Medicine safety is crucial for ensuring effective treatment and
          minimizing risks. Always store medications properly, away from
          children, and adhere to prescribed dosages and schedules. Be aware of
          potential side effects and interactions, and communicate openly with
          your healthcare provider about all medications you’re taking,
          including over-the-counter drugs and supplements. Regularly reviewing
          your medications can also help prevent complications and ensure
          optimal health outcomes.
        </p>
      </div>
    </div>
  );
}
