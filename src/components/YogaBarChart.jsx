import './YogaBarChart.css';

// TODO: Set tickWidth based on longest label
const tickWidth = '2em';

export default function YogaBarChart({ chartData, ...props }) {
	const cid = props.chartId
		? '' + props.chartId
		: '' + Math.floor(Math.random() * (99999 - 10000) + 10000);
	let ybcJsx = null;
	if (!props.direction || props.direction === 'right') {
		ybcJsx = (
			<div className="yoga-bar-chart">
				{chartData.map((datum, index) => {
					return (
						<div className="ybc-row" key={`${cid}-ybc-row-${datum.label}`}>
							<div style={{ flex: '0 0 ' + tickWidth }}>{datum.label}</div>
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
						<div
							className="ybc-row ybc-row-rtl"
							key={`${cid}-ybc-row-${datum.label}`}
						>
							<div style={{ flex: '0 0 ' + tickWidth }}>{datum.label}</div>
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
		const barMaxHeight = props.barHeight ? +props.barHeight : 200;
		ybcJsx = (
			<div className="yoga-bar-chart-col">
				{chartData.map((datum, index) => {
					const height = Math.floor((datum.value / 100) * barMaxHeight) + 'px';
					return (
						<div className="ybc-col" key={`${cid}-ybc-col-${datum.label}`}>
							{datum.tailLabel && <div>{datum.tailLabel}</div>}
							<div
								className={`ybc-bar ybc-bar-bg-${index}`}
								style={{ height: height }}
							></div>
							<div>{datum.label}</div>
						</div>
					);
				})}
			</div>
		);
	} else if (props.direction === 'down') {
		const barMaxHeight = props.barHeight ? +props.barHeight : 200;
		ybcJsx = (
			<div className="yoga-bar-chart-col">
				{chartData.map((datum, index) => {
					const height = Math.floor((datum.value / 100) * barMaxHeight) + 'px';
					return (
						<div
							className="ybc-col ybc-col-ttb"
							key={`${cid}-ybc-col-${datum.label}`}
						>
							<div>{datum.label}</div>
							<div
								className={`ybc-bar ybc-bar-bg-${index}`}
								style={{ height: height }}
							></div>
							{datum.tailLabel && <div>{datum.tailLabel}</div>}
						</div>
					);
				})}
			</div>
		);
	}
	return ybcJsx;
}
