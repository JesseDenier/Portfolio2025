import React from "react";

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
  return (
    <div className="bg-pink-200 min-h-screen flex flex-col items-center text-center relative">
      <header className="w-full py-2 bg-pink-600 text-white text-lg font-bold absolute top-0">
        💖 ❤️ 2025 Galentine's with ❤️ 💕
        <br />
        💞 🥰 ❤️ the Bois Bingo ❤️ 😍 💗
      </header>
      <main className="flex flex-col items-center justify-center flex-grow">
        <div className="grid grid-cols-5 gap-2 p-4">
          {bingoTasks.map((row, rowIndex) =>
            row.map((task, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="bg-white p-3 rounded shadow-md border border-gray-300 w-24 h-24 flex items-center justify-center text-sm"
              >
                {task}
              </div>
            ))
          )}
        </div>
      </main>
      <footer className="w-full py-2 bg-pink-600 text-white text-sm absolute bottom-0">
        <p>
          Bingo starts at the first bar and ends when you leave the group!
          <br />
          Take pictures of each task and add to the
          <a
            href="https://photos.app.goo.gl/xkhbdcL5ypAr2ieJ8"
            className="underline"
          >
            {" "}
            PHOTO ALBUM
          </a>
          !<br />
          Show your card and photos to Natalie before going home!
          <br />
          First person to complete a row, column, or diagonal gets a prize!
          <br />
          First person to blackout their bingo gets a special prize!
        </p>
      </footer>
    </div>
  );
};

export default Bingo2025Page;
