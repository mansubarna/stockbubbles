import React, { useMemo, useState } from 'react';

const useSortableData = (items, config = null) => {
	const [sortConfig, setSortConfig] = useState(config);

	const sortedItems = useMemo(() => {
		let sortableItems = [...items];
		if (sortConfig !== null) {
			sortableItems.sort((a, b) => {
				if (a[sortConfig.key] < b[sortConfig.key]) {
					return sortConfig.direction === 'ascending' ? -1 : 1;
				}
				if (a[sortConfig.key] > b[sortConfig.key]) {
					return sortConfig.direction === 'ascending' ? 1 : -1;
				}
				return 0;
			});
		}
		return sortableItems;
	}, [items, sortConfig]);

	const requestSort = (key) => {
		let direction = 'ascending';
		if (
			sortConfig &&
			sortConfig.key === key &&
			sortConfig.direction === 'ascending'
		) {
			direction = 'descending';
		}
		setSortConfig({ key, direction });
	};

	return { items: sortedItems, requestSort, sortConfig };
};

const SortableTable = (props) => {
	const { items, requestSort, sortConfig } = useSortableData(props.tabledata);
	const getClassNamesFor = (name) => {
		if (!sortConfig) {
			return;
		}
		return sortConfig.key === name ? sortConfig.direction : undefined;
	};
	return (
		<table>
			<thead>
				<tr>
					<th className="text-left">
						<button
							type="button"
							onClick={() => requestSort('id')}
							className={getClassNamesFor('id')}
						>
							#
						</button>
					</th>
					<th className="text-left">
						<button
							type="button"
							onClick={() => requestSort('name')}
							className={getClassNamesFor('name')}
						>
							Name
						</button>
					</th>
					<th className="text-right">
						<button
							type="button"
							onClick={() => requestSort('price')}
							className={getClassNamesFor('price')}
						>
							Price
						</button>
					</th>
					<th className="text-right">
						<button
							type="button"
							onClick={() => requestSort('marketcap')}
							className={getClassNamesFor('marketcap')}
						>
							Market Cap
						</button>
					</th>
					<th className="text-right">
						<button
							type="button"
							onClick={() => requestSort('volume')}
							className={getClassNamesFor('volume')}
						>
							Volume
						</button>
					</th>
					<th className="text-right">
						<button
							type="button"
							onClick={() => requestSort('hour')}
							className={getClassNamesFor('hour')}
						>
							Hour
						</button>
					</th>
					<th className="text-right">
						<button
							type="button"
							onClick={() => requestSort('day')}
							className={getClassNamesFor('day')}
						>
							Day
						</button>
					</th>
					<th className="text-right">
						<button
							type="button"
							onClick={() => requestSort('week')}
							className={getClassNamesFor('week')}
						>
							Week
						</button>
					</th>
					<th className="text-right">
						<button
							type="button"
							onClick={() => requestSort('month')}
							className={getClassNamesFor('month')}
						>
							Month
						</button>
					</th>
					<th className="text-right">
						<button
							type="button"
							onClick={() => requestSort('year')}
							className={getClassNamesFor('year')}
						>
							Year
						</button>
					</th>
				</tr>
			</thead>
			<tbody>
				{items.map((item) => (
					<tr key={item.id}>
						<td>{item.id}</td>
						<td>{item.name}</td>
						<td className="text-right">${item.price}</td>
						<td className="text-right">{item.marketcap}</td>
						<td className="text-right">{item.volume}</td>
						<td className="text-right">{item.performance.hour}</td>
						<td className="text-right">{item.performance.day}</td>
						<td className="text-right">{item.performance.week}</td>
						<td className="text-right">{item.performance.month}</td>
						<td className="text-right">{item.performance.year}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default function TableView({data}) {
	return (
		<SortableTable
			tabledata={data}
		/>
	);
}
