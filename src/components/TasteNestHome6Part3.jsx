import React from 'react';

const TasteNestHome6Part3 = () => {
  return (
    <div className="bg-white font-sans overflow-x-hidden">

      {/* --- 1. EXPLORE NEWS & BLOG --- */}
      <section className="py-24 px-6 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-500 font-bold uppercase tracking-widest text-[10px] mb-2">News & Blog</p>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">Explore News & Blog</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Fast Food",
                date: "29 Feb 2024",
                title: "Culinary Chronicles Exploring Gastronomic Wonders At Foodking Restaurant",
                img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500"
              },
              {
                category: "Health Care",
                date: "29 Feb 2024",
                title: "Taste Sensations: Navigating The Epicurean Landscape Of Restaurant Name",
                img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500"
              },
              {
                category: "Restaurants",
                date: "29 Feb 2024",
                title: "Epicurean Insights Blogging Odyss Through Restaurant Name Culinary Universe",
                img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500"
              }
            ].map((post, i) => (
              <div key={i} className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
                <div className="h-64 overflow-hidden">
                  <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={post.title} />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100">
                    <span className="text-red-500 font-bold text-xs uppercase">{post.category}</span>
                    <span className="text-gray-400 font-bold text-xs">{post.date}</span>
                  </div>
                  <h4 className="font-black text-lg text-slate-900 leading-snug group-hover:text-red-500 transition-colors">
                    {post.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 2. INSTAGRAM FEED --- */}
      <section className="py-20">
        <div className="text-center mb-12">
          <div className="bg-[#ff2d46] w-14 h-14 rounded-full mx-auto flex items-center justify-center text-white mb-6 shadow-lg text-2xl">
            📸
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-2">Follow @shawonetc3</h2>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">Join our community to inspire your desires</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4">
          {[
            'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400',
            'https://images.unsplash.com/photo-1544025162-d76694265947?w=400',
            'https://images.unsplash.com/photo-1512152272829-e3139592d56f?w=400',
            'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400',
            'https://images.unsplash.com/photo-1530103043960-ef38714abb15?w=400'
          ].map((img, i) => (
            <div key={i} className="aspect-square rounded-[35px] overflow-hidden group relative cursor-pointer shadow-lg">
              <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-110" alt="Insta" />
              <div className="absolute inset-0 bg-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 3. FOOTER --- */}
      <footer className="relative pt-32 pb-12 px-6 bg-white">
        {/* Hand-drawn Background Illustrations (Peas and Onion) */}
        <div className="absolute left-[-40px] bottom-20 opacity-10 w-72 pointer-events-none -rotate-12">
           <img src="https://cdn-icons-png.flaticon.com/512/2314/2314644.png" alt="sketch" className="grayscale" />
        </div>
        <div className="absolute right-[-40px] bottom-10 opacity-10 w-72 pointer-events-none rotate-12">
           <img src="https://cdn-icons-png.flaticon.com/512/2314/2314644.png" alt="sketch" className="grayscale" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-100 pb-24 relative z-10">
          {/* Logo & Hours Card */}
          <div className="bg-[#ff2d46] text-white p-12 rounded-[45px] shadow-2xl transform lg:-translate-y-16">
            <div className="text-3xl font-black italic mb-10 flex items-center gap-2">
              <span className="bg-white text-red-500 w-10 h-10 rounded-lg flex items-center justify-center not-italic">T</span>
              TasteNest
            </div>
            <div className="space-y-4 font-bold text-sm opacity-90">
              <p>Tuesday – Saturday: 12:00pm – 23:00pm</p>
              <p>Closed on Sunday</p>
            </div>
            <div className="mt-12 pt-8 border-t border-white/20 text-[10px] font-black uppercase tracking-[0.2em] opacity-70">
              5 star rated on TripAdvisor
            </div>
          </div>

          {/* About Links */}
          <div className="lg:pl-10">
            <h4 className="font-black text-slate-900 mb-8 text-xl relative">
              About
              <span className="block w-10 h-1 bg-yellow-400 mt-2"></span>
            </h4>
            <ul className="space-y-4 text-sm font-bold text-gray-400">
              <li className="hover:text-red-500 transition cursor-pointer flex items-center gap-2"><span>›</span> Fredoka One</li>
              <li className="hover:text-red-500 transition cursor-pointer flex items-center gap-2"><span>›</span> Special Dish</li>
              <li className="hover:text-red-500 transition cursor-pointer flex items-center gap-2"><span>›</span> Reservation</li>
              <li className="hover:text-red-500 transition cursor-pointer flex items-center gap-2"><span>›</span> Contact</li>
            </ul>
          </div>

          {/* Menu Links */}
          <div>
            <h4 className="font-black text-slate-900 mb-8 text-xl relative">
              Menu
              <span className="block w-10 h-1 bg-yellow-400 mt-2"></span>
            </h4>
            <ul className="space-y-4 text-sm font-bold text-gray-400">
              <li className="hover:text-red-500 transition cursor-pointer flex items-center gap-2"><span>›</span> Steaks</li>
              <li className="hover:text-red-500 transition cursor-pointer flex items-center gap-2"><span>›</span> Burgers</li>
              <li className="hover:text-red-500 transition cursor-pointer flex items-center gap-2"><span>›</span> Cocktails</li>
              <li className="hover:text-red-500 transition cursor-pointer flex items-center gap-2"><span>›</span> Bar B Q</li>
              <li className="hover:text-red-500 transition cursor-pointer flex items-center gap-2"><span>›</span> Desserts</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="font-black text-slate-900 mb-8 text-xl relative">
              Newsletter
              <span className="block w-10 h-1 bg-yellow-400 mt-2"></span>
            </h4>
            <p className="text-xs font-bold text-gray-400 mb-8 leading-relaxed">Get recent news and updates directly to your inbox.</p>
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-gray-50 border border-gray-100 p-5 rounded-3xl text-sm outline-none focus:ring-2 focus:ring-red-500/20 font-bold" 
              />
              <button className="w-full bg-[#ff2d46] text-white py-5 rounded-3xl font-black text-sm shadow-xl hover:bg-red-600 transition-transform active:scale-95">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">
          <p>© 2025 TasteNest | All shawonetc3 Themes</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            <span className="hover:text-red-500 cursor-pointer transition">Facebook</span>
            <span className="hover:text-red-500 cursor-pointer transition">Instagram</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TasteNestHome6Part3;