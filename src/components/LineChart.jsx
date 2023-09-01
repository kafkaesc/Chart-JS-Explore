import { Line } from 'react-chartjs-2';
import H2 from '../elements/H2';

export default function LineChart({
	chartData,
	chartTitle,
	h2Title,
	...props
}) {
	return (
		<div className="max-w-2xl mx-auto">
			{h2Title && <H2 className="text-xl font-bold text-center">{h2Title}</H2>}
			<Line
				data={chartData}
				options={{
					plugins: props.plugins
						? props.plugins
						: {
								legend: { display: false },
								title: {
									display: true,
									text: chartTitle ? chartTitle : '',
								},
						  },
					responsive: true,
					scales: props.scales ? props.scales : undefined,
				}}
				redraw={true}
			/>
		</div>
	);
}
