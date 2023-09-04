import './YogaBarChart.css';

const tickWidth = 25;

export default function YogaBarChart({ chartData, props }) {
	return (
		<div className="yoga-bar-chart">
			{chartData.map((datum, index) => {
				return (
					<div className="ybc-row">
						<div style={{ flex: '0 0 ' + tickWidth + 'px' }}>{datum.label}</div>
						<div
							className={`ybc-bar ybc-bar-bg-${index}`}
							style={{ width: datum.value + '%' }}
						></div>
						<div className="ybc-default-tail">{datum.tailLabel}</div>
					</div>
				);
			})}
		</div>
	);
}
