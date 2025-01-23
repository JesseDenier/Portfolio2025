// Imports React library
import React from "react";

const HomePage = () => {
  return (
    <main className="text-darkgreen font-sans">
      {/* About Me Section */}
      <section
        id="AboutMe"
        className="p-6 flex items-center gap-6 justify-center"
      >
        <div className="bg-sage shadow-lg rounded-lg p-6 w-full max-w-4xl">
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
          <div className="h-40 bg-gray-200 rounded shadow flex items-center justify-center">
            Empty Link Box
          </div>
          <div className="h-40 bg-gray-200 rounded shadow flex items-center justify-center">
            Empty Link Box
          </div>
        </div>

        {/* Code Samples */}
        <h3 className="text-2xl font-semibold text-center mb-4">
          Code Samples
        </h3>
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

        {/* Divider */}
        <hr className="border-t-2 border-emerald my-8" />

        {/* Marketing Section */}
        <h2 className="text-3xl font-bold text-center mb-6">Marketing</h2>

        {/* Logos */}
        <h3 className="text-2xl font-semibold text-center mb-4">Logos</h3>
        <div className="grid grid-cols-4 gap-4 mb-8">
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
          >
            <img src="github.svg" alt="GitHub" className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/jesse-denier/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
          </a>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;
