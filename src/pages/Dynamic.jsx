import { useState } from 'react';
import LineChart from '../components/LineChart';

const initialValues = [
	{ id: 1, value: 8 },
	{ id: 2, value: 6 },
	{ id: 3, value: 7 },
	{ id: 4, value: 5 },
	{ id: 5, value: 3 },
];

export default function Dynamic() {
	const [chartData /*, setChartData*/] = useState({
		labels: initialValues.map((item, index) => index + 1),
		datasets: [
			{
				lineTension: 0.25,
				data: initialValues.map((item) => item.value),
				borderWidth: 3,
			},
		],
	});

	// TODO: Remove data from front of chartData
	//function popChartData() {}

	// TODO: Add random data to the end of chartData
	//function pushChartData() {}

	return (
		<>
			<h1 className="text-3xl font-bold text-center">Dynamic Line Chart</h1>
			<LineChart chartData={chartData} h2Title={'Rando Dato'} />
		</>
	);
}
