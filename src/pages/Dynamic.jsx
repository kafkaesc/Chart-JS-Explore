import { useState } from 'react';
import Button from '../elements/Button';
import H1 from '../elements/H1';
import LineChart from '../components/LineChart';
import Navigation from '../components/Navigation';

import { jenny as initialValues } from '../utils/Data';

const chartScales = { y: { max: 12, min: 0 } };

export default function Dynamic() {
	const [chartData, setChartData] = useState({
		labels: initialValues.map((item, index) => index + 1),
		datasets: [
			{
				//lineTension: 0.2,
				data: initialValues.map((item) => item.value),
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

	function resetChartData() {
		setChartData({
			labels: initialValues.map((item, index) => index + 1),
			datasets: [
				{
					data: initialValues.map((item) => item.value),
					borderWidth: 3,
				},
			],
		});
	}

	function shiftChartData() {
		if (chartData.labels.length > 0) {
			const newChartData = { ...chartData };
			newChartData.datasets[0].data.shift();
			newChartData.labels = [];
			newChartData.datasets[0].data.forEach((datum, index) => {
				newChartData.labels.push(index + 1);
			});
			setChartData(newChartData);
		}
	}

	return (
		<>
			<Navigation />
			<H1 className="text-3xl font-bold text-center">Dynamic Line Chart</H1>
			<LineChart
				chartData={chartData}
				h2Title={'Rando Dato'}
				scales={chartScales}
			/>
			<div className="text-center">
				<Button onClick={pushChartData}>Add</Button>
				<Button onClick={shiftChartData}>Remove</Button>
				<Button onClick={resetChartData}>Reset</Button>
			</div>
		</>
	);
}
