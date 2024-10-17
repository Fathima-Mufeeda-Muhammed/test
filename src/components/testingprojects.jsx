import React, { useState } from "react";
// import Img from "../src/assets/Img/back1.jfif";
// import Img from "../src/assets/Img/logo.png";
import Img2 from "../src/assets/Img/img2.jpg";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Research from "./components/Research.jsx";
import Navigation from "./components/Navigation";

function App() {
  // FIRST PROJECT
  // return (
  //   <div className="border border-red-400 h-96 mx-10 my-10 w-96">
  //     <div className="flex flex-col items-center  ">
  //       <h1 className="mt-4 text-red-950 font-extrabold">New Page</h1>
  //       <img className="h-24 w-40 mt-2" src={Img} alt="Description" />
  //     </div>
  //     <p className="mx-5 mt-5 font-serif">NAME : FATHIMA MUFEEDA MUHAMMED</p>
  //     <p className="mx-5 font-serif">DOB : 10/11/1999</p>
  //   </div>
  // );
  // SECOND PROJECT
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const handleSubmit = () => {
  //   alert("button clicked");
  //   setPassword("");
  //   setUserName("");
  // };
  // return (
  //   <div className="border border-red-800 h-106 mx-60 my-20 flex flex-col items-center">
  //     <h1 className="font-extrabold text-red-950 mt-6 text-2xl">LOGIN HERE</h1>
  //     <img src={Img} alt="Login" className="mb-4" />
  //     <div className="mb-4 flex flex-col items-start w-full max-w-xs">
  //       <label className="mb-2 text-gray-700">User Name</label>
  //       <input
  //         type="text"
  //         value={userName}
  //         placeholder="Please enter your username"
  //         onChange={(e) => setUserName(e.target.value)}
  //         className="border border-gray-300 rounded-md p-2 w-full"
  //       />
  //     </div>
  //     <div className="mb-4 flex flex-col items-start w-full max-w-xs">
  //       <label className="mb-2 text-gray-700">Password</label>
  //       <input
  //         type="password"
  //         value={password}
  //         placeholder="Please enter the password"
  //         onChange={(e) => setPassword(e.target.value)}
  //         className="border border-gray-300 rounded-md p-2 w-full"
  //       />
  //     </div>
  //     <div className="mb-4 flex justify-between w-full max-w-xs">
  //       <p className="text-blue-600 cursor-pointer">Forgot Password?</p>
  //       <p className="text-blue-600 cursor-pointer">Register here</p>
  //     </div>
  //     <button
  //       onClick={handleSubmit}
  //       className="bg-blue-800 text-white font-bold py-2 px-4 rounded mb-6 w-56"
  //     >
  //       Submit
  //     </button>
  //   </div>
  // );
  // THIRD PROJECT
  // return (
  //   <div
  //     className="border border-black mx-5 my-1 h-screen bg-cover bg-center"
  //     style={{ backgroundImage: `url(${Img})` }}
  //   >
  //     <div className="mb-4 flex justify-between w-full max-w-xs">
  //       <button className="mx-24 mt-10 font-bold text-black-950">
  //         Research
  //       </button>
  //       <button className="mx-24 mt-10 font-bold text-black-950">
  //         Product
  //       </button>
  //       <button className="mx-24 mt-10 font-bold text-black-950">
  //         Developers
  //       </button>
  //       <button className="mx-24 mt-10 font-bold text-black-950">Safety</button>
  //       <button className="mx-24 mt-10 font-bold text-black-950">
  //         Company
  //       </button>
  //     </div>
  //     <div className="flex flex-col justify-center items-center">
  //       <h1 className="text-white text-6xl mt-96">
  //         Introducing GPT-4, OpenAI's
  //       </h1>
  //       <h2 className="text-white text-6xl mt-4">most advanced system</h2>
  //     </div>
  //   </div>
  // );

  // FOURTH PROJECT
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const handleSubmit = () => {
  //   alert("button clicked");
  //   setPassword("");
  //   setUserName("");
  // };
  // return (
  //   <div
  //     className=" h-screen  flex flex-col items-center"
  //     style={{ backgroundImage: `url(${Img2})` }}
  //   >
  //     <div className="mb-4 flex justify-between w-full max-w-xs">
  //       <button className="mx-24 mt-10 font-bold text-black-950">
  //         Research
  //       </button>
  //       <button className="mx-24 mt-10 font-bold text-black-950">
  //         Product
  //       </button>
  //       <button className="mx-24 mt-10 font-bold text-black-950">
  //         Developers
  //       </button>
  //       <button className="mx-24 mt-10 font-bold text-black-950">Safety</button>
  //       <button className="mx-24 mt-10 font-bold text-black-950">
  //         Company
  //       </button>
  //     </div>
  //     <h1 className="font-extrabold text-red-950 mt-20 text-2xl">LOGIN HERE</h1>
  //     <img src={Img} className="mb-4" />
  //     <div className="mb-4 flex flex-col items-start w-full max-w-xs">
  //       <label className="mb-2 text-black font-serif">User Name</label>
  //       <input
  //         type="text"
  //         value={userName}
  //         placeholder="Please enter your username"
  //         onChange={(e) => setUserName(e.target.value)}
  //         className="border border-gray-300 rounded-md p-2 w-full"
  //       />
  //     </div>
  //     <div className="mb-4 flex flex-col items-start w-full max-w-xs">
  //       <label className="mb-2 text-black font-serif">Password</label>
  //       <input
  //         type="password"
  //         value={password}
  //         placeholder="Please enter the password"
  //         onChange={(e) => setPassword(e.target.value)}
  //         className="border border-gray-300 rounded-md p-2 w-full"
  //       />
  //     </div>
  //     <div className="mb-4 flex justify-between w-full max-w-xs">
  //       <p className="text-red-950 font-serif text-xl cursor-pointer">
  //         Forgot Password?
  //       </p>
  //       <p className="text-red-950 font-serif text-xl cursor-pointer">
  //         Register here
  //       </p>
  //     </div>
  //     <button
  //       onClick={handleSubmit}
  //       className="bg-blue-800 text-white font-bold py-2 px-4 rounded mb-6 w-56"
  //     >
  //       Submit
  //     </button>
  //   </div>
  // );

  // FIFTH PROJECT
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div
              className="border border-black mx-5 my-1 h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${Img2})` }}
            >
              <Navigation />
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-white text-6xl mt-96">
                  Introducing GPT-4, OpenAI's
                </h1>
                <h2 className="text-white text-6xl mt-4">
                  most advanced system
                </h2>
              </div>
            </div>
          }
        />
        <Route path="/research" element={<Research />} />
      </Routes>
    </Router>
  );
}

export default App;
