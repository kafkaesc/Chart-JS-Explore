import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { useState } from 'react';
import { data } from '../utils/Data';

import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';
import PieChart from '../components/PieChart';

Chart.register(CategoryScale);

export default function Test() {
	const [chartData] = useState({
		labels: data.map((data) => data.year),
		datasets: [
			{
				label: 'Users Gained ',
				data: data.map((data) => data.userGain),
				backgroundColor: [
					'rgba(75,192,192,1)',
					'#ecf0f1',
					'#50AF95',
					'#f3ba2f',
					'#2a71d0',
				],
				borderColor: 'black',
				borderWidth: 2,
			},
		],
	});

	return (
		<>
			<h1 className="text-3xl font-bold text-center">Test Page</h1>
			<BarChart chartData={chartData} />
			<LineChart chartData={chartData} />
			<PieChart chartData={chartData} />
		</>
	);
}
