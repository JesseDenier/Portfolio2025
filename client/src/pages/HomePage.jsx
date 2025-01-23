// Imports React library
import React, { useState } from "react";

const HomePage = () => {
  const [hoverStyles, setHoverStyles] = useState({});

  const handleMouseMove = (e, id) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setHoverStyles((prevStyles) => ({
      ...prevStyles,
      [id]: {
        transform: `scale(1.05) translate(${x * 2}%, ${y * 2}%)`,
        //! Adjust the z-index and position properties to allow the image to overlap other elements
        //! Make further adjustments to prevent the expanded image from changing the position of other elements
        // zIndex: 10,
        // position: "relative",
        border: "2px solid #003622", // darkgreen border
        borderRadius: "0.75rem", // rounded-lg in Tailwind
      },
    }));
  };

  const resetHoverStyle = (id) => {
    setHoverStyles((prevStyles) => ({
      ...prevStyles,
      [id]: { transform: "none" },
    }));
  };

  return (
    <main className="text-darkgreen font-sans">
      {/* About Me Section */}
      <section
        id="AboutMe"
        className="p-6 flex items-center gap-6 justify-center"
      >
        <div className="bg-lightgreen shadow-lg rounded-lg p-6 w-full max-w-4xl">
          <div className="flex items-center gap-6">
            <div className="w-1/4">
              <img
                src="headshot.svg"
                alt="Professional headshot"
                className="w-full h-auto object-cover rounded-full"
              />
            </div>
            <div className="w-3/4">
              <p className="text-lg">
                Hi, I'm Jesse Denier.
                <br />
                Austin native, digital handyman, and queso lover.
                <br />
                Experienced web developer, graphic designer, and tech expert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="Portfolio" className="p-6">
        {/* Projects Heading */}
        <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>

        {/* Full Stack Web Development */}
        <h3 className="text-2xl font-semibold text-center mb-4">
          Full Stack Web Development
        </h3>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {/* Format Group */}
          <div className="h-auto bg-darkgreen rounded-lg shadow flex flex-col pt-4 border-2 border-darkgreen relative overflow-visible group">
            <a
              className="items-center justify-center relative overflow-visible"
              href="https://www.formatllc.com/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={(e) => handleMouseMove(e, "format")}
              onMouseLeave={() => resetHoverStyle("format")}
            >
              <img
                src="full_stack/format.png"
                alt="The Format Group Website"
                className="w-full transition-transform duration-500 ease-out"
                style={hoverStyles.format || { transform: "none" }}
              />
            </a>
            <div className="p-4 flex flex-col">
              <strong className="text-lg text-white font-bold">
                The Format Group
              </strong>
              <span className="text-sm text-white">
                Austin-Based Instructional Design Firm
              </span>
            </div>
          </div>

          {/* ISCA Publications */}
          <div className="h-auto bg-darkgreen rounded-lg shadow flex flex-col pt-4 border-2 border-darkgreen relative overflow-visible group">
            <a
              className="items-center justify-center relative overflow-visible"
              href="https://www.iscapublications.com/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={(e) => handleMouseMove(e, "isca")}
              onMouseLeave={() => resetHoverStyle("isca")}
            >
              <img
                src="full_stack/isca.png"
                alt="ISCA Publications Website"
                className="w-full transition-transform duration-500 ease-out"
                style={hoverStyles.isca || { transform: "none" }}
              />
            </a>
            <div className="p-4 flex flex-col">
              <strong className="text-lg text-white font-bold">
                ISCA Publications
              </strong>
              <span className="text-sm text-white">
                International School Counselor Association Library
              </span>
            </div>
          </div>
        </div>

        {/* Code Samples */}
        <h3 className="text-2xl font-semibold text-center mb-4">
          Code Samples
        </h3>
        <div className="grid grid-cols-4 gap-4 mb-8">
          {/* Javascript Quiz */}
          <div className="h-auto bg-darkgreen rounded-lg shadow flex flex-col pt-4 border-2 border-darkgreen relative overflow-visible group">
            <a
              className="items-center justify-center relative overflow-visible"
              href="https://jessedenier.github.io/Multiple-Choice-Quiz/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={(e) => handleMouseMove(e, "quiz")}
              onMouseLeave={() => resetHoverStyle("quiz")}
            >
              <img
                src="code_samples/quiz.png"
                alt="Javascript Quiz Website"
                className="w-full transition-transform duration-500 ease-out"
                style={hoverStyles.quiz || { transform: "none" }}
              />
            </a>
            <div className="p-4 flex flex-col">
              <strong className="text-lg text-white font-bold">
                Javascript Quiz
              </strong>
              <span className="text-sm text-white">
                Timed Multiple Choice Game
              </span>
            </div>
          </div>

          {/* Password Generator */}
          <div className="h-auto bg-darkgreen rounded-lg shadow flex flex-col pt-4 border-2 border-darkgreen relative overflow-visible group">
            <a
              className="items-center justify-center relative overflow-visible"
              href="https://jessedenier.github.io/Password-Generator/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={(e) => handleMouseMove(e, "password")}
              onMouseLeave={() => resetHoverStyle("password")}
            >
              <img
                src="code_samples/password.png"
                alt="Password Generator Website"
                className="w-full transition-transform duration-500 ease-out"
                style={hoverStyles.password || { transform: "none" }}
              />
            </a>
            <div className="p-4 flex flex-col">
              <strong className="text-lg text-white font-bold">
                Password Generator
              </strong>
              <span className="text-sm text-white">
                Customizable Random String Tool
              </span>
            </div>
          </div>

          {/* Weather Dashboard */}
          <div className="h-auto bg-darkgreen rounded-lg shadow flex flex-col pt-4 border-2 border-darkgreen relative overflow-visible group">
            <a
              className="items-center justify-center relative overflow-visible"
              href="https://jessedenier.github.io/Weather-Dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={(e) => handleMouseMove(e, "weather")}
              onMouseLeave={() => resetHoverStyle("weather")}
            >
              <img
                src="code_samples/weather.png"
                alt="Weather Dashboard Website"
                className="w-full transition-transform duration-500 ease-out"
                style={hoverStyles.weather || { transform: "none" }}
              />
            </a>
            <div className="p-4 flex flex-col">
              <strong className="text-lg text-white font-bold">
                Weather Dashboard
              </strong>
              <span className="text-sm text-white">
                Simplified Location-Based Forecast
              </span>
            </div>
          </div>

          {/* Bingo */}
          <div className="h-auto bg-darkgreen rounded-lg shadow flex flex-col pt-4 border-2 border-darkgreen relative overflow-visible group">
            <a
              className="items-center justify-center relative overflow-visible"
              href="https://jessedenier.github.io/Bingo/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={(e) => handleMouseMove(e, "bingo")}
              onMouseLeave={() => resetHoverStyle("bingo")}
            >
              <img
                src="code_samples/bingo.png"
                alt="Bingo Website"
                className="w-full transition-transform duration-500 ease-out"
                style={hoverStyles.bingo || { transform: "none" }}
              />
            </a>
            <div className="p-4 flex flex-col">
              <strong className="text-lg text-white font-bold">
                Valentines Bingo
              </strong>
              <span className="text-sm text-white">
                Multiplayer Real-World Scavenger Hunt Game
              </span>
            </div>
          </div>

          {/* Work Scheduler */}
          <div className="h-auto bg-darkgreen rounded-lg shadow flex flex-col pt-4 border-2 border-darkgreen relative overflow-visible group">
            <a
              className="items-center justify-center relative overflow-visible"
              href="https://jessedenier.github.io/Work-Scheduler/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={(e) => handleMouseMove(e, "scheduler")}
              onMouseLeave={() => resetHoverStyle("scheduler")}
            >
              <img
                src="code_samples/scheduler.png"
                alt="Work Scheduler Website"
                className="w-full transition-transform duration-500 ease-out"
                style={hoverStyles.scheduler || { transform: "none" }}
              />
            </a>
            <div className="p-4 flex flex-col">
              <strong className="text-lg text-white font-bold">
                Work Scheduler
              </strong>
              <span className="text-sm text-white">Daily Planning Tool</span>
            </div>
          </div>

          {/* Recipe Creator */}
          <div className="h-auto bg-darkgreen rounded-lg shadow flex flex-col pt-4 border-2 border-darkgreen relative overflow-visible group">
            <a
              className="items-center justify-center relative overflow-visible"
              href="https://jessedenier.github.io/Recipe-Creator/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={(e) => handleMouseMove(e, "recipe")}
              onMouseLeave={() => resetHoverStyle("recipe")}
            >
              <img
                src="code_samples/recipe.png"
                alt="Recipe Creator Website"
                className="w-full transition-transform duration-500 ease-out"
                style={hoverStyles.recipe || { transform: "none" }}
              />
            </a>
            <div className="p-4 flex flex-col">
              <strong className="text-lg text-white font-bold">
                Recipe Creator
              </strong>
              <span className="text-sm text-white">
                Ingredient-Based Recipe Generator
              </span>
            </div>
          </div>

          {/* Parlay Calculator */}
          <div className="h-auto bg-darkgreen rounded-lg shadow flex flex-col pt-4 border-2 border-darkgreen relative overflow-visible group">
            <a
              className="items-center justify-center relative overflow-visible"
              href="https://jessedenier.github.io/Parlay-Probability/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={(e) => handleMouseMove(e, "parlay")}
              onMouseLeave={() => resetHoverStyle("parlay")}
            >
              <img
                src="code_samples/parlay.png"
                alt="Parlay Calculator Website"
                className="w-full transition-transform duration-500 ease-out"
                style={hoverStyles.parlay || { transform: "none" }}
              />
            </a>
            <div className="p-4 flex flex-col">
              <strong className="text-lg text-white font-bold">
                Parlay Calculator
              </strong>
              <span className="text-sm text-white">
                Probability Estimation Tool
              </span>
            </div>
          </div>

          {/* Expense Tracker */}
          <div className="h-auto bg-darkgreen rounded-lg shadow flex flex-col pt-4 border-2 border-darkgreen relative overflow-visible group">
            <a
              className="items-center justify-center relative overflow-visible"
              href="https://expense-tracker-ut-8e4127567b9a.herokuapp.com/login"
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={(e) => handleMouseMove(e, "expense")}
              onMouseLeave={() => resetHoverStyle("expense")}
            >
              <img
                src="code_samples/expense.png"
                alt="Expense Tracker Website"
                className="w-full transition-transform duration-500 ease-out"
                style={hoverStyles.expense || { transform: "none" }}
              />
            </a>
            <div className="p-4 flex flex-col">
              <strong className="text-lg text-white font-bold">
                Expense Tracker
              </strong>
              <span className="text-sm text-white">Simple Budgeting Tool</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t-2 border-darkgreen my-8" />

        {/* Marketing Section */}
        <h2 className="text-3xl font-bold text-center mb-6">Marketing</h2>

        {/* Logos */}
        <h3 className="text-2xl font-semibold text-center mb-4">Logos</h3>
        <div className="grid grid-cols-4 gap-4 mb-8">
          {/* CSMBB */}
          <div className="h-auto flex flex-col relative overflow-visible group">
            <img
              src="logos/csmbb.png"
              alt="CSMBB Logo, a 2x2 blue grid with each partner's name on it's right"
              className="w-full transition-transform duration-500 ease-out"
            />
            <strong className="p-2 text-lg font-bold">
              Law Offices of Cornell Smith & Mierl
            </strong>
          </div>

          {/* Tori's Tots */}
          <div className="h-auto flex flex-col relative overflow-visible group">
            <img
              src="logos/tori.png"
              alt="Tori's Tots Logo, a green tree growing from a heart into a lightbulb"
              className="w-full transition-transform duration-500 ease-out"
            />
            <strong className="p-2 text-lg font-bold">
              Tori's Tots Nursery
            </strong>
          </div>

          {/* Hemlock Aerials */}
          <div className="h-auto flex flex-col relative overflow-visible group">
            <img
              src="logos/hemlock.png"
              alt="Hemlock Aerials Logo, a geometric tree growing from simplistic lines"
              className="w-full transition-transform duration-500 ease-out"
            />
            <strong className="p-2 text-lg font-bold">Hemlock Aerials</strong>
          </div>

          {/* Corden's Court */}
          <div className="h-auto flex flex-col relative overflow-visible group">
            <img
              src="logos/corden.png"
              alt="Corden's Court logo, a round table surrounded by knights holding beer steins"
              className="w-full transition-transform duration-500 ease-out"
            />
            <strong className="p-2 text-lg font-bold">Corden's Court</strong>
          </div>
        </div>

        {/* Flyers */}
        <h3 className="text-2xl font-semibold text-center mb-4">Flyers</h3>
        <div className="grid grid-cols-4 gap-4 mb-8">
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="h-40 bg-gray-200 rounded shadow flex items-center justify-center"
              >
                Empty Link Box
              </div>
            ))}
        </div>

        {/* Art */}
        <h3 className="text-2xl font-semibold text-center mb-4">Art</h3>
        <div className="grid grid-cols-4 gap-4">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="h-40 bg-gray-200 rounded shadow flex items-center justify-center"
              >
                Empty Link Box
              </div>
            ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 bg-darkgreen text-white flex flex-col lg:flex-row items-center gap-4 relative">
        {/* Copyright Section */}
        <p className="text-center lg:text-left lg:absolute lg:left-4">
          &copy; 2025 Jesse Denier. All Rights Reserved.
        </p>

        {/* Centered Email */}
        <div className="text-center mx-auto lg:absolute lg:inset-x-0">
          <a
            href="mailto:jessecdenier@gmail.com?subject=I%20want%20to%20hire%20you!"
            className="text-white hover:text-yellow transform hover:scale-105 transition-transform duration-300 inline-block"
          >
            jessecdenier@gmail.com
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 lg:absolute lg:right-4">
          <a
            href="https://github.com/JesseDenier"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-yellow group transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 196.1 192.5"
              className="h-6 w-6 fill-current group-hover:scale-125 transition-transform duration-300"
            >
              <path d="M182.5,100.5c-0.3,2.7-0.6,5.4-0.9,8.1c-1.6,11.8-5.6,22.8-12,32.9c-7.1,11.3-16.1,20.7-27.4,27.8c-5.9,3.7-12.2,6.7-18.8,8.9c-3.7,1.2-6.2-0.7-6.2-4.5c0-7.6,0-15.2,0-22.7c0-4.6-0.5-9.2-3-13.2c-0.7-1.2-1.7-2.2-2.5-3.4c3.4-0.6,6.8-1.1,10.1-1.9c8.9-2.3,16.8-6.2,22.2-13.9c4-5.7,5.8-12.2,6.6-19c0.6-5.3,0.8-10.6-0.3-15.9c-1.1-5.3-3.4-10-7-14.1c-0.9-1-1-1.8-0.6-3.1c2.3-7,1.4-13.9-1.3-20.7c-0.1-0.4-0.8-0.7-1.3-0.8c-3.1-0.5-6,0.4-8.7,1.7c-4.4,2.1-8.6,4.4-13,6.6c-0.7,0.4-1.7,0.6-2.5,0.4c-13.6-3.4-27.2-3.4-40.8,0c-0.8,0.2-1.9-0.1-2.6-0.5c-5.5-3.5-11.4-6.3-17.7-8c-0.1,0-0.2-0.1-0.3-0.1c-4-0.8-4.7-0.4-5.9,3.5c-1.8,6.2-2.2,12.4,0,18.7c0.2,0.5,0,1.3-0.4,1.7c-7.2,8.1-8.9,17.8-8,28.2c0.5,6.3,2,12.4,4.8,18.1c3.9,7.9,10.5,12.7,18.5,15.5c5,1.8,10.3,2.7,15.6,4c0-0.3,0.1-0.1,0,0c-2.7,2.8-4.2,6.2-4.9,10.1c-0.1,0.5-0.4,1.2-0.8,1.3c-6,2.3-12.1,3.5-18.1-0.2c-2.7-1.7-4.7-4-6.3-6.8c-2.5-4.3-6-7.4-10.8-8.8c-1.7-0.5-3.7-0.4-5.5-0.3c-1.2,0.1-1.7,1-0.8,2c0.8,1,1.6,2,2.6,2.6c4.6,2.6,7.1,6.8,9.2,11.4c1.2,2.7,2.3,5.5,4.6,7.6c3.7,3.3,8.1,4.6,12.9,4.8c4,0.2,8.1,0,12.3,0c0-0.1,0.1,0.4,0.1,0.8c0.1,4.6,0.1,9.2,0.2,13.7c0,4.5-2.7,6.3-6.9,4.9c-22.1-7.7-38.3-22.2-49.1-42.7c-8.1-15.4-10.7-32-8.9-49.3c1.9-18.1,9.1-34,21.1-47.6C42.8,24.2,58.3,14.7,77,10.9c27-5.5,51.7,0,73.3,17.4c16.4,13.2,26.5,30.3,30.6,51c0.6,3,0.8,6.2,1.2,9.2c0.1,0.6,0.2,1.2,0.3,1.8C182.5,93.7,182.5,97.1,182.5,100.5z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/jesse-denier/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-yellow group transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 196.1 192.5"
              className="h-6 w-6 fill-current group-hover:scale-125 transition-transform duration-300"
            >
              <path d="M162.3,9.3H28.9c-9.3,0-16.8,7.6-16.8,16.9v135.3c0,9.3,7.5,16.9,16.8,16.9h133.4c9.3,0,16.8-7.6,16.8-16.9V26.2C179.2,16.8,171.7,9.3,162.3,9.3z M65.7,143.1H43.2V70.7h22.5V143.1z M54.3,61.8c-7.1,0-11.7-5-11.7-11.2c0-6.4,4.7-11.2,12-11.2c7.2,0,11.7,4.9,11.8,11.2C66.4,56.8,61.8,61.8,54.3,61.8z M147.8,143.1h-22.5V103c0-9.3-3.3-15.7-11.4-15.7c-6.2,0-9.9,4.3-11.5,8.4c-0.6,1.5-0.7,3.6-0.7,5.6v41.7H79.2V93.8c0-9-0.3-16.6-0.6-23.1h19.5l1,10.1h0.4c3-4.7,10.2-11.7,22.3-11.7c14.8,0,25.9,9.9,25.9,31.2V143.1z" />
            </svg>
          </a>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;
