import { useEffect, useState } from 'react';

import Button from '../elements/Button';
import H1 from '../elements/H1';
import LiveLineChart from '../components/LiveLineChart';
import Navigation from '../components/Navigation';

import { evens } from '../utils/Data';

export default function Live() {
	const [activeChart, setActiveChart] = useState('line');
	const [chartData, setChartData] = useState({
		labels: evens.map((item, index) => index + 1),
		datasets: [
			{
				data: evens.map((item) => item.value),
				borderWidth: 3,
			},
		],
	});

	function pushChartData() {
		const newChartData = { ...chartData };
		newChartData.datasets[0].data = [
			...newChartData.datasets[0].data,
			Math.floor(Math.random() * 10) + 1,
		];
		newChartData.labels = [];
		newChartData.datasets[0].data.forEach((datum, index) => {
			newChartData.labels.push(index + 1);
		});
		setChartData(newChartData);
	}

	useEffect(() => {
		const interval = setInterval(() => {
			if (chartData.datasets[0].data.length < 32) {
				pushChartData();
			}
		}, 3000);

		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Navigation />
			<H1>Live ChartJS</H1>
			{activeChart === 'line' ? (
				<LiveLineChart chartData={chartData} h2Title={'Live Feed Line Chart'} />
			) : activeChart === 'bar' ? (
				<div className="text-center">TODO: Live Bar Chart Component</div>
			) : (
				<></>
			)}
			<div className="text-center">
				<Button onClick={() => setActiveChart('bar')}>Bar</Button>
				<Button onClick={() => setActiveChart('line')}>Line</Button>
			</div>
		</>
	);
}
