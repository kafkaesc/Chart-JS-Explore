import './YogaBarChart.css';

const tickWidth = 25;

export default function YogaBarChart({ chartData, ...props }) {
	let ybcJsx = null;
	if (!props.direction || props.direction === 'right') {
		ybcJsx = (
			<div className="yoga-bar-chart">
				{chartData.map((datum, index) => {
					return (
						<div className="ybc-row" key={`ybc-row-${datum.label}`}>
							<div style={{ flex: '0 0 ' + tickWidth + 'px' }}>
								{datum.label}
							</div>
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
	} else if (props.direction === 'left') {
		ybcJsx = (
			<div className="yoga-bar-chart">
				{chartData.map((datum, index) => {
					return (
						<div className="ybc-row ybc-row-rtl" key={`ybc-row-${datum.label}`}>
							<div style={{ flex: '0 0 ' + tickWidth + 'px' }}>
								{datum.label}
							</div>
							<div
								className={`ybc-bar ybc-bar-bg-${index}`}
								style={{ width: datum.value + '%' }}
							></div>
							{datum.tailLabel && (
								<div className="ybc-default-tail">{datum.tailLabel}</div>
							)}
						</div>
					);
				})}
			</div>
		);
	} else if (props.direction === 'up') {
		ybcJsx = (
			<div className="yoga-bar-chart-col">
				{chartData.map((datum, index) => {
					return (
						<div className="ybc-col" key={`ybc-col-${datum.label}`}>
							{datum.tailLabel && <div>{datum.tailLabel}</div>}
							<div
								className={`ybc-bar ybc-bar-bg-${index}`}
								style={{ height: (datum.value / 100) * 50 + 'px' }}
							></div>
							<div>{datum.label}</div>
						</div>
					);
				})}
			</div>
		);
	}
	return ybcJsx;
}
