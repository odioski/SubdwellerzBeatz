import React from "react";

const SubscribeSection: React.FC = () => {
  return (
    <section className="bg-indigo-900 py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        <p className="text-3xl font-bold text-white mb-4">Stay Updated</p>
        <p className="text-xl text-indigo-200 mb-8">Get notified about new beats, books, and exclusive deals</p>
        <div className="sm:flex-row mx-auto flex flex-col gap-4 max-w-md">
          <input type="email" placeholder="Enter your email" className="flex-1 border border-gray-700 focus:border-indigo-400 focus:outline-none px-4 py-3 rounded-lg bg-gray-800 text-white" />
          <button type="submit" className="hover:bg-indigo-700 transition-colors bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
