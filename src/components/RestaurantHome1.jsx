import image from '../../public/image.png'
import image1 from '../../public/image1.png'
import explore from '../../public/explore.png'
import explore2 from '../../public/explore2.png'
import explore3 from '../../public/explore3.png'
import explore4 from '../../public/explore4.png'
import explore5 from '../../public/explore5.png'
import explore6 from '../../public/explore6.png'
import explore7 from '../../public/explore7.png'
import explore8 from '../../public/explore8.png'


function RestaurantHome1() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 overflow-x-hidden">

      {/* --- Part 1 (based on your input image) --- */}
      
      {/* 1. Hero Red Banner Section */}
      <section className="bg-red-500 py-32 px-4 relative overflow-hidden mt-20">
        
        {/* --- Background Sketched Elements --- */}
        <div className="absolute top-20 left-10 w-24 h-24 opacity-10 pointer-events-none grayscale invert"><img src="https://cdn-icons-png.flaticon.com/512/2314/2314644.png" alt="sketch" /></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-16 opacity-10 pointer-events-none grayscale invert hue-rotate-90 -rotate-12"><img src="https://cdn-icons-png.flaticon.com/512/2314/2314644.png" alt="peas" /></div>
        <div className="absolute bottom-10 right-20 w-32 h-16 opacity-10 pointer-events-none grayscale invert hue-rotate-90 -rotate-12"><img src="https://cdn-icons-png.flaticon.com/512/2314/2314644.png" alt="peas" /></div>

        <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left: Headline & Button */}
          <div className="text-white text-center md:text-left">
            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-4 tracking-tighter uppercase">
              Awesome <br/> Delicious <br/> Pizza
            </h1>
            <p className="text-xl opacity-90 mb-10 max-w-md mx-auto md:mx-0">Start Your Order Just Only $25.00</p>
            
            <button className="bg-yellow-400 text-slate-950 font-black py-4 px-8 rounded-md hover:bg-yellow-500 transition shadow-lg flex items-center gap-2 mx-auto md:mx-0">
                Order Now <span className="text-lg">→</span>
            </button>

            {/* Pagination Controls */}
            <div className='flex gap-2 items-center justify-center md:justify-start mt-12 text-sm font-bold opacity-70'>
                <span>2</span>
                <span className='h-0.5 w-12 bg-white/50'></span>
                <span>/ 3</span>
            </div>
          </div>

          {/* Right: Circular Layout Images */}
          <div className="relative flex justify-end">
              

          </div>
        </div>
      </section>

      {/* 2. Welcome/Story Section */}
      <section className="bg-white py-24 px-4">
          <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center max-w-7xl'>
            
            {/* Left: Chef Circular Image Group */}
            <div className='relative lg:col-span-1'>
                 <img src={image} alt="Chef Story" className="w-full max-w-sm rounded-full aspect-square object-cover z-10 shadow-2xl border-4 border-white"/>
                 {/* Decorative Sketch Icon overlay */}
                 <div className='absolute -bottom-10 -left-10 w-24 h-24 opacity-20 pointer-events-none grayscale'><img src="https://cdn-icons-png.flaticon.com/512/2314/2314644.png" alt="sketch" /></div>
            </div>

            {/* Right: Text & Contact */}
            <div className='lg:col-span-2 text-center lg:text-left'>
                <p className='text-red-500 font-semibold mb-2'>LEARN SOMETHING FOODIO</p>
                <h2 className='text-4xl font-extrabold mb-6 leading-snug'>Welcome to Our Culinary Haven...</h2>
                <p className='text-gray-600 max-w-3xl mx-auto lg:mx-0 mb-12 leading-relaxed'>Welcome To Our Culinary Haven, Where Each Dish Is A Symphony Of Flavors Meticulously Crafted Tantalize Your Taste Buds. Nestled In The Heart Of [City], Our Restaurant Is An Inviting Space That Combines.</p>
                
                {/* Contact Card */}
                <div className='inline-flex items-center space-x-4 bg-gray-50 p-4 rounded-full border border-gray-100 shadow-inner'>
                    <img src={image1} alt="Contact Chef" className='w-14 h-14 rounded-full'/>
                    <div className='text-left'>
                        <p className='text-sm text-gray-500'>Michael V. Christensen</p>
                        <p className='text-base font-bold text-red-500'>+44 1238 123 587</p>
                    </div>
                </div>
            </div>
          </div>
      </section>

      {/* 3. Explore Our Products Section */}
      <section className="bg-red-500 py-24 px-4 text-center">
          <div className='container mx-auto max-w-7xl'>
            <p className='text-white font-semibold mb-2'>Best Selling Dishes</p>
            <h2 className="text-4xl font-extrabold text-white mb-16">Explore Our Products</h2>
            
            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                {[
                    {name: 'Delicious Burger', price: '$12.00', image: explore},
                    {name: 'Grilled Chicken', price: '$22.00', image: explore2},
                    {name: 'Ruti With Chicken', price: '$18.00', image: explore3},
                    {name: 'Fast Food Combo', price: '$35.00', image: explore4},
                    {name: 'Chicago Deep Pizza', price: '$16.00', image: explore5},
                    {name: 'Chinese Pasta', price: '$15.00', image: explore6},
                    {name: 'Whopper Burger King', price: '$14.00', image: explore7},
                    {name: 'Ruti With Beef Slice', price: '$20.00', image: explore8}
                ].map((item, i) => (
                    <div key={i} className='bg-yellow-400 p-6 rounded-2xl flex flex-col items-center group hover:scale-105 hover:bg-yellow-500 transition-all border-4 border-white shadow-xl'>
                        <img src={item.image} alt={item.name} className='w-full h-auto max-h-40 object-contain mb-4 transform group-hover:scale-110 transition'/>
                        <h4 className='font-bold text-gray-900 mb-1'>{item.name}</h4>
                        <p className='text-red-500 font-bold'>price {item.price}</p>
                    </div>
                ))}
            </div>
          </div>
      </section>

    </div>
  );
}

export default RestaurantHome1;