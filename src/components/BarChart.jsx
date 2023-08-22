import { Bar } from 'react-chartjs-2';

export default function BarChart({ chartData }) {
	return (
		<div className="max-w-2xl mx-auto">
			<h2 className="text-xl font-bold text-center">Bar Chart</h2>
			<Bar
				data={chartData}
				options={{
					plugins: {
						legend: { display: false },
						title: { display: true, text: 'Users Gained between 2016-2020' },
					},
				}}
			/>
		</div>
	);
}
