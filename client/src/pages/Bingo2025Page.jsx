import React, { useState, useEffect } from "react";

const bingoTasks = [
  [
    "Drink at Long Goodbye",
    "Share a secret (your own)",
    "Tell a true story",
    "Show off a talent",
    "Tell someone you love them",
    "Share a gratitude",
    "Ask a personal question",
    "Ask someone for advice",
    "Drink at butterfly bar",
    "Hold hands with someone",
    "Share a meme",
    "Drink at techo",
    "Free Space<br />Tap Me!",
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
    <main className="fixed inset-0 bg-pink-200 flex justify-center items-center">
      {/* Header */}
      <header
        className="absolute top-0 w-full py-2 bg-pink-600 text-white text-2xl font-bold items-center text-center"
        style={{ fontFamily: "'Caveat', cursive" }}
      >
        Galentine's with the Bois
        <br />
        Connection Bingo
      </header>
      {/* Center Grid */}
      <div
        className="flex justify-center items-center"
        style={{ width: "min(95vw, 66vh)", height: "min(95vw, 66vh)" }}
      >
        <div className="grid grid-cols-5 grid-rows-5 gap-1 w-full h-full">
          {bingoTasks.flat().map((task, index) => (
            <div
              key={index}
              className="bg-white rounded shadow-md border border-gray-300 flex items-center justify-center relative cursor-pointer aspect-square p-1"
              onClick={() => toggleCard(index)}
              style={{
                fontSize: "clamp(9px, 1.6vw, 14px)",
                textAlign: "center",
              }}
            >
              <span
                className="max-w-full max-h-full overflow-hidden break-words text-center leading-tight font-bold"
                dangerouslySetInnerHTML={{ __html: task.toUpperCase() }} // Allows line breaks and converts text to uppercase
              />
              {selectedCards[index] && (
                <img
                  src="/bingo/Heart2.png"
                  alt="Heart"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] object-contain opacity-75"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <footer
        className="w-full py-2 bg-pink-600 text-white absolute bottom-0 flex justify-between items-center px-2
"
      >
        <button
          className="bg-white text-pink-600 font-bold py-1 px-3 rounded shadow-md flex-shrink-0 w-14 h-14 flex justify-center items-center text-sm"
          style={{ fontFamily: "'Caveat', cursive" }}
          onClick={() => setIsModalOpen(true)}
        >
          SHARE
        </button>
        <p className="mx-4 text-center text-sm">
          Use the share button to bring up a QR code to play with anyone you
          meet, and make sure to add any pictures from the night to our group
          album!
        </p>
        <a
          href="https://photos.app.goo.gl/MPeZKALh7R7RJLmg8"
          target="_blank"
          className="bg-white text-pink-600 font-bold py-1 px-3 rounded shadow-md flex-shrink-0 w-14 h-14 flex justify-center items-center text-sm"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          ALBUM
        </a>
      </footer>

      {/* Share Modal */}
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
