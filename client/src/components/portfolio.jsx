import * as React from 'react';
import { Tabs } from '@base-ui/react';
import { Link } from 'react-router-dom';

// Sample mock data for a multimedia portfolio
const PORTFOLIO_ITEMS = [
  { id: 1, title: 'About', category: '', lk: "about", image: 'https://deeplakesound.fra1.digitaloceanspaces.com/images/nsite/DeskChaos.jpg' },
  { id: 2, title: 'Gear', category: '', lk: "just_the_right_gear", image: 'https://deeplakesound.fra1.digitaloceanspaces.com/images/gearshot.jpg' },
  { id: 3, title: 'Studio Build', category: '', lk: "thebuildtwo", image: 'https://deeplakesound.fra1.digitaloceanspaces.com/images/Frame_BlueSky.jpg' },
  { id: 4, title: 'Samples', category: '', lk: "samples", image: 'https://deeplakesound.fra1.digitaloceanspaces.com/images/BreakwallBetter.jpg' },
  { id: 5, title: 'Services', category: '', lk: "services", image: 'https://deeplakesound.fra1.digitaloceanspaces.com/images/nsite/SnowLight.jpg' },
  { id: 6, title: 'Contact Us', category: '', lk: "contact", image: 'https://deeplakesound.fra1.digitaloceanspaces.com/images/nsite/StrawHatMe.jpg' },
];


export default function PortfolioSection() {
  return (
    <section id="work" class="py-24 px-6 bg-neutral-950 text-white">
      <div class="max-w-7xl mx-auto">
        <div class="mb-12">
          
          <h2 class="text-3xl md:text-4xl font-bold"></h2>
        </div>

        {/* Base UI Tabs Framework */}
        <Tabs.Root defaultValue="all" class="w-full">
          
          {/* Tab Selection Bar */}
          <Tabs.List class="flex items-center space-x-2 border-b border-neutral-800 pb-4 mb-10 overflow-x-auto">
            
          </Tabs.List>

          {/* Tab Views */}
          {['all', 'video', 'audio', 'motion'].map((currentCategory) => {
            const filteredItems = currentCategory === 'all' 
              ? PORTFOLIO_ITEMS 
              : PORTFOLIO_ITEMS.filter(item => item.category === currentCategory);

            return (
              <Tabs.Panel key={currentCategory} value={currentCategory} class="outline-none">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
                  {filteredItems.map((item) => (
                    <div 
                      key={item.id} 
                      class="group relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 aspect-video cursor-pointer"
                    >
                    <Link to={`./${item.lk}`} class="absolute inset-0 z-10" aria-label={`View details for ${item.title}`}>
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-50 group-hover:opacity-100" 
                      />
                      </Link>
                      <div class="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-90 flex flex-col justify-end p-6">
                        <span class="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-1">
                          {item.category}
                        </span>
                        <h3 class="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </Tabs.Panel>
            );
          })}
        </Tabs.Root>
      </div>
    </section>
  );
}