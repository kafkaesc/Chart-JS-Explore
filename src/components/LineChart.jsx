import React from 'react';
import { Line } from 'react-chartjs-2';

export default function LineChart({ chartData }) {
	return (
		<div className="max-w-2xl mx-auto">
			<h2 className="text-xl font-bold text-center">Line Chart</h2>
			<Line
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
