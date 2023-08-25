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

	// BUG: shiftChartData and pushChartData will fire
	// twice instead of once for some GD reason
	function shiftChartData() {
		if (chartData.labels.length > 0) {
			setChartData((prev) => {
				prev.datasets[0].data.shift();
				prev.labels.shift();
				return { ...prev };
			});
		}
	}

	function pushChartData() {
		setChartData((prev) => {
			const randomValue = Math.floor(Math.random() * 10) + 1;
			prev.datasets[0].data.push(randomValue);
			prev.labels.push(prev.labels.length + 1);
			return { ...prev };
		});
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
