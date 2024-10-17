import React from "react";
import Navigation from "./Navigation";
import Video from "../assets/Videos/video2.mp4";

function Product() {
  return (
    <div>
      <Navigation />
      <div className="relative h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={Video} type="video/mp4" />
        </video>

        <div className="absolute inset-0 text-white p-4">
          <h2 className="text-3xl font-serif text-red-950 underline mt-10 flex justify-center">
            Paracetamol
          </h2>
          <p className="mx-10 my-10 font-serif text-lg">
            Paracetamol is a medicine used to treat mild to moderate pain.
            Paracetamol can also be used to treat fever (high temperature). It's
            dangerous to take more than the recommended dose of paracetamol.
            Paracetamol overdose can damage your liver and cause death.
          </p>

          <h2 className="text-3xl font-serif text-red-950 underline mt-10 flex justify-center">
            Atenolol
          </h2>
          <p className="mx-10 my-10 font-serif text-lg">
            Atenolol is a second-generation β-1–selective adrenergic antagonist
            that helps lower the heart rate and blood pressure of patients while
            also decreasing myocardial contractility.
          </p>

          <h2 className="text-3xl font-serif text-red-950 underline mt-10 flex justify-center">
            Amlodipine
          </h2>
          <p className="mx-10 my-10 font-serif text-lg">
            Amlodipine is in a class of medications called calcium channel
            blockers. It lowers blood pressure by relaxing the blood vessels so
            the heart does not have to pump as hard. It controls chest pain by
            increasing the supply of blood to the heart.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
