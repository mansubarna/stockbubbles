import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { MdEdit } from "react-icons/md";
function Tabs({...props}) {
	return (
		<div className="flex flex-nowrap justify-center p-1 overflow-x-auto w-dvw h-12">
			<div className='text-sm flex *:rounded-lg *:mx-0.5'>
				<button className='bg-slate-800 hover:bg-slate-700 px-3 py-2 cursor-pointer transition-all '>Hour</button>
				<button className='bg-slate-600 hover:bg-slate-700 px-3 py-2 cursor-pointer transition-all '>Day</button>
				<button className='bg-slate-800 hover:bg-slate-700 px-3 py-2 cursor-pointer transition-all '>Week</button>
				<button className='bg-slate-800 hover:bg-slate-700 px-3 py-2 cursor-pointer transition-all '><MdEdit  className='text-lg'/></button>
				<button className='bg-slate-800 hover:bg-slate-700 px-3 py-2 cursor-pointer transition-all '><IoMdAdd className='text-lg'/></button>
			</div>
		</div>
	)
}

export default Tabs