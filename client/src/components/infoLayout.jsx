import { Accordion } from '@base-ui/react/accordion';
import { Link } from 'react-router-dom';

export function InfoLayout({ children }) {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 flex flex-col antialiased">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 h-14 border-b border-zinc-200 bg-white/80 backdrop-blur-md px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">i</div>
          <span className="font-bold text-sm tracking-tight">InfoHub Docs???</span>
        </div>
        <div className="text-xs text-zinc-500 font-medium">v1.0.0</div>
      </header>

      {/* Main Structural Wrapper */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto px-4 md:px-6">
        
        {/* Sticky Sidebar Column */}
        <aside className="sticky top-14 hidden md:block w-64 h-[calc(100vh-3.5rem)] overflow-y-auto border-r border-zinc-200/80 pr-4 py-6 scrollbar-thin">
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 px-2 mb-4">
            <Link to="./landing_page.jsx">Landing Page</Link>
          </div>

          {/* Base UI Accordion Navigation Menu */}
          <Accordion.Root defaultValue={['getting-started']} className="space-y-1">
            
            {/* Category Item */}
            <Accordion.Item value="getting-started" className="border-b border-transparent">
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 rounded-md transition outline-none group data-[state=open]:text-indigo-600">
                  <span>Getting Started</span>
                  <span className="text-xs text-zinc-400 group-data-[state=open]:rotate-90 transition-transform duration-200">▶</span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Panel className="pl-4 pr-2 overflow-hidden transition-all data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up">
                <div className="py-1 space-y-1 text-sm border-l border-zinc-200 pl-3 mt-1">
                  <a href="#" className="block py-1 text-indigo-600 font-medium">Introduction</a>
                  <a href="#" className="block py-1 text-zinc-500 hover:text-zinc-900 transition">Quick Start</a>
                  <a href="#" className="block py-1 text-zinc-500 hover:text-zinc-900 transition">Architecture</a>
                </div>
              </Accordion.Panel>
            </Accordion.Item>

            {/* Category Item 2 */}
            <Accordion.Item value="core-features">
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 rounded-md transition outline-none group data-[state=open]:text-indigo-600">
                  <span>Core Guides</span>
                  <span className="text-xs text-zinc-400 group-data-[state=open]:rotate-90 transition-transform duration-200">▶</span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Panel className="pl-4 pr-2 overflow-hidden">
                <div className="py-1 space-y-1 text-sm border-l border-zinc-200 pl-3 mt-1">
                  <a href="#" className="block py-1 text-zinc-500 hover:text-zinc-900 transition">Data Management</a>
                  <a href="#" className="block py-1 text-zinc-500 hover:text-zinc-900 transition">Security Rules</a>
                </div>
              </Accordion.Panel>
            </Accordion.Item>

          </Accordion.Root>
        </aside>

        {/* Dynamic Scrollable Content Frame */}
        <main className="flex-1 min-w-0 py-6 md:py-8 md:pl-8 lg:pr-24">
          <div className="max-w-3xl">
            {children}
          </div>
        </main>

      </div>
    </div>
  );
}

export default InfoLayout;
