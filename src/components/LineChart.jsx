import React from 'react';
import { Line } from 'react-chartjs-2';

export default function LineChart({ chartData, chartTitle, h2Title }) {
	return (
		<div className="max-w-2xl mx-auto">
			{h2Title && <h2 className="text-xl font-bold text-center">{h2Title}</h2>}
			<Line
				data={chartData}
				options={{
					plugins: {
						legend: { display: false },
						title: { display: true, text: chartTitle ? chartTitle : '' },
					},
				}}
				redraw={true}
			/>
		</div>
	);
}
