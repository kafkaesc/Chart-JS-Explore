import { Bar } from 'react-chartjs-2';
import H2 from '../elements/H2';

export default function BarChart({ chartData, chartTitle, h2Title }) {
	return (
		<div className="max-w-2xl mx-auto">
			{h2Title && <H2 className="text-xl font-bold text-center">{h2Title}</H2>}
			<Bar
				data={chartData}
				options={{
					plugins: {
						legend: { display: false },
						title: { display: true, text: chartTitle ? chartTitle : '' },
					},
				}}
			/>
		</div>
	);
}
