import { useState } from 'react';
import Button from '../elements/Button';
import LineChart from '../components/LineChart';

const initialValues = [
	{ id: 1, value: 8 },
	{ id: 2, value: 6 },
	{ id: 3, value: 7 },
	{ id: 4, value: 5 },
	{ id: 5, value: 3 },
];

export default function Dynamic() {
	const [chartData, setChartData] = useState({
		labels: initialValues.map((item, index) => index + 1),
		datasets: [
			{
				lineTension: 0.2,
				data: initialValues.map((item) => item.value),
				borderWidth: 3,
			},
		],
	});

	function shiftChartData() {
		if (chartData.labels.length > 0) {
			const newChartData = { ...chartData };
			newChartData.datasets[0].data.shift();
			newChartData.labels.shift();
			setChartData(newChartData);
		}
	}

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

	return (
		<>
			<h1 className="text-3xl font-bold text-center">Dynamic Line Chart</h1>
			<LineChart chartData={chartData} h2Title={'Rando Dato'} />
			<Button onClick={pushChartData}>Add</Button>
			<Button onClick={shiftChartData}>Remove</Button>
		</>
	);
}
