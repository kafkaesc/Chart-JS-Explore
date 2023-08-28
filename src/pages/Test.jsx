import { useState } from 'react';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';

import H1 from '../elements/H1';
import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';
import Navigation from '../components/Navigation';
import PieChart from '../components/PieChart';

import { data } from '../utils/Data';

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
			<Navigation />
			<H1 className="text-3xl font-bold text-center">Test Page</H1>
			<BarChart chartData={chartData} chartTitle={'Bar Chart'} />
			<LineChart chartData={chartData} chartTitle={'Line Chart'} />
			<PieChart chartData={chartData} chartTitle={'Pie Chart'} />
		</>
	);
}
