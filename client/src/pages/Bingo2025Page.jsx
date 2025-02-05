import React, { useState, useEffect } from "react";

const bingoTasks = [
  [
    "Drink at Long Goodbye",
    "Share a secret (your own)",
    "Tell a true story",
    "Demo a talent",
    "Tell someone you love them",
    "Share a gratitude",
    "Ask a personal question",
    "Ask someone for advice",
    "Drink at butterfly bar",
    "Hold hands with someone",
    "Share a meme",
    "Drink at techo",
    "Free Space\nTap Me!",
    "Give a kiss (with consent)",
    "Share a fun fact",
    "10 seconds of eye contact",
    "Give a high five",
    "Hug a friend",
    "Give a compliment",
    "Eat at Love Supreme",
    "Take a pic with a friend",
    "Write a bathroom note",
    "Drink at Teddy's",
    "Make someone laugh",
    "Share an insecurity",
  ],
];

const Bingo2025Page = () => {
  const [selectedCards, setSelectedCards] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem("bingoState")) || {};
    setSelectedCards(savedState);
  }, []);

  const toggleCard = (index) => {
    const newState = { ...selectedCards, [index]: !selectedCards[index] };
    setSelectedCards(newState);
    localStorage.setItem("bingoState", JSON.stringify(newState));
  };

  return (
    <main className="bg-pink-200 min-h-screen flex flex-col items-center text-center relative">
      {/* Header */}
      <header className="w-full py-2 bg-pink-600 text-white text-lg font-bold">
        💖 ❤️ 2025 Galentine's with ❤️ 💕
        <br />
        💞 🥰 ❤️ the Bois Bingo ❤️ 😍 💗
      </header>
      {/* Center */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="grid grid-cols-5 gap-2 p-4">
          {bingoTasks.map((row, rowIndex) =>
            row.map((task, colIndex) => {
              const index = `${rowIndex}-${colIndex}`;
              return (
                <div
                  key={index}
                  className="bg-white p-3 rounded shadow-md border border-gray-300 w-24 h-24 flex items-center justify-center text-sm relative cursor-pointer"
                  onClick={() => toggleCard(index)}
                >
                  {task}
                  {selectedCards[index] && (
                    <img
                      src="/bingo/Heart.png"
                      alt="Heart"
                      className="absolute top-0 left-0 w-full h-full object-contain opacity-75"
                    />
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
      {/* Footer */}
      <footer className="w-full py-2 bg-pink-600 text-white text-sm absolute bottom-0 flex justify-between items-center px-4">
        <button
          className="bg-white text-pink-600 font-bold py-1 px-3 rounded shadow-md"
          onClick={() => setIsModalOpen(true)}
        >
          Share
        </button>
        <p className="text-center flex-grow">
          Bingo starts at the first bar and ends when you leave the group!
          <br />
          Show your card and photos to Natalie before going home!
          <br />
          First person to complete a row, column, or diagonal gets a prize!
          <br />
          First person to blackout their bingo gets a special prize!
        </p>
        <a
          href="https://photos.app.goo.gl/xkhbdcL5ypAr2ieJ8"
          target="_blank"
          className="bg-white text-pink-600 font-bold py-1 px-3 rounded shadow-md"
        >
          Album
        </a>
      </footer>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-white bg-opacity-75 flex justify-center items-center"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="w-4/5 h-4/5 bg-white flex justify-center items-center p-4 rounded-lg">
            <img
              src="/bingo/qr_jessedenierbingo2025.png"
              alt="QR Code"
              className="max-w-full max-h-full"
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default Bingo2025Page;
