
import React from 'react';

const properties = [
  {
    id: '1',
    name: 'The Emerald Penthouse',
    location: 'Gurgaon, DLF Phase V',
    status: 'Tenanted',
    yield: '6.2%',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Skye Residences',
    location: 'Mumbai, Worli',
    status: 'Managed',
    yield: '4.8%',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Heritage Villa',
    location: 'Goa, Assagao',
    status: 'Vacant',
    yield: '7.5%',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-yellow-600 uppercase tracking-[0.3em] text-xs font-bold block mb-4">Elite Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Featured Managed Properties</h2>
          </div>
          <button className="text-yellow-500 uppercase tracking-widest text-xs font-bold border-b border-yellow-500/30 pb-2 hover:border-yellow-500 transition-all">
            View Full Inventory
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {properties.map((p) => (
            <div key={p.id} className="relative group cursor-pointer overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center justify-between mb-2">
                   <span className="text-yellow-500 text-[10px] uppercase font-bold tracking-widest bg-yellow-500/10 px-2 py-1 rounded-sm border border-yellow-500/20">{p.status}</span>
                   <span className="text-white text-xs font-medium uppercase tracking-widest">Yield: {p.yield}</span>
                </div>
                <h3 className="text-2xl font-serif text-white mb-1">{p.name}</h3>
                <p className="text-gray-400 text-sm font-light tracking-wide">{p.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
