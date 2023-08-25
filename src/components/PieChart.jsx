import React from 'react';
import { Pie } from 'react-chartjs-2';

export default function PieChart({ chartData, chartTitle, h2Title }) {
	return (
		<div className="max-w-2xl mx-auto">
			{h2Title && <h2 className="text-xl font-bold text-center">{h2Title}</h2>}
			<Pie
				data={chartData}
				options={{
					plugins: {
						title: { display: true, text: chartTitle ? chartTitle : '' },
					},
				}}
			/>
		</div>
	);
}
