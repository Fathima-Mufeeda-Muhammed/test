import React from "react";
import Img from "../assets/Img/back8.jfif";
import Navigation from "./Navigation";

export default function Developers() {
  return (
    <div>
      <Navigation />
      <div
        className="border h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${Img})` }}
      >
        <h1 className="font-extrabold text-red-950 mt-6 text-6xl flex flex-col items-center">
          DEVELOPERS
        </h1>
        <p className="mx-10 my-10 font-serif text-lg">
          Medicine developers, including pharmaceutical companies and biotech
          firms, play a critical role in transforming scientific discoveries
          into effective treatments. Their work involves extensive research and
          development (R&D) processes, starting from the identification of
          potential drug targets to the formulation and testing of new
          therapies. They conduct rigorous preclinical and clinical trials to
          evaluate the safety, efficacy, and dosage of new medications, adhering
          to strict regulatory standards. Collaboration with academic
          institutions and healthcare professionals is often integral to this
          process, fostering innovation and ensuring that new treatments meet
          real-world medical needs. Ultimately, medicine developers are
          essential in bringing groundbreaking therapies to market,
          significantly impacting public health and patient care.
        </p>
      </div>
    </div>
  );
}
