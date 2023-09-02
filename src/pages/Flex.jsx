import H1 from '../elements/H1';
import Navigation from '../components/Navigation';
import './Flex.css';

const tickWidth = 25;

export default function Flex() {
	// Don't judge me for all these in-line styles,
	// I am outlining some CSS classes.
	return (
		<>
			<Navigation />
			<H1 className="text-3xl font-bold text-center">Flex Graph</H1>
			<div className="flex-graph-page">
				<div className="fbg-row">
					<div style={{ flex: '0 0 ' + tickWidth + 'px' }}>#1</div>
					<div
						className="fbg-bar fbg-bar-bg-0"
						style={{ width: '46.3%' }}
					></div>
					<div className="fbg-default-tail">(46.3%)</div>
				</div>
				<div className="fbg-row">
					<div style={{ flex: '0 0 ' + tickWidth + 'px' }}>#2</div>
					<div className="fbg-bar fbg-bar-bg-1" style={{ width: '25%' }}></div>
					<div className="fbg-default-tail">(25.0%)</div>
				</div>
				<div className="fbg-row">
					<div style={{ flex: '0 0 ' + tickWidth + 'px' }}>#3</div>
					<div className="fbg-bar fbg-bar-bg-2" style={{ width: '16%' }}></div>
					<div className="fbg-default-tail">(16.0%)</div>
				</div>
				<div className="fbg-row">
					<div style={{ flex: '0 0 ' + tickWidth + 'px' }}>#4</div>
					<div
						className="fbg-bar fbg-bar-bg-3"
						style={{ width: '12.7%' }}
					></div>
					<div className="fbg-default-tail">(12.7%)</div>
				</div>
				<div className="fbg-row">
					<div style={{ flex: '0 0 ' + tickWidth + 'px' }}>#5</div>
					<div
						className="fbg-bar fbg-bar-bg-4"
						style={{ width: '100.0%' }}
					></div>
					<div className="fbg-default-tail">(100.0%)</div>
				</div>
			</div>
		</>
	);
}
