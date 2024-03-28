'use client';

import StockBubble from '../app/components/StockBubble'
import Searchbar from './components/Searchbar';
import Tabs from './components/Tabs';
import { FaGear } from "react-icons/fa6";
import { MdOutlineBubbleChart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCaretUp } from "react-icons/rx";
import TableView from './components/TableView';
import { useState } from 'react';
import Data from './components/Data';
export default function Home() {
  const [viewType, setViewType] = useState("chart");
  return (
    <main className="h-dvh flex flex-col justify-between w-dvw bg-slate-900">
      <header className='flex justify-between items-center bg-slate-800 px-4 py-2'>
        <span>LOGO</span>
        <div className="flex">
          <Searchbar className="flex-1" />
          <button type="button"
            className="text-white bg-slate-700 hover:bg-slate-600 
                        focus:ring-4 focus:outline-none font-medium rounded-full text-sm 
                        p-2.5 flex items-center justify-center ms-2 h-9 w-9 text-center">
            <FaGear />
          </button>
        </div>
      </header>
      {viewType === "chart" ?
        <div className='chart-holder'>
          <Tabs />
          <StockBubble data={Data} />
        </div>
        :
        <div className='scroll-container overflow-auto'>
          <TableView data={Data} />
        </div>
      }

      <footer className='flex justify-between'>
        <button className='flex items-center bg-slate-800 hover:bg-slate-700 px-3 py-2 transition-all cursor-pointer ms-3 mb-3 text-lg rounded-xl'>
          <span>0 - 100</span>
          <RxCaretUp className="ms-2 text-xl" />
        </button>
        <div className='flex rounded-xl mb-3 me-3'>
          <button
            className='bg-slate-700 hover:bg-slate-700 px-3 py-2 cursor-pointer transition-all rounded-s-xl'
            onClick={() => setViewType("chart")}
          >
            <MdOutlineBubbleChart className='h-6 w-6' />
          </button>
          <button
            className='bg-slate-800 hover:bg-slate-700 px-3 py-2 cursor-pointer transition-all rounded-e-xl'
            onClick={() => setViewType("list")}
          >
            <GiHamburgerMenu className='h-6 w-6' />
          </button>
        </div>
      </footer>
    </main>
  );
}
