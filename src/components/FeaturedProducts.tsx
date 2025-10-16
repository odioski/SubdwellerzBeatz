import React from "react";

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <p className="text-3xl font-bold text-center mb-12 text-white">Featured Products</p>
        <div className="mb-16">
          <p className="text-2xl font-semibold mb-8 text-indigo-400">Latest Beats</p>
          <div className="md:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 gap-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
              <img alt="Trap beat cover art with dark purple background and abstract geometric patterns" src="https://placehold.co/400x250/4c1d95/ffffff?text=Trap+Beat+Cover" className="object-cover w-full
                  h-48" />
              <div className="p-6">
                <p className="text-xl font-semibold text-white mb-2">Dark Trap Beat</p>
                <p className="text-gray-400 mb-4">130 BPM • High Quality WAV</p>
                <div className="justify-between items-center flex">
                  <span className="text-2xl font-bold text-indigo-400">$29.99</span>
                  <button type="submit" className="hover:bg-indigo-700 transition-colors bg-indigo-600 text-white px-4 py-2
                      rounded-lg">Preview</button>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
              <img alt="Hip hop beat artwork featuring urban cityscape silhouette with purple and blue gradient" src="https://placehold.co/400x250/312e81/ffffff?text=Hip+Hop+Beat" className="object-cover w-full h-48" />
              <div className="p-6">
                <p className="text-xl font-semibold text-white mb-2">Urban Hip Hop</p>
                <p className="text-gray-400 mb-4">95 BPM • Stems Included</p>
                <div className="justify-between items-center flex">
                  <span className="text-2xl font-bold text-indigo-400">$39.99</span>
                  <button type="submit" className="hover:bg-indigo-700 transition-colors bg-indigo-600 text-white px-4 py-2
                      rounded-lg">Preview</button>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
              <img alt="R&amp;B beat cover with smooth flowing wave patterns in indigo and purple tones" src="https://placehold.co/400x250/4338ca/ffffff?text=R%26B+Beat" className="object-cover w-full h-48" />
              <div className="p-6">
                <p className="text-xl font-semibold text-white mb-2">Smooth R&amp;B</p>
                <p className="text-gray-400 mb-4">75 BPM • Premium License</p>
                <div className="justify-between items-center flex">
                  <span className="text-2xl font-bold text-indigo-400">$49.99</span>
                  <button type="submit" className="hover:bg-indigo-700 transition-colors bg-indigo-600 text-white px-4 py-2
                      rounded-lg">Preview</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <p className="text-2xl font-semibold mb-8 text-indigo-400">Educational Books</p>
          <div className="md:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 gap-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
              <img alt="Music production guide book cover with professional studio equipment and purple color scheme" src="https://placehold.co/400x300/4c1d95/ffffff?text=Music+Production+Guide" className="object-cover
                  w-full h-48" />
              <div className="p-6">
                <p className="text-xl font-semibold text-white mb-2">Music Production Mastery</p>
                <p className="text-gray-400 mb-4">Complete guide to modern production</p>
                <div className="justify-between items-center flex">
                  <span className="text-2xl font-bold text-indigo-400">$19.99</span>
                  <button type="submit" className="hover:bg-indigo-700 transition-colors bg-indigo-600 text-white px-4 py-2
                      rounded-lg">Download</button>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
              <img alt="Beat making bible book cover with drum machine illustration and indigo gradient background" src="https://placehold.co/400x300/312e81/ffffff?text=Beat+Making+Bible" className="object-cover w-full
                  h-48" />
              <div className="p-6">
                <p className="text-xl font-semibold text-white mb-2">Beat Making Bible</p>
                <p className="text-gray-400 mb-4">From beginner to professional</p>
                <div className="justify-between items-center flex">
                  <span className="text-2xl font-bold text-indigo-400">$24.99</span>
                  <button type="submit" className="hover:bg-indigo-700 transition-colors bg-indigo-600 text-white px-4 py-2
                      rounded-lg">Download</button>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
              <img alt="Mixing and mastering book cover showing audio waveforms and EQ curves in blue and purple design" src="https://placehold.co/400x300/4338ca/ffffff?text=Mixing+%26+Mastering" className="object-cover w-full
                  h-48" />
              <div className="p-6">
                <p className="text-xl font-semibold text-white mb-2">Mixing &amp; Mastering</p>
                <p className="text-gray-400 mb-4">Professional audio techniques</p>
                <div className="justify-between items-center flex">
                  <span className="text-2xl font-bold text-indigo-400">$29.99</span>
                  <button type="submit" className="hover:bg-indigo-700 transition-colors bg-indigo-600 text-white px-4 py-2
                      rounded-lg">Download</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-2xl font-semibold mb-8 text-indigo-400">Loop Packages</p>
          <div className="md:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 gap-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
              <img alt="Trap loops package artwork with 808 drum machine and neon purple lighting effects" src="https://placehold.co/400x250/4c1d95/ffffff?text=Trap+Loops+Pack" className="object-cover w-full
                  h-48" />
              <div className="p-6">
                <p className="text-xl font-semibold text-white mb-2">Trap Loops Pack Vol.1</p>
                <p className="text-gray-400 mb-4">50 High-Quality Loops</p>
                <div className="justify-between items-center flex">
                  <span className="text-2xl font-bold text-indigo-400">$15.99</span>
                  <button type="submit" className="hover:bg-indigo-700 transition-colors bg-indigo-600 text-white px-4 py-2
                      rounded-lg">Preview</button>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
              <img alt="Melodic loops package cover with piano keys and synthesizer patterns in purple gradient" src="https://placehold.co/400x250/312e81/ffffff?text=Melodic+Loops" className="object-cover w-full h-48" />
              <div className="p-6">
                <p className="text-xl font-semibold text-white mb-2">Melodic Essentials</p>
                <p className="text-gray-400 mb-4">30 Melodic Loops &amp; MIDI</p>
                <div className="justify-between items-center flex">
                  <span className="text-2xl font-bold text-indigo-400">$22.99</span>
                  <button type="submit" className="hover:bg-indigo-700 transition-colors bg-indigo-600 text-white px-4 py-2
                      rounded-lg">Preview</button>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
              <img alt="Drum loops kit cover featuring various drums and percussion instruments with blue and indigo
                  color scheme" src="https://placehold.co/400x250/4338ca/ffffff?text=Drum+Loops+Kit" className="object-cover
                  w-full h-48" />
              <div className="p-6">
                <p className="text-xl font-semibold text-white mb-2">Drum Kit Collection</p>
                <p className="text-gray-400 mb-4">100 Drum Loops &amp; One-shots</p>
                <div className="justify-between items-center flex">
                  <span className="text-2xl font-bold text-indigo-400">$18.99</span>
                  <button type="submit" className="hover:bg-indigo-700 transition-colors bg-indigo-600 text-white px-4 py-2
                      rounded-lg">Preview</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
