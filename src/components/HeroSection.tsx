import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br py-20 from-black via-gray-900 to-indigo-900">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-7xl">
        <p className="text-4xl md:text-6xl font-bold text-white mb-6">Premium Digital Content</p>
        <p className="text-xl text-gray-300 mb-8 mx-auto max-w-3xl">Discover and download high-quality beats, educational
            books, and professional loops for your creative projects</p>
        <div className="sm:flex-row justify-center flex flex-col gap-4">
          <button type="submit" className="border border-indigo-400 hover:bg-indigo-400 hover:text-black transition-colors
              text-white px-8 py-3 rounded-lg font-semibold">Explore Beats</button>
          <button type="submit" className="border border-indigo-400 hover:bg-indigo-400 hover:text-black transition-colors
              text-white px-8 py-3 rounded-lg font-semibold">View Books</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
