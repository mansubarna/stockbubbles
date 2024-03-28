'use client';

import React from 'react'
import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";

function Searchbar() {
	const [searchValue, setSearchValue] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const [stockSuggestion, setStockSuggestion] = useState([]);
	const stocks = [
		{
			id: "1",
			sn: "1",
			name: "Bitcoin",
			symbol: "BTC"
		},
		{
			id: "2",
			sn: "2",
			name: "ChitCoin",
			symbol: "CTC"
		},
		{
			id: "3",
			sn: "3",
			name: "Tether",
			symbol: "TET"
		},
		{
			id: "4",
			sn: "4",
			name: "Solana",
			symbol: "STH"
		},

	]

	const handleClick = (id) => {
		setSearchValue('');
		setStockSuggestion([]);
	}

	var timeout = null;

	const handleSubmit = (e) => {
		setSearchValue(e.target.value)

		e.preventDefault();
		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(function () {
			filterStockSuggestion(e.target.value);
		}, 300);

	}

	const filterStockSuggestion = async (searchQuery) => {
		setStockSuggestion([]);

	}



	useEffect(() => {
		setSearchValue('');
	}, []);


	return (
		<div className="relative ms-3 w-full md:w-[320px] ">
			<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
				<CiSearch className="w-6 mx-auto stroke-1" />
			</div>
			<form>
				<input
					onChange={(e) => handleSubmit(e)}
					type="search"
					className="block p-2 pl-10 w-full text-sm rounded-full bg-slate-700 focus:bg-slate-500 focus:outline-none focus:text-white"
					placeholder="Search Stocks..."
					required
					value={searchValue}
					onFocus={() => setShowSuggestions(true)}
					onBlur={() => setShowSuggestions(false)}
				/>
			</form>
			<ul className="search-result absolute bg-slate-700 w-full mt-1 rounded-md z-10 max-h-[360px] overflow-auto">
				{isLoading ? (
					<span>Loading..</span>
				) : (
					<>
							{ showSuggestions && stocks?.map((stock, i) => (
								<li className='border-b last:border-0 border-slate-600 transition-all cursor-pointer px-3 py-2 hover:bg-slate-800 w-full flex justify-between'
									key={'et_' + i}
									onClick={() => handleClick(stock.id)}
								>
									<span className='me-2'>{stock.id}</span>
									<span className='flex-1'>{stock.name}</span>
									<span>{stock.symbol}</span>
								</li>
							))}
					</>
				)}
			</ul>
		</div>
	);
}

export default Searchbar;