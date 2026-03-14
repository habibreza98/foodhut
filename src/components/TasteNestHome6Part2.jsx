import chicken1 from '../../public/chicken1.png'
import chicken2 from '../../public/chicken2.png'
import chicken3 from '../../public/chicken3.png'
import chicken4 from '../../public/chicken4.png'

const TasteNestHome6Part2 = () => {
  return (
    <div className="bg-white font-sans overflow-x-hidden">
      
      {/* --- 1. DEAL OF THE DAY HERO --- */}
      <section className="relative flex flex-col lg:flex-row h-auto lg:h-[600px]">
        {/* Left Image Side */}
        <div className="w-full lg:w-2/3 h-[400px] lg:h-full relative">
          <img 
            src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1200" 
            className="w-full h-full object-cover" 
            alt="Delicious Ribs" 
          />
          {/* Slider Navigation Buttons */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-1 z-10">
            <button className="bg-yellow-400 p-3 hover:bg-yellow-500 transition">
              <span className="text-xl">→</span>
            </button>
            <button className="bg-white p-3 hover:bg-gray-100 transition">
              <span className="text-xl">←</span>
            </button>
          </div>
        </div>

        {/* Right Content Side (Yellow) */}
        <div className="w-full lg:w-1/3 bg-yellow-400 p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden">
          {/* Subtle wave pattern overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 50 Q 25 40 50 50 T 100 50" fill="none" stroke="black" strokeWidth="0.5" />
              <path d="M0 60 Q 25 50 50 60 T 100 60" fill="none" stroke="black" strokeWidth="0.5" />
            </svg>
          </div>

          <div className="relative z-10">
            <p className="text-white font-bold text-sm uppercase mb-4">Deal Of The Day</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              TODAY'S The <br /> Hamburger' DAY
            </h2>
            <div className="flex items-center gap-4 mb-8">
               <span className="text-white font-bold text-lg">Special Price</span>
               <span className="text-5xl font-black text-white">$55</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-10 max-w-xs">
              Savor the perfect symphony of flavors. It's the perfect dining experience where experience quick and efficient with our signature hamburger, a culinary.
            </p>
            <button className="flex items-center gap-2 text-white font-black text-sm uppercase border-b-2 border-white pb-1 hover:gap-4 transition-all">
               🛒 Order Now
            </button>
          </div>
        </div>
      </section>

      {/* --- 2. QUICK DISH CATEGORIES --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { name: "Delicious Classic Italian Pizza", img: chicken1, label: "Pizza" },
            { name: "Tasty Vegetable Hamburger", img: chicken2, label: "Hamburger" },
            { name: "Roasted Chicken Drumsticks Italian Pizza", img: chicken3, label: "Drumsticks" },
            { name: "Roll Shaped Cigar Samosa", img: chicken4, label: "Samosa" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="relative mb-6">
                {/* Text Background Shadow effect like image */}
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-4xl font-black text-gray-50 opacity-0 group-hover:opacity-100 transition-opacity uppercase pointer-events-none">
                  {item.label}
                </span>
                <img src={item.img} className="w-32 h-32 rounded-full object-cover shadow-xl relative z-10" alt={item.name} />
              </div>
              <h4 className="font-black text-sm text-slate-900 px-4 mb-3">{item.name}</h4>
              <button className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-yellow-500 transition">
                Order Now →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* --- 3. CLIENTS TESTIMONIALS --- */}
      <section className="py-24 bg-[#fffdfa] relative overflow-hidden">
        {/* Large Background Outlined Text */}
        <div className="absolute top-10 left-0 w-full whitespace-nowrap opacity-[0.03] pointer-events-none select-none">
          <span className="text-[150px] font-black uppercase tracking-tighter" style={{ WebkitTextStroke: '2px black', color: 'transparent' }}>
            Clients Testimonials ☆ Food Reviews
          </span>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center gap-1 text-yellow-400 mb-6">
            <span className="font-bold text-slate-900 mr-2">Quality Food</span>
            {[1,2,3,4,5].map(star => <span key={star}>★</span>)}
          </div>
          
          <h3 className="text-2xl lg:text-3xl font-black text-slate-800 leading-relaxed mb-10 italic">
            "Nestled within a fresh, toasted bun, each bite unveils a <br /> 
            perfect harmony of textures, complemented by layers <br /> 
            of crisp lettuce, ripe tomatoes, and the crunch pickles <br /> 
            Our secret sauce proprietary blend savory"
          </h3>

          <div className="flex flex-col items-center">
            <p className="font-black text-slate-900 tracking-wide">
              Richard D. Baker <span className="text-slate-400 font-bold ml-2">/ CEO & Founder</span>
            </p>
            {/* Pagination dots */}
            <div className="flex gap-2 mt-8">
              <span className="w-6 h-1 bg-yellow-400 rounded-full"></span>
              <span className="w-2 h-1 bg-gray-200 rounded-full"></span>
              <span className="w-2 h-1 bg-gray-200 rounded-full"></span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TasteNestHome6Part2;